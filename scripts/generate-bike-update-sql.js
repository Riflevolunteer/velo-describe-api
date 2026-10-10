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
  return { year: m[1], brand: BRAND_NAMES[token] || capitalize(token) };
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
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 105': 2466, // Corsa: Shimano FD-A105, 105 Golden Arrow (1983-85)
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
    // 1977 Raleigh (US). Record 24 "Challenger" is the Huret. Gran Sport front
    // and Compe V left unlinked (GS front rows start 1978; two Compe-V rows).
    'challenger derailleur 10 speed': 2388, // Huret Challenger 950 / 951
    // 1974 Motobecane (shifter asides now split into the Shifters column).
    'huret jubilee': [{ to: 1976, id: 2396 }, { from: 1977, id: 2395 }],
    // 1975 Motobecane.
    'huret jubilee wide ratio': [{ to: 1976, id: 2396 }, { from: 1977, id: 2395 }],
    'huret challenger': 2388, // Huret Challenger 950 / 951 (hinged clamping band)
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
    'shimano deore xt': 2497, // Shimano FD-M700, Deore XT (1983-86)
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
  },
  'Rear Derailleurs': {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 105': 4452, // Corsa / Record Sprint: Shimano RD-A105, 105 Golden Arrow (1983-85)
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
    'simplex prestige': 4583, // Simplex Prestige (variant of AR637P/NI), 1971-1974
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
    'suntour xc comp top pull powerflo': 4783, // SunTour RD-XC20-GXB, XC-Comp (GX)
    'suntour fs e top pull': 7951, // SunTour RD-FE00-GXB, FS-E ("Top Pull" describes the front only)
    // 1985 Raleigh (Sheldon Brown scan).
    'shimano model 105': 4452, // Shimano RD-A105, 105 Golden Arrow (1983-86)
    'shimano z503': 4545, // Shimano RD-Z503, Z-Series
    'shimano z503 gs': 4545, // Shimano RD-Z503, Z-Series
    'shimano z505gs': 4546, // Shimano RD-Z505, Z-Series
    'shimano deore xt': 4490, // Shimano RD-M700, Deore XT M700 (Version 2, 1985-86)
    'suntour cyclone mkiii': 4739, // SunTour RD-6000, Cyclone (S), No. 62 (Dec 1984)
    'suntour superbe pro': [{ to: 1983, id: 4766 }, { from: 1984, id: 4768 }], // 1979-83 row keeps the 1983 Bianchi pick; friction row 1983-86 for 1985 Raleigh
    // 1985 Raleigh Grand Prix: short-cage RD-4300. 1985 Bianchi Randonneur 700 runs a 50/45/34 triple with a 14-28 block, so the long-cage GT.
    'suntour arx': [{ bike: 'Randonneur 700', from: 1985, to: 1985, id: 4729 }, { id: 4727 }], // SunTour RD-4500 ARX (GT) / RD-4300 ARX
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 4168, // G010-SM, Victory (1984-86)
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
  },
  Hubs: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'shimano 600 ax small flange qr': 3532, // Road Ace: Shimano FH-6361, 600 AX
    'shimano 105 small flange alloy qr': 3526, // Corsa: Shimano HB-F105 / HB-R105, 105 Golden Arrow (small flange)
    'maillard competition small flange alloy qr': 8136, // Competition: Maillard Normandy (small flange, de-luxe competition, Q/R), Maillard 1979 catalogue row
    'maillard atom helicomatic qr black': 3387, // Quasar: Maillard Helicomatic (the matcher hit the plain Atom)
    'maillard alloy': null, // Pulsar: generic; the matcher hit a Roval by Maillard rear hub
    // 1978 Raleigh (US, ebykr scan).
    'campagnolo nuovo record small flange qr': 3259, // Professional Mk V: 1034 Record (Low Flange)
    'campagnolo gran sport small flange qr': 3256, // Competition GS: 1006 Gran Sport (DB's only Gran Sport hub; see 1985 Bianchi note)
    'atom small flange qr': 3183, // Super Course: Atom (low flange aluminum), as 1977
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo nuovo record 36h': 3259, // Centenario: 1034 Record (Low Flange), as the bare Nuovo Record entry
    'campagnolo record 32h': 3260, // Super Leggera: 1035 Record (high flange), as the bare 'campagnolo record' range
    'campagnolo record 36h': 3260, // Campionissimo
    'campagnolo gran sport 36h': 3256, // Squadra: 1006 Gran Sport, as 1983 Bianchi (the DB's only Gran Sport hub row; velobase dates it 1950-55 but the number was reused by the 1980s group)
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
    'normandy competition large flange q r alloy': 3388, // Normandy Luxe Competition (gold label), as 1973
    'normandy sport large flange q r alloy': 3390, // Normandy Sport (high flange, oblong holes)
    'normandy luxe q r competition wide flange': 3388, // Normandy Luxe Competition (gold label)
    'normandy sport q r wide flange alloy': 3390, // Normandy Sport (high flange, oblong holes)
    'normandy sport alloy wide flange q r': 3390,
    // 1975 Raleigh. Gran Sport's bare "Normandy Large Flange Q/R Alloy" left
    // unlinked (Sport vs Luxe Competition; 1974 Gran Sport had Competition).
    'campagnolo record pista large flange': 3270, // Campagnolo 1036, Record Pista (high flange) — Professional Track
    'campagnolo record strada large flange q r': 3260, // Campagnolo 1035, Record (high flange)
    'normandy competition large flange alloy q r': 3388, // Normandy Luxe Competition (gold label), as 1974
    // 1977 Raleigh (US). Professional Mk V's bare "Campagnolo Record quick
    // release" left unlinked (high vs low flange not stated).
    'campagnolo nuovo tipo small flange quick release': 3230, // Competition GS: Campagnolo 1251, Nuovo Tipo (small flange)
    'atom small flanged forged light alloy quick release': 3183, // Super Course: Atom (low flange aluminum)
    'normandy sport forged large flange light alloy quick release': 3390, // Grand Prix: Normandy Sport (high flange)
    'normandy sport forged large flange light alloy': 3390, // Record Limited
    // 1974 Motobecane. Bare "Normandy Luxe Competition" is ambiguous between
    // the gold- and red-label rows; the road bikes took the high-flange gold.
    'normandy luxe competition': 3388,
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
    'campagnolo gran sport': 3256, // Campagnolo 1006, Gran Sport
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
    'campagnolo chorus': 3250, // Campagnolo FH-00CH / HB-00CH, Chorus
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
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'weinmann 405 qr recessed fitting calipers and hooded levers': 1117, // Competition: Weinmann AG 405, as 1983
    'shimano 105 qr recessed fitting calipers & hooded alloy levers': 958, // Corsa: Shimano BR-S105, 105 Golden Arrow (1983-85)
    'shimano 600 ax recessed fitting calipers and hooded levers': 965, // Road Ace: Shimano BR-6300, 600 AX Parapull
    // 1989 De Rosa 35° Anniversario ("Record-C Delta").
    'campagnolo c record delta': 560, // Campagnolo Delta C-Record (1986-93)
    // c. 1984 De Rosa (ebykr scan).
    'campagnolo c record': null, // Delta not shipping; C-Record groups were delivered with Super Record brakes (as Cinelli / Colnago)
    // 1978 Raleigh (US, ebykr scan).
    'weinmann 605 alloy side pull with wheel guides': 1133, // Competition GS: Weinmann AG 605 (incised lettering, cap nut), the 605 variant dated 1978-80
    'raleigh weinmann short reach alloy center pull': 1138, // Super Course: Weinmann AG Raleigh 610, the short-reach Raleigh centre-pull the 1977 Super Course names as 610
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo nuovo record bianchi engraved': [{ from: 1978, id: 572 }], // Centenario: 2040 Record post-CPSC, as the plain Nuovo Record range
    'campagnolo super record bianchi engraved': 583, // Super Leggera: 4061 v2 (1983-87)
    'modolo flash': 874, // Speciale-II: Modolo Flash (1st version, 1979-88), as 1984 Bianchi
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo gran sport': [{ to: 1980, id: 553 }, { from: 1981, id: 554 }], // first gen for the group's first years (Export); second gen as the 1983 Raleigh 'gran sport brakes' entry
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': null, // Delta not shipping in 1986; groups delivered with Super Record brakes (same call as 1986 Cinelli Record Corsa)
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
    // 1975 Raleigh (US): the "999" is back in the table.
    'weinmann 999 centerpull with lightened q r levers': [{ to: 1975, id: 7929 }], // Weinmann AG Vainqueur 999 (610 / 750)
    'weinmann 999 centerpull with q r levers': [{ to: 1975, id: 7929 }],
    'weinmann 999 centerpull with extension levers': [{ to: 1975, id: 7929 }],
    'campagnolo super record with lightened levers': 582, // 1975 Team Professional: Campagnolo 4061, Super Record v1 (1974-82)
    // 1977 Raleigh (US). Grand Prix / Record Limited "Raleigh/Weinmann forged
    // alloy centerpull" name no model, left unlinked.
    'campagnolo record side pull': [{ to: 1978, id: 573 }], // Professional Mk V: Campagnolo 2040, Record (pre-CPSC)
    'weinmann carrera sidepull with wheel guides': 1167, // Competition GS: Weinmann AG Carrera (earlier, 1970-80)
    'raleigh weinmann 610 centerpull with lightened quick release levers': 1138, // Super Course: Weinmann AG Raleigh 610
    // 1993 Bianchi. Part-number retitle broke the bare-name substring hit; keeps the existing link.
    'campagnolo veloce': 587, // Campagnolo BR-02VL, Veloce Monoplaner
    'shimano deore xt alloy cantilever': 980, // 1985 Raleigh: Shimano BR-MC70, Deore XT M700 (1983-86, first-gen XT)
    // 1974 Motobecane. 1122 is the only Weinmann 500 variant dated before 1980.
    'weinmann 500 side pull': 1122, // Weinmann AG 500 (earlier, red center bolt washer, cap nut)
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
    'shimano dura ace': [{ to: 1983, id: 989 }, { from: 1984, to: 1989, id: 991 }, { from: 1990, id: 993 }], // B-210/BA-100 side-pull / BR-7400 / BR-7403-49 dual pivot
    // 1973 Bianchi (Italian catalog). "Corsa Mod. 68" is the Super 68; the
    // Mod. 51 is still fitted to the Rekord 74 despite the DB's 1951-61 dating.
    'universal corsa mod 68': 1082, // Universal Super 68
    'universal mod 51': 1080, // Universal Extra Mod. 51 (Brev 453949)
    'shimano 600': [{ to: 1983, id: 963 }, { from: 1984, to: 1985, id: null }, { from: 1986, to: 1987, id: 972 }, { from: 1988, id: null }], // centre-pull / BR-6208 600EX (1987 Bianchi Limited)
    'shimano at 50 cantilever': [{ from: 1986, id: 1003 }], // Shimano BR-AT50 (1987 Bianchi Volpe); 1985 Raleigh predates the row
    // 1993 Bianchi. Bare "Chorus" substring-hits a 2000s 10-speed row.
    'campagnolo chorus': [{ from: 1990, to: 1999, id: 565 }], // Campagnolo BR-02CH, Chorus Monoplaner
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
    'weinmann 605 side pull': 1133, // Weinmann AG 605 (incised lettering, cap nut) 1978-80
    'mafac competition simplified centre pull': 825, // MAFAC Competition (later version)
    'mafac competition centre pull': 825, // MAFAC Competition (later version)
    'mafac racer centre pull': 838, // MAFAC Racer (lettered MAFAC RACER) 1970-80
    'mafac special cyclo tandem cantilever front and rear maillard drum rear': 845, // MAFAC Tandem
  },
  Headsets: {
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
    // 1974 Motobecane.
    campagnolo: 2959, // Campagnolo 1039, Gran Sport / Record
    'stronglight competition': 3124, // Stronglight V4 Competition (earlier version, two pin locknut)
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
    'shimano dura ace': [{ from: 1984, to: 1993, id: 3099 }, { from: 1994, id: 3100 }], // HP-7400 / HP-7410
    // 1993 Bianchi.
    // 1975 Motobecane / later catalogues. Without this the only substring hit is the Record Pista #1040 track headset.
    'campagnolo record': [{ to: 1985, id: 2959 }, { from: 1990, id: 2964 }], // 1039 / HS-01RE
    'campagnolo chorus': 2956, // Campagnolo 704/101, Chorus
    'shimano ultegra': 3087, // Shimano HP-6400, 600 Ultegra
    'suntour xc comp': 8045, // SunTour HS-ST00-J / -I (XC-Comp headset per the 1992 system chart)
    'tange cd sealed': 3155, // Tange-Seiki Levin CD
    // 1979 Peugeot (French catalogue).
    'spidel s7 competition': 3123, // Stronglight S7 Super Competition; DB dates it 1981-83, catalogue shows it 1979
  },
  'Bottom Brackets': {
    // 1973 Zeus. Bare 'Zeus Criterium' row 186 was merged into 188 (Zeus catalogue 102 dedupe, 2026-10-04).
    'zeus criterium (e)': 188, // Zeus Ref.33, Criterium
    // 1981 Kalkhoff. Bare substring hits the titanium 1st-gen row; the
    // period part is the second-gen 4031.
    'campagnolo super record': 43, // Campagnolo 4031, Super Record (Second Gen)
    'dura ace ex 42 53': 136, // Shimano BB-7200, Dura-Ace EX
  },
  Cranksets: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'campagnolo nuovo record with 52 42t super record rings': 1496, // Team Replica: 1049 Nuovo Record Strada v4 (1983 key carried "170mm cranks")
    'shimano 600 ax fully detachable 52 42t': 1787, // Road Ace: Shimano FC-6300, 600 AX
    // C-Record crank: 306/101 1985-86, then the 1987-94 row. The matcher exact-hit the first on every year; 1987 Bianchi fixed by one-off UPDATE.
    'campagnolo c record': [{ to: 1986, id: 1483 }, { from: 1987, id: 1482 }],
    'campagnolo c record 53 42t': [{ to: 1986, id: 1483 }, { from: 1987, id: 1482 }], // 1987 Bianchi Mondiale / X4
    // 1978 Raleigh (US, ebykr scan).
    'campagnolo nuovo record cotterless 42 51t': [{ to: 1987, id: 1496 }], // Professional Mk V: 1049 Nuovo Record Strada v4
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
    'shimano dura ace 53 42t': 1819, // Shimano FC-7400, Dura-Ace
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
    // 1993 Bianchi MTBs: "Ritchey Comp leather" is the Logic Comp, new for
    // 1992 (Italian-made leather, spring-steel rails); the Virata adds "Cro-mo
    // rails". The Logic Pro WCS (titanium rails) is the only other Comp-era row.
    'ritchey comp leather': 8410, // Ritchey Logic Comp Saddle
    'ritchey comp leather cro mo rails': 8410, // Virata
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'isca tornado black suede': 5382, // Team Replica: Iscaselle Tornado (suede cover)
    'isca tornado blue suede': 5382, // Road Ace
    // Selle Royal Aero: the only hit is the bare brand row 5521, no Aero model row.
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
    // 1993 Bianchi. "Turbo-Matic" in 1993 is the Turbo Matic 2; bare "Flite"
    // is ambiguous across six variants, the original is the Titanium.
    'selle italia turbo matic': 5516, // Selle Italia Turbo Matic 2
    'selle italia flite': 5489, // Selle Italia Flite Titanium
    'avocet gelflex r20': 5249, // Avocet R20 GelFlex
    // 1986 Cinelli (Ten Speed Drive Imports).
    'concor rolls': 5563, // Selle San Marco Rolls
    'concor sc': 5547, // Selle San Marco Concor Supercorsa
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'mattress': null, // generic; matcher hit a Brooks mattress saddle
    // 1979 Peugeot (French catalogue).
    'course': null, // generic; hit Selle San Marco Mercier Course
  },
  Handlebars: {
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
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'cinelli no 65 alloy bend': 2804, // Team Replica: Cinelli 65 Criterium
    'cinelli no 65 engraved alloy bend': 2804, // Gran Sport
    'shimano dura ace alloy engraved': 2917, // Road Ace (600 AX bike): Shimano HD-7300, Dura-Ace AX
    'sr ctd': 7888, // Sakae/Ringyo (SR) CTD, Custom Double Tube (SR No. 18; 1987 Bianchi)
    // Ambiguous between "Cinelli 67 Pista" and "Cinelli 67 Pista (old
    // logo)"; a 1973 catalog predates the logo change.
    'cinelli pista handlebars': 2811, // Cinelli 67 Pista (old logo)
    // 1975 Motobecane.
    'philippe professional': 2895, // Philippe Professionnel
    "cinelli giro d'italia": 2801, // Cinelli 64 Giro D'Italia (70's model)
    // 2026-10-08 link-gap pass (weakest categories).
    // 1974 Motobecane Le Champion: the only plain "Record" bar; the Record
    // Competizione rows are a different (named) model.
    '3ttt record': 2771, // 3ttt Record (1st Version)
    // 1975 Raleigh Professional Track: the Racing Team Service PISTA row is
    // undated and the later line; this one covers 1975.
    '3ttt track bend': 2753, // 3ttt Record Competizione Track (Pista)
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
    'randonneur bend': 8500, // Philippe Randonneur 355
    // 1983-84 Raleigh Competition / Rapide: the alloy SR Custom bar is CT-L
    // (CT-S is the steel one).
    'sr custom engraved italienne alloy bend': 7889, // Sakae/Ringyo (SR) CT-L, Custom-L
    'sr custom engraved alloy bend': 7889,
  },
  Stems: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'cinelli 1a': 6489, // Team Replica: Cinelli 1A (winged "C" logo), as the 1983 'cinelli no 1a'
    // 1986 Colnago: "attacco 3TTT mod. 84 nero" = the black AR84N (1986-91), not the silver AR84.
    '3ttt mod 84': 8296, // 3ttt AR84N, Mod. 84 (black)
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'cinelli no 1a': 6489, // Team Replica / Gran Sport: Cinelli 1A (winged "C" logo), latest 1A row
    'sr apex forged alloy': 7901, // Competition / Record Ace: SR AX-AH, Apex
    // 1982 Raleigh (UK "Racing Formula" lightweights).
    'forged alloy': null, // generic; substring-hits the 1950s GB Hiduminium spearpoint
    'sr ax; ah': 7901, // Sakae/Ringyo (SR) AX-AH, Apex (SR No. 18; 1981 Kalkhoff)
    // 1975 Motobecane: the Giro d'Italia bar was paired with the 1A stem.
    "cinelli giro d'italia": 6489, // Cinelli 1A (winged "C" logo)
    // 1981 Kalkhoff. Cinelli's "Super Record" stem is the 1R (1/Record).
    'cinelli super record': 6491, // Cinelli 1R (1/Record)
    'shimano 600 ax': 6674, // Shimano HS-6300, 600 AX
    // 1987 Bianchi.
    '3ttt ar84': 6424, // 3ttt AR84, Mod. 84 (Record 84)
    // 1973-75 Raleigh / 1974 Motobecane "T.T.T. Record": the 1970s Mod. 1
    // Record Strada; 1975 Raleighs say "New ...", taken as the 2nd version.
    // The Professional Track DL 175 gets the Mod. 2 Record Pista instead.
    '3ttt record alloy': [
      { bike: 'Professional Track DL 175', id: 6420 }, // 3ttt Mod. 2, Record Pista (64 degree)
      { to: 1974, id: 6417 }, // 3ttt Mod. 1 Record Strada (first version)
    ],
    '3ttt record': [{ to: 1974, id: 6417 }],
    '3ttt record lightweight alloy': [{ to: 1974, id: 6417 }],
    'new 3ttt record': [{ bike: 'Professional Track DL 175', id: 6420 }],
    'new 3ttt record alloy': [{ from: 1975, to: 1975, id: 6416 }], // 3ttt Mod. 1 Record Strada (2nd version)
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
    // 1973 Raleigh. Also substring-hits the 1950s Hiduminium spearpoint.
    'gb forged alloy': 6533, // GB Forged
  },
  Shifters: {
    // 1978 Raleigh (US, ebykr scan).
    'positron stem shifters': 7436, // Record FFS/PPS: Shimano LC-410 / SL-P211, Positron Stem (1977-81)
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
    'shimano 105 sis': 6130, // Shimano SL-1050, 105 (6sp)
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
    'suntour superbe pro': 6301, // SunTour LD-4650, Superbe Pro (1983-86)
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
  },
  Pedals: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'sr sp12 platform alloy': 3924, // Competition: Sakae/Ringyo (SR) SP-12AL
    // 1978 Raleigh (US, ebykr scan).
    // Two Atom 440 rows exist (velobase 3662, 1970-80; Maillard 1978/79 catalogue 7246). Keep the one the 1977 Super Course
    // already links until the component side merges them.
    'atom 440': 3662, // Super Course: Atom 440
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'campagnolo superleggero': 3709, // Super Leggera / Campionissimo: 1037/a Record Strada Superleggeri (SL)
    // 1986 Colnago Catalogo generale group fan-outs.
    'campagnolo c record 180': 3693, // 305/501, C-Record
    'campagnolo triomphe': 3719, // 905/000, Triomphe (1984-86)
    'campagnolo super record 30nnale': 3716, // 4021 Super Record Strada
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'sr sp12 platform alloy': 3924, // Competition: SR SP-12AL
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
    // 1974 Falcon (loaded as 1975 until 2026-10-08).
    'campagnolo': [{ to: 1985, id: 3708 }], // 1037 Record Strada, the only Campagnolo road pedal of the period
    'campagnolo track pattern': 3711, // 1038 Record Pista (silver finish, 1971-85)
    // 1979 Peugeot (French catalogue).
    'lyotard dural course with toe clips and straps': 3815, // Lyotard 460D (1970-80), the standard French dural quill
    'lyotard with toe clips and straps': 3815, // Lyotard 460D
    'spidel 700 dural course': 3833, // Spidel/Maillard 700 Black Alloy Cages; "dural" rules out the steel-cage row
  },
  'Seat Posts': {
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
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'sakae p 5': 5857, // Speciale-II / Randonneur 700 / Rekord 26 / Bambina: SR CT-P5, Custom-P5 (Sakae Laprade)
    'sakae p 3': 5855, // Strada: SR CT-P3, Custom-P3 (melt forging)
    // 1979 Colnago (Yes advertising catalogue): "Gruppo e freni Campagnolo Record" fan-out.
    'campagnolo record': [{ to: 1985, id: 5749 }], // 1044, Record (1969-85)
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
    'campagnolo': [{ to: 1985, id: 5749 }, { from: 1990, id: null }], // Campagnolo 1044, Record
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
    // 1986 Cinelli (Ten Speed Drive Imports).
    // 1986 Cinelli groupset fan-out.
    'campagnolo victory': 5764, // Victory / Triomphe
    'campagnolo record corsa': 5738, // A0R2, C-Record aero
  },
  // Brand-level rows the single-word-title rule now refuses by substring,
  // but where the DB's brand entry genuinely is the product being described.
  Chains: {
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
    'regina oro': [{ to: 1980, id: 1382 }, { from: 1981, id: 1380 }], // Regina Extra 50 Oro / Regina Oro BX
    'shimano uniglide': 7450, // Record FFS/PPS: Shimano QA-200 / CN-UG20, Uniglide-II (1977-89), as the 1983 Road Ace
    // 1979 Colnago.
    'regina extra record': 1381, // Regina Extra 50 Record (1970-80)
    // 1986 Colnago. Everest chains were made by Fossati & C., so the catalogue's "Fossati Racing Cromo" is the Everest Racing Cromo row.
    'fossati racing cromo': 1361, // Everest Modello Racing Cromo
    'everest special cromo': 1364, // Everest Serie Special (silver); the Oro variant is gold, not chrome
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    'sun tour ultra 6 narrow': 7820, // Record Ace / Clubman: SunTour UC-6000, Ultra-6 chain
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
    'shimano xtr 12 28t 8 speed': 7668, // 1993 Bianchi, from the Jul 1992 manual: Shimano CS-M900-8, XTR (Q 12-28T)
    // 1993 Bianchi ("cassette" noun stripped from the CSV).
    'campagnolo 12 23t 8 speed': 1186, // Campagnolo Record Exa-Drive (8sp)
    'campagnolo 12 23 8 speed': 1186,
    'shimano dura ace 12 23t 8 speed': 1205, // Shimano CS-7400-8, Dura-Ace 7400 (Uniglide)
    'suntour powerflo 11 28t 8 speed': 1220, // SunTour CS-AP20-S8, XC Comp
    'suntour powerflo 12 30t 7 speed': 1221, // SunTour CS-AP10-S7 / -K7, PowerFlo 7-speed (1992 catalogue)
    // 1993 Bianchi bare "Hyperglide" 8-speed values: each is on one bike only, and the
    // bike's group plus the catalogued sprocket range pick the cassette. The 6 / 7-speed
    // values are shared across bikes of different groups, so they stay unlinked.
    'shimano hyperglide 12 23t 8 speed': 7671, // SBX / Ultegra-STI: Shimano CS-HG90-8, 600 Ultegra (U 12-23T)
    'shimano hyperglide 13 23t 8 speed': 7762, // Virata (105 STI): Shimano CS-HG70-8, 105SC (T 13-23T)
    'shimano hyperglide 12 28t 8 speed': 7668, // Super Grizzly (XTR): Shimano CS-M900-8, XTR (Q 12-28T)
  },
  Freewheels: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'suntour nw6000 silver 13 14 15 16 17 19 21t': 2238, // Competition: SunTour NW-6000, New Winner (6-speed)
    'suntour pn6000 14 15 17 19 21 24t': 7813, // Sirocco: SunTour PN-6000 / PS-6000, Perfect (6-speed); ebykr's transcription reads "Pro6000", the scan "PN6000"
    'suntour pn5000 14 17 20 24 28t': 2245, // Classic: SunTour 1100-1106 / PT-5000, Perfect (5-speed)
    'sun tour ultra 6 13 14 15 18 21 24t': 2240, // Clubman: SunTour NW-6500, New Winner Ultra 6 (same block as 1983)
    'regina oro 13 14 15 16 17 18t': 2194, // Team Replica: Regina Oro (6 speed)
    'shimano 600 ax cassette 13 14 15 16 17 19 21t': 1197, // Road Ace: Shimano AX, 600 AX (Cassettes row)
    // 1978 Raleigh (US, ebykr scan).
    'raleigh sun tour perfect 14 28t': 2245, // Super Course: SunTour 1100-1106 / PT-5000, Perfect (5-speed)
    'raleigh sun tour perfect 14 34t': 2245, // Super Grand Prix / Grand Prix / Record Ace, as the 1983 Royal
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
  },
  Tyres: {
    // 1984 Raleigh (UK "Racers" catalogue, ebykr scan).
    'vittoria nuovo pro tubular': 6893, // Team Replica / Road Ace: Vittoria Nuovo Pro 260 (only Nuovo Pro row)
    'clement tubulars mod colnago': 6743, // Clement Colnago (1979 Colnago Mexico / Mexico Oro)
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
  },
  Rims: {
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
    // 1985 Bianchi Japan range sheet (Piaggio Japan).
    'martano strada (tubular) araya 20a smoked (700c)': null, // Speciale-II either/or build spec; don't pick one
    // 1986 Colnago Raid / Gentleman Sport / Lady Sport: the only Elite Aero row.
    'ambrosio elite aero black anodized': 4890, // Ambrosio 19 Extra Elite Aero dynamic
    'ambrosio elite aero white': 4890,
    // 1983 Raleigh (UK "Racers" catalogue, Spring 1983).
    // Only A124 row in the DB, dated 1983 (Weinmann's concave A124).
    'weinmann a124 concave section alloy': 7776, // Gran Sport: Weinmann A124 Super X
    'weinmann a124 concave section': 7776, // Competition
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
    '700 c weinmann a 124 narrow concave section alloy': 7776, // Weinmann A124 Super X
    '700 c weinmann a124 narrow concave section alloy': 7776,
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
          for (const part of splitCellValue(expandLabel(labels[i]), valueText)) {
            rowSpecs.push({ label: part.label, rawLabel: labels[i], valueText: part.valueText });
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

    const matched = matchComponent(spec.valueText, componentRecords, spec.brand, spec.label, spec.year, spec.bikeTitle);
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
