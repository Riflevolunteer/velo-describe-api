// Reads normalized CSVs from bike_specs/ (filename pattern `<year>_<brand>_spec*.csv`,
// headers already hand-normalized to canonical labels per file — see the "Bikes"
// plan, Step 0) and generates bike-update.sql: idempotent statements (each
// guarded by WHERE NOT EXISTS) that create any missing brands/spec labels,
// insert bikes, and insert one bike_spec row per non-empty CSV cell.
//
// Columns that map onto a column the `bike` table already has (category,
// sizes, colors, weight — see BIKE_FIELD_LABELS) are written straight into
// that bike's row, not as a bike_spec/bike_spec_label — e.g. a "Color"
// column becomes bike.colors, it never mints a "Color" bike_spec_label.
//
// A spec row is only inserted when the source CSV has a non-empty cell for
// that bike — that's different from the source explicitly saying "None" /
// "Not Specified", which IS stored as-is (display-time normalization only).
//
// component_id linking: exact (case-insensitive/trimmed), then substring,
// match of a spec's value_text against component_detail titles read live
// from the DB, so components added directly to the DB (by hand or by the
// ingest-component-catalog skill) are matchable too. Only labels with
// a component_category mapping in LABEL_TO_CATEGORY are matched at all —
// unmapped labels (Fenders, Other Features, ...) are free text with no
// sensible category to search, so they're never linked. Ambiguous substring
// matches (>1 distinct candidate title) or very short titles (<4 chars) are
// skipped rather than guessed.
//
// Run with: node scripts/generate-bike-update-sql.js [file.csv ...]
// With no args, processes every *.csv in bike_specs/. Reads (read-only) from
// the DB configured in .env — same connection as scripts/load-sql.js.

const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const decrypt = require('../decrypt');

const config = require('../config');

const BIKE_SPECS_DIR = path.join(__dirname, '..', 'bike_specs');
const OUTPUT_SQL = path.join(__dirname, '..', 'bike-update.sql');

