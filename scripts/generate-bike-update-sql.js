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
// from the DB (not the static velobase-component-details.jsonl snapshot, so
// components added directly to the DB are matchable too). Only labels with
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
  shifter: ['Shifters'],
  shifters: ['Shifters'],
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
  return SPLIT_LABELS[label.trim().toLowerCase()] || [label];
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
      { to: 1977, id: 2297 }, // Campagnolo Record 1052/1 (1973-1977)
      { from: 1978, to: 1981, id: 2299 }, // Campagnolo Record 1052/NT (1978 - 1982, 3-hole narrow band)
      { from: 1982, id: 2300 }, // Campagnolo Nuovo Record 0104007 (1982 - 1987, 3-hole standard band)
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
    'campagnolo super record': 2313, // Campagnolo 1052/SR, Super Record (1979-1987)
    'dura ace ex': 2518, // Shimano FD-7200, Dura-Ace EX (clamp)
    'shimano 600 ax': 2476, // Shimano FD-6300, 600 AX (clamp)
    // 1983 Bianchi: the 80s (Nuovo) Gran Sport is the 3600/NT.
    'campagnolo gran sport': [{ from: 1978, id: 2276 }], // Campagnolo 3600/NT, Gran Sport
  },
  'Rear Derailleurs': {
    'simplex prestige': 4583, // Simplex Prestige (variant of AR637P/NI), 1971-1972
    // DB title is `Zeus "Especial Alfa 72"` — the quotes and brand prefix
    // defeat substring matching.
    'alfa 72': 4863,
    // Five 1020/A versions in the DB: v3 (spring, solid rivets) early 70s,
    // v4 (hollow rivets) mid 70s, v5 (no spring fixing bolt) from 1978.
    'campagnolo nuovo record': [
      { to: 1973, id: 4125 }, // Nuovo Record v3 (w/ spring, solid rivets)
      { from: 1974, to: 1977, id: 4126 }, // Nuovo Record v4 (w/ spring, hollow rivets)
      { from: 1978, id: 4127 }, // Nuovo Record v5 (w/hollow rivets, w/o spring fixing bolt)
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
    'campagnolo super record': 4149, // Campagnolo 4001, Super Record, PAT. 80
    'dura ace ex': 4509, // Shimano RD-7200, Dura-Ace EX
    'shimano 600 ax': 4465, // Shimano RD-6300, 600 AX
    // 1983 Bianchi.
    'campagnolo gran sport': [{ from: 1978, id: 4085 }], // Campagnolo 3500, Nuovo Gran Sport
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
    'campagnolo record': 3260, // Campagnolo 1035, Record (high flange)
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
  },
  Brakes: {
    // Ambiguous between "Zeus Super Alfa" and "Zeus Super Alfa 71"; the 1973
    // catalog is the later, 71-era version.
    'super alfa': 1181, // Zeus Super Alfa 71
    // 1973 Raleigh Professional; without the override the only substring
    // hit is the 1980s Record O.R.
    'campagnolo record': 573, // Campagnolo 2040, Record (standard reach, pre-CPSC)
    // 1974 Motobecane.
    'universal 61 center pull': 1081, // Universal Mod. 61
    // 1975 Motobecane.
    'universal mod 68 side pull racing': 1082, // Universal Super 68
    'mafac racer center pull (1 front 2 rear)': 838, // MAFAC Racer (lettered MAFAC RACER)
    // 1981 Kalkhoff.
    'campagnolo super record': 582, // Campagnolo 4061, Super Record (v1)
    'dura ace ex': 997, // Shimano BR-7200, Dura-Ace EX
    'shimano 600 ax': 965, // Shimano BR-6300, 600 AX
    'weinmann 405': 1117, // Weinmann AG 405
    // 1983 Bianchi.
    'campagnolo nuovo record': [{ from: 1978, id: 572 }], // Campagnolo 2040, Record (standard reach, post-CPSC)
    'campagnolo gran sport brakes': 554, // Campagnolo Gran Sport (second gen)
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
    'campagnolo super record': 1513, // Campagnolo 1049/A, Super Record
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
  },
  'Seat Posts': {
    'campagnolo': 5749, // Campagnolo 1044, Record — the period Campagnolo post
    // 1981 Kalkhoff.
    'campagnolo super record': 5759, // Campagnolo 4051, Super Record (Campagnolo Script)
    'shimano 600 ax': 5886, // Shimano SP-6300, 600 AX
    // 1983 Bianchi. "fluted" Campagnolo post of the period is the 1044 NR.
    'campagnolo nuovo record fluted': 5748, // Campagnolo 1044, Nuovo Record (Superlegerro)
    'campagnolo fluted': 5748,
  },
  // Brand-level rows the single-word-title rule now refuses by substring,
  // but where the DB's brand entry genuinely is the product being described.
  Chains: {
    'iris 1 2 x 3 32': 1369, // Iris (1973 Zeus)
    // 1981 Kalkhoff: no chain row is titled EX; the CN-7100 Uniglide is the
    // Dura-Ace chain of the EX era.
    'dura ace ex': 1411, // Shimano CN-7100, Dura-Ace (Uniglide)
  },
  Freewheels: {
    'simplex 14 24t': 2225, // Simplex
    'regina oro 13 21': 2194, // Regina Oro (6 speed) — 1975 Motobecane
  },
  Tyres: {
    'clement criterium silk tubular': 6748, // Clement Criterium Seta (seta = silk)
    // 1975 Motobecane "Wheel Rims & Tires" cells (matched under Tyres via
    // SPLIT_LABELS); the Super Champion rim model isn't named, so no Rims
    // override.
    'super champion rims elvezia tubulars': 6752, // Clement Elvezia
    'super champion rims paris roubaix tubulars': 6762, // Clement Paris - Roubaix
  },
  Rims: {
    'nisi ava sprint alloy': 5123, // Nisi
    'ava sprint alloy': 4937, // AVA
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
// Resolves a COMPONENT_OVERRIDES entry (id or year-range array) for a catalog year.
function resolveOverride(entry, year) {
  if (!entry) return null;
  if (typeof entry === 'number') return entry;
  const y = Number(year);
  const hit = entry.find((r) => (r.from == null || y >= r.from) && (r.to == null || y <= r.to));
  return hit ? hit.id : null;
}

function matchComponent(valueText, componentRecords, excludeTitle, label, year) {
  if (!valueText) return null;
  const normalizedLabel = label.trim().toLowerCase();
  const normalizedValue = normalizeForMatch(valueText);

  const categories = LABEL_TO_CATEGORY[normalizedLabel];
  if (!categories) return null;

  for (const category of categories) {
    const overrideId = resolveOverride(COMPONENT_OVERRIDES[category]?.[normalizedValue], year);
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

  lines.push('-- Bike spec labels (sort_order = first-seen order across processed files)');
  for (const [label, sortOrder] of labelSortOrder) lines.push(labelLookupInsert(label, sortOrder));
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
    lines.push(
      `INSERT INTO bike (brand_id, title, category, year_from, sizes, colors, weight, search_text)\n` +
        `  SELECT ${brandIdSelect}, ${title}, ${category}, ${yearFrom}, ${sizes}, ${colors}, ${weight}, ${searchText}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM bike WHERE brand_id = ${brandIdSelect} AND title = ${title} AND year_from = ${yearFrom}\n` +
        `  );`
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
    const valueText = sqlString(spec.valueText);
    const rawLabel = sqlString(spec.rawLabel);

    const matched = matchComponent(spec.valueText, componentRecords, spec.brand, spec.label, spec.year);
    if (matched) linkedCount++;
    const componentIdSelect = matched ? String(matched.component_id) : 'NULL';

    lines.push(
      `INSERT INTO bike_spec (bike_id, label_id, raw_label, value_text, component_id)\n` +
        `  SELECT ${bikeIdSelect}, ${labelIdSelect}, ${rawLabel}, ${valueText}, ${componentIdSelect}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM bike_spec WHERE bike_id = ${bikeIdSelect} AND label_id = ${labelIdSelect} AND value_text = ${valueText}\n` +
        `  );`
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
