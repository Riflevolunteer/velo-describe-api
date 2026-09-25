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
};

// Collapses hyphens/slashes to spaces, drops periods, normalizes
// whitespace/case, and applies WORD_ALIASES — so "Regina-Extra" / "Regina
// Extra" compare equal, so do "G.B. Ventoux" / "GB Ventoux" (the DB
// consistently drops periods from abbreviated brand initials like GB, AVA),
// and so do "T.T.T. Record" / "3ttt Record".
function normalizeForMatch(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[-/]/g, ' ')
    .replace(/\./g, '')
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => WORD_ALIASES[word] || word)
    .join(' ');
}

// Manual overrides for CSV values that are genuinely ambiguous by title text
// alone (multiple plausible DB candidates, so matchComponent would correctly
// refuse to guess) but are known-correct from catalog/domain knowledge. Keyed
// by [normalized label][normalizeForMatch(value)] -> component_id. Add
// sparingly — anything the generic matcher can resolve on its own shouldn't
// be here.
const COMPONENT_OVERRIDES = {
  'front derailleur': {
    'simplex prestige': 2583, // Simplex Prestige Criterium AV 223
  },
  'rear derailleur': {
    'simplex prestige': 4583, // Simplex Prestige (variant of AR637P/NI), 1971-1972
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
function matchComponent(valueText, componentRecords, excludeTitle, label) {
  if (!valueText) return null;
  const normalizedLabel = label.trim().toLowerCase();
  const normalizedValue = normalizeForMatch(valueText);

  const overrideId = COMPONENT_OVERRIDES[normalizedLabel]?.[normalizedValue];
  if (overrideId) return { component_id: overrideId };

  const categories = LABEL_TO_CATEGORY[normalizedLabel];
  if (!categories) return null;

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
  const substringMatches = [...byNormalizedTitle.entries()].filter(([norm]) => {
    if (norm.length < MIN_COMPONENT_MATCH_LENGTH) return false;
    const paddedTitle = ` ${norm} `;
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

    const matched = matchComponent(spec.valueText, componentRecords, spec.brand, spec.label);
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