// Mirrors decrypt() in index.js / scripts/load-sql.js.
function query(conn, sql, params) {
  return new Promise((resolve, reject) => {
    conn.query(sql, params, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

// Optional two-letter country token before "_spec" (1976_raleigh_gb_spec.csv) for
// a second catalogue of the same brand and year from another market.
const FILENAME_PATTERN = /^(\d{4})_([a-zA-Z]+)_(?:([a-z]{2})_)?spec/;
const MIN_COMPONENT_MATCH_LENGTH = 4;

function sqlEscape(value) {
  return String(value).replace(/'/g, "''");
}

function sqlString(value) {
  return value == null || value === '' ? 'NULL' : `'${sqlEscape(value)}'`;
}

function lookupInsert(table, title) {
  const esc = sqlEscape(title);
  return (
    `INSERT INTO ${table} (title) SELECT '${esc}' FROM DUAL ` +
    `WHERE NOT EXISTS (SELECT 1 FROM ${table} WHERE title = '${esc}');`
  );
}

function lookupSubquery(table, idColumn, title) {
  if (!title) return 'NULL';
  return `(SELECT ${idColumn} FROM ${table} WHERE title = '${sqlEscape(title)}')`;
}

function labelLookupInsert(title, sortOrder) {
  const esc = sqlEscape(title);
  return (
    `INSERT INTO bike_spec_label (title, sort_order) SELECT '${esc}', ${sortOrder} FROM DUAL ` +
    `WHERE NOT EXISTS (SELECT 1 FROM bike_spec_label WHERE title = '${esc}');`
  );
}

// One data_source row per source CSV (label = "<year> <brand> catalogue"),
// so every bike/bike_spec row this script inserts can be traced back to the
// catalogue that produced it instead of sitting at source_ref = NULL forever.
// country is the market the catalogue was printed for (ISO 3166-1 alpha-2), or
// null when unknown; the UPDATE only fills a NULL, never overwrites.
function dataSourceLookupInsert(label, citation, country) {
  const escLabel = sqlEscape(label);
  const escCitation = sqlEscape(citation);
  const countrySql = country ? `'${sqlEscape(country)}'` : 'NULL';
  const lines = [
    `INSERT INTO data_source (source_type, label, citation, country) SELECT 'catalogue', '${escLabel}', '${escCitation}', ${countrySql} FROM DUAL ` +
      `WHERE NOT EXISTS (SELECT 1 FROM data_source WHERE source_type = 'catalogue' AND label = '${escLabel}');`,
  ];
  if (country) {
    lines.push(
      `UPDATE data_source SET country = ${countrySql} WHERE source_type = 'catalogue' AND label = '${escLabel}' AND country IS NULL;`
    );
  }
  return lines.join('\n');
}

function dataSourceSubquery(label) {
  return `(SELECT source_id FROM data_source WHERE source_type = 'catalogue' AND label = '${sqlEscape(label)}')`;
}

// A country token in the filename makes a distinct source ("1976 Raleigh (GB)
// catalogue"); files without one keep the original label so loaded rows still match.
function catalogueLabel(year, brand, fileCountry) {
  return fileCountry ? `${year} ${brand} (${fileCountry}) catalogue` : `${year} ${brand} catalogue`;
}

// Bike key: brand + title + year + catalogue. A NULL source_ref (a bike loaded
// before provenance existed) still matches so the back-fill can tag it.
function bikeSourceCond(sourceRefSelect) {
  return `AND (source_ref = ${sourceRefSelect} OR source_ref IS NULL)`;
}

// Market the catalogue was printed for, keyed `<year>|<brand>` (lower case) like
// NON_ROAD_SKIP. Only catalogues whose edition is stated in the source; the
// rest stay NULL rather than guessed. A filename token overrides this.
const CATALOGUE_COUNTRY = new Map([
  ['1970|raleigh', 'US'], ['1973|raleigh', 'US'], ['1974|raleigh', 'US'], ['1975|raleigh', 'US'],
  ['1976|raleigh', 'US'], ['1977|raleigh', 'US'], ['1978|raleigh', 'US'], ['1979|raleigh', 'US'], ['1980|raleigh', 'US'], ['1981|raleigh', 'CA'], ['1986|raleigh', 'US'], // Raleigh Industries of America / Rampar
  ['1982|raleigh', 'GB'], ['1983|raleigh', 'GB'], ['1984|raleigh', 'GB'], ['1987|raleigh', 'GB'], // TI Raleigh UK brochures
  ['1973|falcon', 'GB'], ['1974|falcon', 'GB'],
  ['1986|cinelli', 'US'], // Ten Speed Drive Imports brochure
  ['1982|battaglin', 'IT'], // Cicli Battaglin, Marostica (VI): Italian-language sheets and a 1981-82 lire price list
  ['1970|peugeot', 'NL'], // Dutch-market "Peugeot '70" (1971-74 mix NL + FR: left NULL until split)
  ['1979|peugeot', 'FR'], // French home-market catalogue
  ['1980|peugeot', 'FR'], // "Les velos sport et course" leaflet; the Dutch Peugeotboek is 1980_peugeot_nl_spec.csv
  ['1981|peugeot', 'FR'], // "Les velos sport et course 1981"; the Swiss one-page PY 10 S is 1981_peugeot_ch_spec.csv
  ['1982|peugeot', 'FR'], // "Peugeot 1982. Une bonne odeur de velo."; the Dutch Peugeotboek is 1982_peugeot_nl_spec.csv
  ['1984|peugeot', 'FR'], // "Peugeot Bicyclettes 1984"; the UK brochure is 1984_peugeot_gb_spec.csv
  ['1985|peugeot', 'FR'], // "Bicyclettes Peugeot 1985"; the UK brochure has blurbs only and is not loaded
  ['1986|peugeot', 'FR'], ['1987|peugeot', 'FR'], // "Gamme Course" + sport / ville pages (bikeboompeugeot.com); the US "1986 Brochure" is 1986_peugeot_us_spec.csv
  ['1983|peugeot', 'CA'], // Velo Sport (1982) Inc., Quebec, bilingual "Pleasure that lasts"; the Dutch kollektie is 1983_peugeot_nl_spec.csv
  ['1981|kalkhoff', 'DE'], // VeloBase "1981 Kalkhoff Catalog" (kalhoff_prospekt_81.pdf), German text; market not stated
  ['1985|bianchi', 'JP'], // Piaggio Japan range sheet
  ['1973|bianchi', 'IT'], // VeloBase title "1973 Bianchi Catalog (Italian market)"
  ['1978|bianchi', 'IT'], // labibleduvelocataloguesbianchi "Bianchi 1978": Italian text, no prices; inferred
  ['1940|bianchi', 'IT'], // inferred
  ['1974|motobecane', 'US'], ['1975|motobecane', 'US'], // VeloBase titles "Motobécane - MBK 197x US Catalog"
  ['1986|colnago', 'IT'], // "Catalogo generale"
  ['1987|colnago', 'IT'], // "Catalogo generale 1987", four-language
  ['1988|colnago', 'IT'], // Colnago Concept catalogue, Italian first of four languages (as 1986)
  ['1979|colnago', 'IT'], // four-language export sheet; user chose IT (2026-10-19)
  ['1984|derosa', 'IT'], // Italian/English dealer brochure; user chose IT (2026-10-19). 1989 stays US (GITA dealer catalogue)
  ['1981|bianchi', 'US'], // Vespa of America catalogue
  ['1985|raleigh', 'US'], // Sheldon Brown "1985 Raleigh USA Bicycle Catalogue"
  ['1982|bianchi', 'US'], // US racing brochure ("available in America")
  ['1988|bianchi', 'US'], // US catalogue (saarf dates it 1986)
  ['1990|bianchi', 'US'], // Bianchi USA Inc., South San Francisco
  ['1987|bianchi', 'US'], // US catalogue (stated by the user 2026-10-19)
  ['1993|bianchi', 'US'], // US catalogue (stated by the user 2026-10-19); probable source retrobike "1993 Bianchi Catalogue", English, lbs
  // Peugeot 1971-74 mix Dutch spec pages and French general-catalogue pages in one CSV; the user chose FR
  // for all of them (2026-10-19) instead of splitting. 1970 stays NL (Dutch-market catalogue only).
  ['1971|peugeot', 'FR'], ['1972|peugeot', 'FR'], ['1973|peugeot', 'FR'], ['1974|peugeot', 'FR'], ['1975|peugeot', 'NL'], ['1976|peugeot', 'NL'], ['1978|peugeot', 'NL'], // 1975: Dutch-only "Peugeot Modellen '75"; 1976: Dutch "Peugeot '76" (both Cycles Peugeot Nederland; the 1976 PY 10 spec comes from the French April 1976 leaflet)
  ['1989|derosa', 'US'], // GITA Sporting Goods (Charlotte NC) US dealer catalogue
  // Inferred, not stated by the source (user accepted 2026-10-19); correct if the original says otherwise:
  ['1971|raleigh', 'US'], ['1972|raleigh', 'US'], // Sheldon Brown Retro Raleighs PDF (7 pp excerpt, no printer line); DL model numbers and lbs as the 1970 / 1973 US editions
  ['1973|zeus', 'ES'], // Spanish-language catalogue (Zeus-102)
  ['1983|bianchi', 'IT'], ['1984|bianchi', 'IT'], // ebykr / bulgier.net English catalogues published in Italy by Bianchi; no export market named
]);

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Brands whose display name isn't just the capitalized filename token (the
// pattern allows only letters, so multi-word names lose their space). The
// bike_brand title and data_source label are both derived from this, so a
// re-run must produce the same spelling or it mints a duplicate brand.
const BRAND_NAMES = {
  derosa: 'De Rosa',
};

function parseFilename(filename) {
  const m = filename.match(FILENAME_PATTERN);
  if (!m) return null;
  const token = m[2].toLowerCase();
  return { year: m[1], brand: BRAND_NAMES[token] || capitalize(token), fileCountry: m[3] ? m[3].toUpperCase() : null };
}

// Models that stay in the source CSVs but are NOT loaded: the bike table is road
// bikes only (road, touring, mountain, track, tandem, cyclocross). On 2026-10-17
// these 51 city, hybrid and children's models were removed from the DB, but their
// rows are still in bike_specs/*.csv, so without this skip any re-run of a
// catalogue puts them back (it did once, with the 1985 Bianchi "Bambina").
// Framesets (frame-only models) are skipped the same way: they carry a frame
// description and no group, so they add bikes with nothing to link.
// Keyed `<year>|<brand lower-case>` (the display brand, e.g. "de rosa");
// titles are the exact first-column values.
// Classified from each bike's specs (bars, tyre and wheel size, fenders, racks,
// gearing) plus the catalogue category, not from model names. Add a model here
// when a new catalogue brings in a non-road one.
const NON_ROAD_SKIP = new Map(
  Object.entries({
    '1973|bianchi': [
      'Rekord 24in 10 vel. ragazzo (00.5.55)', 'Rekord 24in 5 vel. ragazzo (00.5.56)',
      'Rekord 24in 10 vel. tubolari (00.5.68)', 'Rekord 22in 5 vel. ragazzo (00.5.69)',
      'Sebino 28in Condor 4 vel. (00.5.03)', 'Sebino 26in Condor 4 vel. (00.5.63)',
      'Sebino 28in Lusso (00.5.17)', 'Sport Donna/Cortina 26in (00.5.04)',
      'Touring 28in Sport uomo (00.5.64)', 'Touring 26in Sport donna (00.5.65)',
      'Viaggio Lusso uomo (00.5.01)', 'Touring uomo (00.5.60)',
      'Viaggio Lusso donna (00.5.02)', 'Touring Viaggio donna (00.5.61)',
      'Ghisallo 28in Condor 10 vel. (00.5.05)', 'Ghisallo 26in Condor 10 vel. (00.5.62)',
    ],
    '1985|bianchi': ['Bambina'],
    '1987|bianchi': ['VOLPE'],
    '1990|bianchi': ['Intercept', 'Equinox', 'Tangent', 'Axis', 'Volpe', 'Backstreet', 'Boardwalk', 'Advantage', 'Mondiale Frameset'],
    '1993|bianchi': ['Volpe', 'Boardwalk', 'Advantage'],
    '1973|falcon': ['Model 58', 'Super-Tourist De Luxe Model 88', 'Super-Tourist De Luxe Model 89', 'Super Tourist Model 82', 'Super Tourist Model 83'],
    '1974|falcon': ['Model 58', 'Super-Tourist De Luxe Model 88', 'Super-Tourist De Luxe Model 89', 'Tourist Model 82', 'Tourist Model 83'],
    '1974|motobecane': ['Nobly'],
    '1975|motobecane': ['Riviera', 'Nobly/3', 'Nobly/10'],
    '1971|peugeot': ['PE 41', 'PE 22', 'PE 40', 'PE 25', 'PE 45'],
    '1972|peugeot': ['PE 41', 'PE 22', 'PE 40', 'PE 25', 'PE 45'],
    '1979|peugeot': ['PA 55 Sport Dames', 'PH 50'],
    '1977|raleigh': ['Record 24'],
    '1983|raleigh': ['Micron 5'],
    // Framesets (frame only, no group): deleted 2026-10-27, 23 bikes, 1 link between them.
    '1979|colnago': ['Nuovo Mexico'],
    '1986|colnago': ['Super', 'Superissimo SLX', 'Mexico', 'Regal', 'Master', 'Krono CX'],
    '1988|colnago': ['Carbon Volo', 'Master', 'Masterpiù', 'Master Krono 26"-28"', 'Special Krono 26"-28"', 'Conic SLX Total Spiral',
      'Esamexico', 'Superissimo SLX', 'Super', 'Super Sprint Frameset', 'Duall', 'Master Mountainbike'],
    '1986|cinelli': ['SLX Super Corsa Frameset'],
    '1989|de rosa': ['Professional SLX', 'Pista'],
  }).map(([key, titles]) => [key, new Set(titles)])
);

function isNonRoad(year, brand, title) {
  return NON_ROAD_SKIP.get(`${year}|${brand.toLowerCase()}`)?.has(title) === true;
}

// Minimal RFC4180-style CSV parser: handles quoted fields with embedded
// commas/newlines and doubled-quote escaping, which these catalog CSVs use.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  const src = text.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ''));
}

function buildSearchText(title, brand) {
  return [title, brand].filter(Boolean).join(' ').slice(0, 90);
}

// Maps a normalized bike_spec label to the component_detail categor(y/ies)
// it should be matched against. Narrows candidates so, e.g., a "Freewheel"
// spec is only compared to Freewheels components, not also Chains — without
// this a lot of period spec text ends up ambiguous across categories that
// happen to share a brand's naming (Regina made both chains and freewheels).
// Labels not listed here fall back to matching against every component.
// Both singular and plural (and, for two-word categories, spaced/unspaced)
// forms are listed explicitly — headers across these catalogs aren't
// consistent about which they use (e.g. "Stem" vs "Stems", "Seatpost" vs
// "Seat Posts"), and a missing form here means that column silently never
// gets matched at all (matchComponent returns null for any unmapped label).
const LABEL_TO_CATEGORY = {
  brake: ['Brakes'],
  brakes: ['Brakes'],
  brakeset: ['Brakes'],
  brakesets: ['Brakes'],
  'brake lever': ['Brake Levers'],
  'brake levers': ['Brake Levers'],
  saddle: ['Saddles'],
  saddles: ['Saddles'],
  chain: ['Chains'],
  chains: ['Chains'],
  'chain type': ['Chains'],
  freewheel: ['Freewheels'],
  freewheels: ['Freewheels'],
  handlebar: ['Handlebars'],
  handlebars: ['Handlebars'],
  tyre: ['Tyres'],
  tyres: ['Tyres'],
  tire: ['Tyres'],
  tires: ['Tyres'],
  'tire configuration': ['Tyres'],
  pedal: ['Pedals'],
  pedals: ['Pedals'],
  // Hub gears (Sturmey-Archer, Sachs Torpedo) are their own DB category.
  hub: ['Hubs', 'Geared Hubs'],
  hubs: ['Hubs', 'Geared Hubs'],
  crankset: ['Cranksets'],
  cranksets: ['Cranksets'],
  headset: ['Headsets'],
  headsets: ['Headsets'],
  'front derailleur': ['Front Derailleurs'],
  'front derailleurs': ['Front Derailleurs'],
  'rear derailleur': ['Rear Derailleurs'],
  'rear derailleurs': ['Rear Derailleurs'],
  rim: ['Rims'],
  rims: ['Rims'],
  'wheel rims & spokes': ['Rims'],
  stem: ['Stems'],
  stems: ['Stems'],
  seatpost: ['Seat Posts'],
  seatposts: ['Seat Posts'],
  'seat post': ['Seat Posts'],
  'seat posts': ['Seat Posts'],
  // Integrated levers (STI, Ergopower) live in their own DB category.
  shifter: ['Shifters', 'Shifting Brake Levers'],
  shifters: ['Shifters', 'Shifting Brake Levers'],
  cassette: ['Cassettes'],
  cassettes: ['Cassettes'],
  'bottom bracket': ['Bottom Brackets'],
  'bottom brackets': ['Bottom Brackets'],
};

// Maps a raw CSV header to one or more canonical bike_spec_labels. Most
// entries here are true splits: a single "Derailleur(s)" column describes
// one period groupset that covers both the front and rear derailleur (same
// make/model for each, as was typical) — it isn't just describing one
// derailleur (see the "Bikes" plan's note on this). Each resulting label is
// matched independently against its own component_category (Front vs. Rear
// Derailleurs — see LABEL_TO_CATEGORY) rather than the ambiguous union of
// both.
//
// "Handlebars / Stem" is a rename, not a split (maps to a single label):
// despite the header naming both, every value in the one catalog that uses
// this header (1973 Zeus) only ever describes the handlebar (e.g. "Cinelli
// Handlebars") — never a stem. Splitting it like Derailleurs would fabricate
// a Stem spec whose text is really just the handlebar's.
const SPLIT_LABELS = {
  derailleur: ['Front Derailleur', 'Rear Derailleur'],
  derailleurs: ['Front Derailleur', 'Rear Derailleur'],
  'handlebars / stem': ['Handlebars'],
  // 1975 Motobecane: one cell names both ("SUPER CHAMPION rims, ELVEZIA
  // tubulars"), and the DB has rows for each, so match under both categories.
  'wheel rims & tires': ['Rims', 'Tyres'],
  // 1981 Kalkhoff: one groupset name covers both parts.
  'bottom bracket and crankset': ['Bottom Bracket', 'Crankset'],
};

function expandLabel(label) {
  const key = label.trim().toLowerCase();
  if (SPLIT_LABELS[key]) return SPLIT_LABELS[key];
  return [LABEL_ALIASES[key] || label.trim()];
}

// Words that tie one part of a split cell to one of its labels, so
// "Simplex rear, Huret front" or "tubulars, rims" still land correctly.
const SPLIT_PART_HINTS = {
  'Front Derailleur': /\bfront\b/i,
  'Rear Derailleur': /\brear\b/i,
  Rims: /\brims?\b/i,
  Tyres: /\b(tires?|tyres?|tubulars?|clinchers?)\b/i,
  'Bottom Bracket': /\b(bottom bracket|bb)\b/i,
  Crankset: /\b(cranks?|crankset|chainwheel)\b/i,
};

// Assigns a split column's cell to its labels. A cell that divides on
// " / ", ", " or "; " into exactly one part per label is shared out —
// by hint word where every part has exactly one, else by position, but
// only when some part carries its own label's hint word and none carries
// another label's ("SUPER CHAMPION rims, ELVEZIA tubulars" -> Rims /
// Tyres). Without that evidence a comma is just prose ("Campagnolo Nuovo
// Record, 12 speed" stays one groupset for both derailleurs). Anything
// else (one groupset name, "Sakae 42/52") is copied whole to every label,
// which was the only behaviour before cell splitting.
function splitCellValue(labels, valueText) {
  const whole = labels.map((label) => ({ label, valueText }));
  if (labels.length < 2) return whole;
  const parts = valueText.split(/\s+\/\s+|,\s+|;\s+/).map((p) => p.trim()).filter(Boolean);
  if (parts.length !== labels.length) return whole;
  const byHint = labels.map((label) => {
    const hint = SPLIT_PART_HINTS[label];
    const hits = hint ? parts.filter((p) => hint.test(p)) : [];
    return hits.length === 1 ? hits[0] : null;
  });
  if (byHint.every(Boolean) && new Set(byHint).size === labels.length) {
    return labels.map((label, i) => ({ label, valueText: byHint[i] }));
  }
  const hints = labels.map((label) => SPLIT_PART_HINTS[label]);
  const ownHit = parts.some((p, i) => hints[i] && hints[i].test(p));
  const crossHit = parts.some((p, i) => hints.some((h, j) => j !== i && h && h.test(p)));
  if (!ownHit || crossHit) return whole;
  return labels.map((label, i) => ({ label, valueText: parts[i] }));
}

// Maps a normalized CSV header to a column already on the `bike` table
// itself, rather than a bike_spec row. These are bike-level attributes, not
// component references, so they should never become a bike_spec_label
// (e.g. "Type"/"Frame Size"/"Color" would otherwise mint new labels that
// duplicate bike.category/sizes/colors).
const BIKE_FIELD_LABELS = {
  type: 'category',
  category: 'category',
  'model category': 'category',
  'type/style': 'category',
  'frame size': 'sizes',
  sizes: 'sizes',
  size: 'sizes',
  'available sizes': 'sizes',
  color: 'colors',
  colors: 'colors',
  'available colors': 'colors',
  'factory colors': 'colors',
  weight: 'weight',
  'weight.': 'weight',
  'weight approx.': 'weight',
  'weight (approx.)': 'weight',
  'average weight': 'weight',
  'weight (lbs)': 'weight',
};

// Canonical spec labels for header variants that mean the same thing.
// Catalogs write "Brakeset"/"Brakes", "Saddle"/"Saddles", "Extras"/"Standard
// Equipment"... and the detail page should show one label per part across
// brands. Keyed on the lowercased header; the original header is still kept
// in bike_spec.raw_label. Singular wins (majority form); "Brakes" wins over
// "Brakeset" because it's the part and the DB category name. Cassette stays
// distinct from Freewheel, and "Other Features" (1940 Bianchi frame notes)
// is not Extras.
const LABEL_ALIASES = {
  frame: 'Frame Material',
  'frame type': 'Frame Material',
  'frame details': 'Frame Material',
  'frame material/tubing': 'Frame Material',
  brakeset: 'Brakes',
  chains: 'Chain',
  'chain type': 'Chain',
  cranksets: 'Crankset',
  freewheels: 'Freewheel',
  'gear cluster': 'Freewheel',
  saddles: 'Saddle',
  'seat posts': 'Seatpost',
  'seat post': 'Seatpost',
  stems: 'Stem',
  tires: 'Tyres',
  'tire configuration': 'Tyres',
  'wheel rims & spokes': 'Rims',
  wheels: 'Rims',
  'rims/wheels': 'Rims',
  'shifters/levers': 'Shifters',
  'extras no charge': 'Extras',
  'included accessories': 'Extras',
  'standard equipment': 'Extras',
  miscellaneous: 'Extras',
  haken: 'Toe Clips',
  // 1985 Raleigh (Sheldon Brown scan): its own header wording.
  'shifting levers': 'Shifters',
  'seat pillar': 'Seatpost',
  handlebar: 'Handlebars',
  'special features': 'Extras',
  accessories: 'Extras',
};

// One global display order for canonical labels (frame -> drivetrain ->
// contact points -> wheels -> extras). Labels not listed sort after these,
// in first-seen order. bike_spec_label.sort_order is set from this.
const LABEL_ORDER = [
  'Frame Material', 'Fork', 'Lugs', 'Headset', 'Handlebars', 'Stem', 'Shifters',
  'Brakes', 'Brake Levers', 'Front Derailleur', 'Rear Derailleur', 'Gearing', 'Crankset', 'Bottom Bracket',
  'Chain', 'Freewheel', 'Cassette', 'Pedals', 'Toe Clips', 'Saddle', 'Seatpost',
  'Hubs', 'Spokes', 'Rims', 'Tyres', 'Cable & Tape', 'Fenders', 'Chain Guard',
  'Groupset / Components', 'Other Features', 'Extras',
];

// CSV columns that are about the source document, not the bike — dropped
// entirely (no bike column, no bike_spec row). Keyed on the lowercased header.
const IGNORED_LABELS = new Set([
  'catalog page reference', // 1974 Motobecane
  'catalog page', // 1975 Motobecane
]);

async function readComponentRecords(conn) {
  const rows = await query(
    conn,
    `SELECT d.component_id, d.title, c.title AS category
       FROM component_detail d
       LEFT JOIN component_category c ON c.category_id = d.category_id
      WHERE d.title IS NOT NULL`
  );
  return rows.map((r) => ({ component_id: r.component_id, title: r.title, category: r.category }));
}

// Brand spellings that differ between these period catalogs and the DB in a
// way punctuation-stripping can't bridge (a genuinely different spelling,
// not just formatting) — e.g. the catalogs write out "T.T.T." while the DB
// uses the numeral form "3ttt". Keyed/valued on the already-period-stripped,
// lowercased word (see normalizeForMatch).
const WORD_ALIASES = {
  ttt: '3ttt',
  // The DB itself spells this inconsistently across categories: "Huret
  // Alvit" (single-L) under Front Derailleurs vs. "Huret Allvit"
  // (double-L) under Rear Derailleurs. Aliasing to one canonical spelling
  // reconciles both, since normalizeForMatch applies this to both the CSV
  // value and every candidate title alike.
  alvit: 'allvit',
  // French catalogs (1974 Motobecane) spell Huret's derailleur "Jubile".
  jubile: 'jubilee',
  // 1983 Raleigh tables print "600AX"; DB rows and the 1981 Kalkhoff say "600 AX".
  '600ax': '600 ax',
  // 1981 Bianchi (Vespa of America) spells Campagnolo/3ttt "Rekord"; no DB
  // title uses it, so this only reaches spec values, never bike titles.
  rekord: 'record',
};

// Collapses hyphens/dashes/slashes/commas to spaces, drops periods,
// normalizes whitespace/case, and applies WORD_ALIASES — so "Regina-Extra" /
// "Regina Extra" compare equal, so do "G.B. Ventoux" / "GB Ventoux" (the DB
// consistently drops periods from abbreviated brand initials like GB, AVA),
// and so do "T.T.T. Record" / "3ttt Record". Em/en dashes and commas count
// as separators so catalog asides like "SIMPLEX PRESTIGE — stem shifter" or
// "SUN TOUR V.G.T., stem power shifter" key cleanly in COMPONENT_OVERRIDES.
function normalizeForMatch(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[-–—/,]/g, ' ')
    .replace(/\./g, '')
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => WORD_ALIASES[word] || word)
    .join(' ');
}

// Manual overrides for CSV values that are genuinely ambiguous by title text
// alone (multiple plausible DB candidates, so matchComponent would correctly
// refuse to guess) but are known-correct from catalog/domain knowledge. Keyed
// by [component_category title][normalizeForMatch(value)] -> component_id —
// by DB category rather than by CSV label, so that label spelling variants
// ("Rear Derailleur" / "Rear Derailleurs" / "Brakeset" / "Brakes") all reach
// the same entry via LABEL_TO_CATEGORY. Add sparingly — anything the generic
// matcher can resolve on its own shouldn't be here.
//
// An entry is either a component_id, or an array of { from, to, id } ranges
// (inclusive catalog years, either bound optional) for parts that kept one
// name across several versions — "Campagnolo Nuovo Record" in a 1973 and a
// 1983 catalog are different DB rows. The catalog year picks the range; no
// matching range means no link rather than a wrong-era one. A range may also
// carry `bike` (exact bike title) for one catalog's value that means
// different parts on different bikes; the first matching range wins.
const COMPONENT_OVERRIDES = {
  'Front Derailleurs': {
    'sun tour superbe': 2645, // 1980 Raleigh: SunTour FD-1500, Superbe (SunTour linking pass 2026-10-30)
    'sun tour alloy vx': 2614, // 1981 Raleigh: SunTour FD-1600, VX
    'sun tour 7': 2641, // 1980 Raleigh: SunTour FD-1400, Seven
    'suntour svx': 2653, // 1986 Raleigh: SunTour FD-4300, SVX
    'suntour xc sport': 2660, // 1986 Raleigh: SunTour FD-XS00, XC Sport 7000
    'suntour xc sport front': 2660, // 1986 Peugeot (US): FD-XS00, XC Sport 7000
    'sun tour sl alloy': 2605, // 1981 Raleigh: SunTour FD-1700, NSL (New SL)
    'simplex sa 02': 2585, // 1982 Peugeot: Simplex SA02, Serie SA (1975-81) (Simplex spacing links 2026-10-30)
    'huret rider 3 pl': 8962, // 1987 Peugeot (FR) Saint-Bernard: Sachs Huret Rider / Duopar triple front (// linkCoverage pass 2026-10-30)
    'suntour lepree': 2637, // 1986 Raleigh Technium 480: SunTour FD-3400, LePree
    'huret rival av: 62 1d': 8961, // 1987 Peugeot (FR) table: Sachs Huret AV 62.1 D, Rival (part number printed)
    'huret rival white av: 62 1d': 8961, // 1987 Peugeot (FR) table Triathlon: as above
    'shimano fd 105': [{ from: 1987, to: 1989, id: 2462 }], // 1987 Peugeot (FR) Aspin: FD-1050 (SIS 105), not the 1985-86 Golden Arrow A105
    'shimano deore fd mt 60 ag': 2496, // 1987 Peugeot (FR) Normandie: FD-MT60, Deore
    'simplex white sx a32': 2578, // 1987 Peugeot (FR) table: SX A32 in white
    'shimano 6400': [{ from: 1987, to: 1991, id: 2478 }], // 1987 Peugeot (FR) Puymorens: FD-6400, 600 Ultegra (row from 1988; the catalogue dates it 1987)
    'shimano sis 105 fd1050': 2462, // 1987 Peugeot (US) Galaxie / Comete: FD-1050, 105
    'shimano new deore xt sis fd m730': 2499, // 1987 Peugeot (US) Cannon Ball Express: FD-M730, Deore XT
    'huret eco 5': 8796, // 1987 Peugeot (US) Corbier P4 / P14: printed 'ECO 5' = the Eco S of the 1986 Corbier; Huret Eco (front)
    'shimano z 501 stem shifters': 2542, // 1987 Peugeot (US) Avoriaz / Iseran: Z-Series group cell; front as the 1986 FD-Z202
    'shimano z501 stem shifters': 2542, // 1987 Peugeot (US): as above
    // 1987 Peugeot FR table / US Comete group cells: front as the 1986 'Huret Rival, front' 8488. Bike-keyed: the 1987
    // Raleigh Huret Rival fronts were left unlinked on purpose.
    'huret rival': [{ bike: "A 400A W 'Comète'", id: 8488 }, { bike: 'Comete', id: 8488 }, { bike: 'Zenith 10', id: 8488 }, { bike: 'Granada 10', id: 8488 }], // + 1987 Raleigh Zenith / Granada 10
    'huret club': 2379, // 1983 Peugeot UO 5 Club: Huret Club II 1000-01 / 1001-01 (1978-87; July 1981 catalogue, merged with the 1984 Sachs Huret Club 1000-01 row 2026-10-30)
    'huret club 2': 2379, // 1986-87 Peugeot (FR) Avoriaz / Aubisque / Lavandou: Club II
    'huret club brazed on': 8489, // 1984 Raleigh Record Sprint / Quasar / Pulsar / Team Cadet: Sachs Huret Club AS 1005-01 (the Club S is its braze-on version)
    'huret rival white': [{ bike: "PG 10B W 'Aravis'", id: 8488 }, { bike: "PG 10 W 'Galibier'", id: 8488 }, { bike: 'PH 501 Ventoux', id: 8488 }],
    'shimano fd z202 front': 2542, // 1986 Peugeot (US) Avoriaz / Iseran / City Express: FD-Z202, Z-Series (1984-88)
    'shimano z 202 front': 2542, // 1986 Peugeot (US) U.S. Express
    'huret eco s satin finish': 8796, // 1986 Peugeot (US) Corbier: Huret Eco (front), the only Eco front
    'huret rival front': 8488, // 1986 Peugeot (US) Ventoux / Tourmalet: Sachs Huret Rival 1086-00 (1984)
    'huret rival (set)': 8488, // 1986 Peugeot (FR) PH 501 "Ensemble Huret Rival": the front of the set
    'shimano deore xt front': 2497, // 1986 Peugeot (US) table Canyon Express: FD-M700, Deore XT
    'huret new success front': 8960,
    // Judgement calls 2026-10-30. Bare "Spidel SLJ" (1981 PRO 10 / PY 10 S, 1982 PRO 10): the 1980 models' A522
    // (the 1982 PY 10 S has the A422, from 1981, so this is the user's call).
    'spidel slj': [{ from: 1978, to: 1984, id: 7283 }], // Simplex SLJ A522
    // 1981 "Simplex SJA": only PK 10 / PKN 10, which print SJA 102 in 1980 (and PKN 10 in 1982); PX 10 S, PSV 10, PFN 13 stay unlinked.
    'simplex sja': [
      { bike: 'PK 10', from: 1981, to: 1981, id: 2573 }, // Simplex SJ A102
      { bike: 'PKN 10', from: 1981, to: 1981, id: 2573 },
    ],
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    'shimano santé': [{ from: 1987, to: 1989, id: 2533 }], // FD-5000, Sante
    "campagnolo croce d'aune": [{ from: 1987, to: 1991, id: 2288 }],
    'shimano deore xt sis': [{ from: 1987, to: 1990, id: 2499 }], // FD-M730
    // 1980 Peugeot (FR leaflet / NL Peugeotboek): the SJA / SXA names run together or spaced
    'simplex sja 102': 2573, // Simplex SJ A102 (1979-89)
    'simplex sja102': 2573,
    'simplex sja 103': 2574, // Simplex SJ A103 (1979-89); PKN 13 triple
    'simplex sj 103': 2574, // PF 60 prints "SJ 103"; the triple front is the SJ A103
    'simplex sxa22': 2577, // Simplex SX A22
    'spidel slj a522': 7283, // Simplex SLJ A522 (1978-84), Spidel-badged on the PRO 10 / PY 10 S
    'simplex slja522': 7283,
    'simplex sja 222': 2575, // 1982 Peugeot: Simplex SJ A222 (1981-85)
    // 1984 Peugeot (FR table / GB spec): model numbers printed run together
    'simplex sja222': 2575,
    'simplex sja222cx': 2575, // PH 12 braze-on; no CX row
    'simplex slja422': 7263, // Simplex SLJ A422 (1981-84)
    'simplex slja 422': 7263, // 1986 Peugeot (FR) table PRO 10
    'simplex sx a 33': 7312, // 1986 Peugeot (FR) table PH 513 / PH 13 triples
    'simplex sxa32 (parallelogram)': 2578, // 1986 Peugeot (FR) table
    'simplex sxa32': 2578, // Simplex SX A32 (1984-89)
    'simplex sxa33': 7312, // PH 13 triple: Simplex SX A33 (1984-89)
    'simplex sja 422': 7263, // 1983 Peugeot (CA) PY 14 / PX 14: Simplex SLJ A422 (1981-84); "SJA-422" is the SLJ A422
    'simplex sx a 32': 2578, // 1983 Peugeot (CA): Simplex SX A32 (row dated 1984-89, a year early: the only row)
    'simplex sx a 52': 2580, // 1983 Peugeot (CA) PA 60: Simplex SX A52 (1975-83)
    'simplex sja 223': 2576, // 1982 Peugeot PFN 13 triple: SJ A223
    'simplex sja 222 cx': 2575, // 1982 Peugeot (NL) PH 12: braze-on CX version of the SJ A222 (no CX row)
    'spidel slja 422': 7263, // 1982 Peugeot PY 10 S: Simplex SLJ A422 (1981-84), Spidel-badged
    'simplex lja302': 2567, // 1978 Peugeot (NL): Simplex LJ A302
    'simplex slja 502': [{ from: 1978, to: 1981, id: 7281 }], // 1978 Peugeot (NL) PX 10 LE / PY 10 EC / PY 10 CP: SLJ A502 (1978-81)
    'simplex slja 522': [{ from: 1977, to: 1986, id: 7283 }], // 1977 Peugeot (DE) PY 10/CP: SLJ A522 (the only row, dated 1978-84; a judgement, one year early); 1986 Peugeot (FR) PY 10 FC too
    'sun tour vx': [{ from: 1979, to: 1980, id: 2614 }], // 1979-80 Raleigh Super Course / Touring 14: SunTour FD-1600, VX (1978-84)
    'shimano z202': [{ from: 1986, to: 1986, id: 2542 }], // 1986 Raleigh Marathon / Pursuit: FD-Z202-HS, Z-Series (1984-88)
    // 1987 Raleigh Randonneur 18 "Huret New Success": the 1987 ARIS-era rows (several New Success rows span 1980-96, so the matcher nulls the bare name).
    // 1985-86: AV 66.3 D (1986 Peugeot (US) Triathlon / Galibier); 1987-90: ARIS.
    'huret new success': [{ from: 1985, to: 1986, id: 8960 }, { from: 1987, to: 1990, id: 2439 }], // Sachs Huret ARIS New Success (the only New Success front; undated)
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105 sis': [{ from: 1987, to: 1987, id: 2462 }], // Competition / Triathlon: FD-1050 105
    'shimano 600ex': [{ from: 1987, to: 1987, id: 2481 }], // Road Ace / Record Ace: FD-6207 600EX (1984-87)
    'shimano 600 ex': [{ from: 1981, to: 1981, id: 2480 }, { from: 1987, to: 1987, id: 2481 }], // 1981 Criterium: EC-630 / FD-6200 Arabesque (1978-84; FD-6207 is 1984-87) // Road Ace: FD-6207 600EX (1984-87)
    'sun tour spirt': 2601, // 1981 Royale: SunTour 3700 / FD-1000 Spirt (1973-85)
    'sun tour spirt pub': 2601, // 1981 Record: as Royale
    // 1986 Raleigh (US) Supercourse: bare "Suntour Cyclone"; no row dated 1986 (FD-3300 / FD-3700 end 1985, Cyclone 7000 starts 1987).
    'suntour cyclone': null,
    // 1977-78 Raleigh (Super Course, Grand Prix, Record Ace, Super Grand Prix): the only Compe V row; the
    // "Raleigh/" prefix and the bare "Compe V alloy front" keep the matcher from linking it.
    'raleigh sun tour compe v': [{ from: 1977, to: 1980, id: 2603 }], // SunTour 3701 / FD-1100, Compe-V (5-hole); 1979 Raleigh Grand Prix / Super Grand Prix / Record Ace carry the same text as 1978, and the 1980 Gran Sport / Grand Prix / Super Grand Prix / Super Record the same again (row spans 1970-84) (2602 is 1974-79 but 2603 is the pick already made for 1978)
    'compe v alloy front': [{ from: 1977, to: 1978, id: 2603 }],
    // 1970 Peugeot (Dutch-market catalogue).
    'simplex criterium': [{ from: 1964, to: 1975, id: 2583 }], // Simplex Prestige Criterium AV 223 (no other Criterium front before the 1977 LJ A200)
    // 1974 Peugeot (Dutch catalogue): PA 60 front; also back-fills the 1973 PX 10.
    'simplex super competition': [{ from: 1971, to: 1976, id: 8794 }], // Simplex AV 3, Super-Competition (1971)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano dura ace': [{ from: 1990, to: 1993, id: 2511 }], // FD-7403 (8sp HG)
    'shimano ultegra': [{ from: 1990, to: 1991, id: 2478 }], // FD-6400, 600 Ultegra (the matcher took a 1990 "Ultegra Tripple" velobase row)
    'shimano deore dx': [{ from: 1990, to: 1993, id: 2487 }], // FD-M650
    'shimano deore lx': [{ from: 1990, to: 1992, id: 2491 }], // FD-M550
    'shimano m200gs': [{ from: 1990, to: 1991, id: 7595 }], // FD-M200, 200GS
    'shimano exage 500ex': [{ from: 1990, to: 1992, id: 7570 }], // FD-A500
    'suntour xc pro top pull': [{ from: 1990, to: 1992, id: 2659 }], // FD-XP00 / XP01, XC-Pro (no 1990 Top-Pull row; TP10 is 1992)
    'suntour xc comp top pull': [{ from: 1990, to: 1992, id: 7959 }], // FD-XC01, XC-Comp (only XC-Comp front row, dated 1992)
    'suntour xcd top pull': [{ from: 1990, to: 1990, id: 2662 }], // XCD 6000 (1990)
    'suntour xce top pull': [{ from: 1990, to: 1992, id: 2663 }], // FD-XE01, XCE
    'suntour xct': [{ from: 1990, to: 1992, id: 7962 }], // FD-XT02, XCT (row dated 1992)
    'suntour x 1 top pull': [{ from: 1990, to: 1990, id: 2655 }], // X-1 Chroma (1990)
    'suntour radius': [{ from: 1990, to: 1992, id: 2640 }], // FD-RA00-SSH clamp-on (Eros frame has no braze-on)
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'campagnolo chorus': 2286, // Campagnolo FD-01FCH, Chorus (1987-91)
    'shimano 600 ultegra': 2478, // Shimano FD-6400, 600 Ultegra
    // 1982 Bianchi US racing brochure (saarf.london).
    'shimano 600 gs': 7435, // Shimano EC-600 / FD-6100, Shimano-600 (1977-82; the 600 GS group front)
    // 1981 Bianchi Super Turismo: "Nuovo Gran Sport" = the 1974-85 3500 rear and its 3600/NT front (as 1983 Bianchi Gran Sport).
    'campagnolo nuovo gran sport': 2276, // Campagnolo 3600/NT, Gran Sport
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 105': [{ bike: "A 500A W 'Galaxie'", from: 1987, to: 1987, id: 2462 }, { bike: 'Junior 105', from: 1987, to: 1987, id: 2462 }, { bike: 'Sirocco 12', from: 1987, to: 1987, id: 2462 }, { bike: 'Ventura 12', from: 1987, to: 1987, id: 2462 }, { to: 1989, id: 2466 }, { from: 1990, to: 1992, id: 2467 }], // Corsa: FD-A105, 105 Golden Arrow (1983-85) / 1990 Bianchi: FD-1055 105SC / 1987 Peugeot (FR) Galaxie: FD-1050 (SIS)
    'suntour ar': 2620, // Sirocco: SunTour FD-2500, AR (1982-85)
    'sun tour ar': 2620, // Quasar / Zenith
    'sun tour arx': 2621, // Clubman: SunTour FD-2600, ARX (same row as the 'suntour arx' key)
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    // "990/980" names the budget group; the DB's 1985-era front is the 980 (990 front exists only as the 1987+ century finish).
    'campagnolo 990 980': 2279, // Strada / Bambina: Campagnolo 980
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo record': [{ to: 1969, id: 2305 }, { from: 1970, to: 1977, id: 2297 }, { from: 1978, to: 1982, id: 2299 }, { from: 1983, to: 1985, id: 2300 }], // 1052/1 first body / second body / 1052/NT 3-hole narrow band / 0104007 clip-on
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo super record 30nnale': 2313, // Regal 30nnale: same 1052/SR as the plain Super Record group
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'sun tour \'7\'': 2641, // Royale / Royal: SunTour FD-1400, Seven (1978-85)
    // Only 3701 / FD-1100 Compe-V runs past 1979 (the bare Compe-V row is 1974-79).
    'compe v': 2603, // Europa: SunTour 3701 / FD-1100, Compe-V (5-hole)
    'compe v on 10 speed': 2603, // Stratos
    'shimano at10 x sis': 7721, // 1993 Bianchi "AT10-X" spelling of the AT10 SIS entry below
    'suntour cyclone 7000': 2631, // SunTour Cyclone 7000 (White) FD (1987 Bianchi)
    // SunTour No. 61 retitles (bare "Vx" / "ARx" rows now carry codes): keep existing links
    'suntour vx': 2614, // SunTour FD-1600, VX (1981 Kalkhoff)
    'suntour arx': 2621, // SunTour FD-2600, ARX (1985 Raleigh)
    // 1993 Bianchi, from the SunTour 1992 catalogue system chart: FS-E takes the Top-Pull Lite, XC-Comp the Top-Pull Pro.
    'suntour fs e top pull': 7968, // SunTour FD-TP05-GXH, Top-Pull Lite
    'suntour xc comp top pull powerflo': 7966, // SunTour FD-TP10-GXH, Top-Pull Pro
    'shimano at10 sis': 7721, // 1993 Bianchi, from the Jul 1992 manual: Shimano FD-AT10 / FD-AT11, Altus A10
    'shimano ct10 dual sis': 7732, // Shimano FD-CT10, Altus C10
    'shimano ct10 15': 7732,
    'shimano ct20': 7739, // Shimano FD-CT20, Altus C20
    'shimano exage lt top pull dual sis': 7715, // Shimano FD-M320 / FD-M321, Exage LT
    'shimano exage es top pull dual sis': 7712, // Shimano FD-M520 / FD-M521, Exage ES
    'simplex prestige': 2583, // Simplex Prestige Criterium AV 223
    // Bare "Shimano 600" substring-hits EC-600 "Shimano-600" (1977-78). Fine
    // to 1978; from 1979 it could be FD-6100 or FD-6200 600EX, so no link.
    'shimano 600': [{ to: 1978, id: 7435 }, { from: 1979, id: null }], // Shimano EC-600, Shimano-600
    // 1987 Bianchi Limited/Squadra: the SIS-era 600EX front.
    'shimano 600 sis': 2481, // Shimano FD-6207, 600EX (1984-87)
    // Catalog names the Alfa groupset by its rear derailleur ("Alfa 72");
    // the matching front is the plain Zeus Alfa.
    'alfa 72': 2682, // Zeus Alfa
    // The 1052/1 for 70s catalogs (Raleigh/Motobecane); the 0104007 three-hole
    // band for 80s ones (Bianchi). 1978-81 had the 1052/NT, not yet needed.
    'campagnolo nuovo record': [
      { to: 1977, id: 2297 }, // Campagnolo 1052/1, Record (second body, 1970-1977)
      { from: 1978, to: 1981, id: 2299 }, // Campagnolo Record 1052/NT (1978 - 1982, 3-hole narrow band)
      { from: 1982, id: 2300 }, // Campagnolo 0104007, Nuovo Record (clip-on, 3-hole standard band)
    ],
    'new huret jubilee': [{ to: 1976, id: 2396 }, { from: 1977, id: 2395 }], // Huret Jubilee 500: 5-hole cage (1972-76) / 4-hole (1977-80); 1973 Huret catalogue
    // 1974 Raleigh (US) spec table: same picks as 1973, speed count appended.
    'campagnolo nuovo record 10 speed': [{ to: 1977, id: 2297 }], // Campagnolo 1052/1, Record (second body)
    'campagnolo nuovo record 12 speed': [{ to: 1977, id: 2297 }],
    'huret jubilee super light 10 speed': [{ to: 1976, id: 2396 }], // Huret Jubilee 500 (5-hole cage)
    'huret jubilee 5 or 10 speed': [{ to: 1976, id: 2396 }],
    'new huret challenger alloy 10 speed': 2388, // Huret Challenger 950 / 951
    'simplex prestige 10 speed': 2583, // Simplex Prestige Criterium AV 223
    // 1975 Raleigh (US) spec table. Super Record front left unlinked: the DB's
    // Super Record fronts start 1979, before that the group used the 1052/1.
    'huret jubilee 10 speed': [{ to: 1976, id: 2396 }], // Huret Jubilee 500 (5-hole cage)
    'huret challenger 10 speed': 2388, // Huret Challenger 950 / 951
    'huret challenger deluxe 10 speed': 2388,
    // 1977 Raleigh (US). Record 24 "Challenger" is the Huret. Compe V left
    // unlinked (two Compe-V rows); the Gran Sport front is 2316 (Cat 17 p 54).
    'challenger derailleur 10 speed': 2388, // Huret Challenger 950 / 951
    // 1974 Motobecane (shifter asides now split into the Shifters column).
    'huret jubilee': [{ to: 1976, id: 2396 }, { from: 1977, id: 2395 }],
    // 1975 Motobecane.
    'huret jubilee wide ratio': [{ to: 1976, id: 2396 }, { from: 1977, id: 2395 }],
    'huret challenger': 2388, // Huret Challenger 950 / 951 (hinged clamping band)
    // 1981 Kalkhoff. Shimano rows are titled "Shimano FD-7200, Dura-Ace EX"
    // (part number between brand and group), so substring never fires.
    'campagnolo super record': 2313, // Campagnolo 1052/SR (0104010), Super Record (clip-on)
    'campagnolo super record 12 speed': [{ from: 1975, to: 1988, id: 2313 }], // 1975-76 Raleigh Team Professional (row redated from 1979 to 1975, 2026-10-24)
    'dura ace ex': 2518, // Shimano FD-7200, Dura-Ace EX (clamp)
    'shimano 600 ax': 2476, // Shimano FD-6300, 600 AX (clamp)
    // 1983 Bianchi: the 80s (Nuovo) Gran Sport is the 3600/NT. The early-70s
    // Gran Sport front is the 2050 (Cat 17 p 54, group 2240), row 2316.
    'campagnolo gran sport': [{ to: 1977, id: 2316 }, { from: 1978, id: 2276 }], // Campagnolo 2050, Valentino / 3600/NT, Gran Sport
    'campagnolo gran sport alloy': [{ to: 1977, id: 2316 }], // 1977 Raleigh Competition GS
    // 1973 Bianchi junior Rekord ("Valentino completo di deragliatore").
    'campagnolo valentino': 2316, // Campagnolo 2050, Valentino (1968-1980)
    // 1987 Bianchi.
    'campagnolo new victory': 2318, // Campagnolo Victory
    'shimano 105 sis': 2462, // Shimano FD-1050, 105
    'shimano dura ace sis 7': 2510, // Shimano FD-7400, Dura-Ace 7400
    // 1993 Bianchi. A comma-less Drivetrain cell fills both derailleurs.
    'campagnolo record 8 speed ergopower': 2306, // Campagnolo FD-01SRE, Record (91-94)
    'campagnolo chorus 8 speed ergopower': 2286, // Campagnolo FD-01FCH, Chorus
    'campagnolo chorus 8 speed downtube shift levers': 2286,
    'campagnolo veloce': 2317, // Campagnolo Veloce
    'shimano dura ace sti': 2511, // Shimano FD-7403, Dura-Ace 7400
    'shimano ultegra sti': 2479, // Shimano FD-6401-B / FD-6401-F, 600 Ultegra
    'shimano 105 sti': 2467, // Shimano FD-1055, 105SC
    'shimano rx100 gs sis': 2531, // Shimano FD-A550, RX100
    'shimano xtr': 2541, // Shimano FD-M900, XTR M900
    'shimano xtr top pull dual sis': 2540, // Shimano FD-M901, XTR M900 (top-pull)
    'shimano deore dx top pull dual sis': 2489, // Shimano FD-M651, Deore DX (top-pull)
    'shimano deore xt top pull dual sis': 2501, // Shimano FD-M735, Deore XT
    'shimano deore lx top pull dual sis': 2491, // Shimano FD-M550, Deore LX
    // 1985 Raleigh (Sheldon Brown scan).
    'suntour "seven"': 2641, // SunTour Seven
    'shimano model 105': 2466, // Shimano FD-A105, 105 Golden Arrow (1983-86)
    'shimano z204': 2543, // Shimano FD-Z204-HS
    'shimano z206': 2544, // Shimano FD-Z206-HS, Z-Series
    'shimano deore xt': [{ to: 1989, id: 2497 }, { from: 1990, to: 1993, id: 2501 }], // FD-M700 (1983-86) / 1990 Bianchi: FD-M735
    'suntour cyclone mkiii': 2629, // SunTour FD-3300, Cyclone (No. 61 / 62)
    'suntour superbe pro': [{ from: 1982, id: 2652 }], // FD-2000 endless band (1982-86 per Catalog No. 59 / No. 61); links the 1983 Bianchi
    'suntour ag tech': 2609, // SunTour FD-2800, AG Tech
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 2318, // Victory (1984-86)
    'campagnolo record corsa': 2283, // C-Record (1985-90)
    // 1979 Peugeot (French catalogue).
    'simplex slja 302': 2567, // Simplex LJ A302 (1978); SLJA is the Spidel-badged name
    'simplex lja 302': 2567, // Simplex LJ A302
    'simplex sx a 22': 2577, // Simplex SX A22 (1977-83)
    'simplex sxa 22': 2577, // Simplex SX A22
    'simplex sa 12': 2586, // Simplex SA12, Serie SA (1975-81)
    'shimano deore sis': [{ from: 1987, to: 1989, id: 2496 }], // 1987 Colnago Master Mountain Bike: FD-MT60, the SIS Deore group (1987-89)
  },
  'Rear Derailleurs': {
    'sun tour 7gt': 7788, // 1980 Raleigh: SunTour RD-2000, Seven GT (SunTour linking pass 2026-10-30)
    'raleigh sun tour 7gt': 7788, // 1980 Raleigh: RD-2000, Seven GT
    'suntour xc': 4778, // 1986 Raleigh: SunTour RD-6300, XC
    'sun tour superbe': 4760, // 1980 Raleigh: SunTour RD-2100, Superbe (road bike, not the long-cage Superbe II)
    'sun tour gt': 7789, // 1981 Raleigh: SunTour RD-1200, GT
    'suntour lepree': 7827, // 1986 Raleigh Technium: SunTour RD-6700, Le Pree (GT), the only 1980s LePree rear
    'suntour xc sport rear': 4788, // 1986 Peugeot (US): SunTour RD-XS00, XC Sport 7000
    'simplex sx 660': 4649, // 1982 Peugeot: Simplex SLJ SX660, Super LJ (undated row) (Simplex spacing links 2026-10-30)
    'simplex sx660': 4649, // 1984 Peugeot
    'simplex s 001 t p': 4647, // 1983 Peugeot: Simplex S001 T, Prestige (1975-87)
    'shimano light action l522gs': 7553, // 1986 Raleigh: Shimano RD-L522, Light Action (Shimano exact-model links 2026-10-30)
    'shimano light action l523': 4518, // 1986 Raleigh: Shimano RD-L523, Light Action
    'huret rider': 8958, // 1986 Raleigh Teton: Sachs Huret AR 46.1 T, Rider, the only dated Rider rear (// linkCoverage pass 2026-10-30)
    'huret rider gt sp': 8958, // 1987 Peugeot (FR) Saint-Bernard
    'shimano z501': 4544, // 1986 Raleigh Pursuit: Shimano RD-Z501, Z-Series
    'huret rival ar: 41 1d': 8957, // 1987 Peugeot (FR) table: Sachs Huret AR 41.1 D, Rival (part number printed)
    'huret rival white ar: 41 1d': 8957, // 1987 Peugeot (FR) table Triathlon: as above
    'shimano rd 105': [{ from: 1987, to: 1989, id: 4449 }], // 1987 Peugeot (FR) Aspin: RD-1050, 105 SIS
    'shimano deore rd mt60sp sis gt': 4487, // 1987 Peugeot (FR) Normandie: RD-MT60, Deore
    'simplex sx 440 gt sp': 4622, // 1987 Peugeot (FR) table: as 'sx440 gt sp'
    'simplex sx 440 gr sp': 4622, // 1987 Peugeot (FR) table: GR/SP misprint of GT/SP
    'shimano 6400': [{ from: 1987, to: 1991, id: 4466 }], // 1987 Peugeot (FR) Puymorens: RD-6400, 600 Ultegra
    'campagnolo victory indexed': 4169, // 1987 Peugeot (FR) Dolomites: Victory S3 (the indexed 1987-88 version)
    'huret eco': [{ from: 1987, to: 1990, id: 4399 }, { id: 4301 }], // 1987 Peugeot (FR) table: bare Eco on a 1987 bike = Sachs Huret Eco 2490-01; earlier catalogues keep the matcher's 1960-80 Eco 4301
    'shimano sis 105 rd1050': 4449, // 1987 Peugeot (US) Galaxie / Comete: RD-1050, 105
    'shimano new deore xt sis rd m730': 4491, // 1987 Peugeot (US) Cannon Ball Express: RD-M730, Deore XT
    'huret eco 5': 8485, // 1987 Peugeot (US) Corbier: as 'huret eco s' (Sachs Huret Eco S 2830-00)
    'shimano z 501 stem shifters': 4544, // 1987 Peugeot (US) Avoriaz / Iseran: RD-Z501, as 1986
    'shimano z501 stem shifters': 4544, // 1987 Peugeot (US): as above
    // Judgement call 2026-10-30: 1981 PRO 10 / PY 10 S and 1982 PRO 10 bare "Spidel SLJ"; the same models print
    // "Spidel SLJ 5500 CP" in 1980 and 1982 (PY 10 S).
    'spidel slj': [{ from: 1979, to: 1984, id: 7309 }], // Simplex SLJ5500 CP
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    "campagnolo croce d'aune": [{ from: 1988, to: 1991, id: 4112 }], // short cage on road racing bikes
    'shimano deore xt sis': [{ from: 1987, to: 1989, id: 4491 }], // RD-M730 (the matcher hit the bare undated Deore XT row 4496)
    'simplex s 061': 4616, // 1981 Peugeot PSV / PK / PF / PFN 10: Simplex S061 T (1981-90)
    'simplex s061 tsp': 4616, // 1982 Peugeot: no TSP row, S061 T is the same gear
    'simplex s061tsp': 4616,
    // 1984 Peugeot (FR table / GB spec)
    'simplex sx061tsp': 4616, // PH 11: "SX 061 TSP" is the S061 T
    'simplex sx610tsp': 4631, // SX610 T (1981-85)
    'simplex sx810tsp': 4617, // SX810 T
    'simplex sx810 tsp': 4617, // 1986 Peugeot (FR) table PH 13
    'simplex s 061 tsp': 4616, // 1986 Peugeot (FR) table PH 11: S061 T
    'simplex s061t tsp': 4616, // 1986 Peugeot (FR) table PH 15 T
    'simplex sx1t sp': 7308, // 1986 Peugeot (FR) table P 10 L / PH 20 M: SX1 T
    'simplex sx440 gt sp': 4622, // 1986 Peugeot (FR) table PH 153 T: SX440 GT version 1 (1985-86)
    'simplex sx410 gtsp': 4620, // SX410 GT
    'simplex slj5500cp': 7309, // SLJ5500 CP
    'simplex slga550cp': 7309, // GB table misprint of SLJA 5500 CP
    'simplex slj6600tsp': 4655, // PY 10 FC: SLJ6600 T (1981-84)
    'simplex slj660tsp': 4655, // GB table PX 10 DU: misprint of SLJ 6600 TSP
    'simplex slj 6600 tsp': 4655, // 1985 Peugeot PY 10 FC (p. 3 caption)
    'shimano rd 6207': 4470, // 1985 Peugeot PX 10 SH: RD-6207, 600EX
    'mavic 801 rear': 4338, // 1986 Peugeot (US) table PX: Mavic 801 (1986)
    'shimano rd z501 gs rear': 4544, // 1986 Peugeot (US) Avoriaz / Iseran / City Express: RD-Z501-GS, Z-Series (1984-89)
    'shimano z 501 rear': 4544, // 1986 Peugeot (US) U.S. Express
    'huret eco s satin finish': 8485, // 1986 Peugeot (US) Corbier: Sachs Huret Eco S 2830-00 (1984), not the 1960-80 Eco
    'shimano deore xt superplate rear': 4489, // 1986 Peugeot (US) table Canyon Express: RD-M700-SP, Deore XT (Superplate)
    'huret new success rear': 4402,
    'campagnolo 1020/a': [{ from: 1982, to: 1984, id: 4126 }], // 1984 Peugeot PZ 10: Nuovo Record v4 (1982-84)
    'campagnolo 1020 a': [{ from: 1982, to: 1984, id: 4126 }],
    'simplex sx 610 tsp': 4631, // 1982 Peugeot PX 10 DU / PX 10 S: Simplex SX610 T (1981-85)
    'simplex sx 610 t': 4631,
    'simplex sx 810 tsp': 4617, // 1982 Peugeot PBN 10 S
    // 1983 Peugeot (CA, Velo Sport): "/SP" and "T/P" are the Canadian suffixes for the same gears
    'simplex sx 810 t p': 4617, // SX810 T (row dated 1977-81)
    'simplex sx 410 gt p': 4620, // SX410 GT
    'simplex slj 5500 cp sp': 7309, // SLJ5500 CP
    'simplex lj 4000 cp sp': 4603, // LJ4000 CP version 2 (1978-84)
    'simplex lj 1000 cp sp': 4646, // LJ1000 CP (row dated 1975-81)
    'simplex 810t': 4617, // 1982 Peugeot (NL) lugless PH 10 / PH 10 S
    'simplex s001t': 4647, // 1982 Peugeot (NL) H 10: Simplex S001 T, Prestige
    'spidel slj 550 cp': 7309, // 1982 Peugeot PY 10 S: table prints "SLJ 550 CP", the SLJ5500 CP
    'spidel slj 5500 cp': 7309, // 1980 Peugeot PRO 10 / PY 10 S: Simplex SLJ5500 CP, Spidel-badged
    'simplex sx410t': 4621, // 1980 Peugeot (NL): Simplex SX410 T
    'simplex sx810t': 4617, // Simplex SX810 T
    'simplex sx 410 gt sp': 4620, // 1980 Peugeot PF 60: SX410 GT (no GT SP row)
    'simplex lj 4000 cp': [{ from: 1975, to: 1977, id: 4602 }, { from: 1978, to: 1984, id: 4603 }], // 1977 Peugeot (DE) PY 10/CP: LJ4000 CP version 1 (1975-77)
    'simplex lj 1000 t': [{ from: 1970, to: 1981, id: 4600 }], // 1977 Peugeot (DE) PX 10/LE, PXN 10/E: LJ1000 T (1970-81)
    'simplex sx 810 t': [{ from: 1977, to: 1986, id: 4617 }], // 1977 Peugeot (DE) PA 10/LE, 1982 Peugeot: SX810 T (1977-86; the DB title has no space, so the matcher misses it)
    'sun tour vx gt': [{ from: 1979, to: 1980, id: 4707 }], // 1979-80 Raleigh Super Course / Touring 14: SunTour RD-2400, VX (GT) (1977-84)
    'suntour hero': [{ from: 1986, to: 1986, id: 4746 }], // 1986 Raleigh Record / Sportif / Capri / Grand Mesa: SunTour Hero (Version 1); a judgement, the row is dated 1987, one year later (Version 2 is undated)
    // 1987 Raleigh Randonneur 18 "Huret New Success": the 1987 ARIS-era rows (several New Success rows span 1980-96, so the matcher nulls the bare name).
    // 1985-86: AR 47.1 D (1986 Peugeot (US) Triathlon / Galibier).
    'huret new success': [{ from: 1985, to: 1986, id: 4402 }, { from: 1987, to: 1987, id: 4412 }], // Sachs Huret ARIS New Success 1st Gen. (the only row dated 1987; 4402 is 1985, 4403 the 1980 touring)
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105 sis': [{ from: 1987, to: 1987, id: 4449 }], // Competition / Triathlon: RD-1050 105
    'shimano 600 ex': [{ from: 1981, to: 1981, id: 4468 }, { from: 1987, to: 1987, id: 4471 }], // 1981 Criterium: RD-6200 Arabesque short cage, 13/28T (1978-84; RD-6207 is 1984-86) // Road Ace: RD-6208 600EX SIS (1986-87)
    'shimano 600ex': null, // Record Ace: friction 600EX; RD-6207 ends 1986, RD-6208 is SIS only, so no row fits
    // 1985 Raleigh (Marathon, Pursuit, Record, Teton): "SunTour HR", on 14-30 5/6-speed freewheels. Only the Honor
    // RD-1100 (1973-85, 28T / 14-30) fits by capacity and tier; no DB row is titled HR, so this is by abbreviation.
    'suntour hr': [{ from: 1985, to: 1985, id: 4702 }], // SunTour 2600 / RD-1100, Honor
    // Peugeot 1970-72 (Dutch catalogues): two velobase rows share the title.
    'simplex criterium': [{ from: 1965, to: 1970, id: 4644 }, { from: 1971, to: 1976, id: 4645 }], // Simplex Criterium 1965-70 / 1971-76 (row dated 1971-73; the 1974-76 Dutch catalogues still list it)
    // 1974 Peugeot (Dutch catalogue): PX 10 LE / PX 60, captioned "Achterderailleur Simplex Super LJ".
    'simplex super lj': [{ from: 1971, to: 1978, id: 4650 }], // Simplex SLJ5000 (1971-78), the Super LJ rear; 4649 SX660 is undated
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano dura ace': [{ from: 1990, to: 1996, id: 4505 }], // RD-7402 (8sp); matcher took Dura-Ace EX
    'shimano ultegra': [{ from: 1990, to: 1991, id: 4466 }], // RD-6400, 600 Ultegra; matcher took 1997 RD-6500
    'shimano deore dx': [{ from: 1990, to: 1993, id: 4480 }], // RD-M650-SGS (13-30 triple)
    'shimano deore lx': [{ from: 1990, to: 1992, id: 4484 }], // RD-M550-SGS
    'shimano m200gs': [{ from: 1990, to: 1992, id: 7594 }], // RD-M200, 200GS
    'shimano exage 500ex': [{ from: 1990, to: 1994, id: 4513 }], // RD-A500
    'suntour xc pro': [{ from: 1990, to: 1992, id: 4786 }], // RD-XP00-GXB (GX cage, 12-30)
    'suntour xc comp': [{ from: 1990, to: 1992, id: 4783 }], // RD-XC20-GXB
    'suntour xcd': [{ from: 1990, to: 1990, id: 4789 }], // XCD 6000 (1990)
    'suntour xce': [{ from: 1990, to: 1992, id: 4791 }], // RD-XE01-GXB
    'suntour xct': [{ from: 1990, to: 1992, id: 7952 }], // RD-XT02, XCT (row dated 1992)
    'suntour x 1': [{ from: 1990, to: 1992, id: 4776 }], // RD-X101-GXB; matcher took the 1989 X-1 Chroma
    'suntour radius': [{ from: 1990, to: 1992, id: 4753 }], // RD-RA00-SSB
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'campagnolo chorus': 4108, // Campagnolo Chorus (short cage), 1988-91
    'shimano 600 ultegra': 4466, // Shimano RD-6400, 600 Ultegra
    // 1982 Bianchi US racing brochure (saarf.london).
    'shimano 600 gs': 7110, // Shimano DC-210 / RD-6101, 600 GS (1975-82)
    // 1981 Bianchi Super Turismo: "Nuovo Gran Sport" = the 1974-85 3500 rear and its 3600/NT front (as 1983 Bianchi Gran Sport).
    'campagnolo nuovo gran sport': 4085, // Campagnolo 3500, Nuovo Gran Sport
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 105': [{ bike: "A 500A W 'Galaxie'", from: 1987, to: 1987, id: 4449 }, { bike: 'Junior 105', from: 1987, to: 1987, id: 4449 }, { bike: 'Sirocco 12', from: 1987, to: 1987, id: 4449 }, { bike: 'Ventura 12', from: 1987, to: 1987, id: 4449 }, { to: 1989, id: 4452 }, { from: 1990, to: 1992, id: 4455 }], // Corsa / Record Sprint: RD-A105, 105 Golden Arrow (1983-85) / 1990 Bianchi: RD-1055 105SC / 1987 Peugeot (FR) Galaxie: RD-1050 (SIS)
    'suntour cyclone ii': 4742, // Competition: SunTour RD-3500, Cyclone Mark-II (1981-85)
    'sun tour cyclone ii gt wide ratio': 4743, // Royal: SunTour RD-3700, Cyclone Mark-II (GT)
    'suntour ar': 4725, // Sirocco: SunTour RD-4200, AR (aR II) (1982-85)
    'sun tour ar': 4725, // Quasar / Zenith
    'sun tour arx': 4727, // Clubman: SunTour RD-4300, ARX
    'huret eco duopar': 4277, // Weekender: Huret Duopar Eco (Version 1); the matcher hit the plain Eco
    'huret eco s': 8485, // Pulsar / Team Cadet / Stratos / Medale: Sachs Huret Eco S 2830-00 (June 1984 catalogue); was the plain Eco 4301
    // Classic: the DB's titanium Duopar rows are the 1976 2600 series and the 1980 Sachs Huret DuoPar; the 1984 touring
    // Duopar is the Sachs-era part.
    'huret titanium bodied duopar': 4398, // Sachs Huret DuoPar (titanium)
    // 1978 Raleigh (US, ebykr scan).
    'sun tour cyclone gt': 4738, // Super Course: SunTour 2812 99 01 / RD-1800, Cyclone GT (1976-82)
    'raleigh sun tour vgt': 4705, // Super Grand Prix / Grand Prix: RD-1500 V-GT Luxe version 2 (1978-82); v1 ended 1976
    'raleigh sun tour seven gt': 7788, // Record Ace: SunTour RD-2000, Seven GT (1978-85)
    // Record FFS/PPS: the matcher exact-hits a bare velobase "Shimano Positron" (1980). The 1978 Positron could be the
    // DG-200 Positron-II, DG-210 EM or DG-300 Positron-400 and the sheet says only "Positron", so no link.
    'shimano positron': [{ to: 1979, id: null }, { from: 1980, id: 4525 }], // from 1980 keeps the 1983 Raleigh Silhouette on the bare velobase row
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo record': [{ from: 1970, to: 1981, id: 4125 }, { from: 1982, to: 1984, id: 4126 }, { from: 1985, to: 1987, id: 4127 }], // 1020/A Nuovo Record v3 / v4 / v5 (DB dates)
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': 4096, // 0102050, C-Record first generation (1985-86), as 1986 Cinelli Record Corsa
    'campagnolo triomphe': 4155, // Triomphe (1st version, 1984-86); 0102057 leisure long cage is 1986-only and the Gentleman Sport runs a double
    'campagnolo super record 30nnale': 4152, // 4001 2nd gen ver. 2
    // 1986 Master Mountain Bike: the matcher hits an undated bare "Shimano Deore XT" row. In 1986 "Deore" is undecidable between the
    // discontinued DE-series Deore (to 1984) and Deore XT M700 (1983-86); the MT60 "Deore" group only arrives in 1987.
    'shimano deore': null,
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    // 'sun tour vgt' is the 1973 4900; by 1983 the VGT is the RD-1500 V-GT Luxe.
    'sun tour vgt large capacity': 4705, // Royale / Royal: SunTour RD-1500, VGT (V-GT Luxe version 2)
    'sun tour honor': 4702, // 1981 Royale: SunTour 2600 / RD-1100 Honor (1973-85)
    'sun tour volante alloy': 4708, // Stratos / Europa: SunTour RD-2600, Volante
    'shimano at10 x sis': 7720, // 1993 Bianchi "AT10-X" spelling of the AT10 SIS entry below
    // 1987 Bianchi. Part-number retitle broke the bare-name substring hit; keeps the existing link.
    // Ranged on the DB rows (2026-10-09, 1989 De Rosa): first gen 1985-86, A010 2nd gen 1987-89, R010 1990-91. The 1987 Bianchi
    // Mondiale / X4 rows had been left on the first gen; fixed by one-off UPDATE.
    'campagnolo c record': [{ to: 1986, id: 4096 }, { from: 1987, to: 1989, id: 4098 }, { from: 1990, id: 4133 }],
    // SunTour AccuShift leaflets (c. 1987): pin retitled 1987 Bianchi links
    'suntour cyclone 7000': 4740, // SunTour RD-CL10-SS, Cyclone 7000
    'suntour alpha 5000': 4721, // SunTour RD-5000-SS, alpha-5000
    'suntour vx': 4774, // SunTour RD-2200, VX (1981 Kalkhoff)
    'suntour ag tech': 4710, // SunTour RD-5000, AG-Tech (1985 Raleigh)
    'suntour ar gt': 4723, // SunTour RD-4400, AR (aR II GT), 1984 (1985 Raleigh)
    'shimano at10 sis': 7720, // 1993 Bianchi, from the Jul 1992 manual: Shimano RD-AT10, Altus A10
    'shimano ct10 dual sis': 7731, // Shimano RD-CT10, Altus C10
    'shimano ct10 15': 7731,
    'shimano ct20': 7738, // Shimano RD-CT20-GS, Altus C20
    'shimano exage lt top pull dual sis': 7714, // Shimano RD-M320, Exage LT
    'shimano exage es top pull dual sis': 7711, // Shimano RD-M520, Exage ES
    // Bare "Simplex" (catalog names only the brand, no model) was exact-
    // matching component_id 4549, a bare-brand placeholder row wrongly dated
    // 1920-1920 — linking e.g. 1979 Peugeots to a "1920 Simplex" derailleur.
    // Every current use of the bare value is 1979 Peugeot; block it outright
    // rather than year-range it, since there's no real row to point at.
    'simplex': null,
    // Bare "Shimano 600" substring-hit 4461 (since deleted), a velobase "Shimano 600" row
    // that is really the 1975-78 DC-200. Catalogs to 1978 get DC-200; from
    // 1978 the name could be RD-6100 600 or RD-6200 600EX (and long cage or
    // short for touring models), so 1981 Kalkhoff gets no link.
    // (An uncovered year falls through to the matcher, so the null range is
    // needed to actually block it.)
    'shimano 600': [{ to: 1978, id: 4462 }, { from: 1979, id: null }], // Shimano DC-200, 600
    'shimano 600 sis': 4471, // Shimano RD-6208, 600EX (SIS), 1986-87 (1987 Bianchi)
    // 1987 Bianchi Strada: no 1980s Tourney rear derailleur row exists; the
    // only hits are 1970s DB-300/DB-400, so block it.
    'shimano tourney': null,
    'simplex prestige': [{ from: 1900, to: 1979, id: 4583 }], // Simplex Prestige (variant of AR637P/NI), 1971-1974; not for the 1982 Peugeot (NL) PL 8 M
    // 1973-76 Raleigh Gran Sport DL 160 "Simplex Maxi": the AR 642 Maxi-Prestige,
    // Simplex's only Maxi rear (long cage, wide range; 14-28 freewheel on the bike).
    'new simplex maxi': [{ from: 1973, to: 1976, id: 9692 }], // Simplex AR 642 P, Maxi-Prestige
    'simplex maxi 10 speed': [{ from: 1973, to: 1976, id: 9692 }],
    'simplex maxi wide ratio 10 speed': [{ from: 1973, to: 1976, id: 9692 }],
    // DB title is `Zeus "Especial Alfa 72"` — the quotes and brand prefix
    // defeat substring matching.
    'alfa 72': 4863,
    // Five 1020/A versions in the DB; ranges follow the DB's own year_from/
    // year_to for each row: v3 1970-1981, v4 1982-1984, v5 1985-1987.
    'campagnolo nuovo record': [
      { to: 1981, id: 4125 }, // Nuovo Record v3 (w/ spring, solid rivets)
      { from: 1982, to: 1984, id: 4126 }, // Nuovo Record v4 (w/ spring, hollow rivets)
      { from: 1985, id: 4127 }, // Nuovo Record v5 (w/hollow rivets, w/o spring fixing bolt)
    ],
    'new huret jubilee': 4303, // Huret Jubilee 2200 / 2252 / 2240 (first version)
    // 1974 Raleigh (US) spec table.
    'campagnolo nuovo record 10 speed': [{ to: 1981, id: 4125 }], // Nuovo Record v3
    'campagnolo nuovo record 12 speed': [{ to: 1981, id: 4125 }],
    'campagnolo super nuovo record 12 speed': 4148, // Campagnolo 4001, Super Record (1st Generation, 1974-79) — Team Professional
    'huret jubilee super light 10 speed': 4303,
    'huret jubilee 5 or 10 speed': 4303,
    'new huret challenger alloy 10 speed': 4273, // Huret Challenger 2400 / 2440 / 2448 / 2454
    'simplex prestige 10 speed': 4583, // Simplex Prestige (variant of AR637P/NI), 1971-1974
    // 1975 Raleigh (US) spec table.
    'campagnolo super record 12 speed': 4148, // Campagnolo 4001, Super Record (1st Generation) — Team Professional
    'huret jubilee 10 speed': 4303,
    'huret challenger 10 speed': 4273, // Huret Challenger 2400 / 2440 / 2448 / 2454
    'huret challenger deluxe 10 speed': 4273,
    // 1977 Raleigh (US).
    'campagnolo gran sport alloy': [{ from: 1974, to: 1985, id: 4085 }], // Competition GS: Campagnolo 3500, Nuovo Gran Sport
    'sun tour cyclone alloy rear': 4735, // Super Course: SunTour 5902 / RD-1700, Cyclone (1975-82)
    'challenger derailleur 10 speed': 4273, // Record 24: Huret Challenger 2400 series
    // 1974 Motobecane.
    'huret jubilee': 4303,
    // Shifter halves now live in the Shifters column (compound-cell split).
    // Plain "V.G.T." in the 1974 catalogue alongside a "V.G.T. LUX": the
    // pre-Luxe 4900 VGT (SunTour '73 Products), not the 1974 4902.
    'sun tour vgt': 4695, // SunTour 4900, VGT (type 2C / 2D)
    'sun tour vgt lux': 4704, // SunTour 4902, V-GT Luxe (version 1)
    // 1975 Motobecane.
    'huret jubilee wide ratio': 4303,
    'huret challenger': 4273, // Huret Challenger 2400 / 2440 / 2448 / 2454 (1975 Motobecane; pinned after 1975 catalogue retitle)
    'sun tour vgt luxe': 4704,
    // 1981 Kalkhoff. "600 AX" otherwise substring-matches plain "Shimano 600".
    'campagnolo super record': [{ to: 1979, id: 4148 }, { from: 1980, to: 1983, id: 4149 }, { from: 1984, id: 4152 }], // 4001 1st gen (1974-79; 1979 Colnago); PAT. 80 for 1981 Kalkhoff; 4001 2nd gen ver. 2 (1984-87) for 1986 Cinelli
    'dura ace ex': 4509, // Shimano RD-7200, Dura-Ace EX
    'shimano 600 ax': 4465, // Shimano RD-6300, 600 AX
    // 1983 Bianchi (3500 Nuovo Gran Sport); 1973 Bianchi Special -> the
    // 1012/4 Gran Sport, which the DB dates to 1973.
    'campagnolo gran sport': [{ to: 1977, id: 4118 }, { from: 1978, id: 4085 }], // 1012/4 Gran Sport / 3500 Nuovo Gran Sport
    // 1973 Bianchi junior Rekord.
    'campagnolo valentino': 4162, // Campagnolo 2170, Valentino Extra (1968-85); the unnumbered velobase 4079 "Nuovo Valentino" was merged into it
    // 1987 Bianchi.
    'campagnolo new victory': 4169, // Campagnolo Victory S3
    'shimano 105 sis': 4449, // Shimano RD-1050, 105
    'shimano dura ace sis 7': 4504, // Shimano RD-7401, Dura-Ace (6/7sp)
    'shimano 525 sis': 4519, // Shimano RD-L525, Light Action
    'shimano 532 sis': 4521, // Shimano RD-L532, Light Action
    // 1993 Bianchi.
    'campagnolo record 8 speed ergopower': 4134, // Campagnolo RD-01RE, Record
    'campagnolo chorus 8 speed ergopower': 4109, // Campagnolo RD-01CH, Chorus
    'campagnolo chorus 8 speed downtube shift levers': 4109,
    'campagnolo veloce': 4164, // Campagnolo RD-01VL, Veloce
    'shimano dura ace sti': 4505, // Shimano RD-7402, Dura-Ace (8sp)
    'shimano ultegra sti': 4467, // Shimano RD-6401, 600 Ultegra
    'shimano 105 sti': 4455, // Shimano RD-1055, 105SC
    'shimano rx100 gs sis': 4533, // Shimano RD-A551-GS, RX100
    'shimano xtr': 4542, // Shimano RD-M900, XTR M900
    'shimano xtr top pull dual sis': 4542,
    'shimano deore dx top pull dual sis': 4480, // Shimano RD-M650, Deore DX (SGS)
    'shimano deore xt top pull dual sis': 4493, // Shimano RD-M735 SGS, Deore XT
    'shimano deore lx top pull dual sis': 4484, // Shimano RD-M550 SGS, Deore LX
    'suntour xc comp top pull powerflo': 4783, // SunTour RD-XC20-GXB, XC-Comp (GX)
    'suntour fs e top pull': 7951, // SunTour RD-FE00-GXB, FS-E ("Top Pull" describes the front only)
    // 1985 Raleigh (Sheldon Brown scan).
    'shimano model 105': 4452, // Shimano RD-A105, 105 Golden Arrow (1983-86)
    'shimano z503': 4545, // Shimano RD-Z503, Z-Series
    'shimano z503 gs': 4545, // Shimano RD-Z503, Z-Series
    'shimano z505gs': 4546, // Shimano RD-Z505, Z-Series
    'shimano deore xt': [{ to: 1989, id: 4490 }, { from: 1990, to: 1993, id: 4493 }], // RD-M700 (Version 2, 1985-86) / 1990 Bianchi: RD-M735-SGS
    'suntour cyclone mkiii': 4739, // SunTour RD-6000, Cyclone (S), No. 62 (Dec 1984)
    'suntour superbe pro': [{ to: 1983, id: 4766 }, { from: 1984, id: 4768 }], // 1979-83 row keeps the 1983 Bianchi pick; friction row 1983-86 for 1985 Raleigh
    // 1985 Raleigh Grand Prix: short-cage RD-4300. 1985 Bianchi Randonneur 700 runs a 50/45/34 triple with a 14-28 block, so the long-cage GT.
    'suntour arx': [{ bike: 'Randonneur 700', from: 1985, to: 1985, id: 4729 }, { id: 4727 }], // SunTour RD-4500 ARX (GT) / RD-4300 ARX
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': [{ to: 1986, id: 4168 }, { from: 1987, id: 4169 }], // G010-SM, Victory (1984-86) / Victory S3 (1987-88; 1988 Bianchi Giro)
    'campagnolo record corsa': 4096, // 0102050, C-Record first generation (1985-86)
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo velox': 4167, // 2250 Velox (1971-75)
    'campagnolo velox rear': 4167, // 1973 Falcon Olympic 78 (5-speed, no front mech)
    // 1979 Peugeot (French catalogue).
    'simplex slj 5500 cp': 7309, // Simplex SLJ5500 CP (1979-84)
    'simplex sx 410 t': 4621, // Simplex SX410 T (1977-85)
    'simplex sx 410 tsp': 4621, // TSP variant not in DB; SX410 T is the same gear
    'simplex 410 tsp': 4621, // as above (PK 60 wording)
    'simplex sx 100 t': 4657, // Simplex SX100 T (1975-80)
    'shimano deore sis': [{ from: 1987, to: 1989, id: 4487 }], // 1987 Colnago Master Mountain Bike: RD-MT60, Deore
  },
  Hubs: {
    'sun tour road vx large flange qr 36 hole': 8263, // 1980 Raleigh: SunTour RH-2500, VX (large flange) (SunTour linking pass 2026-10-30)
    'sun tour superbe small flange qr 36 hole': 8262, // 1980 Raleigh: SunTour RH-1000, Superbe (small flange)
    'shimano 6400': [{ from: 1987, to: 1991, id: 3534 }], // 1987 Peugeot (FR) Puymorens: FH-6400 / HB-6400-F, 600 Ultegra
    'shimano 5000': 3580, // 1987 Peugeot (FR) Santé: FH-5000 / HB-5000
    'shimano new 600 ex': 7551, // 1986 Peugeot (FR) table PG 10 SH: HB-6207F / HB-6207R (freewheel hubs; Helicomatic block)
    'shimano new 600 ex; quick release': 7551, // 1986 Peugeot (FR) table PX 10 SH
    // 1982 Battaglin: Gipiemme Pista Special hub = Special Pista (1985 row; the 1982 sheet is earlier).
    'gipiemme pista special': [{ from: 1982, to: 1988, id: 3351 }],
    'luxe competition': 3389, // 1982 Peugeot PSV 10 S / PF 10 S: Maillard Normandy Luxe Competition (red label, low flange, 1970-80); flange and label not stated
    'dura ace ex': 3571, // 1981 Kalkhoff Professional 11 S: Dura-Ace EX FH-7261 (small flange, 6-speed, 1981-82); gearing not checked
    'sturmey archer 3 speed': null, // 1973 Falcon Super Tourist 82 / 83: brand + speed count; the hit is the bare 1950 Sturmey Archer row 3593
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    // "flange normali" is the low-flange 1034, not the high-flange bare 'campagnolo record' pick.
    'campagnolo record strada normal flange 32 hole': [{ from: 1960, to: 1988, id: 3259 }], // Super-Leggera
    'campagnolo record normal flange 32 hole': [{ from: 1960, to: 1988, id: 3259 }], // Barcellona
    // 1980 Peugeot (NL) PBN / PFN / PKN 10: flange not stated; the photos show small flange hubs on
    // the racing range, so the 1979 small flange Q/R row (a judgement)
    'maillard normandy dural simplex sx quick release': 8137,
    'maillard normandy competition dural ground cones simplex sx quick release': 3389, // PVN 10: Luxe Competition (red label), as 1974
    'large flange quick release': null, // 1974 Falcon: bare "Large flange quick release" substring-matched the SunShine Regular 73-5 row (8986), a different maker; the DB never had that link
    'maillard 700 special forged light alloy quick release': [{ from: 1970, to: 1980, id: 3393 }], // 1975 Peugeot P 10: Maillard 700 Professional, large flange
    'high flange maillard 700 dural quick release (simplex or maillard)': [{ from: 1970, to: 1980, id: 3393 }],
    'normal flange maillard 700 forged dural quick release (simplex or maillard)': [{ from: 1970, to: 1980, id: 3394 }], // 1977 Peugeot (DE): normal = low flange
    'high flange maillard normandy sport dural quick release (simplex or maillard)': [{ from: 1970, to: 1980, id: 3390 }], // 1977 Peugeot (DE): Normandy Sport (high flange)
    'high flange maillard normandy dural quick release (simplex or maillard)': [{ from: 1960, to: 1980, id: 3391 }],
    'normandy competition high flange simplex quick release': [{ from: 1970, to: 1980, id: 3384 }], // 1978 Peugeot (NL): Luxe Competition (red label, high flange); the row has no years
    // 1978 Peugeot (NL): Maillard 700 Professional (1970-80), flange wording as the catalogue.
    'maillard 700 dural high flange simplex quick release': [{ from: 1970, to: 1980, id: 3393 }], // PX 10 LE: large (high) flange
    'maillard 700 dural low flange simplex quick release': [{ from: 1970, to: 1980, id: 3394 }], // PY 10 EC / PY 10 CP: low flange
    // 1985-86 Raleigh (US) Sansin hubs, from the Sansin Catalog No. 11 (Dec 1987), rows 9000-9013.
    'sansin re 50 qr large flange sealed 36 hole front 40 hole rear': [{ from: 1985, to: 1985, id: 9002 }], // 1985 Kodiak: Sansin RE-50 (the catalogue lists 32 / 36h only; the 40h rear is Raleigh's)
    'sansin re 50 large flange alloy qr sealed 36 hole front 40 hole rear': [{ from: 1985, to: 1985, id: 9002 }], // 1985 Alyeska
    'sansin re 50 lf w qr 36° sealed rear: 40°': [{ from: 1986, to: 1986, id: 9002 }], // 1986 Kodiak
    'sansin "sportif" re 60 small flange alloy sealed qr 36 hole': [{ from: 1985, to: 1985, id: 9003 }], // 1985 Competition: Sansin RE-60 (RE-60S sealed-bearing option)
    'sansin "sportif" re 60 small flange alloy qr 36 hole sealed': [{ from: 1985, to: 1985, id: 9003 }], // 1985 Grand Prix
    'sansin ax 10a 36 hole sealed': [{ from: 1985, to: 1985, id: 9013 }], // 1985 Elkhorn: Sansin AX-10A (large flange, nut type, sealed system)
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105 small flange light alloy qr': [{ from: 1987, to: 1987, id: 3524 }], // Competition: HB-1050 105
    'shimano new 105 qr': [{ from: 1987, to: 1987, id: 3524 }], // Triathlon: HB-1050 105
    'shimano 600ex small flange qr light alloy': [{ from: 1987, to: 1987, id: 3539 }], // Road Ace: FH-6208 / HB-6207-F 600EX SIS freehub (bike has the 600EX cassette)
    // 1986 Raleigh (US) Prestige: only the front hub is named; BH-1500 (1980-85), BH-1600 (1984-85) and the 1988+ HB-SB00 all fit, none dated 1986.
    'suntour superbe pro (front hub)': null,
    // 1973 Peugeot (Dutch catalogue).
    'normandy high flange simplex quick release': [{ from: 1960, to: 1980, id: 3391 }], // Maillard Normandy (high flange, oblong holes)
    'normandy high flange quick release': [{ from: 1960, to: 1980, id: 3391 }], // 1975-76 Peugeot UE 18, as the UO 8 above
    // 1978 Peugeot (NL) PR 65 Lady: plain Normandy Dural high flange (not the Competition the PR 60 has).
    'maillard normandy dural high flange simplex sx quick release': [{ from: 1960, to: 1980, id: 3391 }],
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano dura ace 32h': [{ from: 1990, to: 1996, id: 3562 }], // FH-7403-HG / HB-7400-F
    'shimano ultegra 32h': [{ from: 1990, to: 1992, id: 7565 }], // FH-6401-HG (7sp HG cassette on the Virata)
    'shimano 105 32h': [{ from: 1990, to: 1993, id: 3527 }], // FH-1055-HG / HB-1055-F, 105SC
    'shimano deore xt 32h': [{ from: 1990, to: 1993, id: 3551 }], // FH-M732 / HB-M730-F
    'shimano deore dx 32h': [{ from: 1990, to: 1993, id: 3542 }], // FH-M650 / HB-M650-F
    'shimano deore lx 32h': [{ from: 1990, to: 1992, id: 3544 }], // FH-M550
    'shimano deore lx 36h': [{ from: 1990, to: 1992, id: 3544 }], // FH-M550
    'shimano freehub quick release 36h': [{ from: 1990, to: 1992, id: 3528 }], // FH-HG20, 200GS (Boardwalk)
    'shimano cs hg50 36h': [{ from: 1990, to: 1993, id: 3572 }], // FH-HG50, Exage (catalogue prints the cassette code)
    'suntour xc pro 36h grease guard': [{ from: 1990, to: 1990, id: 3628 }], // XC Pro rear freewheel hub (these bikes have freewheels)
    'suntour xc pro 32h grease guard': [{ from: 1990, to: 1990, id: 3628 }], // XC Pro rear freewheel hub
    'suntour xc comp 36h': [{ from: 1990, to: 1992, id: 7982 }], // FH-XC02-7 freehub (Tangent has a cassette; row dated 1992)
    'campagnolo chorus 36h': [{ from: 1987, to: 1991, id: 3249 }], // 722/101 Chorus freewheel hub (Regina freewheel)
    'campagnolo athena 36h': [{ from: 1988, to: 1991, id: 3236 }], // D300, Athena
    'ofmega pista 36h': [{ from: 1980, to: 1990, id: 3445 }], // Super Competizione Track (high flange), as 1987 Pista
    // 1982 Bianchi US racing brochure (saarf.london).
    'campagnolo record pista': 3270, // Campagnolo 1036, Record Pista (high flange), as the 1983 Super Pista
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'campagnolo record strada 32 holes': 3259, // Campagnolo 1034, Record (Low Flange), as the 1983 Bianchi Nuovo Record hubs
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 600 ax small flange qr': 3532, // Road Ace: Shimano FH-6361, 600 AX
    'shimano 105 small flange alloy qr': 3526, // Corsa: Shimano HB-F105 / HB-R105, 105 Golden Arrow (small flange)
    'maillard competition small flange alloy qr': 8136, // Competition: Maillard Normandy (small flange, de-luxe competition, Q/R), Maillard 1979 catalogue row
    'maillard atom helicomatic qr black': 3387, // Quasar: Maillard Helicomatic (the matcher hit the plain Atom)
    'maillard alloy': null, // Pulsar: generic; the matcher hit a Roval by Maillard rear hub
    // 1978 Raleigh (US, ebykr scan).
    'campagnolo nuovo record small flange qr': 3259, // Professional Mk V: 1034 Record (Low Flange)
    'campagnolo nuovo record small flange qr 36 hole': 3259, // 1980 Professional Mk V, as 1979
    // Gran Sport hubs from the 1970s-80s group: 9212 Gran Sport (1980s), added with La Bicicletta Guida '85/86;
    // until then these used 3256, the 1950-55 1006 row (2026-10-24).
    'campagnolo gran sport small flange qr': 9212, // Competition GS
    'campagnolo gran sport small flange qr 36 hole': 9212, // 1980 Competition GS, as 1979
    'campagnolo gran sport small flange quick release': 9212, // 1981 Raleigh Canada Competition GS
    'atom small flange qr': 3183, // Super Course: Atom (low flange aluminum), as 1977
    'atom small flange light alloy qr 36 hole': 3183, // 1980 Super Course, as 1979
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo nuovo record 36h': 3259, // Centenario: 1034 Record (Low Flange), as the bare Nuovo Record entry
    'campagnolo record 32h': 3260, // Super Leggera: 1035 Record (high flange), as the bare 'campagnolo record' range
    'campagnolo record 36h': 3260, // Campionissimo
    'campagnolo gran sport 36h': 9212, // 1985 Bianchi Squadra: Gran Sport (1980s)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'shimano 600 ax small flange quick release': 3532, // Road Ace: Shimano FH-6361, 600 AX
    'campagnolo nuovo tipo small flange qr': 3230, // Gran Sport: Campagnolo 1251, Nuovo Tipo (small flange)
    'atom small flange alloy quick release': 3183, // Royale / Royal: Atom (low flange aluminum), as 1977 Super Course
    'atom small flange quick release': 3183, // Clubman / Rapide
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'campagnolo nuovo record small flange quick release': 3259, // Team Replica: Campagnolo 1034, Record (Low Flange)
    // 1983 Bianchi. 1251 small flange is the only Nuovo Tipo row in range for 1983.
    'campagnolo tipo': 3230, // Campagnolo 1251, Nuovo Tipo (small flange)
    'shimano 600': [{ from: 1984, to: 1987, id: 7551 }], // 1987 Bianchi: Shimano HB-6207F / HB-6207R, 600EX (freewheel hubs; bike has MF-6208)
    // Ambiguous between "Zeus Gigante road" and "Zeus Gigante Pista"; the
    // 1973 Zeus catalog lists bare "Zeus Gigante" only on road models.
    'zeus gigante': 3651, // Zeus Gigante road
    // The catalog's track hub; the only Zeus pista hub in the DB is the
    // Gigante Pista.
    'zeus pista': 3652, // Zeus Gigante Pista
    // 1973 Raleigh ("wide flange" = high flange).
    'campagnolo record wide flange q r': 3260, // Campagnolo 1035, Record (high flange)
    'campagnolo record wide flange': 3270, // Campagnolo 1036, Record Pista (high flange) — track model
    // 1974 Raleigh says "Large Flange" where 1973 said "Wide Flange".
    'campagnolo record large flange q r': 3260, // Campagnolo 1035, Record (high flange)
    // Red label, high flange: the gold-label row ends 1970 and 3389 is the low-flange red label (version-range check 2026-10-26).
    'normandy competition large flange q r alloy': 3384, // Maillard Normandy Luxe Competition (red label, high flange)
    'normandy sport large flange q r alloy': 3390, // Normandy Sport (high flange, oblong holes)
    'normandy luxe q r competition wide flange': 3384, // Maillard Normandy Luxe Competition (red label, high flange)
    'normandy sport q r wide flange alloy': 3390, // Normandy Sport (high flange, oblong holes)
    'normandy sport alloy wide flange q r': 3390,
    // 1975 Raleigh. Gran Sport's bare "Normandy Large Flange Q/R Alloy" left
    // unlinked (Sport vs Luxe Competition; 1974 Gran Sport had Competition).
    'campagnolo record pista large flange': 3270, // Campagnolo 1036, Record Pista (high flange) — Professional Track
    'campagnolo record strada large flange q r': 3260, // Campagnolo 1035, Record (high flange)
    'normandy competition large flange alloy q r': 3384, // Maillard Normandy Luxe Competition (red label, high flange), as 1974
    // 1977 Raleigh (US). Professional Mk V's bare "Campagnolo Record quick
    // release" left unlinked (high vs low flange not stated).
    'campagnolo nuovo tipo small flange quick release': 3230, // Competition GS: Campagnolo 1251, Nuovo Tipo (small flange)
    'atom small flanged forged light alloy quick release': 3183, // Super Course: Atom (low flange aluminum)
    'normandy sport forged large flange light alloy quick release': 3390, // Grand Prix: Normandy Sport (high flange)
    'normandy sport forged large flange light alloy': 3390, // Record Limited
    // 1974 Motobecane. Bare "Normandy Luxe Competition" is ambiguous between
    // the gold- and red-label rows; the road bikes took the high-flange gold.
    // 1982 Peugeot PFN 10 S: the red label (3389, 1970-80) is the later hub.
    'normandy luxe competition': [{ to: 1979, id: 3388 }, { from: 1980, id: 3389 }],
    'normandy sport with quick release': 3390,
    'campagnolo record': [{ to: 1987, id: 3260 }, { from: 1990, id: 3265 }], // 1035 high flange (to 1987, covers 1986 Cinelli) / Record 8sp
    // Same text on a track bike (1974 Raleigh Professional Track, no Q/R ->
    // 1036 Record Pista) and a road bike (1975 Motobecane -> 1035). The only two
    // catalogs using it, so the year split is exact.
    'campagnolo record large flange': [{ to: 1974, id: 3270 }, { from: 1975, id: 3260 }],
    'campagnolo record low flange': 3259, // Campagnolo 1034, Record (Low Flange)
    // 1981 Kalkhoff.
    'shimano 600 ax': 3532, // Shimano FH-6361, 600 AX
    // 1983 Bianchi. Bare "Nuovo Record" substring-hits an oddly titled
    // "(low flange, non-drilled, disk?)" row; the NR hubs are the 1034/1035.
    'campagnolo nuovo record': 3259, // Campagnolo 1034, Record (Low Flange)
    'campagnolo gran sport': [{ to: 1960, id: 3256 }, { from: 1970, id: 9212 }], // 1006 Gran Sport (1950-55) / Gran Sport (1980s)
    'campagnolo record pista (32 spoke tied soldered)': 3270, // Campagnolo 1036, Record Pista (high flange)
    'gipiemme pista': 3351, // Gipiemme Special Pista
    // 1987 Bianchi. "Shimano 105" otherwise hits the 1985-86 Golden Arrow;
    // N105 is the 1050 series.
    'campagnolo c record': 3241, // Campagnolo 322/101, C-Record
    'campagnolo new victory': 3281, // Campagnolo Victory 422 (low flange)
    'shimano dura ace': [{ from: 1984, to: 1989, id: 3560 }, { from: 1990, id: 3562 }], // HB-7400-R/F freewheel hub / FH-7403-HG Hyperglide
    'shimano 105': [{ to: 1989, id: 3524 }, { from: 1990, id: 3527 }], // HB-1050 / FH-1055-HG 105SC
    'ofmega competizione pista': 3445, // Ofmega Super Competizione Track (high flange)
    // 1993 Bianchi (spoke counts stripped from the CSV).
    'campagnolo chorus': [{ from: 1987, to: 1987, id: 3249 }, { id: 3250 }], // Campagnolo FH-00CH / HB-00CH, Chorus; 1987 Peugeot (FR) Chorus: 722/101 (1987-91)
    'campagnolo veloce': 3279, // Campagnolo HB-00VL / HF-00VL, Veloce
    'shimano ultegra': [{ to: 1991, id: 3534 }, { from: 1992, id: 3535 }], // FH-6400-6/7 / FH-6402-HG 8-speed, 600 Ultegra
    'shimano rx100': 3579, // Shimano FH-A550 / HB-A550-F, RX100
    'shimano xtr': 3581, // Shimano FH-M900, XTR M900
    'shimano dx': 3542, // Shimano FH-M650 / HB-M650-F, Deore DX
    'shimano xt': 3552, // Shimano FH-M737, Deore XT M737
    'shimano lx': 3544, // Shimano FH-M550, Deore LX
    alloy: null, // generic word; substring-hits "Roval by Maillard alloy rear hub"
    // 1985 Raleigh (Sheldon Brown scan).
    'sansin "gyro" precision sealed bearing alloy small flange qr': 3601, // Sunshine Gyro-Master
    'shimano 105 small flange alloy qr 36 hole sealed': 3526, // Shimano HB-F105 / HB-R105, 105 Golden Arrow (small flange)
    // 1986 Cinelli (Ten Speed Drive Imports).
    'campagnolo record sf': 3241, // 322/101 C-Record small flange, fitted with the 1986 Record Corsa group
    'campagnolo victory sf': 3281, // Victory 422 (low flange)
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo quick release': [{ to: 1985, id: 3260 }], // 1035 Record high flange, matches the Hubs "campagnolo record" range
    'campagnolo single sided track': 3270, // 1036 Record Pista (high flange)
    // 1974 Peugeot (Dutch catalogue): PA 60 / PX 60 "Normandy Luxe Competition met uitvalassen".
    'normandy luxe competition quick release': 3389, // Normandy Luxe Competition (red label, low flange) 1970-80; the gold-label row ends 1970
    // 1979 Peugeot (French catalogue).
    'spidel 700 small flange quick release': 3591, // Spidel/Maillard 700
    'normandy quick release': 3389, // Normandy Luxe Competition (red label, low flange) 1970-80
    'normandy dural small flange quick release': 3389, // Normandy Luxe Competition low flange
    'normandy dural quick release': 3389, // Normandy Luxe Competition low flange
    'maillard dural large flange quick release': 3391, // Maillard Normandy (high flange, oblong holes) 1960-80
    'maillard large flange quick release': 3391, // Maillard Normandy high flange
    'maillard large flange': 3391, // Maillard Normandy high flange
  },
  'Geared Hubs': {
    // 1971 Peugeot (Dutch-market catalogue).
    'fichtel & sachs 3 speed': [{ from: 1962, to: 1984, id: 2694 }], // F&S 415 (PE 40 / PE 45; caliper-braked, so not the 515 coaster)
    'fichtel & sachs torpedo duomatic': [{ from: 1964, to: 1973, id: 2700 }], // Torpedo Duomatic Model 102 & 101 (DA / RA 40 E)
  },
  Brakes: {
    'shimano at 50 cantilever front and rear': 1003, // 1987 Peugeot (US): Shimano BR-AT50, Exage Trail (Shimano exact-model links 2026-10-30)
    'mafac special tandem cantilevers front and rear maillard 80 mm rear drum': 845, // 1982 Peugeot TH 8 / TM 8: MAFAC Cyclo-Tandem (// linkCoverage pass 2026-10-30)
    'mafac "special cyclo tandem" cantilevers front and rear maillard rear drum brake': 845, // 1980 Peugeot TH 8 / TM 8
    'modelo speedy black side pull': 886, // 1987 Peugeot (US) Mont Cenis: Modolo Speedy (misprinted Modelo; black is a finish)
    'shimano at50 cantilever': 1003, // 1986 Raleigh Elkhorn: Shimano BR-AT50, Exage Trail
    'weinmann 570': 1129, // 1987 Peugeot (FR) table: Weinmann AG 570
    'weinmann 570 side pull': 1129, // 1987 Peugeot (FR) table
    'weinmann 570 white': 1129, // 1987 Peugeot (FR) table
    'shimano br 105': 953, // 1987 Peugeot (FR) Aspin: BR-1050-49, as the US Galaxie
    'shimano 6400': [{ from: 1987, to: 1990, id: 966 }], // 1987 Peugeot (FR) Puymorens: BR-6400, 600 Ultegra
    'shimano linear system br 1050': 953, // 1987 Peugeot (US) Galaxie / Comete: BR-1050-49 short reach (700c racers), as the 1986 BR-6207 pick
    'weinmann 570 alloy side pull': 1129, // 1987 Peugeot (US) Mont Cenis: Weinmann AG 570
    'weinmann 570 primo': 1129, // 1987 Peugeot (US) PX 10: Weinmann AG 570
    'weinmann 610 alloy center pull qr double levers': 1136, // 1986 Peugeot (US) Avoriaz: Weinmann AG 610 Vainqueur 999
    'weinmann 500 alloy side pull with qr': 1125, // 1986 Peugeot (US) Tourmalet: Weinmann AG 500 (hex socket, quick release)
    'shimano br 6207': 970, // 1986 Peugeot (FR) table PG / PX 10 SH: BR-6207-49, the short-reach road caliper
    'weinmann 506 alloy side pull': 7764, // 1986 Peugeot (US) table Ventoux: Weinmann AG 506
    'weinmann 405 alloy side pull with racing levers': 1117, // 1986 Peugeot (US) PGN 10 Galibier: Weinmann AG 405 caliper (491 is the lever)
    'weinmann 405 side pull': 1117, // 1985 Peugeot PGN 10 M: Weinmann AG 405 caliper
    // 1987 Colnago Junior SIS 600 (Catalogo generale 1987).
    'shimano 600 sis': [{ bike: 'Junior SIS 600', from: 1987, to: 1987, id: 972 }], // BR-6208, 600EX (1986-87)
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    'shimano santé': [{ from: 1988, to: 1989, id: 1008 }], // BR-5000
    "campagnolo croce d'aune": [{ from: 1988, to: 1991, id: 567 }], // Delta, Croce d'Aune
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'campagnolo super record short reach with special bianchi lightening': [{ from: 1975, to: 1985, id: 7005 }], // "bassi": 4061/1 short reach
    'universal competizione 77': [{ from: 1977, to: 1988, id: 1083 }], // Rekord/748: Universal Mod. 77
    'universal competizione cx': [{ from: 1970, to: 1985, id: 1086 }], // Campione del Mondo CX: Universal CX
    'spidel lsx': 823, // 1982 Peugeot PRO 10 / PY 10 S: MAFAC LSX (1982), Spidel-badged
    'spidel lsx professional': 823,
    'weinmann 506 alloy side pull quick release': 7764, // 1983 Peugeot (CA) PH 9: Weinmann AG 506 (1979-83)
    'weinmann 605 quick release': 8642, // 1983 Peugeot (CA) PK 12
    'weinmann 500': 8636, // 1982 Peugeot: Weinmann AG 500 base row (1963-84); the 1980 variants differ by bolt colour, not stated
    'weinmann 500 side pull forged dural': 8636,
    'weinmann 605': 8642, // 1982 Peugeot PX 10 S / PSV 10 S: Weinmann AG 605 (1978-84)
    'weinmann carrera 400': 1168, // 1982 Peugeot PX 10 DU: Weinmann AG Carrera 400 (1980-83)
    'spidel ls2 side pull': 834, // 1980 Peugeot PRO 10 / PY 10 S / PY 10 LC: MAFAC LS2 (1979); Spidel brakes were Mafac-made
    'weinmann 605 side pull with quick release and centring bolt': 8642, // 1980 Peugeot (NL) PVN 10 (text says "Mafac 605"; photo is Weinmann)
    'weinmann 506 side pull with quick release and centring bolt': 7764, // Weinmann AG 506
    'mafac competition centre pull anodised': 825, // MAFAC Competition (later version)
    'mafac competition': [{ from: 1971, to: 1982, id: 825 }], // 1975 Peugeot P 10: bare Competition, later version (the 1970 early row is 827)
    'mafac competition peugeot special with course gt levers (silver anodised)': [{ from: 1971, to: 1982, id: 825 }],
    'mafac competition with course gt levers (black hand guard)': [{ from: 1971, to: 1982, id: 825 }],
    'mafac competition with course 2000 levers': [{ from: 1971, to: 1982, id: 825 }],
    'mafac racer with course levers': [{ from: 1970, to: 1982, id: 838 }], // 1977 Peugeot (DE): MAFAC Racer (1970-82), as the other bare Mafac Racer picks
    'mafac 2000 anodised': [{ from: 1976, to: 1976, id: 836 }], // 1976 PY 10: MAFAC 2000 later version (1970-79; 835 and 837 are 1970-only variants)
    'new altenburger alloy center pull': 510, // 1973 Raleigh Record: Altenburger Centrepull (generic; 513 Concorde is a named model the text doesn't give)
    'altenburger synchron': [{ from: 1970, to: 1976, id: 511 }], // 1970-76 Peugeot (Dutch / French wholesale) P 8 E / P 10: Altenburger Synchron (512, the other logo variant, merged into 511 on 2026-10-26) match (a judgement)
    // Same part as an already-linked sibling, with a qualifier only (2026-10-20 near-match audit).
    'shimano deore xt cantilever with gumhoods': [{ from: 1983, to: 1986, id: 980 }], // 1986 Raleigh Portage; as "Shimano Deore XT, cantilever" (BR-MC70)
    'dia compe dc630n alloy': [{ from: 1986, id: 8083 }], // 1986 Raleigh Sportif; as the 1985 "DC630N alloy S.P." pick
    'dia compe dc 630n alloy': [{ from: 1986, id: 8083 }], // 1986 Raleigh Pursuit (levers DC 630/165 and /135 are separate)
    'dia compe 630n alloy': [{ from: 1986, id: 8083 }], // 1986 Raleigh Record
    'mafac racer professional': [{ from: 1970, to: 1982, id: 838 }], // 1973 Peugeot PX 10; as bare "Mafac Racer" (lettered MAFAC RACER, 1970-82, the only period Racer row)
    'mafac racer forged': [{ from: 1970, to: 1982, id: 838 }], // 1974 Peugeot PX 60
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano 600ex qr; recessed fitting calipers and hooded alloy levers': [{ from: 1987, to: 1987, id: 972 }], // Road Ace: BR-6208 600EX (1986-87)
    'calipers : shimano new 105 type 57 long bolt': [{ from: 1987, to: 1987, id: 954 }], // Triathlon: BR-1050-57 105 (long, 57 type)
    // 1970 Peugeot (Dutch-market catalogue).
    'mafac racer': [{ from: 1970, to: 1982, id: 838 }], // MAFAC Racer (lettered MAFAC RACER); ranges to 1982 with the rows (c. 1982 MAFAC catalogue, source 299)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'campagnolo athena': [{ from: 1988, to: 1992, id: 558 }], // D500, Athena
    'shimano ultegra linear response': [{ from: 1988, to: 1990, id: 966 }], // BR-6400, 600 Ultegra
    'shimano 105 super linear response': [{ from: 1990, to: 1993, id: 960 }], // BR-1055-49, 105SC (dual pivot)
    'shimano exage 400ex linear response': [{ from: 1989, to: 1992, id: 1000 }], // BR-A350, Exage Action / 400EX
    'shimano deore xt linear response': [{ from: 1989, to: 1991, id: 983 }], // BR-M732 cantilever
    'shimano deore dx linear response': [{ from: 1989, to: 1991, id: 975 }], // BR-MT62, Deore II / DX
    'shimano deore lx linear response': [{ from: 1990, to: 1991, id: 7582 }], // BR-M550 cantilever
    'shimano m200gs linear response': [{ from: 1990, to: 1992, id: 7598 }], // BR-M200 cantilever
    'suntour xc pro balance response system': [{ from: 1990, to: 1992, id: 1056 }], // CT-XP00 cantilever
    'suntour xct balance response system': [{ from: 1990, to: 1992, id: 8038 }], // CT-XT01 (Dia-Compe; row dated 1992)
    'dia compe x 1 balance response system': [{ from: 1990, to: 1992, id: 8032 }], // SunTour CT-X101, X-1 (Dia-Compe; row dated 1992)
    'dia compe 986 balance response system': [{ from: 1980, to: 1990, id: 663 }], // Dia-Compe 986 cantilever
    'dia compe radius balance response system': [{ from: 1980, to: 1992, id: 1040 }], // SunTour BA-RA01-S, Radius (Dia-Compe)
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'shimano 600 ultegra': 966, // Shimano BR-6400, 600 Ultegra
    // 1982 Bianchi US racing brochure (saarf.london).
    'universal 77': 1083, // Universal Mod. 77
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'universal model 77 with lightened levers': 1083, // Universal Mod. 77
    'universal art 125': 1075, // Universal Mod. 125
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'weinmann 405 qr recessed fitting calipers and hooded levers': 1117, // Competition: Weinmann AG 405, as 1983
    'shimano 105 qr recessed fitting calipers & hooded alloy levers': 958, // Corsa: Shimano BR-S105, 105 Golden Arrow (1983-85)
    'shimano 600 ax recessed fitting calipers and hooded levers': 965, // Road Ace: Shimano BR-6300, 600 AX Parapull
    // 1989 De Rosa 35° Anniversario ("Record-C Delta").
    'campagnolo c record delta': 560, // Campagnolo Delta C-Record (1986-93)
    // c. 1984 De Rosa (ebykr scan).
    // C-Record groups shipped with Super Record brakes until the Delta arrived (Cat. 18 bis, Dec 1986: "not yet
    // available"; first shown in the Nov 1987 Record brochure), so pre-1988 catalogues get the 4061 Super Record
    // v2 of the time and 1988+ the Delta. Decided 2026-10-28 (was an explicit null).
    'campagnolo c record': [{ to: 1987, id: 583 }, { from: 1988, to: 1993, id: 560 }], // c. 1984 De Rosa; 1988 Colnago
    // 1978 Raleigh (US, ebykr scan).
    'weinmann 605 alloy side pull with wheel guides': 8642, // Competition GS: Weinmann AG 605 (lettering variants merged into 8642 on 2026-10-26)
    'raleigh weinmann short reach alloy center pull': 1138, // Super Course: Weinmann AG Raleigh 610, the short-reach Raleigh centre-pull the 1977 Super Course names as 610
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo nuovo record bianchi engraved': [{ from: 1978, id: 572 }], // Centenario: 2040 Record post-CPSC, as the plain Nuovo Record range
    'campagnolo super record bianchi engraved': 583, // Super Leggera: 4061 v2 (1983-87)
    'modolo flash': 874, // Speciale-II: Modolo Flash (1st version, 1979-88), as 1984 Bianchi
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo gran sport': [{ to: 1980, id: 553 }, { from: 1981, id: 554 }], // first gen for the group's first years (Export); second gen as the 1983 Raleigh 'gran sport brakes' entry
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': [{ to: 1987, id: 583 }], // 1986-87 Colnago: the Super Record brakes the group shipped with, as 'campagnolo c record'
    'campagnolo super record 30nnale': 583, // 4061 v2
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'shimano 600 ax with recessed bolts': 965, // Road Ace: Shimano BR-6300, 600 AX
    'weinmann 405 alloy side pull quick release recessed bolts': 1117, // Competition: Weinmann AG 405
    'weinmann 610 alloy centre pull quick release levers': 1138, // Royal: Weinmann AG Raleigh 610 (as 1982)
    'weinmann 610 alloy centre pull quick release brake levers': 1138, // Clubman
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'weinmann 610 alloy centre pull with quick release levers': [{ to: 1982, id: 1138 }], // Weinmann AG Raleigh 610 (row dated 1970-80; Raleigh's own 610)
    // 1974 Raleigh (US): the table drops the "999" the 1973 table carried, but the
    // International copy (p. 6) still says "Weinmann 999 center pull quick release".
    'weinmann center pull with lightened q r levers': [{ to: 1975, id: 7929 }], // Weinmann AG Vainqueur 999 (610 / 750)
    'weinmann center pull with q r levers': [{ to: 1975, id: 7929 }],
    'weinmann center pull with extension levers': [{ to: 1975, id: 7929 }],
    'campagnolo record with lightened levers': [{ to: 1977, id: 573 }], // 1974 Raleigh Team Professional: Campagnolo 2040, Record (pre-CPSC)
    // 1970 / 1972 Raleigh (US): the table names the 999 outright, as 1973. Ranged to 1970-72 because the
    // bare 'weinmann 999' is Grand Prix-only wording.
    'weinmann 999 with quick release hand lever': [{ to: 1972, id: 7929 }], // Weinmann AG Vainqueur 999 (610 / 750)
    'weinmann 999 with quick release hand-lever': [{ to: 1972, id: 7929 }],
    'weinmann 999': [{ to: 1972, id: 7929 }],
    // 1975 Raleigh (US): the "999" is back in the table.
    'weinmann 999 centerpull with lightened q r levers': [{ to: 1976, id: 7929 }], // Weinmann AG Vainqueur 999 (610 / 750)
    'weinmann 999 centerpull with q r levers': [{ to: 1976, id: 7929 }],
    'weinmann 999 centerpull with extension levers': [{ to: 1976, id: 7929 }],
    'campagnolo super record with lightened levers': 582, // 1975 Team Professional: Campagnolo 4061, Super Record v1 (1974-82)
    // 1977 Raleigh (US). Grand Prix / Record Limited "Raleigh/Weinmann forged
    // alloy centerpull" name no model, left unlinked.
    'campagnolo record side pull': [{ to: 1978, id: 573 }], // Professional Mk V: Campagnolo 2040, Record (pre-CPSC)
    'campagnolo record short reach': [{ from: 1979, to: 1979, id: 575 }], // 1979 Raleigh Professional Mk V: Campagnolo 2040/1 Record short reach, post-CPSC row (1978-87)
    'campagnolo record short reach 47mm': [{ from: 1980, to: 1980, id: 575 }], // 1980 Raleigh Professional Mk V: 2040/1 short reach, as 1979
    'campagnolo record with campagnolo levers': [{ from: 1981, to: 1981, id: 575 }], // 1981 Raleigh Canada Professional: 2040/1 short reach post-CPSC row (1978-87); reach unstated
    'weinmann carrera sidepull with wheel guides': 1167, // Competition GS: Weinmann AG Carrera (earlier, 1970-80)
    'raleigh weinmann 610 centerpull with lightened quick release levers': 1138, // Super Course: Weinmann AG Raleigh 610
    // 1993 Bianchi. Part-number retitle broke the bare-name substring hit; keeps the existing link.
    'campagnolo veloce': 587, // Campagnolo BR-02VL, Veloce Monoplaner
    'shimano deore xt alloy cantilever': 980, // 1985 Raleigh: Shimano BR-MC70, Deore XT M700 (1983-86, first-gen XT)
    // 1974 Motobecane. 1122 is the only Weinmann 500 variant dated before 1980.
    'weinmann 500 side pull': [{ from: 1987, to: 1987, id: null }, { id: 1122 }], // Weinmann AG 500 (earlier, red center bolt washer, cap nut); 1987 Peugeot (FR) table: not that 1970 variant, nothing to choose on
    // Weinmann UK leaflet c. 1970: model-level Vainqueur 999 (610 / 750) row, 1970-75 (1973-75 bikes).
    // The 999 was Weinmann's only centre-pull then, so bare "Weinmann centre pull" links too (user decision 4A).
    // "999 De LUXE or UNIVERSAL 61" left unlinked (two makes).
    'weinmann 999 with q r feature light levers': 7929, // Weinmann AG Vainqueur 999 (610 / 750)
    'weinmann 999 with black lever hoods': 7929,
    'weinmann 999 short reach centre pull': 7929,
    'weinmann 999 centre pull': 7929,
    'weinmann 999 center pull quick release extension levers': 7929,
    'weinmann 999 de luxe center pull quick release extension levers': 7929,
    'weinmann 999 de luxe center pull with quick release levers': 7929,
    'weinmann 999 center pull with extension levers': 7929,
    'weinmann 999 center pull with quick release de luxe fitting': 7929,
    // 1974 / 75 Motobecane after the lever halves moved to Brake Levers.
    'weinmann 999 center pull quick release': 7929,
    'weinmann 999 de luxe center pull quick release': 7929,
    'weinmann 999 de luxe center pull': 7929,
    'weinmann 999 center pull': 7929,
    'weinmann centre pull': 7929,
    'weinmann centre pull 999': 7929,
    'weinmann centre pull with hooded levers': 7929,
    'weinmann centre pull with lever 144': 7929, // 1973 Falcon Olympic 78 (lever 144 = the 999 set lever)
    // May 1983 Weinmann catalogue (506 dated 1979-83 from the 1979 Peugeot / 1981 Kalkhoff bikes)
    'weinmann 506 side pull': 7764, // Weinmann AG 506
    'weinmann 506 side pull with safety levers': 7764,
    'weinmann 506': 7764,
    'clb weinmann 506': 7764,
    // 608 CLB Competition is the 1950-70 brake; the 1982-84 Peugeot PH 12 "CLB Competition (aerodynamic)" is the
    // 1980s aero brake, which has no row (drift check 2026-10-28: exact / substring matches linked the wrong era).
    'clb competition': [{ to: 1979, id: 608 }],
    'clb competition aerodynamic': null,
    // 1982-84 Raleigh: the model-level 500 row (Weinmann c. 1971 leaflet); the
    // finish / bolt variant rows can't be told apart from the spec text.
    'weinmann 500 alloy quick release side pull': 8636, // Weinmann AG 500
    'gold anodised weinmann 500 alloy side pull with extension levers and black cutaway hoods': 8636,
    'weinmann 500 alloy side pull quick release recessed bolts': 8636,
    'weinmann 500 alloy with extension levers and black cutaway hoods': 8636,
    'weinmann 500 alloy qr levers': 8636,
    'weinmann 500 alloy shimano adamas levers': 8636,
    'weinmann 500 qr alloy black shimano adamas levers': 8636,
    'weinmann 500 qr calipers with recessed fittings hooded alloy levers': 8636,
    'weinmann 500 qr levers alloy golden': 8636,
    // 1982-84 Raleigh: the model-level 605 row (Weinmann Oct 1981 parts catalog).
    'weinmann 605 alloy quick release side pull': 8642, // Weinmann AG 605
    'weinmann 605 alloy side pull quick release with wheel guides': 8642,
    'weinmann 605 alloy side pull quick release calipers & hooded levers': 8642,
    'shimano at10 m system': 7723, // 1993 Bianchi, from the Jul 1992 manual: Shimano BR-AT10 / BR-AT11, Altus A10
    'shimano ct10 m system': 7735, // Shimano BR-CT10 / BR-CT11, Altus C10
    'shimano ct20 m system': 7742, // Shimano BR-CT20 / BR-CT21, Altus C20
    'shimano deore dx m system': 7660, // Shimano BR-M650 / BR-M650-M, Deore DX
    'shimano exage lt m system': 7717, // Shimano BR-M320 / BR-M321, Exage LT
    // Ambiguous between "Zeus Super Alfa" and "Zeus Super Alfa 71"; the 1973
    // catalog is the later, 71-era version.
    'super alfa': 1181, // Zeus Super Alfa 71
    // Without an override the only substring hit is the 1980s Record O.R.
    // 1973 Raleigh -> pre-CPSC 2040; 1990s (Bianchi 1993) -> BR-14RE dual pivot.
    'campagnolo record': [
      { to: 1977, id: 573 }, // Campagnolo 2040, Record (standard reach, pre-CPSC)
      { from: 1978, to: 1986, id: 572 }, // Campagnolo 2040, Record (standard reach, post-CPSC)
      { from: 1990, id: 578 }, // Campagnolo BR-14RE, Record (dual pivot with group name)
    ],
    // 1974 Motobecane.
    'universal 61 center pull': 1081, // Universal Mod. 61
    // 1975 Motobecane.
    'universal mod 68 side pull racing': 1082, // Universal Super 68
    'mafac racer center pull (1 front 2 rear)': 838, // MAFAC Racer (lettered MAFAC RACER)
    // 1981 Kalkhoff.
    'campagnolo super record': [{ to: 1982, id: 582 }, { from: 1983, id: 583 }], // 4061 v1 to 1982 (Kalkhoff); v2 1983-87 (1986 Cinelli)
    'dura ace ex': 997, // Shimano BR-7200, Dura-Ace EX
    'shimano 600 ax': 965, // Shimano BR-6300, 600 AX
    'weinmann 405': 1117, // Weinmann AG 405
    // 1983 Bianchi.
    'campagnolo nuovo record': [{ from: 1978, id: 572 }], // Campagnolo 2040, Record (standard reach, post-CPSC)
    'campagnolo gran sport brakes': 554, // Campagnolo Gran Sport (second gen)
    // 1984 Bianchi (ambiguous between two Flash versions).
    'modolo flash (anatomic hoods)': 874, // Modolo Flash (1st version)
    // 1987 Bianchi. Bare "Shimano 600"/"Dura-Ace" substring-hit 1970s
    // centre-pulls; the 1987 600 (6207) has no DB row, so it is blocked.
    'campagnolo new victory': 590, // Campagnolo Victory 415/102
    'shimano 105': [{ to: 1989, id: 953 }, { from: 1990, id: 960 }], // BR-1050 / BR-1055 105SC
    // First-gen Dura-Ace brake is the B-210/BA-100 side-pull (Dec 1972 and
    // Dec 1975 catalogues); no Shimano centre-pull is sold as Dura-Ace.
    'shimano dura ace': [{ to: 1983, id: 989 }, { from: 1984, to: 1989, id: 991 }, { from: 1990, to: 1990, id: 992 }, { from: 1991, id: 993 }], // B-210/BA-100 side-pull / BR-7400 / BR-7402-49 (1990 Bianchi Proto; BR-7403 dual pivot starts 1991) / BR-7403-49 dual pivot
    // 1973 Bianchi (Italian catalog). "Corsa Mod. 68" is the Super 68; the
    // Mod. 51 is still fitted to the Rekord 74 despite the DB's 1951-61 dating.
    'universal corsa mod 68': 1082, // Universal Super 68
    'universal mod 51': 1080, // Universal Extra Mod. 51 (Brev 453949)
    'shimano 600': [{ to: 1983, id: 963 }, { from: 1984, to: 1985, id: null }, { from: 1986, to: 1987, id: 972 }, { from: 1988, id: null }], // centre-pull / BR-6208 600EX (1987 Bianchi Limited)
    'shimano at 50 cantilever': [{ from: 1985, id: 1003 }], // Shimano BR-AT50 (1987 Bianchi Volpe); from 1985 for the 1985 Raleigh (row widened 2026-10-30)
    // 1993 Bianchi. Bare "Chorus" substring-hits a 2000s 10-speed row.
    'campagnolo chorus': [{ from: 1987, to: 1999, id: 565 }], // Campagnolo BR-02CH, Chorus Monoplaner (1988-93; from 1988 for the 1988 Bianchi); from 1987 for the 1987 Peugeot (FR) Chorus
    'shimano ultegra': 966, // Shimano BR-6400, 600 Ultegra
    'shimano rx100 aero levers': 1007, // Shimano BR-A550, RX100
    'shimano xtr': 1018, // Shimano BR-M900, XTR M900
    'shimano deore lx m system': 977, // Shimano BR-M560 / BR-M561, Deore LX (M-System)
    'shimano exage es m system': 1002, // Shimano BR-M520 / BR-M521, Exage ES (M-System)
    'dia compe xce cantilevers 287 levers': 703, // Dia-Compe XCE
    'dia compe 987 ss 7 brs': 652, // Dia-Compe 987
    // 1985 Raleigh (Sheldon Brown scan).
    // 1985 Raleigh: the CSV "Brakes" cells were split into caliper (here) and
    // lever (Brake Levers) halves, so the keys carry the caliper only.
    'dia compe agc 300 cold forged alloy': 686, // Dia-Compe Aero Gran Compe (AGC 300 caliper)
    'dia compe ac 500g aerodynamic': 665, // Dia-Compe AC 500 (G)
    'dia compe dc500n alloy sp': 681, // Dia-Compe N500
    'dia compe 500qs cold forged alloy sp': 682, // Dia-Compe N500 (quick release)
    'dia compe qs 500n': 682, // Dia-Compe N500 (quick release)
    'dia compe 960 alloy cantilever': 690, // Dia-Compe Gran Compe GC960
    'dia compe royal gran comp 400': [{ from: 1986, to: 1986, id: 700 }], // 1986 Raleigh Prestige: Dia-Compe RGC400, Royal Gran Compe
    'dia compe dc630n alloy sp': 8083, // Dia-Compe DC630N, N-brakes (1986 catalogue)
    'dia compe qs500n balance response system': 682, // 1987 Bianchi: Dia-Compe QS500N (quick release)
    'shimano deore xt cantilever': 980, // Shimano BR-MC70, Deore XT M700 (1983-86)
    'shimano deore xt alloy cantilever shimano z levers with gum hoods': 980, // Shimano BR-MC70, Deore XT M700 (1983-86)
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 590, // Victory 415/102
    'campagnolo record corsa': null, // Delta not yet shipping in 1986; Record Corsa groups were delivered with Super Record brakes, so no single right row
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo': [{ to: 1977, id: 573 }], // only Record 2040 pre-CPSC existed; 1974 Falcon Model 76
    // 1979 Peugeot (French catalogue).
    'side pull': null, // generic; matcher hit Phillips Side-Pull
    'spidel competition centre pull': 1029, // Spidel (made by Mafac); the Mafac Competition rebadged
    'weinmann 605 side pull': 8642, // Weinmann AG 605 (lettering variants merged into 8642 on 2026-10-26)
    'mafac competition simplified centre pull': 825, // MAFAC Competition (later version)
    'mafac competition centre pull': 825, // MAFAC Competition (later version)
    'mafac racer centre pull': 838, // MAFAC Racer (lettered MAFAC RACER) 1970-80
    'mafac special cyclo tandem cantilever front and rear maillard drum rear': 845, // MAFAC Tandem
    'shimano deore sis': [{ from: 1987, to: 1989, id: 978 }], // 1987 Colnago Master Mountain Bike: BR-MT60 (the MT61 979 is the other Deore cantilever; MT60 as the base model)
  },
  Headsets: {
    'a9 sealed stronglight': 3112, // 1987 Peugeot (US) Galaxie: Stronglight A9, as 'stronglight a9' (// linkCoverage pass 2026-10-30)
    'shimano 6400': [{ from: 1987, to: 1994, id: 3087 }], // 1987 Peugeot (FR) Puymorens: HP-6400
    'stronglight a9h': 3112, // 1987 Peugeot (FR) table: A9 H(eadset), as 'stronglight a9'
    // 1982 Battaglin: Gipiemme Cronospecial headset (the 1985-88 row; the 1982 sheet is earlier) and the Pista Special headset.
    'gipiemme cronospecial': [{ from: 1982, to: 1988, id: 9137 }], // Crono Special
    'gipiemme pista special': [{ from: 1980, to: 1988, id: 3008 }], // Special (Pista)
    'ofmega gran premio': 9160, // 1987 Bianchi Pista: Ofmega 3100, Gran Premio (row dated 1985)
    'spidel d8': 3117, // 1980 Peugeot PRO 10: Stronglight D8 Extra Leger (row dated 1981-83, as the 1979 S7 pick)
    'spidel d 8': 3117, // 1981 Peugeot PRO 10
    'stronglight a9 alloy': 3112, // 1986 Peugeot (US) table: as 'stronglight a9'
    'stronglight a9': 3112, // 1984 Peugeot: Stronglight A9 (France on locknut, 1984-85); the Spidel-locknut 3113 is the Spidel-badged one
    'stronglight b 10': 3114, // 1986 Peugeot (FR) table PGN 10 M / GOLD
    'stronglight a 9': 3112, // 1986 Peugeot (FR) table PY 10 M / PRO 10 / PY 10 FC
    'stronglight b10': 3114, // 1984 Peugeot PSV 10 L / PS 10 L: Stronglight B10 (1984-86)
    'spidel 57': 3123, // 1982 Peugeot PY 10 S: table prints "Spidel 57", read as the S7 (Stronglight S7 Super Competition, 1981-83)
    'stronglight d6 titanium': [{ from: 1977, to: 1980, id: 3116 }], // 1978 Peugeot (NL) PY 10 CP: D6 Extra Leger
    'stronglight v4 competition': [{ from: 1960, to: 1982, id: 3125 }], // 1978 Peugeot (NL) PX 10 LE: V4 later version
    'stronglight d 6 titanium': [{ from: 1977, to: 1977, id: 3116 }], // 1977 Peugeot (DE) PY 10/CP: D6 Extra Leger (1977-80)
    'tange cma60': [{ from: 1983, to: 1987, id: 3144 }], // 1983-87 Raleigh: Tange MA-60 (undated); a judgement by the user 2026-10-20, CMA60 taken as the MA-60 headset
    'tange cma 60': [{ from: 1983, to: 1987, id: 3144 }],
    // Same part as an already-linked sibling, with a qualifier only (2026-10-20 near-match audit).
    'tange mtb 225 fully sealed': 3154, // 1987 Raleigh Maverick 18 Pro; as "Tange MTB 225" on the Randonneur 18
    'tange fl 225 sealed headset': 3154, // 1985 Raleigh Crested Butte: FL-225 read as the MTB-225 Levin, as 1987
    // Judgement calls 2026-10-30: the sealed Levin on the same Raleigh MTB / ATB-touring range (LV-11 is the loose-ball road Levin).
    'tange levin sealed': [{ from: 1985, to: 1987, id: 3154 }], // 1986 Raleigh Crested Butte / Portage
    'tange sealed headset': [{ from: 1985, to: 1987, id: 3154 }], // 1985 Raleigh Portage
    // 1981 Kalkhoff Amateur / 1983-84 Raleigh Competition 12: Tange Seiki LV-11, Levin (1980-2000).
    'tange new levin': [{ from: 1980, to: 2000, id: 3152 }],
    'tange nl': [{ from: 1980, to: 2000, id: 3152 }],
    'shimano 600 alloy': [{ from: 1983, to: 1987, id: 3090 }], // 1986 Raleigh Prestige / Competition; as the bare 'shimano 600' headset range (HP-6207 600EX)
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105': [{ from: 1987, to: 1987, id: 3083 }], // Competition / Triathlon headset: HP-1050 105
    'shimano 600ex light alloy sealed mechanism': [{ from: 1987, to: 1987, id: 3090 }], // Road Ace: HP-6207 600EX (1983-87)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano deore xt': [{ from: 1990, to: 1993, id: 7579 }], // HP-M735 / M737
    'shimano r500': [{ from: 1990, to: 1993, id: 7569 }], // HP-R500
    'ritchey logic': [{ from: 1990, to: 1992, id: 3078 }], // Ritchey Logic Headset
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'campagnolo record strada': 2963, // Campagnolo 1039, Record Strada
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 600 ex with aero cover': 3090, // Road Ace: Shimano HP-6207, 600EX (1983-87)
    // 1979 Colnago: "sterzo Colnago superleggero" = the alloy Colnago headset; the steel one is the "record" row.
    'colnago superlight': 2981, // Colnago ("super record", alu)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'campagnolo strada': 2963, // Team Replica: Campagnolo 1039, Record Strada
    'tange ma60': 3144, // Record Sprint / Zenith: Tange MA-60
    // 1983 Bianchi. A later Campagnolo pass added the A0D0P (1987-91) row, making bare Record Pista ambiguous.
    'campagnolo record pista': [{ to: 1985, id: 2966 }, { from: 1987, id: 7024 }], // 1040 to 1985; A0D0P from 1987
    'campagnolo veloce': 2970, // 1993 Bianchi: Campagnolo HS-01VL, Veloce (part-number retitle)
    'shimano 600': [{ from: 1983, to: 1987, id: 3090 }], // 1987 Bianchi: Shimano HP-6207, 600EX
    // 1974 Motobecane. Not for the 1984 Peugeot PZ 10, a Super Record build (4041 would be the guess).
    // 1039 Gran Sport / Record (2959) is the 1956-60 row; from 1960 the 1039 is Record Strada (2963).
    campagnolo: [{ bike: 'PZ 10', id: null }, { to: 1959, id: 2959 }, { from: 1960, to: 1985, id: 2963 }],
    'stronglight competition': 3125, // Stronglight V4 Competition (later version, octagonal locknut, 1960-80); was the 1950-60 earlier version until the 1970 Peugeot pass
    // 1981 Kalkhoff (ambiguous with the Super Record Pista row).
    'campagnolo super record': 2968, // Campagnolo 4041, Super Record
    // 1983 Bianchi. Bare "Nuovo Record" substring-hits the Alleggerita
    // variant; the standard NR headset is the 1039.
    'campagnolo nuovo record': [{ to: 1959, id: 2959 }, { from: 1960, to: 1987, id: 2963 }], // 1039 Record Strada from 1960 (1983 Bianchi Tipo Corsa; 1987 Peugeot (FR) Dolomites)
    'campagnolo gran sport': 2951, // Campagnolo 1040/A, Gran Sport
    'gipiemme pista': 3008, // Gipiemme Special (Pista)
    // 1987 Bianchi. Bare "C Record" substring-hits the Century Finish variant.
    'campagnolo c record': 2954, // Campagnolo 304/104, C-Record
    'gipiemme cronosprint': 3007, // Gipiemme Crono Sprint
    'shimano 105': [{ to: 1989, id: 3083 }, { from: 1990, id: 3086 }], // HP-1050 / HP-1055 105SC
    'shimano dura ace': [{ from: 1984, to: 1993, id: 3099 }, { from: 1994, id: 3100 }], // HP-7400 / HP-7410
    // 1993 Bianchi.
    // 1975 Motobecane / later catalogues. Without this the only substring hit is the Record Pista #1040 track headset.
    'campagnolo record': [{ to: 1959, id: 2959 }, { from: 1960, to: 1985, id: 2963 }, { from: 1990, id: 2964 }], // 1039 / 1039 Record Strada / HS-01RE
    'campagnolo chorus': 2956, // Campagnolo 704/101, Chorus
    'shimano ultegra': 3087, // Shimano HP-6400, 600 Ultegra
    'suntour xc comp': 8045, // SunTour HS-ST00-J / -I (XC-Comp headset per the 1992 system chart)
    'tange cd sealed': 3155, // Tange-Seiki Levin CD
    // 1979 Peugeot (French catalogue).
    'spidel s7 competition': 3123, // Stronglight S7 Super Competition; DB dates it 1981-83, catalogue shows it 1979
    // Headset link pass 2026-10-26 (from /linkCoverage).
    'tange cd': 3155, // 1990 Bianchi Alfana / Virata: Tange-Seiki Levin CD, as the 1993 'tange cd sealed'
    'hatta "vesta" sealed steel cp': 3020, // 1986 Raleigh Elkhorn: Hatta Vesta, as the 1990 Bianchi "Hatta Vesta"
    'hatta steel cp sealed': 3020, // 1986 Raleigh Teton / Seneca: same wording as the Elkhorn, no model printed
    'campagnolo sport': [{ from: 1971, to: 1985, id: 2951 }], // 1978 Bianchi Campione del Mondo CX: 1040/A Gran Sport ("sold as the Sport head set")
  },
  'Bottom Brackets': {
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'campagnolo record': [{ from: 1967, to: 1988, id: 30 }], // Super-Leggera: 'movimento Record' -> 1046/a Nuovo Record (Strada)
    // 1973 Zeus. Bare 'Zeus Criterium' row 186 was merged into 188 (Zeus catalogue 102 dedupe, 2026-10-04).
    'zeus criterium (e)': 188, // Zeus Ref.33, Criterium
    // 1981 Kalkhoff. Bare substring hits the titanium 1st-gen row; the
    // period part is the second-gen 4031.
    'campagnolo super record': 43, // Campagnolo 4031, Super Record (Second Gen)
    'dura ace ex 42 53': 136, // Shimano BB-7200, Dura-Ace EX
  },
  Cranksets: {
    'sun tour superbe cotterless 42 52t 170mm': 1988, // 1980 Raleigh: SunTour CW-1000, Superbe (SunTour linking pass 2026-10-30)
    'sun tour vx cotterless 39 52t 170mm': 1995, // 1980 Raleigh: SunTour CW-1500, VX
    'shimano 105 42x52': 1778, // 1987 Peugeot (FR) Aspin: FC-1050
    'shimano 105 biopace 42x52': 1778, // 1987 Peugeot (FR) Galaxie: FC-1050 (Biopace rings)
    'shimano 6400 biopace 42x52': 1789, // 1987 Peugeot (FR) Puymorens: FC-6400-BP
    'shimano fc 5000 biopace 42x52': 1841, // 1987 Peugeot (FR) Santé: FC-5000
    'shimano deore biopace triple chainring 28x38x48': 1809, // 1987 Peugeot (FR) Normandie: FC-MT60, Deore
    'campagnolo triomphe 42x52': 1515, // 1987 Peugeot (FR) Dolomites: 0365 Triomphe
    'shimano fc m730 bio space 28x38x48t shimano sealed bb set with cro moly spindle': 1810, // 1987 Peugeot (US) Cannon Ball Express: FC-M730, Deore XT
    // 1973 Falcon San Remo 76 / 94: bare "Cotterless" (unbranded, left unlinked at load); the 1974 SR Silver Cotterless
    // row 9528 added later would otherwise catch it by substring (drift check 2026-10-28).
    cotterless: null,
    'shimano 600 ex alloy 42 x 52t': 1798, // 1985 Peugeot PX 10 SH: FC-6207, 600EX
    'shimano 600 ex 42 x 52 dural': 1798, // 1986 Peugeot (FR) table PG / PX 10 SH: FC-6207
    'mavic 630 42 x 53': 1641, // 1986 Peugeot (US) table PX: Mavic 630 (narrow font, 1984-89)
    'campagnolo super record 42 x 53t': 1509, // 1986 Peugeot (US) table PZ 10: 1049/A Strada Super Record
    'campagnolo victory 42 x 52': 1516, // 1986 Peugeot (US) table Mont Cenis: 0355 Victory
    // 1984 Raleigh: Sugino DGT is the double GT crank (the triple is the TGT); the Sugino Vol. 56 spread lists DGT among the cranks (row 1937 ends 1982, the model was still listed c. 1982-83).
    'sugino dgt 52 42t steel rings': 1937, // Sugino GT
    'sugino dgt alloy cotterless 50 36t': 1937,
    'sugino dgt alloy cotterless with alloy 50 36t chainwheels': 1937,
    // 1987 Raleigh: TPX is the triple PX (row 1957, "PX (TPX)").
    'sugino tpx 46 36t 26t alloy 170mm cranks with suntour sealed cassette bottom bracket': 1957, // Sugino PX
    // 1987 Colnago Junior 105 / Junior SIS 600 (Catalogo generale 1987): 1050-series 105.
    'shimano 105': [{ bike: 'Junior 105', from: 1987, to: 1987, id: 1778 }], // FC-1050, 105 (1987-89)
    // 1982 Battaglin (Italian sheets): Gipiemme prints "Cronospecial" / "Cronosprint" as one word. The 1982 rows are the 100 AA and 100 CC.
    'gipiemme cronospecial': [{ from: 1982, to: 1982, id: 1587 }], // Crono Special 100 AA
    'gipiemme cronosprint': [{ from: 1982, to: 1982, id: 1589 }], // Crono Sprint 100 CC
    'gipiemme minisprint': 9126, // Crono Sprint Minisprint Strada (row dated 1985-88; the 1982 sheet is earlier)
    'gipiemme pista special': [{ from: 1982, to: 1982, id: 1588 }], // Crono Special 100A1 (Pista), 1982-88
    // 1977 Raleigh Competition GS: the only Gran Sport crank row dated before the 1980-85 ones (row dated 1970-75).
    'campagnolo gran sport alloy cotterless with alloy disc chainguard': 1476, // Campagnolo 3320, Gran Sport / Sport
    // 1977-78 Peugeot: Stronglight TS (Touring Sport, 3-arm, 170mm, plain rings; the perforated one is the TS Bis, 1915).
    'stronglight ts three arm cranks 170mm double chainring 42 52t': [{ from: 1977, to: 1980, id: 1914 }],
    'stronglight ts 42 52t': [{ from: 1977, to: 1980, id: 1914 }],
    'stronglight ts 40 50t': [{ from: 1977, to: 1980, id: 1914 }],
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    'shimano santé': [{ from: 1988, to: 1989, id: 1841 }], // FC-5000
    "campagnolo croce d'aune": [{ from: 1988, to: 1991, id: 1489 }],
    'shimano deore xt sis': [{ from: 1987, to: 1993, id: 1810 }], // FC-M730
    'ofmega super competizione': [{ from: 1980, to: 1990, id: 1703 }], // road, 2nd version
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'campagnolo super record 42 53t 170mm': [{ from: 1974, to: 1988, id: 1509 }], // Super-Leggera: 1049/A Strada Super Record
    'campagnolo super record strada 42 53t 170mm': [{ from: 1974, to: 1988, id: 1509 }], // Barcellona
    'campagnolo record strada 42 53t 170mm': [{ from: 1967, to: 1988, id: 1496 }], // Campione del Mondo CX: 1049 Nuovo Record Strada v4
    // 1980 Peugeot (NL): Stronglight 104 (Peugeot logo, 1980); 1982 Peugeot (NL) PKN 10: the 1982 row
    'stronglight 104 anodised 45 x 52t 170 mm': [{ from: 1980, to: 1981, id: 1878 }, { from: 1982, to: 1982, id: 8811 }],
    'spidel 107 aerodynamic': 1883, // 1982 Peugeot PRO 10: Stronglight 107 (1980-85), Spidel-badged
    'stronglight 104 bis 42 x 52t': 1879, // 1980 Peugeot PV 10
    'stronglight 104 bis 52 x 42t': 1879, // 1981 Peugeot PSV 10
    'stronglight 104 bis 42 x 52t 170 mm': 1879, // 1983 Peugeot (CA) PK 12
    'stronglight 104 bis drilled 45 x 52t': 1879, // 1983 Peugeot (NL) PVN 10
    'stronglight 104 bis anodised and drilled 45 x 52t': 1879, // 1982 Peugeot (NL) PVN 10
    'stronglight 105 bis anodised and drilled 45 x 52t 170 mm': 1880, // 1980 Peugeot (NL) PVN 10
    'stronglight 105 mod 65 axle five arm cranks 170mm double chainring 42 52t': [{ from: 1970, to: 1982, id: 1880 }], // 1977/78 Peugeot: Stronglight 105 Bis
    'stronglight 105 42 52t': [{ from: 1970, to: 1982, id: 1880 }],
    // 1977-79 Peugeot: "Stronglight 105 Bis ..." also hits 9079 Stronglight 105 (the 1976 model 93
    // successor, added from the Palo Alto 1976 catalogue), so the matcher sees two candidates.
    'stronglight 105 bis anodised drilled 42 x 52': [{ from: 1970, to: 1982, id: 1880 }], // 1979 PY 10 CP Prestige / PY 10 LC
    'stronglight 105 bis double 42 x 52': [{ from: 1970, to: 1982, id: 1880 }], // 1979 PV 10 Super Competition
    'stronglight 105 bis titanium axle five arm cranks 170mm double chainring 42 53t drilled silver anodised': [{ from: 1970, to: 1982, id: 1880 }], // 1977 PY 10/CP
    'stronglight 105 bis 42 52t': [{ from: 1970, to: 1982, id: 1880 }], // 1978 PY 10 EC
    'stronglight 105 bis drilled anodised chainring sizes to choice': [{ from: 1970, to: 1982, id: 1880 }], // 1978 PY 10 CP
    'stronglight 49 five hole cranks 170mm double chainring 42 52t': [{ from: 1970, to: 1982, id: 1894 }], // 1977 Peugeot (DE): Stronglight 49A
    'stronglight 49 five hole cranks 170mm triple chainring 32 42 52t': [{ from: 1970, to: 1982, id: 1893 }], // Stronglight 49 Tri
    'stronglight 49d 40 50t': [{ from: 1970, to: 1982, id: 1895 }], // 1978 Peugeot (NL): as the 42/52T pick
    'stronglight 49d 42 52t': [{ from: 1970, to: 1982, id: 1895 }], // 1978 Peugeot (NL) PS 10 / TM 8: Stronglight 49D, as the 1973-77 picks (the DB has no 1970s 49D row)
    // 1970 / 1972 Raleigh (US) Professional Mk IV and International (1972): Campagnolo 44/52T with the Nuovo Record
    // derailleurs -> 1049 Nuovo Record Strada v4 (1967-87), as the 1973 International 'campagnolo cotterless alloy'.
    'campagnolo 44 52t': [{ from: 1970, to: 1972, id: 1496 }],
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano 105 52 42t alloy rings & cold forged 170mm alloy cranks': [{ from: 1987, to: 1987, id: 1778 }], // Sirocco: FC-1050 105
    'shimano new 105 52 42t light alloy with 170 mm cranks': [{ from: 1987, to: 1987, id: 1778 }], // Competition: FC-1050 105
    'shimano 105 biopace 52 42t 170 mm cranks': [{ from: 1987, to: 1987, id: 1778 }], // Triathlon: FC-1050 105 (the DB has no separate Biopace 105 row)
    'shimano 600ex 52 42t light alloy with 170 mm alloy cranks and sealed mechanism bottom bracket': [{ from: 1987, to: 1987, id: 1798 }], // Road Ace / Record Ace: FC-6207 600EX (1984-87)
    // 1986 Raleigh (US).
    'suntour superbe pro 52 42 170mm': [{ from: 1984, to: 1986, id: 1991 }], // Prestige: SunTour CW-5000 Superbe Pro (1984-86); the matcher took the 1993-94 Superbe
    // 1974 Peugeot (Dutch catalogue). No Stronglight Competition 53 row exists, left unlinked.
    'stronglight 49 d light alloy 45 53t': 1895, // Stronglight 49D (Depose), as 1973
    'stronglight dural 49d 50 40t': 1895, // PA 60 touring double
    'stronglight competition no 99 59 40t': 1906, // Stronglight 99 ("nieuwste model"; drilled vs plain not stated, so the base row)
    // 1973 Peugeot (Dutch catalogue).
    'stronglight 49 d 45 53t': 1895, // Stronglight 49D (Depose), as the 1975 Motobecane / 1979 Peugeot 49 D picks
    // 1975 Peugeot (Dutch catalogue): the same Stronglight cranks as 1973-74.
    'stronglight 49 d light alloy 45 52t': 1895, // PR 10, as the 1974 45/53T pick
    'stronglight 49 d light alloy 42 52t': 1895, // 1976 PR 10 (42/52T), as the 1975 45/52T pick
    'stronglight dural 49d 40 50t': 1895, // PA 60, as the 1974 50/40T pick
    'stronglight competition 93 light alloy 45 52t': 1904, // PX 10 LE: Stronglight 93 (1967-80), as the 1973 PX 10 pick
    'stronglight competition 99 40 50t': 1906, // PX 60: Stronglight 99 base row (1970-82), as the 1974 pick
    'stronglight 45 52t': null, // 1971 Peugeot PA 10 S: 45/52 tooth chainset, not the 1950 Stronglight 45 model
    // 1970 Peugeot (Dutch-market catalogue).
    'stronglight competition 45 52t': [{ from: 1963, to: 1972, id: 1902 }], // Stronglight 63 Super Competition (PX 10; the 1971 and 1972 Dutch catalogues repeat the 1970 wording)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano ultegra 53 42t': [{ from: 1988, to: 1999, id: 1790 }], // FC-6400, 600 Ultegra
    'shimano 105 52 42t': [{ from: 1990, to: 1992, id: 1782 }], // FC-1055-SG, 105SC
    'shimano exage 400e 52 42t': [{ from: 1990, to: 1992, id: 7576 }], // FC-A400, Exage 400EX
    'shimano deore xt 48 38 26t': [{ from: 1990, to: 1993, id: 7578 }], // FC-M730-SG (crank of the M735 group)
    'shimano deore dx 48 38 26t': [{ from: 1988, to: 1993, id: 1809 }], // FC-MT60, Deore / Deore DX
    'shimano deore lx 48 38 28t': [{ from: 1990, to: 1993, id: 1807 }], // FC-M550-SG
    'shimano deore lx 46 36 24t': [{ from: 1990, to: 1993, id: 1807 }], // FC-M550-SG
    'shimano m201 alloy 48 38 28t': [{ from: 1990, to: 1991, id: 7600 }], // FC-M200 / M201, 200GS
    'suntour xc pro grease guard 48 38 26t': [{ from: 1990, to: 1992, id: 1998 }], // CW-XP01
    'suntour xc comp 48 38 26t': [{ from: 1990, to: 1992, id: 7999 }], // CW-XC01 (row dated 1992)
    'sr xct 48 38 28t': [{ from: 1990, to: 1992, id: 8004 }], // SunTour CW-XT01 (Sakae Ringyo; row dated 1992)
    'sr x 1 48 38 26t': [{ from: 1990, to: 1992, id: 8000 }], // SunTour CW-X101 (row dated 1992)
    'sr radius 52 42t': [{ from: 1990, to: 1992, id: 8007 }], // SunTour CW-RA01, Radius (row dated 1992)
    'ofmega pista super competizione 48t': [{ from: 1980, to: 1990, id: 1702 }], // Super Competizione (pista)
    'ofmega quattro 52 42t': [{ from: 1980, to: 1990, id: 1705 }], // Ofmega Vantage (Bianchi Quattro version)
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'shimano 600 ultegra': 1790, // Shimano FC-6400, 600 Ultegra
    'ofmega super competizione pista': 1702, // Ofmega Super Competizione (pista)
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'campagnolo super record 42 53 special engraving': 1509, // Campagnolo 1049/A, Strada Super Record
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'campagnolo nuovo record with 52 42t super record rings': 1496, // Team Replica: 1049 Nuovo Record Strada v4 (1983 key carried "170mm cranks")
    'shimano 600 ax fully detachable 52 42t': 1787, // Road Ace: Shimano FC-6300, 600 AX
    // C-Record crank: 306/101 1985-86, then the 1987-94 row. The matcher exact-hit the first on every year; 1987 Bianchi fixed by one-off UPDATE.
    'campagnolo c record': [{ to: 1986, id: 1483 }, { from: 1987, id: 1482 }],
    'campagnolo c record 53 42t': [{ to: 1986, id: 1483 }, { from: 1987, id: 1482 }], // 1987 Bianchi Mondiale / X4
    // 1978 Raleigh (US, ebykr scan).
    'campagnolo nuovo record cotterless 42 51t': [{ to: 1987, id: 1496 }], // Professional Mk V: 1049 Nuovo Record Strada v4
    'campagnolo nuovo record cotterless 42 52t 170mm': [{ to: 1979, id: 1496 }], // 1979 Raleigh Professional Mk V: 1049 Nuovo Record Strada v4, as 1978's 42/51T
    'campagnolo nuovo record cotterless 42 51t 170mm': [{ to: 1987, id: 1496 }], // 1980 Raleigh Professional Mk V, as 1978's 42/51T
    'campagnolo strada record alloy 51 42': 1496, // 1981 Raleigh Canada Professional: 1049 Nuovo Record Strada v4
    'campagnolo gran sport set 52 42': 1472, // 1981 Raleigh Canada Competition GS: 0304 (Nuovo) Gran Sport
    'campagnolo gran sport cotterless 42 52t 170mm': [{ from: 1978, id: 1472 }], // Competition GS: 0304 (Nuovo) Gran Sport, as the 1979 Colnago Export (row dated from 1980)
    'shimano ffs 40 52t 165mm': 1777, // Record FFS/PPS: Shimano FFS (Front Freewheel System); FC-FF33 row starts 1980
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo gran sport 170 mm 52x42t': 1472, // Squadra: 0304 (Nuovo) Gran Sport 144 BCD
    'campagnolo nuovo record bianchi engraved 170 mm 53x42t': 1496, // Centenario: 1049 Nuovo Record Strada v4
    // "Record with SL chainrings" = the 1049 Record crank with Super Leggero rings.
    'campagnolo record with sl chainrings bianchi engraved 170 mm 53x42t': 1496, // Super Leggera
    'campagnolo record with sl chainrings 170 mm 53x42t': 1496, // Campione
    'campagnolo record with sl chainrings 170 mm 52x42t': 1496, // Campionissimo
    'ofmega competizione 170 mm 52x42t': 1687, // Speciale-II: Ofmega Competizione BIANCHI, as 1983/84 Bianchi
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo triomphe': 1515, // 0365, Triomphe (1985-88)
    'campagnolo super record 30nnale': 1509, // 1049/A Strada Super Record
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'campagnolo nuovo record with 52 42t super record rings 170mm cranks': 1496, // Team Replica: 1049 (Nuovo) Record Strada v4
    // The 1983+ bare Gran Sport range is the Bianchi-labelled 0304; a Raleigh takes the plain one.
    'campagnolo gran sport 5 arm 52 42t 170mm cranks': 1472, // Gran Sport: Campagnolo 0304, (Nuovo) Gran Sport (144 BCD)
    'shimano 600 ax with 52 42t 170mm cranks': 1787, // Road Ace: Shimano FC-6300, 600 AX
    'campagnolo pista 48t': 1505, // 1973 Raleigh Professional Track: Campagnolo 1051, Record Pista (144bcd, 1967-85)
    'campagnolo pista with 165mm cranks': 1505, // 1974 Raleigh Professional Track
    'campagnolo cotterless alloy': [{ to: 1977, id: 1496 }], // 1974 Raleigh International: 1049 Nuovo Record Strada v4
    'campagnolo super nuovo record titanium axle and chainrings 42 52t': 1509, // 1974 Raleigh Team Professional: 1049/A Strada Super Record
    'campagnolo pista with 165 mm cranks': 1505, // 1975 Raleigh Professional Track
    'campagnolo nuovo record cotterless': [{ to: 1977, id: 1496 }], // 1975 Raleigh Mk IV / International: 1049 Nuovo Record Strada v4
    'campagnolo nuovo record cotterless with alloy disc chainguard': [{ to: 1977, id: 1496 }], // 1977 Raleigh Professional Mk V
    'campagnolo super nuovo record with titanium axle & cups 53 42 chainrings 1725 mm cranks': 1509, // 1975 Raleigh Team Professional: 1049/A
    'campagnolo super record with titanium axle & cups 53 42 chainrings 1725 mm cranks': 1509, // 1976 Raleigh Team Professional: same crank, 1049/A
    'campagnolo veloce 53 39t': 7062, // 1993 Bianchi: Campagnolo FC-01VL, Veloce
    'shimano at10 x 50 40 28t': 7724, // 1993 Bianchi: Shimano FC-AT10, Altus A10 (SG-X triple)
    'shimano at10 x 50 40 30t': 7724, // 1993 Bianchi: Shimano FC-AT10, Altus A10 (SG-X triple)
    'shimano 600 52 42t': [{ from: 1984, to: 1987, id: 1798 }], // 1987 Bianchi: Shimano FC-6207, 600EX
    'shimano ct10 48 38 28t': 7736, // 1993 Bianchi, from the Jul 1992 manual: Shimano FC-CT10, Altus C10
    'suntour fs e 52 42 32t': 8002, // 1993 Bianchi: SunTour CW-FS00-N, FS-E (52-42-32)
    'suntour xc comp md 42 32 20t': 7998, // 1993 Bianchi: SunTour CW-XC11, XC-Comp MD
    'shimano ct20 48 38 28t': 7743, // Shimano FC-CT20, Altus C20
    'shimano deore dx 46 36 26t': 1809, // Shimano FC-MT60 / -SG / -A, Deore DX
    'shimano exage lt 46 36 26t': 7718, // Shimano FC-M320, Exage LT
    'shimano exage es 46 36 26t': 1834, // Shimano FC-M520, Exage ES
    // 1974 Motobecane.
    'campagnolo record': 1496, // Campagnolo 1049, (Nuovo) Record Strada v4 (BCD 144)
    'stronglight 49 cotterless 42 52 alloy': 1895, // Stronglight 49D (Depose)
    // 1975 Motobecane.
    'campagnolo record 42 53': 1496,
    'stronglight 49 d cotterless 42 52': 1895,
    // 1981 Kalkhoff. Sakae is named without a model; the DB brand row is the
    // best available (kept deliberately, like Iris).
    'campagnolo super record': 1509, // Campagnolo 1049/A, Strada Super Record (bare 1513 row merged 2026-09-28)
    'dura ace ex 42 53': 1828, // Shimano FC-7200, Dura-Ace EX
    'shimano 600 ax': 1787, // Shimano FC-6300, 600 AX
    'sakae 42 52': null, // bare-brand row 1732 deleted 2026-10-02 (SR No. 18 pass); no model named
    'sakae 40 52': null,
    // 1983 Bianchi. The DB has a Bianchi-labelled Competizione crank.
    'ofmega competizione': 1687, // Ofmega Competizione BIANCHI
    'campagnolo gran sport triple': 1475, // Campagnolo 0306, (Nuovo) Gran Sport (116 BCD Triple)
    'campagnolo record pista gruppo': 1505, // Campagnolo 1051, Record Pista (144bcd)
    'gipiemme pista gruppo': 1593, // Gipiemme Special 600101 (Pista)
    'sugino supermighty': 1963, // Sugino Super Mighty Competition
    // 1984 Bianchi. Bare "Record Pista" substring-hits the "non-fluted" row;
    // align with the 1983 pick. Gran Sport crank: DB has a Bianchi-labelled row.
    'campagnolo record pista': 1505, // Campagnolo 1051, Record Pista (144bcd)
    'gipiemme pista': 1593,
    // Year split stands in for brand: the only 1983+ user is the 1984 Bianchi
    // (Bianchi-labelled row); the 1982 Raleigh takes the plain 0304.
    'campagnolo gran sport': [{ from: 1978, to: 1982, id: 1472 }, { from: 1983, id: 1473 }], // Campagnolo 0304, (Nuovo) Gran Sport (144 BCD)
    'campagnolo nuovo record': [{ from: 1967, to: 1987, id: 1496 }], // 1982 Raleigh Team Replica: Campagnolo 1049, (Nuovo) Record Strada v4
    // 1987 Bianchi. "Master Gran Premio" substring-hit Master; the catalog
    // names the Gran Premio.
    'ofmega master gran premio 52 42t': 1694, // Ofmega Gran Premio
    'ofmega super competizione 52 42t': 1703, // Ofmega Super Competizione (road, 2nd version)
    'ofmega super competizione pista 48t': 1702, // Ofmega Super Competizione (pista)
    'campagnolo victory 52 42t': 1516, // Campagnolo 0355, Victory
    'shimano 105 52 42t biopace': 1778, // Shimano FC-1050, 105
    'shimano dura ace 53 42t': [{ to: 1988, id: 1819 }, { from: 1989, to: 1993, id: 1820 }], // FC-7400 / FC-7402 (1990 Bianchi Proto)
    // 1993 Bianchi (SG-X/Powering stripped from the CSV). "Record" in 1993
    // is the C-Record generation crank.
    'campagnolo record 53 39t': 1482, // Campagnolo C-Record (1987-1994)
    'campagnolo chorus 53 39t': 1488, // Campagnolo FC-01CH, Chorus
    'campagnolo chorus 53 44t': 1488,
    'shimano 105 53 39t': 1782, // Shimano FC-1055-SG, 105SC
    'shimano dura ace 53 39t': 1820, // Shimano FC-7402, Dura-Ace
    'shimano ultegra 53 39t': 1790, // Shimano FC-6400, 600 Ultegra
    'shimano rx100 52 42 30t': 1840, // Shimano FC-A550-T, RX100 (triple)
    'shimano xtr 48 36 26t': 1848, // Shimano FC-M900, XTR M900
    'shimano xtr 46 36 26t': 1848,
    'shimano deore lx 46 36 26t': 1807, // Shimano FC-M550-SG, Deore LX
    // 1985 Raleigh (Sheldon Brown scan).
    'ofmega "mistral" 52 42 170mm': 1699, // Ofmega Mistral
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 1516, // 0355, Victory double; matcher picked the triple
    'campagnolo record corsa': 1483, // C-Record 306/101 (1985-86)
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo sport': 1476, // 3320 Gran Sport / Sport (1970-75)
    'campagnolo sport cotterless': 1476, // 3320 Gran Sport / Sport (1970-75)
    'campagnolo cotterless': [{ to: 1977, id: 1496 }], // 1049 Nuovo Record Strada v4 on the Nuovo Record Model 76
    // 1979 Peugeot (French catalogue).
    'stronglight 49 d anodised square taper double 42 x 52': 1895, // Stronglight 49D (Depose), as the 1975 Motobecane pick; DB has no 1970s 49D row
    'stronglight 49 d dural triple 32 x 42 x 52': 1893, // Stronglight 49 Tri
    // 1974 Motobecane (Grand Touring). The steel cottered Nervar has no DB row.
    'nervar cotterless 40 52 alloy chainwheel rings with alloy guard': 1653, // Nervar (3-pin, alloy/cotterless)
    // 1982-83 Raleigh (Record Ace / Competition / Royal / Clubman / Rapide):
    // "SR Custom" 52/42 five-arm is the CTC-5DLA2 (SR No. 18; the other Custom
    // codes are 52x40 or riveted DX).
    'sr custom alloy cotterless': 8199, // Sakae/Ringyo (SR) CTC-5DLA2, Custom
    'sr custom alloy cotterless 52 42t 170mm cranks': 8199,
    'sr custom alloy cotterless 5 pin detachable 52 42t 170mm cranks': 8199,
  },
  Saddles: {
    'italia turbo white leather': 5508, // 1987 Peugeot (FR) table: Selle Italia Turbo
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    'regal': [{ from: 1970, to: 2000, id: 5561 }], // Selle San Marco Regal
    'turbo': [{ from: 1980, to: 1990, id: 5508 }], // 1984 Peugeot PRO 10 / PY 10: bare "Turbo" is the Selle Italia Turbo
    'sella italia turbo': [{ from: 1980, to: 1990, id: 5508 }], // 1985 Peugeot PY 10 FC (p. 3 caption)
    'selle royal': null, // 1981 Kalkhoff: brand only (brand row 5521 deleted 2026-10-23)
    'ideale 2002 or treated leather': null, // 1976 PY 10: either / or, as the 1973 PX 10 either/or saddle (left unlinked)
    // 1987 Raleigh Randonneur 18: "Brooks Professional, honey finish, pre-softened" -> 5295 Brooks Professional pre-softened (velobase dates the row 2000, treated as a misdate; the catalogue itself shows the saddle in 1987).
    'brooks professional honey finish pre softened': [{ from: 1987, to: 1990, id: 5295 }],
    // 1987 Raleigh (UK): brand + descriptor only; the matcher falls back to the bare Selle Royal brand row (5521).
    'selle royal aero pearl white': null,
    'selle royal triathlon': null,
    // 1986 Raleigh (US): brand + descriptor only; the matcher falls back to the bare Selle Royal brand row (5521), as the 1984 Aero values were nulled.
    'selle royal anatomical': null,
    'selle royal leather': null,
    'selle royal leather racing': null,
    'selle royal racing': null,
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'avocet leather racing 1': [{ from: 1980, to: 1990, id: 5258 }], // Avocet Racing I
    // 1993 Bianchi MTBs: "Ritchey Comp leather" is the Logic Comp, new for
    // 1992 (Italian-made leather, spring-steel rails); the Virata adds "Cro-mo
    // rails". The Logic Pro WCS (titanium rails) is the only other Comp-era row.
    'ritchey comp leather': 8410, // Ritchey Logic Comp Saddle
    'ritchey comp leather cro mo rails': 8410, // Virata
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'isca tornado black suede': 5382, // Team Replica: Iscaselle Tornado (suede cover)
    'isca tornado blue suede': 5382, // Road Ace
    // Selle Royal Aero: no Aero model row (the bare brand row 5521 was deleted 2026-10-23).
    'selle royal aero black': null,
    'selle royal aero black imitation suede': null,
    'selle royal aero silver': null,
    // c. 1984 De Rosa (ebykr scan).
    'selle italia super turbo or turbo': null, // C Record: either/or; the matcher hit the 1992 Super Turbo row
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'selle italia turbo junior': null, // Bambina: a smaller junior model; the matcher hits the adult Turbo
    'concor or rolls': null, // 1986 Colnago either/or spec; don't pick one
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'isca tornado suede': 5382, // Iscaselle Tornado (suede cover)
    // The catalog's "Zeus Leather" saddle is the DB's black suede Zeus.
    'zeus leather': 5708, // Zeus (black suede)
    // 1973 Raleigh. "B17N" is the B17 Narrow.
    'brooks b17n leather': 5310, // Brooks B17 Champion Narrow
    'brooks b17n': 5310,
    'brooks b17 leather': 5315, // Brooks B17 Champion Standard
    'brooks professional': 5303, // Brooks Team Professional
    'brooks professional team special leather': 5304, // Brooks Team Professional "Team Special"
    'brooks professional leather team special': 5304, // 1974 Raleigh word order
    'brooks professional team special': 5304, // 1975 Raleigh
    'brooks professional best butt leather with copper rivets': 5303, // 1977 Raleigh Professional Mk V: copper rivets = standard Team Professional, not the polished-rivet Team Special
    'brooks professional best butt leather': 5303, // 1977 Raleigh Competition GS: Brooks Team Professional
    'brooks professional leather': 5303, // 1974 Raleigh International
    'brooks b17 narrow leather': 5310, // 1974 Raleigh: Brooks B17 Champion Narrow
    // 1974 Motobecane (the seat post aside is not part of the saddle).
    'brooks professional with alloy seat post': 5303,
    'brooks professional with campagnolo seat post': 5303,
    // 1983 Bianchi.
    'cinelli #2': 5332, // Cinelli Unicanitor #2 suede
    // 1987 Bianchi.
    'selle italia special mundialita': 5497, // Selle Italia Mundialita
    'selle italia super mundialita': [{ from: 1985, to: 1990, id: 5497 }], // 1990 Bianchi Super Leggera, as above
    // 1985 Bianchi Strada / Randonneur 700: "ANA" read as the Selle Italia Anatomic (1979-85). The 1987
    // Raleigh "padded black anatomic" is past the row and stays unlinked.
    'selle italia ana': [{ from: 1979, to: 1985, id: 8759 }],
    'selle italia ana camoscio': [{ from: 1979, to: 1985, id: 8759 }],
    // 1993 Bianchi. "Turbo-Matic" in 1993 is the Turbo Matic 2; bare "Flite"
    // is ambiguous across six variants, the original is the Titanium.
    'selle italia turbo matic': 5516, // Selle Italia Turbo Matic 2
    'selle italia flite': 5489, // Selle Italia Flite Titanium
    'avocet gelflex r20': 5249, // Avocet R20 GelFlex
    // 1986 Cinelli (Ten Speed Drive Imports).
    'concor rolls': 5563, // Selle San Marco Rolls
    'concor sc': 5547, // Selle San Marco Concor Supercorsa
    // 1982 Battaglin (catalogue spells it "Profil", as the DB row does).
    'san marco concor profil': 5544, // Selle San Marco Concor Profil
    'san marco concor super corsa': 5547, // Selle San Marco Concor Supercorsa
    // 1982 Peugeot (NL): Selle San Marco Corsaire 313 (1970-85); the DB has one row for the /1 and /2.
    'san marco 313 1': [{ from: 1970, to: 1985, id: 5553 }],
    'san marco 313 1 luxe race': [{ from: 1970, to: 1985, id: 5553 }],
    'san marco 313 2': [{ from: 1970, to: 1985, id: 5553 }],
    // 1982 Battaglin Marostica: GI-LUX 312 (1980-84). The 1978 Peugeot "Gilux race" predates it and 311 is
    // undated, so those stay unlinked.
    'san marco gi lux': [{ from: 1980, to: 1984, id: 5556 }],
    // 1970 Raleigh Grand Prix / Record: Wrights W3N, as the 1972 Raleighs print it.
    'wrights w3': [{ from: 1970, to: 1970, id: 5703 }],
    // 1981 Bianchi Super Corsa / Super Leggera: 3ttt 50/9 Criterium Competizione (row 1970-80, a year short).
    '3ttt competition': [{ from: 1970, to: 1981, id: 5230 }],
    unicanitor: [{ from: 1950, to: 1976, id: 5326 }], // 1975 Motobecane Team Champion: the base Unicanitor Mod. 50
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'mattress': null, // generic; matcher hit a Brooks mattress saddle
    // Saddle link pass 2026-10-26 (from /linkCoverage).
    'brooks leather b17n': 5310, // 1981 Raleigh Super Course: Brooks B17 Champion Narrow, as 'brooks b17n'
    'brooks professional large head rivets': 5303, // 1981 Raleigh Professional: Team Professional ("large copper rivets")
    'isca tornado black': 5382, // 1983 Raleigh Team Replica: Tornado (suede cover), as the 1984 "ISCA Tornado Black Suede"
    'isca tornado blue': 5382, // 1983 Raleigh Road Ace, as the 1984 "ISCA Tornado Blue Suede"
    'isca tornado blue nabuk suede leather cover': 5382, // 1987 Raleigh Road Ace
    'sella italia anatomic': 8759, // 1984 Peugeot PCA 10: Selle Italia Anatomic (1979-85)
    // Judgement calls 2026-10-30.
    'selle italia padded black anatomic': [{ from: 1979, to: 1987, id: 8759 }], // 1987 Raleigh Maverick 18 Pro (row extended 1985 -> 1987)
    'cinelli suede slx': [{ from: 1985, to: 1988, id: 5338 }], // 1986 Raleigh Prestige: Volare SLX (frame is 531, so SLX is the saddle)
    // 1979 Peugeot (French catalogue).
    'course': null, // generic; hit Selle San Marco Mercier Course
  },
  Handlebars: {
    'cta alloy bike ribbon': 2782, // 1986 Peugeot (US) Galibier / Ventoux: ATAX CTA, as the 1984 GB "CTA"
    'cinelli 65 benotto tape': 2804, // 1986 Peugeot (US) table PZ 10: Cinelli 65 Criterium
    // Judgement calls 2026-10-30. 1984 Peugeot (GB) PGN 10 US Routier / Paris-Nice: plain CTA (Weinmann 506 with
    // standard levers rules out the aero-cable CTA; steel would be named). 2782 dated 1984 on this catalogue.
    cta: [{ from: 1984, to: 1984, id: 2782 }], // ATAX CTA
    // 1980 Raleigh Touring 14: an engraved ferrule is a double-tube centre, so not the RN-L bulge bar;
    // the RND is the "Road Champion" marked one.
    'sr light alloy randonneur with engraved ferrule': 2913, // Sakae/Ringyo (SR) WR, World Randonneur
    'atax franco italia thickened race bend 420 mm': 2897, // 1980 Peugeot (NL): Franco-Italia 352 (Atax branding), as 1978
    'atax race bend 420 mm': 2901, // 1980 Peugeot (NL) PL 8 M: course bend -> Franco Belge 354, as 1979
    steel: null, // 1981 Peugeot PL 50 M: bare material; matched Nitto B125, Steel by substring
    race: null, // 1982 Peugeot (NL) PH 8 M: bare bend type; matched Modolo Q-Race
    'philippe professionnel dural': 2895, // 1977 Peugeot (DE): Philippe Professionnel 351
    'philippe professionnel dural silver anodised': 2895,
    'philippe professionnel': 2895,
    'philippe professionnel to choice': 2895,
    'thickened franco italia': 2897, // 1978 Peugeot (NL): Franco-Italia 352 (Atax branding)
    'atax thickened chromed franco italia 420mm light alloy': 2897,
    'atax thickened franco italia racing bar 420mm light alloy countersunk bolt': 2897,
    'touring bend': null, // 1971 Peugeot children's bikes: generic bend, not the GB Touring Bend
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    '3ttt record competition superlight covered with black leather': 2767, // 3ttt Record Competizione Superleggero
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano dura ace alloy engraved bend': 2917, // Road Ace: Shimano HD-7300, Dura-Ace AX
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'sakae ctd 390 mm': 7888, // Speciale-II / Strada: SR CTD, Custom Double Tube
    'sakae ctd 370 mm': 7888, // Rekord 26
    'nitto 105 390 mm': 2889, // Squadra: Nitto Universiade 105
    // 1987 Bianchi X4.
    '3ttt competizione aero': 8302, // 3ttt Aero Dynamic Competizione
    // 1987 Bianchi Mondiale / Giro: no bend named, and the only substring hit
    // is the early-model Merckx row.
    '3ttt competizione': null,
    // 1986 Colnago: the catalogue says "manubrio ed attacco 3TTT mod. 84
    // nero, pantografato" for bars and stem alike, but Mod. 84 is the AR84
    // stem (linked under Stems); the bar model is unidentified, so these
    // must never link to a stem row or a guessed bar.
    '3ttt black pantographed': null,
    '3ttt sport bend black pantographed': null, // Gentleman / Lady Sport
    '3ttt special aerodynamic ox horn bend': null, // Master Krono
    // 1973-75 Raleigh Professional / Team Professional: the GB alloy Maes with
    // engraved reinforcing ferrule (GB leaflet c. 1962); bare title match is
    // ambiguous across the four GB Maes rows.
    'gb maes alloy embossed': 2843, // GB Maes (alloy, with ferrule)
    'gb maes alloy engraved': 2843,
    '613 maes embossed': [{ from: 1962, to: 1975, id: 2843 }], // 1970 Professional Mk II, as the 1971-73 "G.B. Maes Alloy Embossed"
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'cinelli no 65 alloy bend': 2804, // Team Replica: Cinelli 65 Criterium
    'cinelli no 65 engraved alloy bend': 2804, // Gran Sport
    // 1982 Raleigh (UK "Racing Formula" brochure): the same two models print "Cinelli No. 65" in 1983-84.
    'cinelli alloy bend': [{ from: 1982, to: 1982, id: 2804 }], // Team Replica 12 / Gran Sport 12: Cinelli 65 Criterium
    'shimano dura ace alloy engraved': 2917, // Road Ace (600 AX bike): Shimano HD-7300, Dura-Ace AX
    'sr ctd': 7888, // Sakae/Ringyo (SR) CTD, Custom Double Tube (SR No. 18; 1987 Bianchi)
    // Ambiguous between "Cinelli 67 Pista" and "Cinelli 67 Pista (old
    // logo)"; a 1973 catalog predates the logo change.
    'cinelli pista handlebars': 2811, // Cinelli 67 Pista (old logo)
    // 1975 Motobecane.
    'philippe professional': 2895, // Philippe Professionnel
    // 1974-76 Peugeot PX 10 LE / PX 60: bare "Philippe" / "Philippe Dural", as the 1977-78 PX 10s'
    // Professionnel. Ranged so the 1982 PX 10 DU's bare "Philippe" stays unlinked.
    philippe: [{ from: 1974, to: 1976, id: 2895 }],
    'philippe dural': [{ from: 1974, to: 1976, id: 2895 }],
    // 1982-83 Peugeot: the French "Course" bend, Philippe Franco Belge 354 (1979-82), as the 1980 NL
    // `atax race bend 420 mm`.
    'aluminium race bend': [{ from: 1979, to: 1983, id: 2901 }],
    'aluminium race bend cables routed through the bar': [{ from: 1979, to: 1983, id: 2901 }],
    'aluminium race bike ribbon tape': [{ from: 1979, to: 1983, id: 2901 }],
    "cinelli giro d'italia": 2801, // Cinelli 64 Giro D'Italia (70's model)
    // 1973 Falcon San Remo Model 94: bare "Cinelli", as the 1974 San Remo 94's Giro d'Italia bar. Bike-scoped:
    // the San Remo 96 / 98, Kalkhoff, Battaglin and other bare "Cinelli" bars have no precedent.
    cinelli: [{ bike: 'San Remo Model 94', from: 1973, to: 1973, id: 2801 }],
    // 1990 Bianchi Signature 2: ITM ITALIA-Pro (black), 1980-90.
    'itm pro': [{ from: 1980, to: 1990, id: 2854 }],
    'itm pista': [{ from: 1985, to: 1990, id: 9194 }], // 1990 Bianchi Pista: the only ITM track bar (1985-88)
    // 1984 Raleigh Corsa 12: Cinelli 65 Criterium, as the 1983 Gran Sport "Cinelli No. 65 engraved alloy bend".
    'cinelli engraved alloy bend': [{ from: 1975, to: 1988, id: 2804 }],
    // 2026-10-08 link-gap pass (weakest categories).
    // 1974 Motobecane Le Champion: the only plain "Record" bar; the Record
    // Competizione rows are a different (named) model.
    // Ranged 2026-10-10: the 1981 Bianchi's plain "T.T.T. Rekord" is not the
    // 1st version and the DB has no later plain Record bar.
    '3ttt record': [{ to: 1975, id: 2771 }], // 3ttt Record (1st Version)
    // 1975 Raleigh Professional Track: the Racing Team Service PISTA row is
    // undated and the later line; this one covers 1975.
    '3ttt track bend': 2753, // 3ttt Record Competizione Track (Pista)
    // 1983 Bianchi Eco Pista: bare "TTT" bar on the track bike, the Pista bar to match its Mod. 2 Record
    // Pista stem. Bike-scoped: the 1985 Campione's bare "TTT" has nothing to go on.
    '3ttt': [{ bike: 'Eco Pista', from: 1983, to: 1983, id: 2753 }],
    // 1985 Raleigh Prestige (road): RY-RC Royal-Racer is the track bar.
    'sr royal special racing bend alloy': 7884, // Sakae/Ringyo (SR) RY-978, Royal-978
    // 1979 Peugeot: French bend names from the ATAX / Guidons Philippe 1982
    // catalogue, whose only "Course" bend is the Franco-Belge 354 (steel A 354,
    // dural D/DG 354). Only PX 10 C names ATAX; the rest are inferred from the
    // bend name. "Course front, Tessinois rear" (tandems) is two bars, unlinked.
    'atax course dural': 2901, // Philippe Franco Belge 354
    'course': 2901,
    'course type': 2901,
    'course type dural': 2901,
    'course dural': 2901,
    'dural course': 2901,
    'steel course': 2901,
    'helvetia type': 8502, // Philippe Helvetia 303 / 304
    'sport helvetia type': 8502,
    'sport dural helvetia type': 8502,
    // 1980 Peugeot (NL) PX 18 M: the 430 mm Helvetia bend is the row's own width.
    'atax helvetia demi course 430 mm': [{ from: 1979, to: 1982, id: 8502 }],
    // 1981 Peugeot (FR) "Sport dames" PX 18 M / PL 18 M / PH 18 M: bare "Guidon Helvétia", as the 1980 rows.
    helvetia: [{ from: 1979, to: 1982, id: 8502 }],
    'dural helvetia type': [{ from: 1979, to: 1982, id: 8502 }], // 1982 Peugeot (FR) PX 18 S
    'randonneur bend': 8500, // Philippe Randonneur 355
    // 1983-84 Raleigh Competition / Rapide: the alloy SR Custom bar is CT-L
    // (CT-S is the steel one).
    'sr custom engraved italienne alloy bend': 7889, // Sakae/Ringyo (SR) CT-L, Custom-L
    'sr custom engraved alloy bend': 7889,
    // 1985 Bianchi Campionissimo: retitled "Nitto Mod. 165" (Nitto No. 6, 1980).
    'nitto 165 400 mm': 2877,
    // 1985 Bianchi Bambina: the only 340mm junior bar in Nitto No. 11 (1989).
    'nitto junior 340 mm': 8622, // Nitto B110AA
    // Handlebar link pass 2026-10-26 (from /linkCoverage).
    'philippe professionnel thickened 420 mm': 2895, // 1982 Peugeot PXN 10: Philippe Professionnel 351
    '3ttt record competizione super leggero leather covered': 2767, // 1978 Bianchi Specialissima: 3ttt Record Competizione Superleggero
    '3ttt tourist 75': 8844, // 1978 Bianchi Rekord/745: 3ttt 400/3/4, Touriste Mod. 75
    '3ttt duralumin english model': 8845, // 1981 Bianchi Super Turismo: 3ttt 300/5, Inglese (Viaggio)
    'vantoux gb': 2848, // 1972 Raleigh Professional Track: GB Ventoux, as 1973-74
    'gb maes engraved anodized silver': 2843, // 1976 Raleigh Team Professional: GB Maes (alloy, with ferrule), as 1974-75
    "cinelli 64's": 2802, // 1986 Raleigh Prestige: Cinelli 64 Giro d'Italia (80's model)
    'atax franco italia': 2897, // 1983 Peugeot UO 12 Sprint: Franco-Italia 352 (Atax branding), as 1978 / 1980
    'aluminium franco italia inscription': 2897, // 1982 Peugeot PH 10 S
    'course steel bend': 2901, // 1980 Peugeot PH 10: Franco Belge 354, as the 1979 'steel course'
  },
  Stems: {
    'suntour xc stem': 6695, // 1986 Peugeot (US) Canyon Express: SunTour MS-1400, XC (1984-88) (// linkCoverage pass 2026-10-30)
    'cta dural': 6452, // 1987 Peugeot (FR) Comète: ATAX CTA (XA style)
    'atax asc dural': 8507, // 1987 Peugeot (FR) Santé: ATAX ASC, Aerodynamic (row widened to 1987)
    'atax asc h dural': 8507, // 1987 Peugeot (FR) Chorus / Perthus: ASC H, taken as an ASC version
    'alloy ah': null, // 1985 Raleigh Pursuit: no maker printed
    'atax asc anodised': 8507, // 1986 Peugeot (FR) PY 10 FC: ATAX ASC, Aerodynamic
    'dural atax asc': 8507, // 1986 Peugeot (FR) PRO 10
    'cta alloy aero': 6452, // 1986 Peugeot (US) Galibier / Ventoux / Tourmalet / Avoriaz: ATAX CTA (XA style, aero)
    'atax alloy aero': 6449, // 1986 Peugeot (US) Mont Cenis / Triathlon: ATAX (aero, XA style)
    'cinelli ir': 6491, // 1986 Peugeot (US) table PZ 10: "IR" is the Cinelli 1R
    // Judgement calls 2026-10-30. Unqualified "Royal" = the base NRY (SL / ESL would be named); 7899 redated 1980 -> 1979.
    'sr royal': [{ from: 1979, to: 1982, id: 7899 }], // 1979 Raleigh Professional Mk V / Competition GS: SR NRY, New Royal
    // Branded AH stem = SR's base SR-AH (7902 redated to 1986 on these); bare "Alloy AH" (1985 Raleigh Pursuit) stays unlinked.
    'sakae ah': [{ from: 1980, to: 1986, id: 7902 }], // 1985 Bianchi Strada
    'sr ah alloy': [{ from: 1980, to: 1986, id: 7902 }], // 1986 Raleigh Technium 440 USA
    // 1982 Battaglin: Cinelli 1/R is the 1R (1/Record); the early version ends 1979.
    'cinelli 1 r': [{ from: 1976, to: 1979, id: 6492 }, { from: 1980, to: 1985, id: 6491 }],
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'ritchey force': [{ from: 1988, to: 1992, id: 8400 }], // Force Directional (Mountain)
    'ritchey force comp ht butted': [{ from: 1989, to: 1992, id: 8399 }], // Force Comp (Mountain)
    'nitto mt 80aa': [{ from: 1989, to: 1990, id: 8579 }], // Nitto MT-80
    // 1985 Bianchi Squadra: the Technomic Aero is a later model than the plain
    // Technomic (Nitto No. 6, 1980) and has no DB row; don't let the matcher take it.
    'nitto technomic aero 80 mm (510) 90 mm (530 550)': null,
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'cinelli 1a': 6489, // Team Replica: Cinelli 1A (winged "C" logo), as the 1983 'cinelli no 1a'
    // 1973-74 Falcon San Remo: bare "Cinelli" stem, the 1A of the Cinelli Milano logo era (1972-78). Ranged
    // so the 1984 Peugeot PZ 10's bare "Cinelli" stays unlinked.
    cinelli: [{ from: 1972, to: 1974, id: 6487 }],
    // 1986 Colnago: "attacco 3TTT mod. 84 nero" = the black AR84N (1986-91), not the silver AR84.
    '3ttt mod 84': 8296, // 3ttt AR84N, Mod. 84 (black)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'cinelli no 1a': 6489, // Team Replica / Gran Sport: Cinelli 1A (winged "C" logo), latest 1A row
    'sr apex forged alloy': 7901, // Competition / Record Ace: SR AX-AH, Apex
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'forged alloy': null, // generic; substring-hits the 1950s GB Hiduminium spearpoint
    'sr ax; ah': 7901, // Sakae/Ringyo (SR) AX-AH, Apex (SR No. 18; 1981 Kalkhoff)
    // 1975 Motobecane: the Giro d'Italia bar was paired with the 1A stem; the winged-"C" 1A starts 1978.
    "cinelli giro d'italia": [{ to: 1977, id: 6487 }, { from: 1978, id: 6489 }], // Cinelli 1A (Cinelli Milano logo / winged "C" logo)
    // 1981 Kalkhoff. Cinelli's "Super Record" stem is the 1R (1/Record).
    'cinelli super record': 6491, // Cinelli 1R (1/Record)
    'shimano 600 ax': 6674, // Shimano HS-6300, 600 AX
    // 1987 Bianchi.
    '3ttt ar84': 6424, // 3ttt AR84, Mod. 84 (Record 84)
    // 1983-84 Bianchi (Nuovo Racing, Super Leggera, Tipo Corsa, Campione del Mondo, Campione d'Italia): a bare "TTT"
    // stem. The 3ttt Record road stem of the era is the AR "Record" (1980-91); the AR84 is not named until 1986-87.
    // The 1983 Eco Pista track bike gets the Mod. 2 Record Pista, as the Professional Track DL 175 below.
    '3ttt': [
      { bike: 'Eco Pista', from: 1983, to: 1983, id: 6420 }, // 3ttt ARP2, Mod. 2 Record Pista (64 degree)
      { from: 1983, to: 1984, id: 6404 }, // 3ttt AR, Record
    ],
    // 1973-75 Raleigh / 1974 Motobecane "T.T.T. Record": the 1970s Mod. 1
    // Record Strada; 1975 Raleighs say "New ...", taken as the 2nd version.
    // The Professional Track DL 175 gets the Mod. 2 Record Pista instead.
    '3ttt record alloy': [
      { bike: 'Professional Track DL 175', id: 6420 }, // 3ttt Mod. 2, Record Pista (64 degree)
      { to: 1974, id: 6417 }, // 3ttt Mod. 1 Record Strada (first version)
    ],
    // 1981 Bianchi Super Turismo / Rekord 748 "T.T.T. Rekord": the AR Record (1980-91), as the 1983-84
    // bare-"TTT" rule; the same catalogue names the Mod. 78 separately.
    '3ttt record': [{ to: 1974, id: 6417 }, { from: 1980, to: 1991, id: 6404 }],
    '3ttt record specific sizes': [{ from: 1980, to: 1991, id: 6404 }],
    '3ttt record lightweight alloy': [{ to: 1974, id: 6417 }],
    'new 3ttt record': [{ bike: 'Professional Track DL 175', id: 6420 }],
    // 1972-73 Raleigh Professional Track DL 175: the 1974-76 specs on the same model link the Mod. 2 Record Pista.
    'alloy 3ttt': [{ bike: 'Professional Track DL 175', id: 6420 }],
    '3ttt 110 mm': [{ bike: 'Professional Track DL 175', id: 6420 }],
    // 1982 Bianchi Super Pista: the Mod. 2 Record Pista, as the 1983 Eco Pista bare-"TTT" rule above.
    '3ttt track': [{ from: 1970, to: 1991, id: 6420 }],
    // 1982 Raleigh Team Replica 12 / Gran Sport 12: the same models print "Cinelli No. 1A" in 1983.
    'cinelli alloy': [{ from: 1982, to: 1982, id: 6489 }], // Cinelli 1A (winged "C" logo)
    'new 3ttt record alloy': [{ from: 1975, to: 1976, id: 6416 }], // 3ttt Mod. 1 Record Strada (2nd version); the 1976 Professional Mk IV repeats the 1975 text
    'itm 400': 6564, // ITM 400 Racing
    'sr custom': 8234, // Sakae/Ringyo (SR) CT, Custom (6659 "SR CUSTOM" merged into it 2026-10-28)
    // 1983-87 Raleigh "SR / Sakae Custom light alloy", as `sr custom` above: SR CT, Custom (1978-87 since the
    // 2026-10-28 merge of 6659). The 1984 "Custom Alloy" names no maker; the other 1984 Raleighs print SR Custom.
    'sr custom light alloy': [{ from: 1978, to: 1987, id: 8234 }],
    'sakae custom light alloy': [{ from: 1978, to: 1987, id: 8234 }],
    'custom alloy': [{ from: 1984, to: 1984, id: 8234 }],
    // 1986 Raleigh "SR CT (forged) alloy": SR CT, Custom (1978-87).
    'sr ct alloy': [{ from: 1978, to: 1987, id: 8234 }],
    'sr ct forged alloy': [{ from: 1978, to: 1987, id: 8234 }],
    // 1982 Peugeot (FR) PY 10 S: the catalogue table put "CFC 80" on the bar line; CFC is the ATAX stem.
    'atax cfc 80 anodised silver': [{ from: 1982, to: 1984, id: 8512 }],
    // 1985 Raleigh (Sheldon Brown scan).
    'sr ae alloy aero black': 6657, // Sakae/Ringyo (SR) Aero
    // 1986 Cinelli (Ten Speed Drive Imports).
    'cinelli mod 1 r': 6491, // Cinelli 1R (1/Record)
    'cinelli 1 a': 6489, // Cinelli 1A (winged "C" logo, 1978-82)
    'cinelli mod 1 a': 6489, // Cinelli 1A (winged "C" logo, 1978-82)
    // 1979 Peugeot (French catalogue).
    'atax forged dural anodised hidden expander': 6447, // ATAX (1A style)
    // 1973 Raleigh. Also substring-hits the 1950s Hiduminium spearpoint.
    'gb forged alloy': 6533, // GB Forged
    // Stem link pass 2026-10-26 (from /linkCoverage).
    // 1987 Bianchi Limited / Squadra / Pista and 1990 Campione d'Italia: ITM Mod. 200 (row 1985-88).
    'itm 200': [{ from: 1985, to: 1990, id: 9202 }],
    'itm 100': [{ from: 1985, to: 1988, id: 9203 }], // 1987 Bianchi Campione d'Italia: ITM Mod. 100
    'itm 300': [{ from: 1985, to: 1988, id: 9201 }], // 1987 Bianchi Trofeo: ITM Mod. 300
    'atax asc anodized': 8507, // 1984 Peugeot PRO 10 / PY 10: ATAX ASC Aerodynamic (1982-84)
    'atax cfc 80 aluminium': 8512, // 1982 Peugeot PX 10 DU: ATAX CFC Forged Race
    'atax cfc alloy': 8512, // 1984 Peugeot PX 10 DU '979', as the 1982 PX 10 DU
    'atax cfc aluminium': 8512, // 1984 Peugeot PX 10 DU
    '3ttt model 78 specific sizes': 8849, // 1981 Bianchi Super Corsa / Super Leggera: 3ttt 200/6, Record Strada Mod. 78
    'sun tour superbe forged light alloy fluted': 6694, // 1980 Raleigh Superbe: SunTour RS-1000 Superbe (1979-84)
    'sr mts 101 adjustable alloy': 6661, // 1986 Raleigh Elkhorn: SR MTS-101 (1980-90)
    'nitto mt1 4 bolt alloy clamp': 9412, // 1987 Raleigh Maverick 18 Pro: Nitto MT-1 (two-piece clamp MTB stem)
  },
  Shifters: {
    'suntour xc sport': 6315, // 1986 Raleigh: SunTour LD-4700, Power Thumb Shifter, XC-Sport (SunTour linking pass 2026-10-30)
    'suntour pub 10 stem shifter': 7837, // 1986 Raleigh: SunTour LD-4300, PUB-10 (stem)
    'simplex sx p 4190': 7301, // 1983 Peugeot: Simplex SXP 4190 (1978-81) (Simplex spacing links 2026-10-30)
    'shimano sis 105 sl1050': 6130, // 1987 Peugeot (US) Galaxie / Comete: SL-1050, 105 SIS
    'shimano new deore xt sis sl m730': 6159, // 1987 Peugeot (US) Cannon Ball Express: SL-M730
    'shimano sis new deore sl mt60': 6157, // 1987 Peugeot (US) Alpine Express: SL-MT60, Deore
    'shimano sl mt60 thumb shifters': 6157, // 1987 Peugeot (US) Canyon Express
    'shimano sl l422fa': 7555, // 1987 Peugeot (US) Tourmalet: SL-L422 FA, Light Action (blurry print; part number matches the row)
    'xt shift levers': 6158, // 1986 Peugeot (US) table Canyon Express: SL-M700, Deore XT
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    'shimano santé': [{ from: 1987, to: 1989, id: 6190 }], // SL-5000
    'shimano deore xt sis': [{ from: 1987, to: 1989, id: 6159 }], // SL-M730
    'campagnolo chorus': [{ from: 1988, to: 1991, id: 7027 }], // A281, the only Chorus lever of the period
    'shimano deore xt': [{ from: 1986, to: 1986, id: 6158 }], // 1986 Raleigh Crested Butte / Portage: SL-M700, Deore XT (1983-86)
    // 1987 Raleigh Randonneur 18 "Huret New Success": the 1987 ARIS-era rows (several New Success rows span 1980-96, so the matcher nulls the bare name).
    'huret new success alloy front and rear with ratchet levers': [{ from: 1987, to: 1990, id: 6110 }], // ARIS New Success (type 1) 1987-90; 6111 is a duplicate title
    // Same part as an already-linked sibling, with a qualifier only (2026-10-20 near-match audit).
    'shimano z401': [{ from: 1984, to: 1986, id: 6194 }], // 1986 Raleigh Pursuit; as "Shimano Z401 down tube" (SL-Z401)
    'shimano z401 stem mount': [{ from: 1984, to: 1986, id: 6194 }], // 1986 Raleigh Olympian (stem-mount variant of the same SL-Z401)
    'shimano z408 dt': [{ from: 1980, to: 1986, id: 6195 }], // 1986 Raleigh Alyeska; as "Shimano Z408 down tube" (SL-Z408)
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105 sis index gear change': [{ from: 1987, to: 1987, id: 6130 }], // Competition / Triathlon: SL-1050 105 SIS (6sp)
    'shimano 600 ex with sis index system levers': [{ from: 1987, to: 1987, id: 6149 }], // Road Ace: SL-6208 600EX SIS; the matcher took the 1970-80 Shimano 600
    // 1986 Raleigh (US).
    'suntour cyclone': null, // Supercourse: LD-3700 / LD-3750 / LD-3800 (1985-87) all fit; the matcher took the 1988-89 Cyclone 5000/7000/9000
    'suntour superbe pro': [{ from: 1983, to: 1986, id: 6301 }], // Prestige: LD-4650 Superbe Pro (1983-86), as the 1985 pick; matcher took the 1991 row
    'shimano 600': [{ to: 1985, id: 6138 }, { from: 1986, to: 1987, id: 6148 }], // Competition: SL-6207 600EX (1984-87); the exact-title row is the 1970-80 Shimano 600
    'thumb shifters': null, // Teton / Grand Mesa: generic text, hit the SunTour XM01 thumb shifter
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano dura ace sis': [{ from: 1989, to: 1998, id: 6166 }], // SL-7402 (8sp)
    'shimano ultegra sis': [{ from: 1988, to: 1992, id: 6144 }], // SL-6400, 600 Ultegra SIS
    'shimano exage 500ex sis': [{ from: 1990, to: 1994, id: 6176 }], // SL-A500
    'shimano m200gs rapidfire': [{ from: 1990, to: 1992, id: 7597 }], // SL-M200, 200GS
    'campagnolo chorus syncro 2': [{ from: 1988, to: 1991, id: 7027 }], // A281 Chorus levers with dual-mode Syncro, as 1988 Bianchi
    'campagnolo athena syncro 2': null, // matcher took the 1992-95 Athena Ergopower; no Athena downtube row
    'suntour accushift plus command shifter': [{ from: 1990, to: 1990, id: 6268 }], // SunTour Command (6 & 7 speed)
    // SL-XP10 X-Press (XC-Pro / XC-Comp) on Project 7 / Grizzly, and the under-bar levers on
    // Nyala / Osprey; X-1 / XCT bikes have no 1990 row. One key: a second, unscoped entry for
    // Nyala / Osprey further up this object was silently overridden by this one.
    'suntour accushift plus x press': [
      { bike: 'Project 7', from: 1990, to: 1990, id: 6312 },
      { bike: 'Grizzly', from: 1990, to: 1990, id: 6312 },
      { bike: 'Nyala', from: 1990, to: 1990, id: 6312 },
      { bike: 'Osprey', from: 1990, to: 1990, id: 6312 },
    ],
    'suntour radius accushift plus': [{ from: 1990, to: 1992, id: 6291 }], // SL-RA00, Radius
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'shimano 600 ultegra sis': 6144, // Shimano SL-6400, 600 Ultegra SIS
    'campagnolo chorus syncro': 7027, // Campagnolo Chorus levers (Dual-Mode Syncro inserts)
    // 1978 Raleigh (US, ebykr scan).
    'positron stem shifters': 7436, // Record FFS/PPS: Shimano LC-410 / SL-P211, Positron Stem (1977-81)
    // 1980 Peugeot (NL) PY 10 LC: bare "Simplex SLJ" down-tube levers, read as the twin lever (a judgement:
    // the PY 10 had a pair; single SLJ5005 is the other choice).
    'simplex slj': [{ from: 1975, to: 1981, id: 7298 }], // Simplex SLJ5007
    // 1981 Peugeot PX 10 S / PSV 10: bare "Simplex SJ" levers by year (version-range check 2026-10-26).
    'simplex sj': [{ from: 1979, to: 1982, id: 6210 }, { from: 1984, to: 1990, id: 6211 }], // Simplex SJ (1st type) / (3rd type)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    // Substring-hits the generic "Shimano 600" row; the AX lever is one of
    // four SL-63xx variants (clamp / braze-on A / B / oval) and the table doesn't say.
    'shimano 600 ax top mounted direct fit levers': null, // Road Ace
    'suntour alpha 5000 accushift': 7859, // SunTour SL-5000-BS / CS / CP, alpha-5000 (AccuShift leaflet c. 1987)
    'suntour accushift (alpha 5000 front derailleur)': 7859,
    // 1974 / 75 Motobecane: shifter halves split out of the Derailleur cells;
    // the SunTour levers are dated by the '73-'75 Products catalogues. The
    // Simplex Prestige stem lever has no 1970s row, so it stays unlinked.
    'sun tour stem power shifter': 6263, // SunTour 3080, PUB-10
    'sun tour down tube ratchet shifter': 8056, // SunTour 3553, PDL-M
    'sun tour down tube ratchet shifters': 8056,
    'huret challenger stem shifter': 6073, // Huret Challenger levers 1725-1782 (down tube / stem), 1975
    // SunTour No. 61 (Sep 1983): UB-10 is the UBN-10 stem lever LD-3000 (1985 Raleigh)
    'suntour ub 10 stem mount': 6288, // SunTour LD-3000, UB-10 / UBN-10 (stem)
    'suntour ub 10': 6288,
    'shimano 600 sis': [{ from: 1986, to: 1987, id: 6149 }], // 1987 Bianchi: Shimano SL-6208, 600EX SIS
    'shimano dura ace sis 7': [{ from: 1987, id: 6165 }], // Shimano SL-7401, Dura-Ace SIS (7sp)
    'rapidfire plus ct15': 7733, // 1993 Bianchi, from the Jul 1992 manual: Shimano ST-CT10 / ST-CT15, Altus C10
    // 1987 Bianchi Limited/Squadra "600 SIS": SL-6208 is now catalogue-dated
    // 1986-87 as the 600EX SIS lever (was a 1980 velobase date, so unlinked).
    // 1987 Bianchi. The catalog's "levers" are the down-tube shifters.
    'campagnolo c record': [{ to: 1986, id: 5969 }, { from: 1987, id: 5970 }], // C-Record Friction (1985-91) / Retro-Friction 2nd gen (1987-91); 1984 De Rosa row fixed by one-off UPDATE
    'c record levers': 5970,
    'shimano 105 sis': [{ to: 1989, id: 6130 }, { from: 1990, to: 1993, id: 6134 }], // SL-1050 105 (6sp) / SL-1055-BCAI 105SC (1990 Bianchi Alfana)
    'suntour cyclone 7000 barcon': 6280, // SunTour Cyclone 5000/7000/9000
    // 1993 Bianchi (down-tube and thumb shifters).
    'campagnolo chorus 8 speed downtube shift levers': 5976, // Campagnolo Chorus Friction - Graphite finish
    'shimano rx100 gs sis': 6189, // Shimano SL-A550, RX100
    'deore xt thumb shifters': 6160, // Shimano SL-M732, Deore XT M730
    // 1993 Bianchi Volpe: SunTour's only AccuShift Plus bar-end lever in the 1992 catalogue; year_to extended to 1993 on this bike.
    'barcon lever accushift plus': 7976, // SunTour SL-BC01-R7 / SL-BC01-L, Bar-End Control (Superbe Pro)
    // 1985 Raleigh (Sheldon Brown scan).
    'shimano model 105': 6132, // Shimano SL-A105, 105 Golden Arrow
    'shimano z401 down tube': 6194, // Shimano SL-Z401, Z-Series
    'shimano z408': 6195, // Shimano SL-Z408, Z-Series
    'shimano z408 down tube': 6195, // Shimano SL-Z408, Z-Series
    'shimano z408 down tube braze on': 6195, // Shimano SL-Z408, Z-Series
    'shimano xt fingertip shifters': 6158, // Shimano SL-M700, Deore XT (1983-86)
    'suntour fingertip ld 2800': 6307, // SunTour LD-2800 Power Thumb Shifter
  },
  'Shifting Brake Levers': {
    'shimano at10 sis': 7722, // 1993 Bianchi, from the Jul 1992 manual: Shimano ST-AT10, Altus A10
    // 1993 Bianchi (integrated levers; the Shifters label maps to both
    // categories). EC-12RE CG was fitted to both Record and Chorus in the 1993 range (row 6345 description).
    'campagnolo record 8 speed ergopower': 6345, // Campagnolo EC-12RE CG, Record
    'campagnolo chorus 8 speed ergopower': 6345, // Campagnolo EC-12RE CG, Record (Chorus used the same lever)
    'shimano dura ace sti': 6365, // Shimano ST-7400, Dura-Ace (Dual Control)
    'shimano ultegra sti': 6358, // Shimano ST-6400, 600 Ultegra (Dual Control)
    'shimano 105 sti': 6357, // Shimano ST-1055, 105SC (Dual Control)
  },
  'Brake Levers': {
    // 1987 Colnago Junior 105 / Junior SIS 600 (Catalogo generale 1987).
    'shimano 105': [{ bike: 'Junior 105', from: 1987, to: 1987, id: 406 }], // BL-1050, SLR 105 (1987-89)
    'shimano 600 sis': [{ bike: 'Junior SIS 600', from: 1987, to: 1987, id: 421 }], // BL-6208, 600EX (1986-88)
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    "campagnolo croce d'aune": [{ from: 1987, to: 1991, id: 223 }],
    'shimano deore xt sis': [{ from: 1987, to: 1990, id: 429 }], // BL-M730
    'weinmann 144 1': 7769, // 1982 Peugeot: Weinmann AG No. 144 / 144-1 Professional
    'weinmann carrera 400': 493, // 1982 Peugeot PX 10 DU: Weinmann No. 185 (Carrera) levers, 1980-83
    'mafac dural promotion drilled': 347, // 1980 Peugeot (NL) PFN 10: "geperforeerde" Promotion = Perfo; the plain PBN 10 one stays unlinked
    'mafac dural course drilled rubber hoods and adjusters': 357, // 1980 Peugeot (NL) PKN / PVN 10: MAFAC Course, as the 1979 tandems
    'dia compe 165': [{ from: 1986, to: 1986, id: 8872 }], // 1986 Raleigh Technium 440 USA: Dia-Compe 163 / 165 / 169 / 195 extension lever sets
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano ultegra aero': [{ from: 1988, to: 1990, id: 416 }], // BL-6401, 600 Ultegra (aero)
    'shimano 105 aero': [{ from: 1990, to: 1993, id: 411 }], // BL-1055, 105SC
    'shimano exage 400ex aero': [{ from: 1989, to: 1994, id: 441 }], // BL-A351, Exage Action / 400EX (aero)
    'shimano deore xt 2 finger': [{ from: 1989, to: 1993, id: 430 }], // BL-M732 / M733
    'shimano deore dx 2 finger': [{ from: 1989, to: 1993, id: 425 }], // BL-MT63 (2-finger)
    'suntour xc pro 2 finger': [{ from: 1990, to: 1992, id: 469 }], // BL-XP00
    'suntour gpx aero': [{ from: 1989, to: 1991, id: 456 }], // BL-GP00, GPX (aero)
    'gpx aero': [{ from: 1989, to: 1991, id: 456 }], // BL-GP00, GPX (aero) — Axis
    'campagnolo athena aero': [{ from: 1988, to: 1994, id: 211 }], // BL-02AT, Athena
    'dia compe radius aero': [{ from: 1990, to: 1992, id: 457 }], // SunTour BL-RA00, Radius (Dia-Compe)
    // 1985 Raleigh (Alyeska, Kodiak, Olympian, Marathon, Pursuit) and 1985 Bianchi (Strada, Rekord 26, Randonneur 700):
    // the 1986 Dia-Compe catalogue (complete edition, data_source 209) names these levers in grouped rows, so the
    // matcher cannot reach them by substring.
    'dia compe 161 gum hoods': [{ from: 1984, to: 1986, id: 8866 }], // 161 in the standard (no hood) row; the hoods are separate rubber covers
    'dia compe 161 levers with gum hoods': [{ from: 1984, to: 1986, id: 8866 }],
    // 164 = 161 + 166 extension lever; the catalogue lists only the Compe-G version 164G (161G + 166, 140 g). A judgement.
    'dia compe 164 with extension levers': [{ from: 1984, to: 1986, id: 8873 }], // Dia-Compe 164G, extension lever set
    'dia compe ngc200': [{ from: 1984, to: 1986, id: 8861 }], // Dia-Compe NGC200 / NGC210 / NGC212, New Gran Compe
    // "GC200" is not a 1986 model name; NGC200 is the 24.0mm lever (105g) that goes with the GC500 / NGC brakes. A judgement.
    'dia compe gc200': [{ from: 1984, to: 1986, id: 8861 }],
    // 1988 Bianchi US catalogue (saarf.london, dated 1986 there; Chorus / 600 Ultegra / Victory S3 date it 1988).
    'shimano 600 ultegra': 7217, // Shimano BL-6400, 600 Ultegra (base model; the aero BL-6401 is not named)
    // 1982 Bianchi US racing brochure (saarf.london).
    'campagnolo gran sport drilled': 209, // 1040/1A, Nuovo Gran Sport ("Gran Sport brakes with drilled-out levers")
    // c. 1984 De Rosa (ebykr scan).
    'campagnolo c record': [{ to: 1986, id: 212 }, { from: 1987, id: 214 }], // 0118065 first gen (1985-86, as Cinelli / Colnago) / Corsa Record with Power Grade (1987-91)
    // 1979 Peugeot: the MAFAC 1976 catalogue names its forged racing lever "poignée course".
    'mafac course': 357, // MAFAC Course 419 / 429, Competition (the catalogue's CB/CS dural racing lever)
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo record': [{ to: 1984, id: 226 }], // 2030, Nuovo Record (1967-84); the bare "Campagnolo Record" row the matcher hits is 1994
    'campagnolo gran sport': 209, // 1040/1A, Nuovo Gran Sport (1970-84)
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': 212, // 0118065, C-Record first generation (1985-86)
    'campagnolo super record 30nnale': 231, // 4062 post-83
    // 1986 Cinelli groupset fan-out.
    'campagnolo super record': [{ to: 1982, id: 232 }, { from: 1983, id: 231 }], // 4062 pre-'83 globe-logo hoods (1974-83; 1979 Colnago) / post-83 shield-logo hoods (1983-87; 1986 Cinelli, Colnago)
    'campagnolo victory': 235, // Victory levers (1984-87)
    'campagnolo record corsa': 212, // 0118065, C-Record first generation (1985-86)
    // 1985 Raleigh lever halves (split out of the Brakes cells). 161 / 164 /
    // 281 have no DB row yet.
    'dia compe agc 250': 279, // Dia-Compe AGC250, Aero Compe
    'dia compe 152 gum hoods': 271, // Dia-Compe 152 (Double Slot Drilled)
    'dia compe 281 levers': 8113, // Dia-Compe 281 / 281M, mountain bike levers (1986 catalogue)
    'shimano z levers with gum hoods': 410, // Shimano BL-Z306-105, 105 Golden Arrow
    'shimano deore sis': [{ from: 1987, to: 1989, id: 427 }], // 1987 Colnago Master Mountain Bike: BL-MT60, Deore MT60 Series
  },
  Pedals: {
    'suntour cyclone': 4002, // 1986 Raleigh: SunTour PL-5300, Cyclone (SunTour linking pass 2026-10-30)
    'suntour xc 11 alloy bear trap': 4015, // 1986 Peugeot (US): SunTour PL-5100, XC-II
    'suntour xcii alloy': 4015, // 1986 Raleigh: PL-5100, XC-II
    'suntour xc ii light alloy beartrap with cr mo axle': 4015, // 1987 Raleigh: PL-5100, XC-II
    'sun tour road vx alloy': 4014, // 1980 Raleigh: SunTour PL-1500, VX
    'shimano pd 6207; toe clips and straps': 3961, // 1986 Peugeot (FR): Shimano PD-6207, 600EX (Shimano exact-model links 2026-10-30)
    'shimano dural pd 6207; toe clips and straps': 3961, // 1986 Peugeot (FR)
    'shimano 600ex sealed mechanism light alloy': 3961, // 1987 Raleigh: PD-6207, 600EX (row 1984-86)
    'campagnolo gran sport reflector with toe clips and straps': 3688, // 1981 Raleigh Competition GS: Campagnolo 3700, (Nuovo) Gran Sport (// linkCoverage pass 2026-10-30)
    'campagnolo chorus; toe clips; straps': 3700, // 1987 Peugeot (FR) Chorus
    'campagnolo victory; toe clips; straps': 3720, // 1987 Peugeot (FR) Dolomites: 405/000 Victory
    'shimano 105; toe clips; straps': 3953, // 1987 Peugeot (FR) Galaxie / Aspin: PD-1050
    'shimano 6400; toe clips; straps': [{ from: 1987, to: 1993, id: 3958 }], // 1987 Peugeot (FR) Santé (sic) / Puymorens: PD-6400
    'shimano "pd m730" new deore xt': 3967, // 1987 Peugeot (US) Cannon Ball Express: PD-M730
    'shimano pd 6207 toe clips and straps': 3961, // 1986 Peugeot (FR) table PG 10 SH
    'shimano dural pd 6207 toe clips and straps': 3961, // 1986 Peugeot (FR) table PX 10 SH
    'campagnolo super light': 3716, // 1986 Peugeot (US) table PZ 10: the Super Record ("Super Leggero") road pedal, 4021
    // 1982 Battaglin: either/or cell (Cronospecial or Special) names two parts, so no link; Pista Special is the Special (Pista) pedal.
    'gipiemme cronospecial special': null,
    'gipiemme pista special': 3751, // Gipiemme Special (Pista)
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    "campagnolo croce d'aune": [{ from: 1987, to: 1990, id: 3703 }], // B620-A
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'campagnolo super record strada': [{ from: 1974, to: 1988, id: 3716 }], // Barcellona: 4021
    'campagnolo record super leggeri': [{ from: 1971, to: 1988, id: 3709 }], // Super-Leggera: 1037/a Record Strada Superleggeri
    'union': null, // 1981 Kalkhoff: brand only; Union U40 is a model the catalogue doesn't name
    // SR pedals named by model number (rows from the SR Catalog No. 18 pass, data_source 92)
    'sr sp100al alloy': 3922, // 1979 Raleigh Super Course: SP-100AL Silstar quill (1970-82)
    'sr sp100 alloy quill': 3922, // 1986 Raleigh Portage: same quill, row ends 1982 (a judgement)
    'sakae sp 150': 3925, // 1982 Peugeot PX 10 DU / PX 10 S / PSV 10 S: SP-150 (row 1970-80, the only SP-150 row)
    'lyotard 36 rcm with reflector christophe toe clips and straps': null, // 1980 Peugeot (NL) PBN 10: not the 1950-70 "Lyotard 36" row, as 1977
    'lyotard 136 race with reflectors toe clips and straps': 3801, // 1980 Peugeot (NL) PL 8 M: Lyotard 136R, as 1978
    'lyotard 136r with reflectors': 3801, // 1983 Peugeot (CA) UO 9 / PA 60: Lyotard 136R (type 1), as 1978-82
    'spidel 700 dural cage christophe toe clips and lapize straps': 3833, // 1980 Peugeot PRO 10 / PY 10 S: dural cage, as the 1979 'spidel 700 dural course'
    'lyotard 45 ca or atom 600 dural steel cage with christophe toe clips and lapize toe straps': null, // 1977 Peugeot (DE) PS 10/E, PSN 10/E: either / or; the matcher finds 9085 Lyotard 45, but the 45 CA is a different row (3811)
    'lyotard 136 race with toe clips and straps': 3801, // 1978 Peugeot (NL): Lyotard 136R
    'lyotard 36 rcm with christophe toe clips and lapize toe straps': null, // 1977 Peugeot (DE): 36 RCM is not the 1950-70 "Lyotard 36" row the substring matcher finds; no RCM row
    'lyotard 45 ca dural with christophe toe clips and lapize toe straps': 3811, // 1977 Peugeot (DE) PX 10/LE, PXN 10/E: Lyotard 45CA, as 1974
    'sr sp 250': [{ from: 1986, to: 1986, id: 3930 }], // 1986 Raleigh Grand Prix / Supercourse / Technium 480: Sakae/Ringyo SP-250 (undated)
    'sr sp 154 alloy quill': [{ from: 1986, to: 1986, id: 3927 }], // 1986 Raleigh Alyeska / Kodiak: Sakae/Ringyo SP-154 (row dated 1980)
    'chrome plated steel': null, // 1980 Reliant: generic steel cages, not the Spidel/Maillard 700 substring hit
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano new 105 alloy platform': [{ from: 1987, to: 1987, id: 3953 }], // Competition: PD-1050 105
    'lyotard 45 ca with toe clips and straps': 3811, // 1974 Peugeot PX 10 LE / PX 60: Lyotard 45CA (1930-80)
    'rubber block': null, // 1971 Peugeot sports bikes: generic, not the Roger Piel row
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano dura ace clipless': [{ from: 1988, to: 1993, id: 3971 }], // PD-7401
    'shimano 105 clipless': [{ from: 1990, to: 1995, id: 3955 }], // PD-1055, 105SC
    'shimano deore xt': [{ from: 1990, to: 1995, id: 3968 }], // PD-M735
    'shimano deore dx': [{ from: 1990, to: 1993, id: 3964 }], // PD-M650
    'shimano deore lx': [{ from: 1990, to: 1993, id: 7584 }], // PD-M550
    'suntour xc pro': [{ from: 1990, to: 1992, id: 4019 }], // PL-XP01 / XP02 (Grease Guard)
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'sr sp12 platform alloy': 3924, // Competition: Sakae/Ringyo (SR) SP-12AL
    // 1978 Raleigh (US, ebykr scan).
    // The Maillard 1978/79 catalogue row 7246 was merged into 3662 on 2026-10-26.
    'atom 440': 3662, // Super Course: Atom 440
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo superleggero': 3709, // Super Leggera / Campionissimo: 1037/a Record Strada Superleggeri (SL)
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': 3693, // 305/501, C-Record
    'campagnolo triomphe': 3719, // 905/000, Triomphe (1984-86)
    'campagnolo super record 30nnale': 3716, // 4021 Super Record Strada
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'suntour xc ii chrome moly shafts': 4015, // SunTour PL-5100, XC-II (1985 Raleigh; dup 4000 merged)
    'shimano 600': [{ from: 1984, to: 1987, id: 3961 }], // 1987 Bianchi: Shimano PD-6207, 600EX
    'shimano spd 737 clipless': 7666, // 1993 Bianchi, from the Jul 1992 manual: Shimano PD-M737, Deore XT (SPD)
    'shimano rx100': 3977, // Shimano PD-A550, RX100
    // 1973 Raleigh.
    'campagnolo strada': 3708, // Campagnolo 1037, Record Strada
    'campagnolo nuovo record strada': 3708, // 1974 Raleigh International: Campagnolo 1037, Record Strada
    'campagnolo super record titanium spindles light alloy rail': 3716, // 1975 Raleigh Team Professional: Campagnolo 4021, Super Record Strada
    'campagnolo super nuovo record': [{ from: 1974, to: 1985, id: 3716 }], // 1974 Raleigh Team Professional: Campagnolo 4021, Super Record Strada
    'campagnolo super leggera strada': 3709, // Campagnolo 1037/a, Record Strada Superleggeri (SL)
    'campagnolo super leggera pista': 3715, // Campagnolo 1038/a, Record Pista Superleggari (SL)
    // 1974 Motobecane. Without this the only substring hit is the 1983 50th
    // Anniversary pedal.
    'campagnolo record': 3708, // Campagnolo 1037, Record Strada
    // 1981 Kalkhoff.
    'campagnolo super record': 3716, // Campagnolo 4021, Super Record Strada
    'dura ace ex': 3974, // Shimano PD-7200, Dura-Ace EX
    'shimano 600 ax': 3957, // Shimano PD-6300, 600 AX
    // 1984 Bianchi. Bare "Nuovo Record" substring-hits the rare orthopedic
    // variant; the standard NR pedal is the 1037.
    'campagnolo nuovo record': 3708, // Campagnolo 1037, Record Strada
    'campagnolo gran sport': [{ from: 1978, id: 3688 }], // Campagnolo 3700, (Nuovo) Gran Sport
    // 1987 Bianchi. Bare "C Record" substring-hits the Pista pedal.
    'campagnolo c record': 3693, // Campagnolo 305/501, C-Record
    'campagnolo victory': 3720, // Campagnolo 405/000, Victory
    'ofmega master': [{ bike: 'Pista', id: 3880 }, { id: 3879 }], // 1990 Bianchi Pista: Ofmega Master Pista / else Master Strada (Road)
    'shimano 105': [{ to: 1989, id: 3953 }, { from: 1990, id: 3955 }], // PD-1050 / PD-1055 105SC
    'shimano dura ace': [{ from: 1984, to: 1989, id: 3970 }, { from: 1990, id: 3971 }], // PD-7400 / PD-7401
    // 1993 Bianchi ("PM" in the catalog is LOOK's PP series).
    'look pp76': 3791, // LOOK PP76
    'look pp56': 3787, // LOOK "Touring" PP56
    'shimano 1056 clipless': 3956, // Shimano PD-1056, 105SC
    // 1985 Raleigh (Sheldon Brown scan).
    'sr sp 154': 3927, // Sakae/Ringyo (SR) SP-154
    'sr sp154 alloy quill type': 3927, // Sakae/Ringyo (SR) SP-154
    'suntour road vx quill': 4014, // SunTour PL-1500, Vx
    // 1986 Cinelli (Ten Speed Drive Imports).
    'campagnolo sl': 3716, // 4021 Super Record Strada (Superleggeri)
    // 1986 Cinelli groupset fan-out.
    'campagnolo record corsa': 3693, // 305/501, C-Record
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo': [{ to: 1985, id: 3708 }], // 1037 Record Strada, the only Campagnolo road pedal of the period
    'campagnolo track pattern': 3711, // 1038 Record Pista (silver finish, 1971-85)
    // 1979 Peugeot (French catalogue).
    'lyotard dural course with toe clips and straps': 3815, // Lyotard 460D (1970-80), the standard French dural quill
    'lyotard with toe clips and straps': 3815, // Lyotard 460D
    'spidel 700 dural course': 3833, // Spidel/Maillard 700 Black Alloy Cages; "dural" rules out the steel-cage row
    'shimano deore sis': [{ from: 1987, to: 1993, id: 3965 }], // 1987 Colnago Master Mountain Bike: PD-MT60 / PD-MT61, Deore
  },
  'Seat Posts': {
    'suntour xc alloy 300mm': 5935, // 1987 Peugeot (US): SunTour SP-2000, XC (300mm) (SunTour linking pass 2026-10-30)
    // Judgement calls, 2026-10-30 (user's go-ahead).
    'sakae super light alloy with adjusting clamp': 5852, // 1981 Raleigh Super Course: SR RY-P1SL III, Royal-P1 Super Light (1970-82, SR catalogue), not the 1970 velobase 5854
    'suntour alloy pillar and clamp': [{ bike: 'MB 2 Canyon Express', id: 5935 }], // 1984 Peugeot MB 2: SunTour SP-2000, XC (1984-85 ATB post)
    'gipiemme sprint': null, // 1982 Battaglin: type 1 or type 2 (5792 / 5793, undated stubs), nothing to choose on
    'royal alloy': null, // 1983 Peugeot UO 9: SR Royal smooth (5850) or fluted (5851), finish not printed
    'simplex 6164 dural': 5904, // 1987 Peugeot (FR) Perthus / Santé: Simplex SLJ6164
    'campagnolo chorus aero': 5742, // 1987 Peugeot (FR) Chorus: C0R2 Chorus (styled)
    'shimano sp 6207': 5891, // 1987 Peugeot (US) Triathlon: SP-6207, 600EX
    dural: null, // 1986 Peugeot (FR) table: bare material (8 bikes), not the 9962 Strata dural seat pillar
    // 1988 Colnago (Colnago Concept catalogue): Santé, Croce d'Aune, Deore XT SIS and Ofmega groups.
    "campagnolo croce d'aune": [{ from: 1987, to: 1991, id: 5742 }], // C0R2 (fitted to Athena and Croce d'Aune)
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'campagnolo record strada': [{ from: 1969, to: 1985, id: 5749 }], // Super-Leggera: 1044 Record
    // 1986 Raleigh: SR CT-P5 (Sakae Laprade). 5857 is the later version (1980-82) vs 5858 early;
    // the CT-P5E cells stay unlinked (no E row).
    'sr ctp 5 laprade alloy micro adjust': 5857,
    'sr cpt 5 laprade micro adjust': 5857,
    'sr laprade ctp5 alloy micro adjust': 5857,
    'sp laprade alloy micro adjust': 5857, // Grand Prix, by the same catalogue's rule
    'sr laprade micro adjust': 5857, // Alyeska / Kodiak (MTBs; may be the longer post, no row for it)
    // 1988 Colnago Master Mountainbike: SP-M730 (row 1989-97; the M730 group dates from 1987).
    'shimano deore xt sis': [{ from: 1987, to: 1997, id: 5892 }],
    'simplex sj4164': 5905, // 1980 Peugeot (NL) PY 10 LC ("all parts Spidel"): Spidel SLJ 4164
    // 1980-81 Peugeot PRO 10 / PY 10 S: the only Spidel post row, and SLJ 4164 is the fluted anodised one
    // (as the 1980 PY 10 LC above).
    'spidel fluted': [{ from: 1980, to: 1981, id: 5905 }],
    'spidel fluted dural': [{ from: 1980, to: 1981, id: 5905 }],
    // 1980 / 1982 Peugeot (NL) PFN / PKN / PVN 10: SR CT-P5 (Sakae Laprade), row 1980-82.
    'laprade sr': [{ from: 1980, to: 1982, id: 5857 }],
    // 1978-80 Raleigh Super Course: the only Raleigh-branded SR post row, Custom-P3 (1970-80).
    'raleigh sr 268mm': [{ from: 1970, to: 1980, id: 5856 }],
    'raleigh sr light alloy 272mm': [{ from: 1970, to: 1980, id: 5856 }],
    // 1978 Peugeot (NL).
    'laprade 505': [{ from: 1970, to: 1979, id: 5815 }], // PY 10 EC: Laprade Brevete 505 (1970-79)
    'laprade 606': [{ from: 1970, to: 1979, id: 5816 }], // PY 10 CP: Laprade Brevete 606 (1970-79)
    'simplex slj 4160': [{ from: 1978, to: 1978, id: 7340 }], // PX 10 LE: Simplex 4160 (1978)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'campagnolo chorus': [{ from: 1987, to: 1991, id: 5742 }], // C0R2, Chorus (matcher took the mid-90s RS)
    'campagnolo athena': [{ from: 1990, to: 1991, id: 5736 }], // SP-10AT (v2)
    'shimano deore xt': [{ from: 1989, to: 1993, id: 5892 }], // SP-M730
    'suntour xc pro': [{ from: 1990, to: 1992, id: 8046 }], // SP-XP00 (row dated 1992)
    'ritchey force directional': [{ from: 1990, to: 1993, id: 8407 }], // Force Directional Seatpost (Mountain)
    'nitto crystal': [{ from: 1989, to: 1990, id: 5827 }], // Nitto S65, Crystal Pillar
    // 1993 Bianchi Super Grizzly: Ritchey's Force Directional (FD) butted
    // post, mountain length (Ritchey 1992 catalogue).
    'ritchey fd': 8407, // Ritchey Force Directional Seatpost (Mountain)
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'sr ctp5 aero single allen bolt adjustment': 5857, // Competition: SR CT-P5, Custom-P5 (Sakae Laprade)
    'sr ctp5 fluted alloy single allen bolt adjustment': 5857, // Corsa
    'sr ctp5 alloy single allen key adjustment': 5857, // Royal
    'sr ctp6 alloy fluted': 5861, // Sirocco: SR CT-P6 / CT-P6C, Custom-P6
    'sakae ctp3 alloy micro adjust': 5855, // Classic / Record Ace: SR CT-P3, Custom-P3
    'shimano 600 ax aero': 5886, // Road Ace: Shimano SP-6300, 600 AX
    // 1978 Raleigh (US, ebykr scan).
    'campagnolo record 272mm': [{ to: 1985, id: 5749 }], // Professional Mk V: 1044 Record
    'campagnolo gran sport 272mm': 5734, // Competition GS: 3800 Gran Sport
    'campagnolo gran sport with clip': 5734, // 1981 Raleigh Canada Competition GS: 3800 Gran Sport
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'sakae p 5': 5857, // Speciale-II / Randonneur 700 / Rekord 26 / Bambina: SR CT-P5, Custom-P5 (Sakae Laprade)
    'sakae p 3': 5855, // Strada: SR CT-P3, Custom-P3 (melt forging)
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo record': [{ to: 1985, id: 5749 }, { from: 1992, to: 1995, id: 7037 }], // 1044, Record (1969-85); 1993 Bianchi MG Team: SP-RE, Record
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': 5738, // A0R2, C-Record aero (as 1986 Cinelli Record Corsa)
    'campagnolo triomphe': 5764, // Victory / Triomphe
    'campagnolo super record 30nnale': 5761, // 4051/1 Nuovo Super Record
    // 1987 Bianchi Trofeo / Limited / Squadra.
    '3ttt rsr': 5717, // 3ttt RSR, Record
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'shimano 600 ax oval': 5886, // Road Ace: Shimano SP-6300, 600 AX (the 1981 Kalkhoff pick)
    'campagnolo strada': 5749, // Team Replica: Campagnolo 1044, Record (as 1982 Nuovo Record pin)
    'sr ctp5 fluted alloy with single allen bolt adjustment': 5857, // Record Ace / Royal / Clubman / Rapide: SR CT-P5, Custom-P5 (Laprade)
    'sr ctp5 aerodynamic alloy with single allen bolt adjustment': 5857, // Competition
    'sr ctp6': 5861, // Royale: SR CT-P6 / CT-P6C, Custom-P6
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'campagnolo nuovo record': [{ to: 1985, id: 5749 }], // Campagnolo 1044, Record
    'campagnolo gran sport': 5734, // Campagnolo 3800, Gran Sport
    // Bare "Campagnolo": the 1044 Record for 70s catalogs; nothing to pick
    // from in the 90s (Krono 1993), so blocked rather than wrong.
    // 1984 Peugeot PZ 10 is a Super Record build (the 4051/1 would be the guess): blocked for that bike.
    'campagnolo': [{ bike: 'PZ 10', id: null }, { to: 1985, id: 5749 }, { bike: 'Krono / Chorus', id: 7041 }, { from: 1990, id: null }], // Campagnolo 1044, Record; 1993 Bianchi Krono / Chorus: SP-CH, Chorus RS (1992-95)
    'campagnolo seat post': [{ to: 1985, id: 5749 }], // 1974 / 75 Motobecane, split out of the Saddle cells
    'campagnolo alloy': [{ to: 1985, id: 5749 }], // 1974 Raleigh: Campagnolo 1044, Record
    'campagnolo super nuovo record': [{ from: 1974, to: 1980, id: 5759 }], // 1974 Raleigh Team Professional: Campagnolo 4051, Super Record
    'shimano dura ace': [{ from: 1990, to: 1993, id: 5893 }, { from: 1994, id: 5895 }], // SP-7400-A / SP-7410 — 1993 Bianchi
    alloy: null, // generic word; substring-hits "Titan alloy"
    // 1981 Kalkhoff.
    'campagnolo super record': [{ to: 1980, id: 5759 }, { from: 1981, id: 5761 }], // 4051 two-bolt to 1980; 4051/1 single-bolt 1980-85 (1981 Kalkhoff row 780 re-pointed 2026-09-28, 1986 Cinelli)
    'shimano 600 ax': 5886, // Shimano SP-6300, 600 AX
    // 1983 Bianchi. "fluted" Campagnolo post of the period is the 1044 NR.
    'campagnolo nuovo record fluted': 5748, // Campagnolo 1044, Nuovo Record (Superlegerro)
    'campagnolo fluted': 5748,
    // 1987 Bianchi (two lengths in the DB; the common 130mm).
    'campagnolo c record': 5737, // Campagnolo C-Record (Aero type, 130mm)
    // 1985 Raleigh (Sheldon Brown scan).
    'sugino sp kc alloy micro adjust': 5928, // Sugino SP-KC
    'sugino sp kc 230mm alloy micro adjust': 5928, // Sugino SP-KC
    'sugino micro adjust model sp ck': 5928, // catalog prints SP-CK for the Sugino SP-KC
    'sugino micro adjust sp ck': 5928, // catalog prints SP-CK for the Sugino SP-KC
    // Seatpost link pass 2026-10-26 (from /linkCoverage).
    'campagnolo 272mm': [{ to: 1985, id: 5749 }], // 1971 Raleigh Professional Mk III / International: 1044 Record
    'sun tour superbe fluted 270mm': 5933, // 1980 Raleigh Superbe: SunTour SP-1000, Superbe (Fluted)
    'sugino spkc': 5928, // 1986 Raleigh Crested Butte: Sugino SP-KC
    'sugino sp kvc 230mm': 5928, // 1986 Raleigh Elkhorn: "KVC" a typo of the 1985 "SP KC 230mm"
    'simplex slj 4164 dural silver anodised 266mm': 7305, // 1977 Peugeot (DE) PY 10/CP: Simplex SLJ4164, row 1978-81, a year early
    // Judgement calls 2026-10-30. Bare "Cronosprint": the main group's post (Aero and Economy were named groups).
    'gipiemme cronosprint': [{ from: 1980, to: 1991, id: 5789 }], // 1987 Bianchi Giro / Super Leggera: Crono Sprint 600BA (fluted)
    // Peugeot Simplex material-only posts, picked by the bike's Simplex tier: SX group -> SX 1500, SLJ group -> SLJ6164.
    // 1982 PH 12 "Simplex Dural, 24 mm" and 1976 PY 10 "dural, anodised" stay unlinked.
    'simplex aluminium': [
      { bike: 'PX 10 DU', from: 1979, to: 1984, id: 5901 }, // 1982 / 1984 PX 10 DU (SX 610): Simplex SX 1500
      { from: 1984, to: 1989, id: 5904 }, // 1984 PY 10 LS / PRO 10 (SLJ 5500): Simplex SLJ6164
    ],
    'simplex dural': [{ from: 1984, to: 1989, id: 5904 }], // 1984 PY 10 FC (SLJ 6600): Simplex SLJ6164
    'simplex alloy expander binder': [{ from: 1984, to: 1989, id: 5904 }], // 1985 PY 10 FC (SLJ 6600) / PRO 10 (SLJ group): Simplex SLJ6164
    // Unnamed San Marco posts as the plain G.S. (the fluted G.S. Special would be named).
    'san marco dural 266mm': [{ from: 1970, to: 1980, id: 5882 }], // 1977 Peugeot (DE) PS / PSN 10/E: G.S. earlier version
    'san marco lightweight': [{ from: 1970, to: 1980, id: 5882 }], // 1978 Peugeot PS / PSN 10
    'san marco': [{ from: 1981, to: 1988, id: 5883 }], // 1983-84 Bianchi Eco Pista: G.S. later version
    // 1978 Bianchi Rekord/746 "T.T.T. Record": the 70s Mod. Record pillar (5716 extended 1975 -> 1978 on this catalogue; RSR from 1980).
    '3ttt record': [{ from: 1970, to: 1978, id: 5716 }],
    // 1986 Cinelli (Ten Speed Drive Imports).
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 5764, // Victory / Triomphe
    'campagnolo record corsa': 5738, // A0R2, C-Record aero
  },
  // Brand-level rows the single-word-title rule now refuses by substring,
  // but where the DB's brand entry genuinely is the product being described.
  Chains: {
    'suntour ap 12 chain': 9727, // 1993 Bianchi: SunTour CH-AP12 (SunTour linking pass 2026-10-30)
    'sedis 110 links delta treated': 1402, // 1980 Peugeot PX 18 M / MC, PK 65: Sedisport Delta (// linkCoverage pass 2026-10-30)
    'sedisport black 1 2 x 3 32': [{ from: 1980, id: 1402 }], // 1987 Peugeot (US): as 'sedisport black'
    'sedisport silver 1 2 x 3 32': [{ from: 1980, id: 1402 }], // 1987 Peugeot (US): as 'sedisport silver'
    'sedisport nickel plated': [{ from: 1980, id: 1402 }], // 1986-87 Peugeot: finish variant of 'sedisport'
    'regina extra super corsa': 1376, // 1978 Bianchi Rekord 745: Regina Extra 50 Corsa, the Extra race-grade chain (a judgement, 2026-10-30)
    'regina extra super corsa 1 2" x 3 32"': 1376, // 1981 Bianchi Sprint / Rekord Strada
    'shimano deore': null, // 1987 Peugeot (FR) Normandie: the hit is the 1990s Deore LX chain
    'shimano cn 6120 1 2 x 3 32': [{ from: 1978, to: 1987, id: 7473 }], // 1987 Peugeot (US) Triathlon: QA-410 / CN-6120, 600 UG
    'did': null, // 1987 Bianchi Sport SX: brand only; the hit is the bare D.I.D brand row 1355
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'regina extra oro': [{ from: 1970, to: 1980, id: 1382 }], // Rekord/748, /746: Regina Extra 50 Oro (1385 "Extra Oro (center drilled)" merged into it 2026-10-26)
    'union': null, // 1981 Kalkhoff: brand only; Union 486 is a model the catalogue doesn't name
    'sedissport 108 links delta treated': 1402, // 1980 Peugeot (NL): Sedis Sedisport Delta (1980)
    'sedisport 114 links delta treated': 1402, // 1982 Peugeot PBN / PFN / PKN / PVN / PXN 10: as the 108-link Delta
    '112 links delta treated': 1402, // 1980 Peugeot PL 8 M: as the 108 / 114-link Delta
    'sedisport delta treated': 1402, // 1982 Peugeot PL 8 M: as above
    'sedisport 112 links': 1402, // 1982 Peugeot PX 8 M: as bare 'sedisport' (1402 from 1980)
    'shimano cn 6208 silver': 7232, // 1990 Bianchi Virata: CN-6208 600EX (row dated 1986-89, the model is exact)
    'sedis sedi color ½" x 3 32"': 8764, // 1979-80 Raleigh Professional Mk V: Sedis Sedicolor (catalogue splits the name)
    'sedisport narrow': [{ from: 1980, id: 1402 }], // 1983 Raleigh Europa / Record Sprint / Supersport 12: as bare 'sedisport' (1402 from 1980)
    // Same part as an already-linked sibling, with a qualifier only (2026-10-20 near-match audit).
    'suntour z': [{ from: 1982, to: 1989, id: 7821 }], // 1987 Raleigh Maverick 18 Pro; as "Suntour Z Silver/Black" and "Gold" (TZ-6000)
    'sedisport black': [{ from: 1980, id: 1402 }], // 1987 Raleigh tourers; colour variant of 'sedisport' (1402 from 1980)
    'sedisport gold': [{ from: 1980, id: 1402 }], // 1983 Raleigh Team Replica 12
    'sedisport silver': [{ from: 1980, id: 1402 }], // 1986 Peugeot (US) table: colour variant of 'sedisport', as 'sedisport black'
    // Bare "Sedisport": two rows now exist (8765 Sedis Sedisport 1979, 1402 Sedisport Delta 1980), so the matcher sees an ambiguity. 1402 is the pick already in the DB for
    // the 1984 Raleigh and 1987 Bianchi (Delta replaced the plain Sedisport from 1980), so 1980+ stays on it; earlier years keep the matcher result.
    'sedisport': [{ from: 1980, id: 1402 }],
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano cn 6400 silver': [{ from: 1988, to: 1993, id: 1406 }], // CN-6400
    'shimano cn hg90 silver': [{ from: 1990, to: 1993, id: 7566 }], // CN-HG90
    'shimano cn hg70 black': [{ from: 1990, to: 1993, id: 7568 }], // CN-HG70
    'shimano cn hg70 silver black': [{ from: 1990, to: 1993, id: 7568 }], // CN-HG70
    'shimano cn ug50 black': [{ from: 1989, to: 1993, id: 7614 }], // CN-UG50
    'suntour ap00 silver': [{ from: 1980, to: 1990, id: 1418 }], // CH-AP00 (Silver)
    'suntour ap10 black': [{ from: 1990, to: 1990, id: 1419 }], // CH-AP10 Accushift Plus
    'suntour gpx': [{ from: 1989, to: 1990, id: 7783 }], // CH-GP00, GPX
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'everest special oro 1 2" x 3 32"': 1365, // Everest Serie Special Oro
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'suntour z silver black': 7821, // SunTour TZ-6000, Z chain (as 1983)
    'suntour z silver': 7821,
    'suntour z gold': 7821,
    'sun tour z silver': 7821,
    'suntour ultra 6 narrow': 7820, // Record Ace: SunTour UC-6000, Ultra-6 chain
    'shimano uniglide silver black': 7450, // Road Ace: Shimano QA-200 / CN-UG20, Uniglide-II
    // c. 1984 De Rosa (ebykr scan).
    'regina cx s': 1384, // Regina CX / CX-S (1980-90), as the 1986 Cinelli CXS
    // 1978 Raleigh (US, ebykr scan).
    // Extra 50 Oro (1970-80) for the 1978 Professional Mk V, as the 1973-75 Raleighs; the undated Oro BX from 1981 keeps the 1986 Cinelli pick.
    'regina oro': [{ to: 1984, id: 1382 }, { from: 1985, id: 1380 }], // Regina Extra 50 Oro (1970-92) / Regina Oro BX (1985); the 1982 Battaglin Oro is not the BX
    'shimano uniglide': 7450, // Record FFS/PPS: Shimano QA-200 / CN-UG20, Uniglide-II (1977-89), as the 1983 Road Ace
    // 1979 Colnago.
    'regina extra record': 1381, // Regina Extra 50 Record (1970-80)
    // 1986 Colnago. Everest chains were made by Fossati & C., so the catalogue's "Fossati Racing Cromo" is the Everest Racing Cromo row.
    'fossati racing cromo': 1361, // Everest Modello Racing Cromo
    'everest special cromo': 1364, // Everest Serie Special (silver); the Oro variant is gold, not chrome
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'sun tour ultra 6 narrow': 7820, // Record Ace / Clubman: SunTour UC-6000, Ultra-6 chain
    'sun tour ultra 6 ½" x 3 32" narrow': 7820, // 1980 Superbe / Touring 14 / Super Course: Ultra-6 chain, as 1979
    'sun tour z silver black': 7821, // Gran Sport / Competition: SunTour TZ-6000, Z chain
    'sun tour z gold': 7821, // Rapide
    'shimano uniglide black silver': 7450, // Road Ace: Shimano QA-200 / CN-UG20, Uniglide-II (1977-89)
    'uniglide 1 2" x 3 32"': 7450, // Silhouette
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'sun tour ultra 6': 7820, // SunTour UC-6000, Ultra-6 chain (1978-85)
    'shimano ug 2': 7450, // 1987 Bianchi: Shimano QA-200 / CN-UG20, Uniglide-II
    // Bare "Shimano" was exact-matching component_id 1403, a bare-brand
    // placeholder wrongly dated 1980-1980 — linking 1987 Bianchis to a
    // "1980 Shimano" chain with no real model behind it. Block it.
    shimano: null,
    'iris 1 2 x 3 32': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    // 1981 Kalkhoff: no chain row is titled EX; the CN-7100 Uniglide is the
    // Dura-Ace chain of the EX era.
    'dura ace ex': 7472, // Shimano QA-110 / CN-7100, Dura-Ace UG (was 1411, merged 1981 catalogue)
    // 1993 Bianchi.
    rohloff: 1396, // Rohloff SLT 99 (Road)
    'shimano dura ace chain': 1414, // Shimano CN-7401, Dura-Ace 7400
    // 1986 Cinelli (Ten Speed Drive Imports).
    'regina cxs': 1384, // Regina CX / CX-S
    // 1973 Raleigh. The Regina Extra C/7 109/E catalogue's only 1/2 x 3/32
    // «oro quality» chain is the 50 oro; four oro rows otherwise compete.
    '1 2" x 3 32" regina oro': 1382, // Regina Extra 50 Oro
    '1 2" x 3 32" regina d\'oro gold': 1382, // 1974 Raleigh Professional Mk IV: Regina Extra 50 Oro
    '1 2" x 3 32" regina d\'oro': 1382, // 1975 Raleigh Team Professional / Professional Mk IV
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'renolds': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
  },
  Cassettes: {
    // 1990 Bianchi US catalogue: SunTour AccuShift Plus 7-speed cassettes.
    'suntour accushift plus black 12 30t 7 speed': [{ from: 1990, to: 1992, id: 1216 }], // CS-AP00-S7 / K7, 7-speed
    'suntour accushift plus black 13 23t 7 speed': [{ from: 1990, to: 1992, id: 1216 }],
    'suntour accushift plus black 14 28t 7 speed': [{ from: 1990, to: 1992, id: 1216 }],
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano hyperglide silver 13 23t 8 speed': [{ from: 1990, to: 1996, id: 1208 }], // CS-7401, Dura-Ace 8sp HG
    'shimano hyperglide silver 12 28t 7 speed': [{ from: 1990, to: 1994, id: 1202 }], // CS-HG90 (Deore XT)
    'shimano hyperglide silver 13 30t 7 speed': [{ from: 1990, to: 1993, id: 7567 }], // CS-HG70 (LX / DX bikes)
    'shimano hyperglide black 14 28t 7 speed': [{ from: 1990, to: 1990, id: 7601 }], // CS-HG20, 200GS
    'shimano hyperglide black 13 23t 7 speed': [{ from: 1990, to: 1993, id: 1195 }], // CS-HG50, Exage
    'shimano hyperglide silver 13 23t 7 speed': [
      { bike: 'Virata', from: 1990, to: 1990, id: 1202 }, // CS-HG90 (Deore XT / 600 Ultegra)
      { from: 1990, to: 1990, id: 7567 }, // Alfana (105): CS-HG70, silver and listed for 105SC (HG50 is brown); judgement call 2026-10-30
    ],
    'shimano xtr 12 28t 8 speed': 7668, // 1993 Bianchi, from the Jul 1992 manual: Shimano CS-M900-8, XTR (Q 12-28T)
    // 1993 Bianchi ("cassette" noun stripped from the CSV).
    'campagnolo 12 23t 8 speed': 1186, // Campagnolo Record Exa-Drive (8sp)
    'campagnolo 12 23 8 speed': 1186,
    'shimano dura ace 12 23t 8 speed': 1205, // Shimano CS-7400-8, Dura-Ace 7400 (Uniglide)
    'suntour powerflo 11 28t 8 speed': 1220, // SunTour CS-AP20-S8, XC Comp
    'suntour powerflo 12 30t 7 speed': 1221, // SunTour CS-AP10-S7 / -K7, PowerFlo 7-speed (1992 catalogue)
    // 1993 Bianchi bare "Hyperglide" 8-speed values: each is on one bike only, and the
    // bike's group plus the catalogued sprocket range pick the cassette. The 6 / 7-speed
    // values are shared across bikes of different groups, so they link per bike by group
    // (the 1990 rule: XT -> HG90, LX / DX / RX100 -> HG70, Exage -> HG50).
    'shimano hyperglide 12 23t 8 speed': 7671, // SBX / Ultegra-STI: Shimano CS-HG90-8, 600 Ultegra (U 12-23T)
    'shimano hyperglide 13 23t 8 speed': 7762, // Virata (105 STI): Shimano CS-HG70-8, 105SC (T 13-23T)
    'shimano hyperglide 12 28t 8 speed': 7668, // Super Grizzly (XTR): Shimano CS-M900-8, XTR (Q 12-28T)
    'shimano hyperglide 12 28t 7 speed': [
      { bike: 'Grizzly', from: 1993, to: 1993, id: 1202 }, // Deore XT: CS-HG90
      { bike: 'Peregrine', from: 1993, to: 1993, id: 7567 }, // Deore LX: CS-HG70
      { bike: 'Denali', from: 1993, to: 1993, id: 7567 }, // Deore DX: CS-HG70
    ],
    'shimano hyperglide 13 28t 7 speed': [{ bike: 'Eros', from: 1993, to: 1993, id: 7567 }], // RX100: CS-HG70; the Europa (AT10) has no row
    'shimano hyperglide 13 30t 7 speed': [{ from: 1993, to: 1993, id: 1195 }], // Ibex / Osprey / Project 5 / Project 3, all Exage LT / ES: CS-HG50
  },
  Freewheels: {
    'suntour pn 6s 6 speed 14 x 17 x 21 x 24 x 28 x 32t silver': 7813, // 1986 Peugeot (US) Canyon Express: SunTour PN-6000 / PS-6000, Perfect (6-speed) (// linkCoverage pass 2026-10-30)
    '6 speed 13x21 helicomatic': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (FR) table: bare Helicomatic = 600 SH, as 1986
    '6 speed 13x24 helicomatic': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (FR) table
    '6 speed 14x24 helicomatic': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (FR) table
    '6 speed 14x28 helicomatic': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (FR) table
    '5 speed 14x24 helicomatic': [{ from: 1980, to: 1987, id: 8130 }], // 1987 Peugeot (FR) table: 600 SH 5-speed
    '5 speed 14x28 helicomatic': [{ from: 1980, to: 1987, id: 8130 }], // 1987 Peugeot (FR) table
    '6 speed maillard 700 13x21': [{ from: 1987, to: 1987, id: 2114 }], // 1987 Peugeot (FR) Chorus: straight 6-speed 700 Course, as the 1984 GB pick
    '6 speed maillard 700 13x18': [{ from: 1987, to: 1987, id: 2114 }], // 1987 Peugeot (FR) Perthus: as above
    '6 speed helicomatic 13 x 15 x 17 x 19 x 21 x 24t': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (US): bare Helicomatic = 600 SH, as 1986
    '6 speed helico maillard': [{ from: 1980, to: 1987, id: 8131 }], // 1987 Peugeot (US) Ventoux
    'helicomatic 5 speed 13 x 14 x 15 x 17 x 19 x 21t silver': [{ from: 1980, to: 1987, id: 8130 }], // 1987 Peugeot (US) Mont Cenis: 600 SH 5-speed
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'regina extra oro 5 speed': [{ from: 1970, to: 1978, id: 2182 }], // Rekord/748
    'regina extra 5 speed': [{ from: 1970, to: 1978, id: 8171 }], // Rekord/746: Regina Extra (5 speed)
    // 1980 Peugeot (NL): Normandy 5-speed (1979-82 row); the 6-speed 14-24 Normandy has no row before 1982
    'maillard normandy 14 17 19 21 24': [{ from: 1979, to: 1982, id: 8125 }],
    'maillard normandy 14 16 18 20 23': [{ from: 1979, to: 1982, id: 8125 }],
    'maillard 700 13 14 15 17 19 21': 2123, // PY 10 LC: Maillard 700 (6 speed)
    '5 speed': null, // 1982 Peugeot: bare speed count; matched a Shimano F200-F512 row
    '600 sh 13 21': 8131, // 1982 Peugeot: Maillard 600 SH 6-speed compact (1982)
    // Peugeot 1982-84 catalogues print the freewheel as "Maillard Helicomatic". The 1982 Maillard
    // "Freewheels" catalogue (data_source 103) has the 600 SH as the "original equipment model" and
    // the 700 SH as the "racing model", so a plain Helicomatic on a complete bike is the 600 SH. Rows
    // are dated 1982 only; ranged 1980-84 so the 1983 / 1984 bikes link (a year or two off, as before).
    // The 1985 and 1986 Peugeot catalogues print the same wordings, so these run to 1986.
    'maillard helicomatic 6 speed 13 21': [{ from: 1980, to: 1986, id: 8131 }],
    'maillard helicomatic 6 speed 13 24': [{ from: 1980, to: 1984, id: 8131 }],
    'maillard helicomatic 6 speed 14 24': [{ from: 1980, to: 1986, id: 8131 }],
    'maillard helicomatic 6 speed 13 21 zinc plated': [{ from: 1980, to: 1986, id: 8131 }], // 1986 Peugeot (FR) table
    'maillard helicomatic 5 speed 14 21 zinc plated': [{ from: 1980, to: 1986, id: 8130 }], // 1986 Peugeot (FR) table PH 513
    'maillard 700 super plus 13 x 14 x 15 x 17 x 19 x 21t': 2127, // 1986 Peugeot (US) PX: Maillard 700 Course Super Plus
    'maillard 700 13 x 14 x 17 x 19 x 21t silver': 2113, // 1986 Peugeot (US) PZ 10: 700 Course, 5 speed
    // 1986 Peugeot (US) table: bare "Helicomatic" with its sprockets, the same 600 SH
    'helicomatic 6 speed 13 x 14 x 15 x 17 x 19 x 21t silver': [{ from: 1980, to: 1986, id: 8131 }],
    'helicomatic 6 speed 13 x 15 x 17 x 19 x 21 x 24t silver': [{ from: 1980, to: 1986, id: 8131 }],
    'helicomatic 6 speed 13 x 15 x 17 x 19 x 22 x 26t silver': [{ from: 1980, to: 1986, id: 8131 }],
    'helicomatic 6 speed 13 x 15 x 17 x 20 x 24 x 28t': [{ from: 1980, to: 1986, id: 8131 }],
    'helicomatic 6 speed 14 x 15 x 17 x 19 x 21 x 24t': [{ from: 1980, to: 1986, id: 8131 }],
    'atom 6 speed helicomatic 13 x 15 x 17 x 20 x 24 x 28t': [{ from: 1980, to: 1986, id: 8131 }],
    'maillard helicomatic 13 14 15 17 19 21': [{ from: 1980, to: 1984, id: 8131 }],
    'maillard helicomatic 13 15 17 20 24 28': [{ from: 1980, to: 1984, id: 8131 }],
    'maillard helicomatic 14 16 18 20 23 26': [{ from: 1980, to: 1984, id: 8131 }],
    'maillard helicomatic cassette 14 15 17 19 21 24': [{ from: 1980, to: 1984, id: 8131 }],
    'maillard helicomatic gold 14 15 17 19 21 24t': [{ from: 1980, to: 1984, id: 8131 }], // 1984 Raleigh Record Sprint 12
    'maillard helicomatic silver 14 15 17 19 21 24t': [{ from: 1980, to: 1984, id: 8131 }], // 1984 Raleigh Quasar 12
    '6 speed sh 13 21': [{ from: 1980, to: 1984, id: 8131 }], // 1984 Peugeot (GB) PX 10 DU
    'maillard helicomatic 5 speed 14 24': [{ from: 1980, to: 1986, id: 8130 }], // 600 SH 5-speed
    'maillard helicomatic 5 speed 14 28': [{ from: 1980, to: 1984, id: 8130 }],
    'maillard 700 sh 13 14 15 17 19 21': [{ from: 1980, to: 1984, id: 8132 }], // 1983 Peugeot (NL) PX 10 Du: 700 SH 6-speed compact
    '600 sh 14 24': 8131,
    'maillard normandy 5 speed 14 17 19 21 24t': [{ from: 1977, to: 1978, id: 7240 }], // 1977/78 Peugeot: Normandy 5-speed (row dated 1978, sealed bearings); 1979-82 row is 8125
    'maillard normandy 14 17 19 21 24t': [{ from: 1977, to: 1978, id: 7240 }],
    'maillard normandy 14 16 19 22 26t': [{ from: 1977, to: 1978, id: 7240 }],
    'maillard normandy 14 16 18 19 21t': [{ from: 1977, to: 1978, id: 7240 }],
    'maillard normandy 14 16 18 20 23t': [{ from: 1977, to: 1978, id: 7240 }],
    'maillard normandy 14 17 20 24 28t': [{ from: 1977, to: 1978, id: 7240 }],
    // 1987 Raleigh (UK Lightweights catalogue): period rows for the 1987 range (105 = the 1987 "105" 1050 series, 600EX = the 1986-87 6208 SIS series).
    'shimano 600ex cassette 13 14 15 17 19 21t silver': [{ from: 1987, to: 1987, id: 2218 }], // Road Ace: MF-6208-6 600EX SIS cassette (1986-89)
    'sun tour ultra 6 13 24t': [{ from: 1979, to: 1985, id: 2240 }], // 1979 Raleigh Super Course: NW-6500 (13T top sprocket rules out US-6500), as the 1983 Clubman
    // 1982 Raleigh Clubman 12 / Competition 12 / Rapide 12 / Record Ace 12 list "Sun Tour Ultra 6" alone. Two
    // Ultra-6 rows are in range (NW-6500 1979-85, US-6500 1978-84); NW-6500 chosen as the common New Winner
    // Ultra-6 of the period. Judgement, not proven by the spec text.
    'sun tour ultra 6 14 28t': [{ from: 1980, to: 1980, id: 7812 }], // 1980 Raleigh Super Course: US-6500, Perfect Ultra-6 (14T start rules out NW-6500; 28T top is beyond the row's 14-26T, nearest fit, as the 1984 Record Ace)
    'sun tour ultra 6': [{ from: 1979, to: 1985, id: 2240 }], // SunTour NW-6500, New Winner Ultra 6    // 1970 Peugeot (Dutch-market catalogue).
    'cyclo competition 5 speed 14 21t': 2088, // Cyclo Competition 64 (5 speed)
    // 1990 Bianchi US catalogue (retrobike archive 1676).
    'shimano hyperglide black 14 28t 6 speed': [{ from: 1990, to: 1993, id: 7603 }], // MF-HG20, 200GS (6sp HG)
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'regina extra oro 14 22 5 speed': 2182, // Regina Extra Oro (5 speed)
    'regina extra oro 14 28 5 speed': 2182,
    'regina extra 14 28 5 speed': 8171, // Regina Extra (5 speed, scalare)
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'suntour nw6000 silver 13 14 15 16 17 19 21t': 2238, // Competition: SunTour NW-6000, New Winner (6-speed)
    'suntour pn6000 14 15 17 19 21 24t': 7813, // Sirocco: SunTour PN-6000 / PS-6000, Perfect (6-speed); ebykr's transcription reads "Pro6000", the scan "PN6000"
    'suntour pn5000 14 17 20 24 28t': 2245, // Classic: SunTour 1100-1106 / PT-5000, Perfect (5-speed)
    'sun tour ultra 6 13 14 15 18 21 24t': 2240, // Clubman: SunTour NW-6500, New Winner Ultra 6 (same block as 1983)
    'suntour ultra 6 silver 14 16 18 21 24 28t': 7812, // Record Ace: SunTour US-6500, Perfect Ultra-6 (14T start rules out NW-6500; 28T top is beyond the row's 14-26T, nearest fit)
    'regina oro 13 14 15 16 17 18t': 2194, // Team Replica: Regina Oro (6 speed)
    'shimano 600 ax cassette 13 14 15 16 17 19 21t': 1197, // Road Ace: Shimano AX, 600 AX (Cassettes row)
    // 1978 Raleigh (US, ebykr scan).
    'raleigh sun tour perfect 14 28t': 2245, // Super Course: SunTour 1100-1106 / PT-5000, Perfect (5-speed)
    'raleigh sun tour perfect 14 34t': 2245, // Super Grand Prix / Grand Prix / Record Ace, as the 1983 Royal
    'raleigh sun tour perfect 5 speed 14 28t': 2245, // 1980 Super Grand Prix: Perfect (5-speed), as 1979
    'raleigh sun tour perfect 5 speed 14 34t': 2245, // 1980 Gran Sport / Grand Prix / Super Record, as 1979
    'sun tour perfect 5 speed 14 32t': 2245, // 1980 Reliant
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'regina cx 13 21t 6 speed': 2168, // Centenario: Regina CX (6 speed), as the 1987 Bianchi 'regina cx 13 23t'
    'regina cx 13 23t 6 speed': 2168, // Super Leggera
    'suntour nw 13 21t 6 speed': 2238, // Campionissimo / Squadra: SunTour NW-6000, New Winner (6-speed)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'regina oro 13 14 15 16 17 18 teeth': 2194, // Team Replica: Regina Oro (6 speed)
    'sun tour nw 6000 silver 13 14 15 17 19 21 teeth': 2238, // Gran Sport: SunTour NW-6000, New Winner (6-speed)
    'sun tour nw 6000 13 14 15 17 19 21 teeth': 2238, // Competition
    'sun tour pn 6000 gold 14 15 17 19 21 24t': 7813, // Rapide: SunTour PN-6000 / PS-6000, Perfect (6-speed)
    'sun tour perfect 6 speed gold 14 15 17 19 21 24t': 7813, // Record Sprint
    'sun tour perfect 6 speed 14 15 17 19 21 24t': 7813, // Europa / Supersport
    'uniglide 14 28t 5 speed with spoke protector disc': 7475, // Silhouette: Shimano MF-1500, Uniglide freewheel
    'sun tour ultra 6 silver 13 14 15 18 21 24t': 2240, // Clubman: SunTour NW-6500, New Winner Ultra 6 (13T top rules out Perfect US-6500; US-6000 row is 1978 only)
    'sun tour ultra 6 silver 14 16 18 21 24 28 teeth': 7812, // Record Ace: SunTour US-6500, Perfect Ultra-6 (same block as 1984)
    'shimano 600 ax cassette 13 14 15 17 19 21 teeth': 1197, // Road Ace: Shimano AX, 600 AX (row is under Cassettes; the CSV label is Freewheel)
    '13 24t regina oro 6 speed': 2194, // 1973 Raleigh: Regina Oro (6 speed)
    "13 24t regina d'oro 6 speed": 2194, // 1974 Raleigh Team Professional: Regina Oro (6 speed)
    'suntour alpha 5000 14 28t': 7866, // SunTour FW-AL00-R6, Alpha freewheel (AccuShift leaflet c. 1987)
    'shimano 600 14 24t': [{ from: 1986, to: 1989, id: 2218 }], // 1987 Bianchi: Shimano MF-6208-6, 600EX SIS
    'simplex 14 24t': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'regina oro 13 21': 2194, // Regina Oro (6 speed) — 1975 Motobecane
    // 1987 Bianchi.
    'regina cx 13 23t': 2168, // Regina CX (6 speed)
    'shimano dura ace 13 23t': 2222, // Shimano MF-7400, Dura-Ace (7sp) — paired with SIS-7
    // 1985 Raleigh (Sheldon Brown scan).
    'suntour 13 24 7 speed new winner': 2239, // SunTour New Winner 7 speed (DB row dated 1990; only 7-sp New Winner row)
    // 1986 Cinelli (Ten Speed Drive Imports).
    'regina bx oro': 2195, // Regina Oro BX (6 speed)
    'regina cx 6 speed': 2169, // Regina CX/CX-S (6 speed)
    'regina oro 6 speed': 2194, // Regina Oro (6 speed)
    // 1979 Peugeot (French catalogue).
    'spidel 700 6 speed 13 14 15 17 19 21': 2123, // Maillard 700 (6 speed); Spidel-badged
    'maillard 6 speed 13 14 15 17 19 21': 2123, // Maillard 700 (6 speed), the 13-21 racing block
    'maillard 14 15 17 19 21 24': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'maillard 14 17 19 21 24': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'maillard 14 16 18 21 24': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'maillard 14 17 20 24 28': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'maillard 14 16 20 24 28': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'maillard 14 16 18 20 23': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    // Fixed track cogs sit under Single Sprockets, not Freewheels; the CSV
    // label is Freewheel. 1/8" chain and no "alloy" means the steel 763
    // rather than 763/a Superleggero or the 3/16" 764 Record Pista.
    'campagnolo 15t': 6380, // 1973 Raleigh Professional Track: Campagnolo 763 Sprocket (steel)
    'campagnolo 15t x 1 8" fixed': 6380, // 1974 Raleigh Professional Track
    'campagnolo 15 tooth fixed': 6380, // 1975 Raleigh Professional Track
    'campagnolo 16t fixed cog': [{ to: 1985, id: 6380 }, { from: 1986, id: null }], // 1987 Bianchi PISTA: 763 row ends 1985, no later row
    // 1983 Raleigh Royal / Royale 10: a 5-speed 14-34 wide-ratio block;
    // Perfect was SunTour's touring line (New Winner was the racing block).
    'sun tour wide ratio 14 18 23 30 34t': 2245, // SunTour 1100-1106 / PT-5000, Perfect (5-speed)
    // Freewheel link pass 2026-10-26 (from /linkCoverage).
    'regina oro': 2194, // 1982 Battaglin: Regina Oro (6 speed), as the 1975 Motobecane / 1983 Raleigh
    // 2194's description is "the Extra 6-speed in Oro quality"; 2182 is the 5-speed Extra Oro.
    'regina extra oro 6 speed': 2194, // 1978 Bianchi Specialissima Super-Leggera / Campione del Mondo CX
    'regina extra oro 6 speed or alloy 6 speed on request': 2194, // 1978 Bianchi Specialissima Barcellona: the standard fit
    'regina extra oro 13 21 6 speed': 2194, // 1981 Bianchi Super Leggera
    'maillard 700 6 speed dural 13 14 15 16 17 18t or 13 14 15 17 19 21t': 2123, // 1977 Peugeot (DE) PY 10/CP: Maillard 700 (6 speed)
    'maillard 700 13 14 15 17 19 21t': 2123, // 1978 Peugeot PY 10 EC
    // Judgement calls 2026-10-30.
    'maillard 700 13 14 15 16 17 18': [{ from: 1984, to: 1984, id: 2114 }], // 1984 Peugeot (GB) PY 10 LS: straight block = 700 Course (row extended 1982 -> 1984)
    'suntour ultra 6 14 16 18 21 24 28t': [{ from: 1987, to: 1987, id: 7870 }], // 1987 Raleigh Maverick 18 Pro: Mountech bike, so the Winner WT-6500 not the Winner Pro
    'maillard 700 6 speed light alloy hard steel core to choice': 2123, // 1978 Peugeot PY 10 CP
    // 1983 Peugeot PX 14 / PY 14: 7-speed 700; hubs are 700 racer, not Helicomatic, so not the 700 SH 8133.
    'maillard 700 13 14 15 16 17 18 19': [{ from: 1980, to: 1984, id: 2124 }], // Maillard 700 Compact Super (7 speed), row 1980-82
    'normandy 14 17 20 24 28': [{ from: 1979, to: 1983, id: 8125 }], // 1983 Peugeot UO 9: Normandy (5-speed), row 1979-82, a year early
    'atom 14 24': [{ from: 1978, to: 1982, id: 7239 }], // 1982 Peugeot PH 10 S: Maillard Atom (5-speed); the 1982 catalogue lists 13-24T
    // 1974-75 Motobecane: Atom (5 speed, silver cogs), 1960-80. The Maillard-brand 7239 starts in 1978.
    'atom 14 26': [{ from: 1960, to: 1977, id: 2044 }],
    'atom 14 28 with huret spoke protector': [{ from: 1960, to: 1977, id: 2044 }], // Grand Jubile
    'atom 14 32 with huret spoke protector': [{ from: 1960, to: 1977, id: 2044 }], // Tandem
    // 1981-82 Peugeot: Normandy Sport, the only 6-speed Normandy in the 1982 catalogue (row 1982). The 1980
    // PKN / PVN 10 print the same cluster but predate it, so they stay unlinked.
    'maillard normandy 14 15 17 19 21 24': [{ from: 1980, to: 1982, id: 8129 }], // 1980 (NL) PKN / PVN 10 print the same as 1982; 8129 redated 1982 -> 1980 (2026-10-30)
    'maillard normandy 13 14 15 17 19 21': [{ from: 1981, to: 1982, id: 8129 }],
    'everest alloy 13 21 6 speed': [{ from: 1976, to: 1981, id: 9072 }], // 1981 Bianchi Super Corsa: Everest Dural (5 / 6 speed)
    'regina rlsy90 silver 13 23t 7 speed': 2205, // 1990 Bianchi Super Leggera / Giro: Regina Synchro 90-S (7 speed); its 1992 Strada block is 13-23
    'sun tour ultra 7 13 32t': 2237, // 1980 Raleigh Touring 14: SunTour NW-7000, New Winner Ultra 7 (the only Ultra-7 row in range)
    // 1990 Bianchi Grizzly / Project 7 (XC-Pro groups); the row is under Cassettes, the CSV label is Freewheel.
    'suntour accushift plus silver 12 30t 7 speed': [{ from: 1990, to: 1990, id: 1222 }], // SunTour CS-AP00-S7U, XC Pro
  },
  Tyres: {
    'michelin "hi lite pro" 700x70c [?]': 6836, // 1987 Peugeot (US) Mont Cenis: printed 700x70C (sic), Hi-Lite Pro
    'michelin hi lite comp 700 x 20c': 6835, // 1986 Peugeot (US) table Galibier
    'michelin hi lite pro 700 x 20c': 6836, // 1986 Peugeot (US) table Mont Cenis (row dated 1988 only)
    'michelin hi lite road 700 x 23c': 9498, // 1986 Peugeot (US) table Triathlon / Ventoux (row dated 1988 only)
    'michelin hi lite road 27 x 1 1 8"': 9498, // 1986 Peugeot (US) Tourmalet
    // 1975 Motobecane Le Champion: the only Gran Turismo tubular row (judgement call 2026-10-30; maker not printed).
    'gran turismo tubulars': [{ from: 1974, to: 1978, id: 9056 }], // Vittoria Granturismo
    // 1970 Raleigh Professional Mk II: Clement's standard road silk of 1970 (6769 "Clement Seta" is a 1974-85 stub).
    "clement 'seta' silk": [{ from: 1970, to: 1988, id: 6748 }], // Clement Criterium Seta
    '650': null, // 1980 Peugeot PH 50 M: bare wheel size; matched Wolber 22 Racing Team 650 by substring
    'michelin elan ts 1 1 16 folding': 8789, // 1980 Peugeot (NL) PVN 10: Elan TS (row dated 1977-79, a year early, as 1978)
    'michelin elan ts 700 x 25 extra narrow training tyres with inner tube': [{ from: 1977, to: 1979, id: 8789 }], // 1977 Peugeot (DE) PRN / PSN / PXN 10/E, PRN 13/E: Michelin Elan TS (8789 year_from moved to 1977 on this catalogue)
    'michelin 27" x 1 1 8" club tourist': [{ from: 1980, to: 1984, id: 8788 }], // 1984 Raleigh Classic 15 / Record Ace 12 / Royal 10: Michelin Club Tourist (8788 year_to extended to 1984 on this catalogue); the size text in the middle defeats the substring match
    'high pressure gumwall': null, // 1975-76 Raleigh Super Course / Grand Prix: bare description; the substring matcher finds 9101 IRC High Pressure Gumwall (1978), a different maker's tyre
    'michelin elan ts 28 x 1 1 16': [{ from: 1978, to: 1979, id: 8789 }], // 1978 Peugeot (NL) PSN 10 / PRN 10 E: Michelin Elan TS (row dated 1979, one year after this catalogue; a judgement)
    'peugeot professionnel or clement criterium tubulars': null, // 1977 Peugeot (DE) PY 10/CP: either / or, left unlinked
    '27 x 1 1 4': null, // bare size (1975 Peugeot UO 8), not the Continental Cyclocross 27 x 1 1/4 the substring matcher finds
    'clement no 3 silk tubular': [{ from: 1973, to: 1974, id: 8970 }], // 1973-74 Raleigh Professional Track: Clement Seta, Tipo 3 (track silk, 175 g; Clement 1977 leaflet)
    'clement gentleman wired on 27"': [{ from: 1981, to: 1981, id: 8973 }], // 1981 Bianchi Sprint/81: Clement Gentleman (new in the 1977 leaflet)
    'clement gentleman wired on 28"': [{ from: 1981, to: 1981, id: 8973 }], // 1981 Bianchi Super Turismo
    'clement criterium cotton tubular 28"': [{ from: 1981, to: 1981, id: 8972 }], // 1981 Bianchi Super Leggera: Clement Criterium Cotone, Tipo 12 bis (was the 180 g Criterium row 6745)
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'clement campionissimo tubular 28"': 6738, // Clement Campionissimo Seta Extra (the only dated Campionissimo row)
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'vittoria nuovo pro tubular': null, // 1984 Raleigh Team Replica / Road Ace: the only Nuovo Pro row is the 1988 Nuovo Pro 260, not shown for 1984 (unlinked 2026-10-30)
    'clement tubulars mod colnago': 6743, // Clement Colnago (1979 Colnago Mexico / Mexico Oro)
    // 1979 Colnago Super / Saronni / International / Roger de Vlaeminck / Export: no maker printed, read
    // as the Clement Colnago the Mexico sheet names.
    'colnago super corsa tubulars': [{ from: 1979, to: 1979, id: 6743 }],
    'colnago tubulars': [{ from: 1979, to: 1979, id: 6743 }],
    'clement cotton tubulars': [{ from: 1975, to: 1983, id: 8972 }], // 1978 Bianchi: Criterium Cotone, as the 1981 Bianchi
    // 1982 Battaglin: Cronometro CS (1980-88; Pista CS starts 1983) and Corsa CX Servizio Corse (1980-83).
    'vittoria cs satinato': [{ from: 1980, to: 1988, id: 6885 }],
    'vittoria cx': [{ from: 1980, to: 1983, id: 6880 }],
    'clement strada 66 lightweight cotton tubular': 6775, // 1974 Raleigh International: Clement Strada 66 (red label)
    'clement criterium silk tubular': 6748, // Clement Criterium Seta (seta = silk)
    // 1975 Motobecane "Wheel Rims & Tires" cells, split by splitCellValue
    // ("SUPER CHAMPION rims, ELVEZIA tubulars" -> Rims / Tyres); the Super
    // Champion rim model isn't named, so no Rims override, and the DB has no
    // Clement Gran Turismo.
    'elvezia tubulars': 6752, // Clement Elvezia
    'paris roubaix tubulars': 6762, // Clement Paris - Roubaix
    // 1987 Bianchi. The DB spells Giro del Mondo "Mundo".
    'vittoria cg': 6877, // Vittoria Corsa CG Seta
    'vittoria giro del mondo': 6889, // Vittoria Giro del Mundo
    // 1993 Bianchi (ambiguous between Servizio Corse and Squadre Prof).
    'vittoria corsa cx': 6880, // Vittoria Corsa CX Servizio Corse
    // 1986 Cinelli (Ten Speed Drive Imports).
    'clement 2001cf': 6740, // Clement CF 2001
    'clement 2001 cf': 6740, // Clement CF 2001
    // 2026-10-08 link-gap pass. 1982/83 Raleigh Team Replica, 1983 Road Ace.
    'clement ritmo tubular': 6767, // Clement Ritmo LTX 55 (only Ritmo row)
    // 1983 Bianchi Super Pista: Pistard is Clement's track tubular.
    'clement pista tubular': 6765, // Clement Pistard
    // 1993 Bianchi MTBs, rows from the Ritchey 1992 catalogue. The CSV
    // spells HardDrive "Hardrive", so the substring match can't see it.
    'ritchey z max': 8382, // Nth FS: Ritchey MegaBite Z-Max
    'ritchey megabite hardrive': 8383, // Ibex / Osprey: Ritchey MegaBite HardDrive
    // Tyre link pass 2026-10-26 (from /linkCoverage).
    'peugeot route tubulars': 6812, // 1977-78 Peugeot: Peugeot Route by Hutchinson (only Route row)
    'michelin bib 20 ts 28 x 1 1 16': 6830, // 1982 Peugeot PH 12: Michelin BIB TS-20, as the 1983-84 PH 12
    'vittoria formula 1 tubulars': 6875, // 1990 Bianchi Pista: Vittoria Competition Formula Uno
    'challenge skinwall 27 x 1 1 8': 6846, // 1983 Peugeot UO 9 Super Sport: Peugeot Challenge (only Challenge row)
  },
  Rims: {
    'rigida 1521 black varnished spokes': 5154, // 1987 Peugeot (US): Rigida AL 1521
    // 1985 Peugeot: bare wheel size, not the 1970 Femco 700 c rim the substring match found.
    '700 c': null,
    'mavic gp4 anodized grey': 5069, // 1986 Peugeot (US) table PZ 10
    'mavic gp4 tubular': 5069, // 1986 Peugeot (US) table PX
    'mavic ma 40 w stainless spokes': 5077, // 1986 Peugeot (US) table Mont Cenis
    // 1987 Colnago Master America: either / or, don't pick one.
    'campagnolo victory or ambrosio metamorphosis servizio corse black anodized': null,
    // 1982 Battaglin: Nisi rims printed without their five-digit codes (rows 00250 and 00218).
    'nisi corsa stretto': [{ from: 1982, to: 1988, id: 9228 }],
    'nisi ekip': [{ from: 1982, to: 1985, id: 9227 }],
    // 1982 Battaglin Super Pista: Nisi 00110 Pista Speciale, the five-digit row as the other 1982 Battaglin
    // Nisi overrides (row dated 1985-88), not the duplicate 5138 M20.
    'nisi pista special': [{ from: 1982, to: 1988, id: 9225 }],
    // 1987 Bianchi: Ambrosio Super Elite (1985-88), which the other 1987 Bianchis print in full.
    'ambrosio elite': [{ from: 1985, to: 1988, id: 4909 }],
    // 1987 Bianchi Pista: Nuovo Montreal Crono (1985-88) by date. The 1990 "Montreal black" is a different
    // key and past the row, so it stays unlinked.
    'ambrosio montreal': [{ from: 1985, to: 1988, id: 9175 }],
    // Judgement calls 2026-10-30.
    'ambrosio montreal black': [{ from: 1985, to: 1990, id: 9175 }], // 1990 Bianchi Pista, as the 1987 Pista (9175 extended 1988 -> 1990)
    'record du monde drilled for tubulars': [{ from: 1970, to: 1981, id: 5189 }], // 1978 Peugeot PA 10 LE: Super Champion Record du Monde (Mavic's is "de l'Heure")
    'mavic professional with reinforcing ferrules': 5092, // 1980 Raleigh Professional Mk V: Montlhery Pro (double eyelet; 5055 is a 1970 row)
    // 1984 Raleigh Competition 12 / Corsa 12: Weinmann A124 Super X (1978-83), as the 1983 Competition.
    'weinmann high strength narrow section eyeletted alloy': [{ from: 1978, to: 1984, id: 7776 }],
    // 1978 Bianchi (Italian catalogue, labibleduvelocataloguesbianchi).
    'mavic special': null, // "speciale MAVIC": a special Mavic rim, not the Service des Courses row the substring hits
    'mavic special sport': [{ from: 1980, to: 1991, id: 5109 }], // 1981 Bianchi: Mavic Spéciale Sport tubular (c. 1980 catalogue, 400 g)
    'mavic ma 40 hard anodized': 5077, // 1986 Raleigh: Mavic MA 40, as the 1987 Bianchi "Mavic MA40"
    'mavic m3cd hard anodised 36h eyeleted': 5048, // 1987 Raleigh: Module 3 CD (M3 CD)
    'mavic monthlery drilled for tubulars': [{ from: 1970, to: 1980, id: 5093 }], // 1978 Peugeot (NL): Montlhéry Route, as the 1973-75 "Mavic Monthlery" picks (Route / Pro / Légère all listed, text does not say which)
    'mavic module e': [{ from: 1975, to: 1984, id: 5087 }], // 1978 Peugeot (NL): Module E (Red Label); the row is now dated 1975-84, so 1980 Peugeot PKN 10 / 13 too
    'mavic module e drilled': [{ from: 1975, to: 1984, id: 5087 }], // 1980 Peugeot (NL) PVN 10
    'super champion model 58 23 mm': 5178, // 1984 Peugeot (GB) PH 10 L: Super Champion Mod. 58 (1960-80)
    'super champion dural 700c tubular': 5176, // 1980 Peugeot PY 10 S: Super Champion Competition, as 1979 'super champion 700c dural'
    'super champion dural 32 hole stainless spokes': 5176, // 1980 Peugeot PRO 10
    // 1986 Raleigh Technium 480: Rigida AL 1521 (title match; 5151 "Rigida 15/21" is an undated duplicate).
    'rigida 1521 alloy 36°': 5154,
    'rigida chrolux': [{ from: 1960, to: 1970, id: 5158 }], // 1978 Peugeot (NL) TM 8 would otherwise inherit the 1960-70 chrome rim; no 1978 Chrolux row
    'mavic sport or pellet record light alloy': null, // 1977 Peugeot (DE): either / or, left unlinked
    'araya sp30 alloy': [{ from: 1986, to: 1986, id: 8424 }], // 1986 Raleigh Pursuit / Technium 440 / 460: Araya SP-30 (1985-92)
    'araya sp30 27 x 1 1 4 alloy': [{ from: 1986, to: 1986, id: 8424 }], // 1986 Raleigh Alyeska
    'weinmann type 293': [{ from: 1972, to: 1972, id: 7938 }], // 1972 Raleigh Professional Mk IV / Track: Weinmann 293 (1970-81)
    // 1981 Bianchi (Vespa of America, US spec table; values spelled "Rekord").
    'mavic or10 light': 5103, // Mavic OR 10
    'mavic or7 extra light': 5104, // Mavic OR 7
    // Araya rows from the 1980-95 catalogue excerpts (bmxmuseum.com). The CSVs
    // drop the hyphen ("AP21", "VP20", "VX300"), which the title match can't see.
    'araya sp 30 27 x 1 1 4 alloy 36 hole front 40 hole rear': 8424, // 1985 Raleigh Alyeska
    'araya sp 30 alloy 700 x 25c': 8424, // 1985 Raleigh Grand Prix
    'araya px 35': 8430, // 1993 Bianchi Advantage
    'araya px 45': 8429, // 1993 Bianchi Boardwalk
    'araya ap21': 8451, // 1993 Bianchi Nyala / Ocelot: Araya AP-21
    'araya vp20': 8450, // 1993 Bianchi Osprey: Araya VP-20
    'araya vx300': 8428, // 1993 Bianchi Project 3 / Volpe: Araya VX-300
    // 1993 Bianchi Ibex "RM-18T": no such Araya model in any catalogue; TM-18
    // (1992) is the nearest but the match is a guess, so leave it unlinked.
    'araya rm 18t': null,
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'weinmann a124 eyeletted black': 7776, // Record Sprint / Quasar: Weinmann A124 Super X
    // 1978 Raleigh (US, ebykr scan).
    'weinmann 700c alloy concave a124 narrow section': 7776, // Competition GS / Super Course: A124 Super X, as 1977
    'weinmann 700c light alloy concave a124 narrow section': 7776, // 1980 Competition GS / Super Course, as 1979
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'martano strada (tubular) araya 20a smoked (700c)': null, // Speciale-II either/or build spec; don't pick one
    // 1986 Colnago Raid / Gentleman Sport / Lady Sport: the only Elite Aero row.
    'ambrosio elite aero black anodized': 4890, // Ambrosio 19 Extra Elite Aero dynamic
    'ambrosio elite aero white': 4890,
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    // Only A124 row in the DB, dated 1983 (Weinmann's concave A124).
    'weinmann a124 concave section alloy': 7776, // Gran Sport: Weinmann A124 Super X
    'weinmann a124 concave section': 7776, // Competition
    // 1984 Raleigh: the A-124 is the anodized concave rim with reinforced
    // eyelets (Weinmann Oct 1981 parts catalog).
    'weinmann concave section eyeletted alloy': 7776, // Weinmann A124 Super X
    // Weinmann / Delmerco c. 1975 catalogue rims. 1975 Motobecane: the 210
    // H.P. is the one rim listed with knurled sides.
    'weinmann h p alloy knurled sides': 5204, // Weinmann AG 210 H.P.
    // 1973-75 Raleigh: the 256 Alesa H.P. (17mm) is the narrow-section HP
    // rim; the 210 H.P. is 18mm.
    'weinmann narrow alesa high pressure alloy': 7928, // Weinmann 256 Alesa H.P.
    'weinmann narrow section alesa high pressure alloy': 7928,
    'weinmann narrow alloy high pressure': 7928,
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'mavic gp4 alloy sprint': 5069, // Team Replica: Mavic GP 4 (1980-91)
    // CSV cell carries a stray backslash ("27x1.25\  MICHELIN"), MySQL drops it on insert
    'weinmann sprint alloy 27x125"': 7778, // Weinmann A125 Sprint (1974 Motobecane, rims half of the split Wheel Rims & Tires cell)
    // Both bare "Nisi" rows (5123, 5124) and bare "AVA" (4937) were deleted;
    // the catalog never names a Nisi / AVA model, so these stay unlinked.
    'nisi ava sprint alloy': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    'ava sprint alloy': null, // bare-brand row deleted 2026-09-30 (f9b86f2); generic value, no model row
    // 1984 Bianchi. GP 4 is ambiguous with its red-label variant; the OR 10
    // value carries a spoke aside.
    'mavic gp4': 5069, // Mavic GP 4
    'mavic or 10 (tied and soldered spokes)': 5103, // Mavic OR 10
    // 1983 Bianchi Campione d'Italia. Bare "Monthlery" spans Route/Pro/Légère;
    // the 84-85 Mavic catalogue names the Route as the OEM (première monte) one.
    'mavic monthlery': 5093, // Mavic Montlhéry Route
    // 1987 Bianchi (three identically titled MA 40 rows).
    'mavic ma40': 5077, // Mavic MA 40
    // 1993 Bianchi.
    'campagnolo omicron': 4962, // Campagnolo Omicron Strada Polished (three finishes)
    'mavic 231': 5071, // Mavic M 231 CD
    "fir tour or ambrosio giro d'italia": null, // either/or spec; don't pick one
    // 1985 Raleigh (Sheldon Brown scan).
    'araya 16a 5 alloy 27 x 1 3 8 36 hole front 40 hole rear': 4916, // Araya 16A (box style alloy clincher)
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'sprint': null, // generic term for a tubular rim; matcher hit Fiamme Sprint
    'lightweight sprint': null, // generic
    // 1979 Peugeot (French catalogue).
    '700c': null, // wheel size, not a rim; hit Diamant 700C
    '350': null, // wheel size; hit Araya TX-350
    'super champion 700c dural': 5176, // Super Champion Competition (1970-80), the standard tubular
    // 1977 Raleigh Competition GS / Super Course; same A124 as the 1982/83
    // entries above (the row is dated 1983 but is the only A124).
    '27 x 1 1 4"': null, // 1976 Raleigh Record: bare tyre size, hit the Rigida 27 x 1 1/4" brand row
    '700 c weinmann a 124 narrow concave section alloy': 7776, // Weinmann A124 Super X
    '700 c weinmann a124 narrow concave section alloy': 7776,
    // Rim link pass 2026-10-26 (from /linkCoverage).
    'weinmann type 294': 7926, // 1972 Raleigh International: Weinmann 294 (1963-75), as 'weinmann type 293'
    'araya rm25': 8442, // 1986 Raleigh Crested Butte: Araya RM-25 (1985-88)
    'campagnolo sigma crono hard anodized': 4969, // 1990 Bianchi Proto: Sigma Crono Oxide (1988-91)
    'mavic module e anodised': [{ from: 1975, to: 1984, id: 5087 }], // 1982 Peugeot PFN 10 S: Module E (Red Label)
    'mavic module e grey satin stainless spokes': [{ from: 1975, to: 1984, id: 5087 }], // 1983 Peugeot PSVN 10
    'weinmann 700c narrow section': 7776, // 1981 Raleigh Super Course / Competition GS: A124 Super X, as 1978-80
    'weinmann concave section alloy': 7776, // 1982 Raleigh Gran Sport: A124, as the 1983 Gran Sport
    '7x type alloy 36°': 4923, // 1986 Raleigh Teton: Araya 7X, as the other 1986 Raleigh MTBs
    'pellet record du monde light alloy': 5189, // 1977 Peugeot (DE) PY 10/CP: Super Champion Record du Monde ("Pellet Super Champion" in the same catalogue)
  },
};

// Tries exact match first, then a whole-word substring match, checked in
// BOTH directions, against candidate titles restricted to the label's
// component category (see LABEL_TO_CATEGORY). Checking only "title found in
// value" would let a bare brand-only catch-all row (e.g. a component
// literally titled "Simplex") win by default over a more specific, correct
// title that's longer than the value (e.g. value "Simplex Prestige" vs. the
// real title "Simplex Prestige Criterium AV 223") — the catch-all fits
// inside the value, but the specific title doesn't, so it'd never even be
// considered without also checking "value found in title". Labels with no
// category mapping are never matched — searching every component regardless
// of category is how free-text fields like "Color" end up linking to
// unrelated components (e.g. "fiamme bianche" — Italian for "white flames",
// a paint description — matching a Rims component literally titled
// "Fiamme"). Returns the matched title (for a lookup subquery), or null if
// no match / the match is ambiguous / the title is too short to trust / the
// only candidate is the bike's own brand name (these Italian-era catalogs
// say things like "Sella Bianchi" — "Bianchi" alone is flavor text, not a
// reference to a component literally titled "Bianchi").
// Resolves a COMPONENT_OVERRIDES entry for a catalog year. Returns an id, or
// null when the entry (or the matching range) is an explicit `null` — which
// means "do not link": used when the only substring hit is a wrong-era row
// and the DB has no right one (e.g. 1987 "Shimano 600" brakes vs the 1970s
// centre-pull). Returns undefined when there is no entry at all.
function resolveOverride(entry, year, bikeTitle) {
  if (entry === undefined) return undefined;
  if (entry === null || typeof entry === 'number') return entry;
  const y = Number(year);
  const hit = entry.find(
    (r) =>
      (r.bike == null || r.bike === bikeTitle) && (r.from == null || y >= r.from) && (r.to == null || y <= r.to)
  );
  // No matching range means no link (as documented on COMPONENT_OVERRIDES),
  // not a fall-through to the substring matcher, which would pick whatever
  // wrong-era row shares the name.
  return hit ? hit.id : null;
}

function matchComponent(valueText, componentRecords, excludeTitle, label, year, bikeTitle) {
  if (!valueText) return null;
  const normalizedLabel = label.trim().toLowerCase();
  const normalizedValue = normalizeForMatch(valueText);

  const categories = LABEL_TO_CATEGORY[normalizedLabel];
  if (!categories) return null;

  for (const category of categories) {
    const overrideId = resolveOverride(COMPONENT_OVERRIDES[category]?.[normalizedValue], year, bikeTitle);
    if (overrideId === null) return null; // explicit "do not link"
    if (overrideId) return { component_id: overrideId };
  }

  const exclude = excludeTitle ? normalizeForMatch(excludeTitle) : null;

  // Multiple component_detail rows can legitimately share a title (the same
  // named component recurs across categories/variants), so dedupe candidates
  // by normalized title for ambiguity-counting purposes, but keep one record
  // per distinct title to report back a component_id.
  const byNormalizedTitle = new Map();
  for (const r of componentRecords) {
    if (!categories.includes(r.category)) continue;
    const norm = normalizeForMatch(r.title);
    if (norm === exclude) continue;
    if (!byNormalizedTitle.has(norm)) byNormalizedTitle.set(norm, r);
  }

  if (byNormalizedTitle.has(normalizedValue)) return byNormalizedTitle.get(normalizedValue);

  const paddedValue = ` ${normalizedValue} `;
  const valueIsMultiWord = normalizedValue.includes(' ');
  const substringMatches = [...byNormalizedTitle.entries()].filter(([norm]) => {
    if (norm.length < MIN_COMPONENT_MATCH_LENGTH) return false;
    const paddedTitle = ` ${norm} `;
    // A single-word title found inside a multi-word value is almost always a
    // brand-only catch-all row ("Brooks", "Simplex", "Nisi") swallowing a
    // specific model ("Brooks B17N Leather") whose real row just isn't a
    // substring. Those only link by exact match or COMPONENT_OVERRIDES.
    if (!norm.includes(' ') && valueIsMultiWord && paddedValue.includes(paddedTitle)) return false;
    return paddedValue.includes(paddedTitle) || paddedTitle.includes(paddedValue);
  });
  if (substringMatches.length === 1) return substringMatches[0][1];
  return null;
}

function listInputFiles(argFiles) {
  if (argFiles.length) return argFiles;
  return fs
    .readdirSync(BIKE_SPECS_DIR)
    .filter((f) => f.endsWith('.csv'))
    .map((f) => path.join(BIKE_SPECS_DIR, f));
}

async function main() {
  const argFiles = process.argv.slice(2);
  const files = listInputFiles(argFiles);

  const conn = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: decrypt(config.db.password),
    database: config.db.name,
    connectTimeout: 15000,
  });
  await new Promise((resolve, reject) => conn.connect((err) => (err ? reject(err) : resolve())));
  let componentRecords;
  try {
    componentRecords = await readComponentRecords(conn);
  } finally {
    conn.end();
  }

  const brands = new Set();
  const labelSortOrder = new Map(); // label title -> first-seen sort order
  const catalogSources = new Map(); // catalogue label -> source filename (citation)
  const bikes = []; // { brand, title, year, searchText }
  const specs = []; // { brand, bikeTitle, year, label, valueText }

  let filesProcessed = 0;
  let bikeCount = 0;
  let specCount = 0;
  let skippedFiles = [];
  const nonRoadSkipped = [];

  for (const file of files) {
    const filename = path.basename(file);
    const parsed = parseFilename(filename);
    if (!parsed) {
      skippedFiles.push(filename);
      continue;
    }
    const { year, brand, fileCountry } = parsed;
    brands.add(brand);
    const catalogue = catalogueLabel(year, brand, fileCountry);
    const country = fileCountry || CATALOGUE_COUNTRY.get(`${year}|${brand.toLowerCase()}`) || null;
    catalogSources.set(catalogue, { filename, country });

    const rows = parseCsv(fs.readFileSync(file, 'utf8'));
    const [header, ...dataRows] = rows;
    const labels = header.slice(1).map((h) => h.trim());
    // Columns that map onto bike.category/sizes/colors/weight are bike-level
    // attributes, not component specs — they never get a bike_spec_label.
    // A "Derailleurs" column expands to two labels (see SPLIT_LABELS).
    for (const label of labels) {
      if (IGNORED_LABELS.has(label.toLowerCase())) continue;
      if (BIKE_FIELD_LABELS[label.toLowerCase()]) continue;
      for (const expanded of expandLabel(label)) {
        if (!labelSortOrder.has(expanded)) labelSortOrder.set(expanded, labelSortOrder.size);
      }
    }

    for (const row of dataRows) {
      const title = (row[0] || '').trim();
      if (!title) continue;
      if (isNonRoad(year, brand, title)) {
        nonRoadSkipped.push(`${year} ${brand} ${title}`);
        continue;
      }
      const bikeFields = { category: null, sizes: null, colors: null, weight: null };
      const rowSpecs = [];

      for (let i = 0; i < labels.length; i++) {
        const valueText = (row[i + 1] || '').trim();
        if (!valueText) continue; // source had no column value for this bike — not tracked, don't store
        if (IGNORED_LABELS.has(labels[i].toLowerCase())) continue;
        const bikeColumn = BIKE_FIELD_LABELS[labels[i].toLowerCase()];
        if (bikeColumn) {
          bikeFields[bikeColumn] = valueText;
        } else {
          for (const part of splitCellValue(expandLabel(labels[i]), valueText)) {
            rowSpecs.push({ label: part.label, rawLabel: labels[i], valueText: part.valueText });
          }
        }
      }

      bikes.push({ brand, title, year, catalogue, searchText: buildSearchText(title, brand), ...bikeFields });
      bikeCount++;

      for (const { label, rawLabel, valueText } of rowSpecs) {
        specs.push({ brand, bikeTitle: title, year, catalogue, label, rawLabel, valueText });
        specCount++;
      }
    }
    filesProcessed++;
  }

  const lines = [];
  lines.push('-- Generated by scripts/generate-bike-update-sql.js — safe to re-run, all statements are idempotent.');
  lines.push('');

  lines.push('-- Bike brands');
  for (const brand of brands) lines.push(lookupInsert('bike_brand', brand));
  lines.push('');

  lines.push('-- Data sources (one per source CSV)');
  for (const [label, { filename, country }] of catalogSources) lines.push(dataSourceLookupInsert(label, filename, country));
  lines.push('');

  lines.push('-- Bike spec labels (sort_order = first-seen order across processed files)');
  // sort_order comes from LABEL_ORDER (global display order); labels not in
  // it sort after, in first-seen order. The UPDATE realigns labels that an
  // earlier run inserted with a per-catalog first-seen order.
  for (const [label, seen] of labelSortOrder) {
    const idx = LABEL_ORDER.indexOf(label);
    const sortOrder = idx >= 0 ? idx : LABEL_ORDER.length + seen;
    lines.push(labelLookupInsert(label, sortOrder));
    lines.push(`UPDATE bike_spec_label SET sort_order = ${sortOrder} WHERE title = '${sqlEscape(label)}' AND sort_order <> ${sortOrder};`);
  }
  lines.push('');

  lines.push('-- Bikes');
  for (const bike of bikes) {
    const brandIdSelect = lookupSubquery('bike_brand', 'brand_id', bike.brand);
    const title = sqlString(bike.title);
    const yearFrom = sqlString(bike.year);
    const searchText = sqlString(bike.searchText);
    const category = sqlString(bike.category);
    const sizes = sqlString(bike.sizes);
    const colors = sqlString(bike.colors);
    const weight = sqlString(bike.weight);
    const sourceRefSelect = dataSourceSubquery(bike.catalogue);
    lines.push(
      `INSERT INTO bike (brand_id, title, category, year_from, sizes, colors, weight, search_text, source_ref)\n` +
        `  SELECT ${brandIdSelect}, ${title}, ${category}, ${yearFrom}, ${sizes}, ${colors}, ${weight}, ${searchText}, ${sourceRefSelect}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM bike WHERE brand_id = ${brandIdSelect} AND title = ${title} AND year_from = ${yearFrom} ${bikeSourceCond(sourceRefSelect)}\n` +
        `  );`
    );
    // Back-fill: a bike inserted before this script tracked provenance (or by
    // an older run of this same file) has source_ref NULL; never overwrite a
    // value another run already set.
    lines.push(
      `UPDATE bike SET source_ref = ${sourceRefSelect}\n` +
        `  WHERE brand_id = ${brandIdSelect} AND title = ${title} AND year_from = ${yearFrom} AND source_ref IS NULL;`
    );
  }
  lines.push('');

  lines.push('-- Bike specs');
  let linkedCount = 0;
  for (const spec of specs) {
    const brandIdSelect = lookupSubquery('bike_brand', 'brand_id', spec.brand);
    const bikeTitle = sqlString(spec.bikeTitle);
    const yearFrom = sqlString(spec.year);
    const specSourceRef = dataSourceSubquery(spec.catalogue);
    const bikeIdSelect =
      `(SELECT bike_id FROM bike WHERE brand_id = ${brandIdSelect} AND title = ${bikeTitle} AND year_from = ${yearFrom} ${bikeSourceCond(specSourceRef)})`;
    const labelIdSelect = lookupSubquery('bike_spec_label', 'label_id', spec.label);
    // bike_spec.value_text is varchar(255). MySQL truncates a longer value on
    // INSERT, but the NOT EXISTS check compares the untruncated string, so the
    // row is re-inserted on every run (1979 Peugeot PY 10 CP Extras). Truncate
    // here so the key the check uses is the value actually stored.
    if (spec.valueText.length > 255) {
      console.warn(`value_text over 255 chars, truncated: ${spec.bikeTitle} / ${spec.label}`);
      spec.valueText = spec.valueText.slice(0, 255);
    }
    const valueText = sqlString(spec.valueText);
    const rawLabel = sqlString(spec.rawLabel);

    const matched = matchComponent(spec.valueText, componentRecords, spec.brand, spec.label, spec.year, spec.bikeTitle);
    if (matched) linkedCount++;
    const componentIdSelect = matched ? String(matched.component_id) : 'NULL';
    const sourceRefSelect = dataSourceSubquery(spec.catalogue);

    lines.push(
      `INSERT INTO bike_spec (bike_id, label_id, raw_label, value_text, component_id, source_ref)\n` +
        `  SELECT ${bikeIdSelect}, ${labelIdSelect}, ${rawLabel}, ${valueText}, ${componentIdSelect}, ${sourceRefSelect}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM bike_spec WHERE bike_id = ${bikeIdSelect} AND label_id = ${labelIdSelect} AND value_text = ${valueText}\n` +
        `  );`
    );
    lines.push(
      `UPDATE bike_spec SET source_ref = ${sourceRefSelect}\n` +
        `  WHERE bike_id = ${bikeIdSelect} AND label_id = ${labelIdSelect} AND value_text = ${valueText} AND source_ref IS NULL;`
    );
    // Rows inserted by an earlier run stay put (the INSERT above is a no-op
    // for them), so a match that only became resolvable later — a new
    // override or alias — is applied by back-filling still-unlinked rows.
    // Existing non-NULL links are never overwritten.
    if (matched) {
      lines.push(
        `UPDATE bike_spec SET component_id = ${componentIdSelect}\n` +
          `  WHERE bike_id = ${bikeIdSelect} AND label_id = ${labelIdSelect} AND value_text = ${valueText} AND component_id IS NULL;`
      );
    }
  }

  fs.writeFileSync(OUTPUT_SQL, lines.join('\n') + '\n', 'utf8');
  console.log(
    `Wrote ${OUTPUT_SQL}: ${filesProcessed} file(s) processed, ${brands.size} brands, ` +
      `${labelSortOrder.size} spec labels, ${bikeCount} bikes, ${specCount} specs (${linkedCount} linked to a component)`
  );
  if (skippedFiles.length) {
    console.log(`Skipped (filename doesn't match <year>_<brand>_spec*.csv): ${skippedFiles.join(', ')}`);
  }
  if (nonRoadSkipped.length) {
    console.log(`Skipped ${nonRoadSkipped.length} non-road model(s) (NON_ROAD_SKIP): ${nonRoadSkipped.join('; ')}`);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
