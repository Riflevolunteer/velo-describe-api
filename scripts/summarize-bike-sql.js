// Summarizes a bike-update.sql produced by scripts/generate-bike-update-sql.js
// so it can be reviewed before loading: the spec labels it will mint, each
// bike's row-level fields (category/sizes/colors/weight), every spec that
// linked to a component (with the component title, read from the DB), and
// the unlinked specs grouped by label.
//
//   node scripts/summarize-bike-sql.js [bike-update.sql] [--no-db]
//
// --no-db skips the component-title lookup (faster, no connection needed).

const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const crypto = require('crypto');
const config = require('../config');

function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const args = process.argv.slice(2);
const noDb = args.includes('--no-db');
const file = args.find((a) => !a.startsWith('--')) || path.join(__dirname, '..', 'bike-update.sql');
const sql = fs.readFileSync(file, 'utf8');

const unq = (s) => s.replace(/''/g, "'");

// Labels: SELECT 'Title', sortOrder FROM DUAL (in the labels section).
const labels = [];
const labelSection = sql.split('-- Bikes')[0];
for (const m of labelSection.matchAll(/INSERT INTO bike_spec_label \(title, sort_order\) SELECT '((?:[^']|'')*)', (\d+) FROM DUAL/g)) labels.push(unq(m[1]));

// Bikes: SELECT (brand subquery), 'title', category, 'year', sizes, colors, weight, 'search_text'
const bikes = [];
const bikeSection = (sql.split('-- Bikes')[1] || '').split('-- Bike specs')[0];
const field = "(NULL|'(?:[^']|'')*')";
const bikeRe = new RegExp(`SELECT \\(SELECT brand_id[^)]*\\), '((?:[^']|'')*)', ${field}, '((?:[^']|'')*)', ${field}, ${field}, ${field}, '((?:[^']|'')*)'`, 'g');
for (const m of bikeSection.matchAll(bikeRe)) {
  const v = (x) => (x === 'NULL' ? null : unq(x.slice(1, -1)));
  bikes.push({ title: unq(m[1]), category: v(m[2]), year: m[3], sizes: v(m[4]), colors: v(m[5]), weight: v(m[6]) });
}

// Specs: ... AND title = 'bike' AND year_from = 'y'), (SELECT label_id ... title = 'label'), 'raw', 'value', component|NULL
const specs = [];
const specRe = /SELECT \(SELECT bike_id FROM bike WHERE brand_id = \(SELECT brand_id FROM bike_brand WHERE title = '((?:[^']|'')*)'\) AND title = '((?:[^']|'')*)' AND year_from = '([^']*)'\), \(SELECT label_id FROM bike_spec_label WHERE title = '((?:[^']|'')*)'\), '(?:[^']|'')*', '((?:[^']|'')*)', (NULL|\d+)\s*\n\s*FROM DUAL/g;
for (const m of sql.matchAll(specRe)) {
  specs.push({ brand: unq(m[1]), bike: unq(m[2]), year: m[3], label: unq(m[4]), value: unq(m[5]), component: m[6] === 'NULL' ? null : Number(m[6]) });
}

const pad = (s, n) => String(s ?? '').padEnd(n);

async function componentTitles(ids) {
  if (noDb || !ids.length) return new Map();
  const conn = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: decrypt(config.db.password),
    database: config.db.name,
    connectTimeout: 15000,
  });
  const rows = await new Promise((resolve, reject) => {
    conn.query(
      `SELECT d.component_id, d.title, c.title AS category FROM component_detail d
         LEFT JOIN component_category c ON c.category_id = d.category_id WHERE d.component_id IN (?)`,
      [ids],
      (err, r) => (err ? reject(err) : resolve(r))
    );
  });
  conn.end();
  return new Map(rows.map((r) => [r.component_id, `${r.title} [${r.category}]`]));
}

(async () => {
  const linked = specs.filter((s) => s.component);
  const titles = await componentTitles([...new Set(linked.map((s) => s.component))]);

  console.log(`${path.basename(file)}: ${bikes.length} bikes, ${labels.length} labels, ${specs.length} specs, ${linked.length} linked\n`);

  console.log('== Spec labels (in sort order)');
  console.log(labels.join('; ') + '\n');

  console.log('== Bikes');
  for (const b of bikes) {
    console.log(`${pad(b.title, 28)} ${pad(b.year, 5)} ${pad(b.category, 40)} sizes=${JSON.stringify(b.sizes)} colors=${JSON.stringify(b.colors)} weight=${JSON.stringify(b.weight)}`);
  }
  console.log();

  console.log('== Linked specs (verify anything era-specific or brand-only)');
  const byKey = new Map();
  for (const s of linked) {
    const k = `${s.label}\u0000${s.value}\u0000${s.component}`;
    byKey.set(k, (byKey.get(k) || 0) + 1);
  }
  const linkedRows = [...byKey.entries()]
    .map(([k, n]) => { const [label, value, comp] = k.split('\u0000'); return { label, value, comp: Number(comp), n }; })
    .sort((a, b) => a.label.localeCompare(b.label) || a.value.localeCompare(b.value));
  for (const r of linkedRows) {
    console.log(`${pad(r.n + 'x', 4)} ${pad(r.label, 18)} ${pad(r.value, 52)} -> ${r.comp} ${titles.get(r.comp) || ''}`);
  }
  console.log();

  console.log('== Unlinked specs by label (distinct values)');
  const unlinked = new Map();
  for (const s of specs.filter((x) => !x.component)) {
    if (!unlinked.has(s.label)) unlinked.set(s.label, new Map());
    const m = unlinked.get(s.label);
    m.set(s.value, (m.get(s.value) || 0) + 1);
  }
  for (const label of labels.filter((l) => unlinked.has(l))) {
    console.log(`-- ${label}`);
    for (const [value, n] of [...unlinked.get(label).entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      console.log(`   ${pad(n + 'x', 4)} ${value}`);
    }
  }
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
