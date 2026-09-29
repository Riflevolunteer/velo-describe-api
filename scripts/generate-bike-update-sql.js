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
const crypto = require('crypto');

const config = require('../config');

const BIKE_SPECS_DIR = path.join(__dirname, '..', 'bike_specs');
const OUTPUT_SQL = path.join(__dirname, '..', 'bike-update.sql');

// Mirrors decrypt() in index.js / scripts/load-sql.js.
function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

function query(conn, sql, params) {
  return new Promise((resolve, reject) => {
    conn.query(sql, params, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

const FILENAME_PATTERN = /^(\d{4})_([a-zA-Z]+)_spec/;
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
function dataSourceLookupInsert(label, citation) {
  const escLabel = sqlEscape(label);
  const escCitation = sqlEscape(citation);
  return (
    `INSERT INTO data_source (source_type, label, citation) SELECT 'catalogue', '${escLabel}', '${escCitation}' FROM DUAL ` +
    `WHERE NOT EXISTS (SELECT 1 FROM data_source WHERE source_type = 'catalogue' AND label = '${escLabel}');`
  );
}

function dataSourceSubquery(label) {
  return `(SELECT source_id FROM data_source WHERE source_type = 'catalogue' AND label = '${sqlEscape(label)}')`;
}

function catalogueLabel(year, brand) {
  return `${year} ${brand} catalogue`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function parseFilename(filename) {
  const m = filename.match(FILENAME_PATTERN);
  if (!m) return null;
  return { year: m[1], brand: capitalize(m[2]) };
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
  hub: ['Hubs'],
  hubs: ['Hubs'],
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
  'Brakes', 'Front Derailleur', 'Rear Derailleur', 'Gearing', 'Crankset', 'Bottom Bracket',
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
// matching range means no link rather than a wrong-era one.
const COMPONENT_OVERRIDES = {
  'Front Derailleurs': {
    'simplex prestige': 2583, // Simplex Prestige Criterium AV 223
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
    'new huret jubilee': 2395, // Huret Jubilee (4 holes in outer cage plate)
    // 1974 Motobecane (values carry shifter asides after a dash/comma).
    'huret jubilee': 2395,
    'simplex prestige stem shifter': 2583,
    // 1975 Motobecane.
    'huret jubilee wide ratio': 2395,
    'huret challenger stem shifter': 2388, // Huret Challenger (hinged clamping band)
    // 1981 Kalkhoff. Shimano rows are titled "Shimano FD-7200, Dura-Ace EX"
    // (part number between brand and group), so substring never fires.
    'campagnolo super record': 2313, // Campagnolo 1052/SR (0104010), Super Record (clip-on)
    'dura ace ex': 2518, // Shimano FD-7200, Dura-Ace EX (clamp)
    'shimano 600 ax': 2476, // Shimano FD-6300, 600 AX (clamp)
    // 1983 Bianchi: the 80s (Nuovo) Gran Sport is the 3600/NT. No DB row for
    // the early-70s Gran Sport front, so 1973 stays unlinked.
    'campagnolo gran sport': [{ from: 1978, id: 2276 }], // Campagnolo 3600/NT, Gran Sport
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
    'shimano ultegra sti': 2479, // Shimano FD-6401, 600 Ultegra
    'shimano 105 sti': 2467, // Shimano FD-1055, 105SC
    'shimano rx100 gs sis': 2531, // Shimano FD-A550, RX100
    'shimano xtr': 2541, // Shimano FD-M900, XTR M900
    'shimano xtr top pull dual sis': 2541,
    'shimano deore dx top pull dual sis': 2487, // Shimano FD-M650, Deore DX
    'shimano deore xt top pull dual sis': 2501, // Shimano FD-M735, Deore XT
    'shimano deore lx top pull dual sis': 2491, // Shimano FD-M550, Deore LX
    // 1985 Raleigh (Sheldon Brown scan).
    'suntour "seven"': 2641, // SunTour Seven
    'shimano model 105': 2466, // Shimano FD-A105, 105 Golden Arrow (1983-86)
    'shimano z204': 2543, // Shimano FD-Z204-HS
    'shimano z206': 2544, // Shimano FD-Z206-HS, Z-Series
    'shimano deore xt': 2497, // Shimano FD-M700, Deore XT (1983-86)
    'suntour cyclone mkiii': 2629, // SunTour FD-3300 Cyclone (1984)
    'suntour superbe pro': [{ from: 1984, id: 2652 }], // FD2000 (1984-86); 1983 Bianchi stays unlinked as before
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
  },
  'Rear Derailleurs': {
    // Bare "Simplex" (catalog names only the brand, no model) was exact-
    // matching component_id 4549, a bare-brand placeholder row wrongly dated
    // 1920-1920 — linking e.g. 1979 Peugeots to a "1920 Simplex" derailleur.
    // Every current use of the bare value is 1979 Peugeot; block it outright
    // rather than year-range it, since there's no real row to point at.
    'simplex': null,
    'simplex prestige': 4583, // Simplex Prestige (variant of AR637P/NI), 1971-1972
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
    'new huret jubilee': 4303, // Huret Jubilee (first version)
    // 1974 Motobecane.
    'huret jubilee': 4303,
    'simplex prestige stem shifter': 4583,
    'sun tour vgt lux down tube ratchet shifter': 4704, // SunTour V-GT Luxe (version 1)
    'sun tour vgt stem power shifter': 4695, // SunTour V-GT (type 2C or 2D)
    // 1975 Motobecane.
    'huret jubilee wide ratio': 4303,
    'sun tour vgt luxe stem power shifter': 4704,
    'sun tour vgt luxe down tube ratchet shifters': 4704,
    // 1981 Kalkhoff. "600 AX" otherwise substring-matches plain "Shimano 600".
    'campagnolo super record': [{ to: 1983, id: 4149 }, { from: 1984, id: 4152 }], // PAT. 80 for 1981 Kalkhoff; 4001 2nd gen ver. 2 (1984-87) for 1986 Cinelli
    'dura ace ex': 4509, // Shimano RD-7200, Dura-Ace EX
    'shimano 600 ax': 4465, // Shimano RD-6300, 600 AX
    // 1983 Bianchi (3500 Nuovo Gran Sport); 1973 Bianchi Special -> the
    // 1012/4 Gran Sport, which the DB dates to 1973.
    'campagnolo gran sport': [{ to: 1977, id: 4118 }, { from: 1978, id: 4085 }], // 1012/4 Gran Sport / 3500 Nuovo Gran Sport
    // 1973 Bianchi junior Rekord.
    'campagnolo valentino': 4079, // Campagnolo Nuovo Valentino (1970)
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
    'suntour xc comp top pull powerflo': 4783, // SunTour XC Comp
    // 1985 Raleigh (Sheldon Brown scan).
    'shimano model 105': 4452, // Shimano RD-A105, 105 Golden Arrow (1983-86)
    'shimano z503': 4545, // Shimano RD-Z503, Z-Series
    'shimano z503 gs': 4545, // Shimano RD-Z503, Z-Series
    'shimano z505gs': 4546, // Shimano RD-Z505, Z-Series
    'shimano deore xt': 4490, // Shimano RD-M700, Deore XT M700 (Version 2, 1985-86)
    'suntour cyclone mkiii': 4739, // SunTour Cyclone (1984 row)
    'suntour superbe pro': [{ to: 1983, id: 4766 }, { from: 1984, id: 4768 }], // 1979-83 row keeps the 1983 Bianchi pick; friction row 1983-86 for 1985 Raleigh
    'suntour arx': 4727, // SunTour aRX (short cage)
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 4168, // G010-SM, Victory (1984-86)
    'campagnolo record corsa': 4096, // 0102050, C-Record first generation (1985-86)
    // 1975 Falcon.
    'campagnolo velox': 4167, // 2250 Velox (1971-75)
    // 1979 Peugeot (French catalogue).
    'simplex slj 5500 cp': 4651, // Simplex SLJ5500 (version 1) 1979-84
    'simplex sx 410 t': 4621, // Simplex SX410 T (1977-85)
    'simplex sx 410 tsp': 4621, // TSP variant not in DB; SX410 T is the same gear
    'simplex 410 tsp': 4621, // as above (PK 60 wording)
    'simplex sx 100 t': 4657, // Simplex SX100 T (1975-80)
  },
  Hubs: {
    // Ambiguous between "Zeus Gigante road" and "Zeus Gigante Pista"; the
    // 1973 Zeus catalog lists bare "Zeus Gigante" only on road models.
    'zeus gigante': 3651, // Zeus Gigante road
    // The catalog's track hub; the only Zeus pista hub in the DB is the
    // Gigante Pista.
    'zeus pista': 3652, // Zeus Gigante Pista
    // 1973 Raleigh ("wide flange" = high flange).
    'campagnolo record wide flange q r': 3260, // Campagnolo 1035, Record (high flange)
    'campagnolo record wide flange': 3270, // Campagnolo 1036, Record Pista (high flange) — track model
    'normandy luxe q r competition wide flange': 3388, // Normandy Luxe Competition (gold label)
    'normandy sport q r wide flange alloy': 3390, // Normandy Sport (high flange, oblong holes)
    'normandy sport alloy wide flange q r': 3390,
    // 1974 Motobecane. Bare "Normandy Luxe Competition" is ambiguous between
    // the gold- and red-label rows; the road bikes took the high-flange gold.
    'normandy luxe competition': 3388,
    'normandy sport with quick release': 3390,
    'campagnolo record': [{ to: 1987, id: 3260 }, { from: 1990, id: 3265 }], // 1035 high flange (to 1987, covers 1986 Cinelli) / Record 8sp
    // 1975 Motobecane.
    'campagnolo record large flange': 3260,
    'campagnolo record low flange': 3259, // Campagnolo 1034, Record (Low Flange)
    // 1981 Kalkhoff.
    'shimano 600 ax': 3532, // Shimano FH-6361, 600 AX
    // 1983 Bianchi. Bare "Nuovo Record" substring-hits an oddly titled
    // "(low flange, non-drilled, disk?)" row; the NR hubs are the 1034/1035.
    'campagnolo nuovo record': 3259, // Campagnolo 1034, Record (Low Flange)
    'campagnolo gran sport': 3256, // Campagnolo 1006, Gran Sport
    'campagnolo record pista (32 spoke tied soldered)': 3270, // Campagnolo 1036, Record Pista (high flange)
    'gipiemme pista': 3351, // Gipiemme Special Pista
    // 1987 Bianchi. "Shimano 105" otherwise hits the 1985-86 Golden Arrow;
    // N105 is the 1050 series.
    'campagnolo c record': 3241, // Campagnolo 322/101, C-Record
    'campagnolo new victory': 3281, // Campagnolo Victory 422 (low flange)
    'shimano dura ace': [{ from: 1984, to: 1989, id: 3560 }, { from: 1990, id: 3562 }], // FH-7400 / FH-7403 Hyperglide
    'shimano 105': [{ to: 1989, id: 3524 }, { from: 1990, id: 3527 }], // HB-1050 / FH-1055 105SC
    'ofmega competizione pista': 3445, // Ofmega Super Competizione Track (high flange)
    // 1993 Bianchi (spoke counts stripped from the CSV).
    'campagnolo chorus': 3250, // Campagnolo FH-00CH / HB-00CH, Chorus
    'campagnolo veloce': 3279, // Campagnolo HB-00VL / HF-00VL, Veloce
    'shimano ultegra': 3534, // Shimano FH-6400, 600 Ultegra
    'shimano rx100': 3579, // Shimano HB-A550 / FH-A550, RX100
    'shimano xtr': 3581, // Shimano FH-M900, XTR M900
    'shimano dx': 3542, // Shimano FH-M650 / HB-M650, Deore DX
    'shimano xt': 3552, // Shimano FH-M737, Deore XT M737
    'shimano lx': 3544, // Shimano FH-M550, Deore LX
    alloy: null, // generic word; substring-hits "Roval by Maillard alloy rear hub"
    // 1985 Raleigh (Sheldon Brown scan).
    'sansin "gyro" precision sealed bearing alloy small flange qr': 3601, // Sunshine Gyro-Master
    'shimano 105 small flange alloy qr 36 hole sealed': 3526, // Shimano 105, 105 Golden Arrow
    // 1986 Cinelli (Ten Speed Drive Imports).
    'campagnolo record sf': 3241, // 322/101 C-Record small flange, fitted with the 1986 Record Corsa group
    'campagnolo victory sf': 3281, // Victory 422 (low flange)
    // 1975 Falcon.
    'campagnolo quick release': [{ to: 1985, id: 3260 }], // 1035 Record high flange, matches the Hubs "campagnolo record" range
    'campagnolo single sided track': 3270, // 1036 Record Pista (high flange)
    // 1979 Peugeot (French catalogue).
    'spidel 700 small flange quick release': 3591, // Spidel/Maillard 700
    'normandy quick release': 3389, // Normandy Luxe Competition (red label, low flange) 1970-80
    'normandy dural small flange quick release': 3389, // Normandy Luxe Competition low flange
    'normandy dural quick release': 3389, // Normandy Luxe Competition low flange
    'maillard dural large flange quick release': 3391, // Maillard Normandy (high flange, oblong holes) 1960-80
    'maillard large flange quick release': 3391, // Maillard Normandy high flange
    'maillard large flange': 3391, // Maillard Normandy high flange
  },
  Brakes: {
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
    'shimano dura ace': [{ to: 1983, id: 987 }, { from: 1984, to: 1989, id: 991 }, { from: 1990, id: 993 }], // centre-pull / BR-7400 / BR-7403 SLR-S
    // 1973 Bianchi (Italian catalog). "Corsa Mod. 68" is the Super 68; the
    // Mod. 51 is still fitted to the Rekord 74 despite the DB's 1951-61 dating.
    'universal corsa mod 68': 1082, // Universal Super 68
    'universal mod 51': 1080, // Universal Extra Mod. 51 (Brev 453949)
    'shimano 600': [{ to: 1983, id: 963 }, { from: 1984, id: null }], // centre-pull / no row
    // 1993 Bianchi. Bare "Chorus" substring-hits a 2000s 10-speed row.
    'campagnolo chorus': [{ from: 1990, to: 1999, id: 565 }], // Campagnolo BR-02CH, Chorus Monoplaner
    'shimano ultegra': 966, // Shimano BR-6400, 600 Ultegra
    'shimano rx100 aero levers': 1007, // Shimano BR-A550, RX100
    'shimano xtr': 1018, // Shimano BR-M900, XTR M900
    'shimano deore lx m system': 977, // Shimano BR-M560, Deore LX
    'shimano exage es m system': 1002, // Shimano BR-M520, Exage ES
    'dia compe xce cantilevers 287 levers': 703, // Dia-Compe XCE
    'dia compe 987 ss 7 brs': 652, // Dia-Compe 987
    // 1985 Raleigh (Sheldon Brown scan).
    'dia compe agc 300 250 cold forged alloy': 686, // Dia-Compe Aero Gran Compe (AGC 300 caliper, 250 lever)
    'dia compe acg 300 250 cold forged alloy': 686, // catalog typo for AGC 300/250
    'dia compe aerodynamic ac 500g acg 250': 665, // Dia-Compe AC 500 (G)
    'dia compe dc500n 164 alloy sp with extension levers': 681, // Dia-Compe N500
    'dia compe 500qs cold forged alloy sp': 682, // Dia-Compe N500 (quick release)
    'dia compe qs 500n 152 gum hoods': 682, // Dia-Compe N500 (quick release)
    'dia compe 960 161 gum hoods alloy cantilever': 690, // Dia-Compe Gran Compe GC960
    'shimano deore xt cantilever': 980, // Shimano BR-MC70, Deore XT M700 (1983-86)
    'shimano deore xt alloy cantilever shimano z levers with gum hoods': 980, // Shimano BR-MC70, Deore XT M700 (1983-86)
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 590, // Victory 415/102
    'campagnolo record corsa': null, // Delta not yet shipping in 1986; Record Corsa groups were delivered with Super Record brakes, so no single right row
    // 1975 Falcon.
    'campagnolo': [{ to: 1977, id: 573 }], // only Record 2040 pre-CPSC existed; 1975 Falcon Model 76
    // 1979 Peugeot (French catalogue).
    'side pull': null, // generic; matcher hit Phillips Side-Pull
    'spidel competition centre pull': 1029, // Spidel (made by Mafac); the Mafac Competition rebadged
    'weinmann 605 side pull': 1133, // Weinmann AG 605 (incised lettering, cap nut) 1978-80
    'mafac competition simplified centre pull': 825, // MAFAC Competition (later version)
    'mafac competition centre pull': 825, // MAFAC Competition (later version)
    'mafac racer centre pull': 838, // MAFAC Racer (lettered MAFAC RACER) 1970-80
    'mafac special cyclo tandem cantilever front and rear maillard drum rear': 845, // MAFAC Tandem
  },
  Headsets: {
    // 1974 Motobecane.
    campagnolo: 2959, // Campagnolo 1039, Gran Sport / Record
    'stronglight competition': 3124, // Stronglight V4 Competition (earlier version, two pin locknut)
    // 1975 Motobecane. Without this the only substring hit is the Record
    // Pista #1040 track headset.
    'campagnolo record': 2959,
    // 1981 Kalkhoff (ambiguous with the Super Record Pista row).
    'campagnolo super record': 2968, // Campagnolo 4041, Super Record
    // 1983 Bianchi. Bare "Nuovo Record" substring-hits the Alleggerita
    // variant; the standard NR headset is the 1039.
    'campagnolo nuovo record': 2959, // Campagnolo 1039, Gran Sport / Record
    'campagnolo gran sport': 2951, // Campagnolo 1040/A, Gran Sport
    'gipiemme pista': 3008, // Gipiemme Special (Pista)
    // 1987 Bianchi. Bare "C Record" substring-hits the Century Finish variant.
    'campagnolo c record': 2954, // Campagnolo 304/104, C-Record
    'gipiemme cronosprint': 3007, // Gipiemme Crono Sprint
    'shimano 105': [{ to: 1989, id: 3083 }, { from: 1990, id: 3086 }], // HP-1050 / HP-1055 105SC
    'shimano dura ace': [{ from: 1984, to: 1989, id: 3099 }, { from: 1990, id: 3100 }], // HP-7400 / HP-7410
    // 1993 Bianchi.
    'campagnolo record': [{ to: 1985, id: 2959 }, { from: 1990, id: 2964 }], // 1039 / HS-01RE
    'campagnolo chorus': 2956, // Campagnolo 704/101, Chorus
    'shimano ultegra': 3087, // Shimano HP-6400, 600 Ultegra
    'tange cd sealed': 3155, // Tange-Seiki Levin CD
    // 1979 Peugeot (French catalogue).
    'spidel s7 competition': 3123, // Stronglight S7 Super Competition; DB dates it 1981-83, catalogue shows it 1979
  },
  'Bottom Brackets': {
    // 1981 Kalkhoff. Bare substring hits the titanium 1st-gen row; the
    // period part is the second-gen 4031.
    'campagnolo super record': 43, // Campagnolo 4031, Super Record (Second Gen)
    'dura ace ex 42 53': 136, // Shimano BB-7200, Dura-Ace EX
  },
  Cranksets: {
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
    'sakae 42 52': 1732, // Sakae/Ringyo (SR)
    'sakae 40 52': 1732,
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
    'campagnolo gran sport': [{ from: 1978, id: 1473 }], // Campagnolo 0304, (Nuovo) Gran Sport (144 BCD; bianchi labeled)
    // 1987 Bianchi. "Master Gran Premio" substring-hit Master; the catalog
    // names the Gran Premio.
    'ofmega master gran premio 52 42t': 1694, // Ofmega Gran Premio
    'ofmega super competizione 52 42t': 1703, // Ofmega Super Competizione (road, 2nd version)
    'ofmega super competizione pista 48t': 1702, // Ofmega Super Competizione (pista)
    'campagnolo victory 52 42t': 1516, // Campagnolo 0355, Victory
    'shimano 105 52 42t biopace': 1778, // Shimano FC-1050, 105
    'shimano dura ace 53 42t': 1819, // Shimano FC-7400, Dura-Ace
    // 1993 Bianchi (SG-X/Powering stripped from the CSV). "Record" in 1993
    // is the C-Record generation crank.
    'campagnolo record 53 39t': 1482, // Campagnolo C-Record (1987-1994)
    'campagnolo chorus 53 39t': 1488, // Campagnolo FC-01CH, Chorus
    'campagnolo chorus 53 44t': 1488,
    'shimano 105 53 39t': 1782, // Shimano FC-1055, 105SC
    'shimano dura ace 53 39t': 1820, // Shimano FC-7402, Dura-Ace
    'shimano ultegra 53 39t': 1790, // Shimano FC-6400, 600 Ultegra
    'shimano rx100 52 42 30t': 1840, // Shimano FC-A550-T, RX100 (triple)
    'shimano xtr 48 36 26t': 1848, // Shimano FC-M900, XTR M900
    'shimano xtr 46 36 26t': 1848,
    'shimano deore lx 46 36 26t': 1807, // Shimano FC-M550, Deore LX
    // 1985 Raleigh (Sheldon Brown scan).
    'ofmega "mistral" 52 42 170mm': 1699, // Ofmega Mistral
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 1516, // 0355, Victory double; matcher picked the triple
    'campagnolo record corsa': 1483, // C-Record 306/101 (1985-86)
    // 1975 Falcon.
    'campagnolo sport': 1476, // 3320 Gran Sport / Sport (1970-75)
    'campagnolo sport cotterless': 1476, // 3320 Gran Sport / Sport (1970-75)
    'campagnolo cotterless': [{ to: 1977, id: 1496 }], // 1049 Nuovo Record Strada v4 on the Nuovo Record Model 76
    // 1979 Peugeot (French catalogue).
    'stronglight 49 d anodised square taper double 42 x 52': 1895, // Stronglight 49D (Depose), as the 1975 Motobecane pick; DB has no 1970s 49D row
    'stronglight 49 d dural triple 32 x 42 x 52': 1893, // Stronglight 49 Tri
  },
  Saddles: {
    // The catalog's "Zeus Leather" saddle is the DB's black suede Zeus.
    'zeus leather': 5708, // Zeus (black suede)
    // 1973 Raleigh. "B17N" is the B17 Narrow.
    'brooks b17n leather': 5310, // Brooks B17 Champion Narrow
    'brooks b17n': 5310,
    'brooks b17 leather': 5315, // Brooks B17 Champion Standard
    'brooks professional': 5303, // Brooks Team Professional
    'brooks professional team special leather': 5304, // Brooks Team Professional "Team Special"
    // 1974 Motobecane (the seat post aside is not part of the saddle).
    'brooks professional with alloy seat post': 5303,
    'brooks professional with campagnolo seat post': 5303,
    // 1983 Bianchi.
    'cinelli #2': 5332, // Cinelli Unicanitor #2 suede
    // 1987 Bianchi.
    'selle italia special mundialita': 5497, // Selle Italia Mundialita
    // 1993 Bianchi. "Turbo-Matic" in 1993 is the Turbo Matic 2; bare "Flite"
    // is ambiguous across six variants, the original is the Titanium.
    'selle italia turbo matic': 5516, // Selle Italia Turbo Matic 2
    'selle italia flite': 5489, // Selle Italia Flite Titanium
    'avocet gelflex r20': 5249, // Avocet R20 GelFlex
    // 1986 Cinelli (Ten Speed Drive Imports).
    'concor rolls': 5563, // Selle San Marco Rolls
    'concor sc': 5547, // Selle San Marco Concor Supercorsa
    // 1975 Falcon.
    'mattress': null, // generic; matcher hit a Brooks mattress saddle
    // 1979 Peugeot (French catalogue).
    'course': null, // generic; hit Selle San Marco Mercier Course
  },
  Handlebars: {
    // Ambiguous between "Cinelli 67 Pista" and "Cinelli 67 Pista (old
    // logo)"; a 1973 catalog predates the logo change.
    'cinelli pista handlebars': 2811, // Cinelli 67 Pista (old logo)
    // 1975 Motobecane.
    'philippe professional': 2895, // Philippe Professionnel
    "cinelli giro d'italia": 2801, // Cinelli 64 Giro D'Italia (70's model)
  },
  Stems: {
    // 1975 Motobecane: the Giro d'Italia bar was paired with the 1A stem.
    "cinelli giro d'italia": 6489, // Cinelli 1A (winged "C" logo)
    // 1981 Kalkhoff. Cinelli's "Super Record" stem is the 1R (1/Record).
    'cinelli super record': 6491, // Cinelli 1R (1/Record)
    'shimano 600 ax': 6674, // Shimano HS-6300, 600 AX
    // 1987 Bianchi.
    '3ttt ar84': 6424, // 3ttt Record 84 (AR84 silver)
    'itm 400': 6564, // ITM 400 Racing
    'sr custom': 6659, // Sakae/Ringyo (SR) CUSTOM
    // 1985 Raleigh (Sheldon Brown scan).
    'sr ae alloy aero black': 6657, // Sakae/Ringyo (SR) Aero
    // 1986 Cinelli (Ten Speed Drive Imports).
    'cinelli mod 1 r': 6491, // Cinelli 1R (1/Record)
    'cinelli 1 a': 6489, // Cinelli 1A (winged "C" logo, 1978-82)
    'cinelli mod 1 a': 6489, // Cinelli 1A (winged "C" logo, 1978-82)
    // 1979 Peugeot (French catalogue).
    'atax forged dural anodised hidden expander': 6447, // ATAX (1A style)
  },
  Shifters: {
    // 1987 Bianchi. The catalog's "levers" are the down-tube shifters.
    'campagnolo c record': 5970, // Campagnolo C-Record Retro-Friction (2nd Gen.)
    'c record levers': 5970,
    'shimano 105 sis': 6130, // Shimano SL-1050, 105 (6sp)
    'suntour cyclone 7000 barcon': 6280, // SunTour Cyclone 5000/7000/9000
    // 1993 Bianchi (down-tube and thumb shifters).
    'campagnolo chorus 8 speed downtube shift levers': 5976, // Campagnolo Chorus Friction - Graphite finish
    'shimano rx100 gs sis': 6189, // Shimano SL-A550, RX100
    'deore xt thumb shifters': 6160, // Shimano SL-M732, Deore XT M730
    // 1985 Raleigh (Sheldon Brown scan).
    'shimano model 105': 6132, // Shimano SL-A105, 105 Golden Arrow
    'shimano z401 down tube': 6194, // Shimano SL-Z401, Z-Series
    'shimano z408': 6195, // Shimano SL-Z408, Z-Series
    'shimano z408 down tube': 6195, // Shimano SL-Z408, Z-Series
    'shimano z408 down tube braze on': 6195, // Shimano SL-Z408, Z-Series
    'shimano xt fingertip shifters': 6158, // Shimano SL-M700, Deore XT (1983-86)
    'suntour fingertip ld 2800': 6307, // SunTour LD-2800 Power Thumb Shifter
    'suntour superbe pro': 6301, // SunTour LD-4650, Superbe Pro (1983-86)
  },
  'Shifting Brake Levers': {
    // 1993 Bianchi (integrated levers; the Shifters label maps to both
    // categories). No Record or Chorus Ergopower rows of this era in the DB.
    'shimano dura ace sti': 6365, // Shimano ST-7400, Dura-Ace 7400
    'shimano ultegra sti': 6358, // Shimano ST-6400, 600EX Ultegra
    'shimano 105 sti': 6357, // Shimano ST-1055, 105SC
  },
  'Brake Levers': {
    // 1986 Cinelli groupset fan-out.
    'campagnolo super record': 231, // 4062 post-83 shield-logo hoods (1983-87)
    'campagnolo victory': 235, // Victory levers (1984-87)
    'campagnolo record corsa': 212, // 0118065, C-Record first generation (1985-86)
  },
  Pedals: {
    // 1973 Raleigh.
    'campagnolo strada': 3708, // Campagnolo 1037, Record Strada
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
    'ofmega master': 3879, // Ofmega Master Strada (Road)
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
    // 1975 Falcon.
    'campagnolo': [{ to: 1985, id: 3708 }], // 1037 Record Strada, the only Campagnolo road pedal of the period
    'campagnolo track pattern': 3711, // 1038 Record Pista (silver finish, 1971-85)
    // 1979 Peugeot (French catalogue).
    'lyotard dural course with toe clips and straps': 3815, // Lyotard 460D (1970-80), the standard French dural quill
    'lyotard with toe clips and straps': 3815, // Lyotard 460D
  },
  'Seat Posts': {
    // Bare "Campagnolo": the 1044 Record for 70s catalogs; nothing to pick
    // from in the 90s (Krono 1993), so blocked rather than wrong.
    'campagnolo': [{ to: 1985, id: 5749 }, { from: 1990, id: null }], // Campagnolo 1044, Record
    'shimano dura ace': [{ from: 1990, id: 5895 }], // Shimano SP-7410, Dura-Ace 7400 — 1993 Bianchi
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
    // 1986 Cinelli (Ten Speed Drive Imports).
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 5764, // Victory / Triomphe
    'campagnolo record corsa': 5738, // A0R2, C-Record aero
  },
  // Brand-level rows the single-word-title rule now refuses by substring,
  // but where the DB's brand entry genuinely is the product being described.
  Chains: {
    // Bare "Shimano" was exact-matching component_id 1403, a bare-brand
    // placeholder wrongly dated 1980-1980 — linking 1987 Bianchis to a
    // "1980 Shimano" chain with no real model behind it. Block it.
    shimano: null,
    'iris 1 2 x 3 32': 1369, // Iris (1973 Zeus)
    // 1981 Kalkhoff: no chain row is titled EX; the CN-7100 Uniglide is the
    // Dura-Ace chain of the EX era.
    'dura ace ex': 1411, // Shimano CN-7100, Dura-Ace (Uniglide)
    // 1993 Bianchi.
    rohloff: 1396, // Rohloff SLT 99 (Road)
    'shimano dura ace chain': 1414, // Shimano CN-7401, Dura-Ace 7400
    // 1986 Cinelli (Ten Speed Drive Imports).
    'regina cxs': 1384, // Regina CX / CX-S
    // 1975 Falcon.
    'renolds': 1393, // Renold (two identical brand rows; first taken)
  },
  Cassettes: {
    // 1993 Bianchi ("cassette" noun stripped from the CSV).
    'campagnolo 12 23t 8 speed': 1186, // Campagnolo Record Exa-Drive (8sp)
    'campagnolo 12 23 8 speed': 1186,
    'shimano dura ace 12 23t 8 speed': 1205, // Shimano CS-7400-8, Dura-Ace 7400 (Uniglide)
    'suntour powerflo 11 28t 8 speed': 1220, // SunTour CS-AP20-S8, XC Comp
  },
  Freewheels: {
    'simplex 14 24t': 2225, // Simplex
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
    'maillard 14 15 17 19 21 24': 2110, // Maillard brand row; no model named
    'maillard 14 17 19 21 24': 2110, // Maillard brand row
    'maillard 14 16 18 21 24': 2110, // Maillard brand row
    'maillard 14 17 20 24 28': 2110, // Maillard brand row
    'maillard 14 16 20 24 28': 2110, // Maillard brand row
    'maillard 14 16 18 20 23': 2110, // Maillard brand row
  },
  Tyres: {
    'clement criterium silk tubular': 6748, // Clement Criterium Seta (seta = silk)
    // 1975 Motobecane "Wheel Rims & Tires" cells (matched under Tyres via
    // SPLIT_LABELS); the Super Champion rim model isn't named, so no Rims
    // override.
    'super champion rims elvezia tubulars': 6752, // Clement Elvezia
    'super champion rims paris roubaix tubulars': 6762, // Clement Paris - Roubaix
    // 1987 Bianchi. The DB spells Giro del Mondo "Mundo".
    'vittoria cg': 6877, // Vittoria Corsa CG Seta
    'vittoria giro del mondo': 6889, // Vittoria Giro del Mundo
    // 1993 Bianchi (ambiguous between Servizio Corse and Squadre Prof).
    'vittoria corsa cx': 6880, // Vittoria Corsa CX Servizio Corse
    // 1986 Cinelli (Ten Speed Drive Imports).
    'clement 2001cf': 6740, // Clement CF 2001
    'clement 2001 cf': 6740, // Clement CF 2001
  },
  Rims: {
    // id 5123 is a bare "Nisi" placeholder wrongly dated 1980-1980 (this
    // value is only ever used by 1973 Raleighs, which predate it entirely);
    // 5124 is the other bare "Nisi" row, dated 1970-1980, which covers 1973.
    'nisi ava sprint alloy': 5124, // Nisi
    'ava sprint alloy': 4937, // AVA
    // 1984 Bianchi. GP 4 is ambiguous with its red-label variant; the OR 10
    // value carries a spoke aside.
    'mavic gp4': 5069, // Mavic GP 4
    'mavic or 10 (tied and soldered spokes)': 5103, // Mavic OR 10
    // 1987 Bianchi (three identically titled MA 40 rows).
    'mavic ma40': 5077, // Mavic MA 40
    // 1993 Bianchi.
    'campagnolo omicron': 4962, // Campagnolo Omicron Strada Polished (three finishes)
    'mavic 231': 5071, // Mavic M 231 CD
    "fir tour or ambrosio giro d'italia": null, // either/or spec; don't pick one
    // 1985 Raleigh (Sheldon Brown scan).
    'araya 16a 5 alloy 27 x 1 3 8 36 hole front 40 hole rear': 4916, // Araya 16A (box style alloy clincher)
    // 1975 Falcon.
    'sprint': null, // generic term for a tubular rim; matcher hit Fiamme Sprint
    'lightweight sprint': null, // generic
    // 1979 Peugeot (French catalogue).
    '700c': null, // wheel size, not a rim; hit Diamant 700C
    '350': null, // wheel size; hit Araya TX-350
    'super champion 700c dural': 5176, // Super Champion Competition (1970-80), the standard tubular
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
function resolveOverride(entry, year) {
  if (entry === undefined) return undefined;
  if (entry === null || typeof entry === 'number') return entry;
  const y = Number(year);
  const hit = entry.find((r) => (r.from == null || y >= r.from) && (r.to == null || y <= r.to));
  return hit ? hit.id : undefined;
}

function matchComponent(valueText, componentRecords, excludeTitle, label, year) {
  if (!valueText) return null;
  const normalizedLabel = label.trim().toLowerCase();
  const normalizedValue = normalizeForMatch(valueText);

  const categories = LABEL_TO_CATEGORY[normalizedLabel];
  if (!categories) return null;

  for (const category of categories) {
    const overrideId = resolveOverride(COMPONENT_OVERRIDES[category]?.[normalizedValue], year);
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

  for (const file of files) {
    const filename = path.basename(file);
    const parsed = parseFilename(filename);
    if (!parsed) {
      skippedFiles.push(filename);
      continue;
    }
    const { year, brand } = parsed;
    brands.add(brand);
    catalogSources.set(catalogueLabel(year, brand), filename);

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
          for (const label of expandLabel(labels[i])) {
            rowSpecs.push({ label, rawLabel: labels[i], valueText });
          }
        }
      }

      bikes.push({ brand, title, year, searchText: buildSearchText(title, brand), ...bikeFields });
      bikeCount++;

      for (const { label, rawLabel, valueText } of rowSpecs) {
        specs.push({ brand, bikeTitle: title, year, label, rawLabel, valueText });
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
  for (const [label, filename] of catalogSources) lines.push(dataSourceLookupInsert(label, filename));
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
    const sourceRefSelect = dataSourceSubquery(catalogueLabel(bike.year, bike.brand));
    lines.push(
      `INSERT INTO bike (brand_id, title, category, year_from, sizes, colors, weight, search_text, source_ref)\n` +
        `  SELECT ${brandIdSelect}, ${title}, ${category}, ${yearFrom}, ${sizes}, ${colors}, ${weight}, ${searchText}, ${sourceRefSelect}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM bike WHERE brand_id = ${brandIdSelect} AND title = ${title} AND year_from = ${yearFrom}\n` +
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
    const bikeIdSelect =
      `(SELECT bike_id FROM bike WHERE brand_id = ${brandIdSelect} AND title = ${bikeTitle} AND year_from = ${yearFrom})`;
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

    const matched = matchComponent(spec.valueText, componentRecords, spec.brand, spec.label, spec.year);
    if (matched) linkedCount++;
    const componentIdSelect = matched ? String(matched.component_id) : 'NULL';
    const sourceRefSelect = dataSourceSubquery(catalogueLabel(spec.year, spec.brand));

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
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
