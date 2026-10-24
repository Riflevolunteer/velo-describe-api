// Reports component_detail rows that look like the same part (see
// duplicate-classify.js): one survivor per group, each extra row tagged
// duplicate / cosmetic / configuration / generation / review, with how many
// bike_specs would need repointing if it were merged away. Read-only; merging
// is a separate reviewed .sql file run through scripts/load-sql.js.
//
//   node scripts/duplicate-report.js                      summary + all groups
//   node scripts/duplicate-report.js --merge              only merge candidates (duplicate, cosmetic)
//   node scripts/duplicate-report.js --relation=review    only groups with that relation
//   node scripts/duplicate-report.js --brand=Weinmann     brand title contains text
//   node scripts/duplicate-report.js --category=Brakes    category title contains text
//   node scripts/duplicate-report.js --used               only groups where a non-survivor is linked from a bike_spec
//   node scripts/duplicate-report.js --json               machine-readable
//
// Same DB config as scripts/db-query.js.

const mysql = require('mysql');
const crypto = require('crypto');
const config = require('../config');
const { buildGroups, MERGE_CANDIDATE } = require('../duplicate-classify');

function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const flags = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v === undefined ? true : v];
}));
const known = ['merge', 'relation', 'brand', 'category', 'used', 'json'];
const unknown = Object.keys(flags).filter((k) => !known.includes(k));
if (unknown.length) {
  console.error(`Unknown option(s): ${unknown.join(', ')}. See the header of scripts/duplicate-report.js.`);
  process.exit(1);
}

const conn = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: decrypt(config.db.password),
  database: config.db.name,
  connectTimeout: 15000,
});

const sql = `SELECT cd.component_id, cd.brand_id, cb.title AS brand, cd.category_id, cc.title AS category,
                    cd.title, cd.year_from, cd.year_to, cd.source_ref, ds.label AS source_label,
                    (cd.image IS NOT NULL) AS has_image,
                    (SELECT COUNT(*) FROM bike_spec bs WHERE bs.component_id = cd.component_id) AS used
               FROM component_detail cd
               JOIN component_brand cb ON cb.brand_id = cd.brand_id
               JOIN component_category cc ON cc.category_id = cd.category_id
          LEFT JOIN data_source ds ON ds.source_id = cd.source_ref`;

conn.query(sql, (err, rows) => {
  conn.end();
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  rows = rows.map((r) => ({ ...r, used: Number(r.used), has_image: Boolean(r.has_image) }));

  const has = (text, needle) => String(text).toLowerCase().includes(String(needle).toLowerCase());
  let groups = buildGroups(rows);
  if (flags.brand) groups = groups.filter((g) => has(g.survivor.brand, flags.brand));
  if (flags.category) groups = groups.filter((g) => has(g.survivor.category, flags.category));
  if (flags.relation) groups = groups.filter((g) => g.others.some((o) => o.relation === flags.relation));
  if (flags.merge) groups = groups.filter((g) => g.others.some((o) => MERGE_CANDIDATE.has(o.relation)));
  if (flags.used) groups = groups.filter((g) => g.others.some((o) => o.row.used > 0));

  // Totals count every extra row in the listed groups, whatever the filter.
  const tally = {};
  for (const g of groups) {
    for (const o of g.others) {
      const t = (tally[o.relation] = tally[o.relation] || { rows: 0, repoint: 0 });
      t.rows += 1;
      t.repoint += o.row.used;
    }
  }

  if (flags.json) {
    console.log(JSON.stringify({ summary: tally, groups }, null, 2));
    return;
  }

  const years = (r) => (r.year_from || r.year_to ? `${r.year_from || '?'}-${r.year_to || '?'}` : 'no years');
  const describe = (r) => `${r.component_id} "${r.title}" ${years(r)} src ${r.source_ref ?? '-'}${r.has_image ? ' img' : ''} used ${r.used}`;

  console.log(`${groups.length} groups, ${rows.length} component_detail rows scanned`);
  for (const rel of ['duplicate', 'cosmetic', 'configuration', 'generation', 'review']) {
    const t = tally[rel];
    if (t) console.log(`  ${rel.padEnd(13)} ${String(t.rows).padStart(4)} rows, ${t.repoint} bike_specs on them`);
  }
  console.log('');
  for (const g of groups) {
    console.log(`${g.survivor.brand} / ${g.survivor.category}`);
    console.log(`  keep      ${describe(g.survivor)}`);
    for (const o of g.others) console.log(`  ${o.relation.padEnd(13)} ${describe(o.row)}`);
  }
});
