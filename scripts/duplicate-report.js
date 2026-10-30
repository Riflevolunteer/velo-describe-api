// Reports component_detail rows that look like the same part (see
// duplicate-classify.js): one survivor per group, each extra row tagged
// duplicate / cosmetic / configuration / generation / review / variant, with how many
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
//   node scripts/duplicate-report.js --near               cross-brand / renamed pairs (findNearPairs) instead of groups;
//                                                         takes --brand, --category, --used, --reason=code|name|brand, --json;
//                                                         --reviewed also lists pairs already kept apart (REVIEWED_NOT_DUPLICATES)
//   node scripts/duplicate-report.js --paren              same-brand pairs where one row's model name sits in its
//                                                         parentheticals (findParenPairs: "Cambio Rino (type aereo)" /
//                                                         "Cambio Rino Aereo"); takes --brand, --category, --used, --json, --reviewed
//
// Same DB config as scripts/db-query.js.

const mysql = require('mysql');
const decrypt = require('../decrypt');
const config = require('../config');
const { buildGroups, MERGE_CANDIDATE, findNearPairs, findParenPairs } = require('../duplicate-classify');

const flags = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v === undefined ? true : v];
}));
const known = ['merge', 'relation', 'brand', 'category', 'used', 'json', 'near', 'reason', 'reviewed', 'paren'];
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
  const years = (r) => (r.year_from || r.year_to ? `${r.year_from || '?'}-${r.year_to || '?'}` : 'no years');
  const describe = (r) => `${r.component_id} "${r.title}" ${years(r)} src ${r.source_ref ?? '-'}${r.has_image ? ' img' : ''} used ${r.used}`;

  if (flags.paren) {
    let pairs = findParenPairs(rows, { includeReviewed: Boolean(flags.reviewed) });
    if (flags.brand) pairs = pairs.filter((p) => has(p.a.brand, flags.brand));
    if (flags.category) pairs = pairs.filter((p) => has(p.a.category, flags.category));
    if (flags.used) pairs = pairs.filter((p) => p.a.used > 0 || p.b.used > 0);
    if (flags.json) {
      console.log(JSON.stringify(pairs, null, 2));
      return;
    }
    console.log(`${pairs.length} parenthetical-name pairs, ${rows.length} component_detail rows scanned`);
    console.log('');
    for (const p of pairs) {
      console.log(`${p.a.brand} / ${p.a.category}: "${p.moved.join(' ')}"${p.reviewed ? ' (reviewed, kept apart)' : ''}`);
      console.log(`         ${describe(p.a)}`);
      console.log(`         ${describe(p.b)}`);
    }
    return;
  }

  if (flags.near) {
    let pairs = findNearPairs(rows, { includeReviewed: Boolean(flags.reviewed) });
    if (flags.brand) pairs = pairs.filter((p) => has(p.a.brand, flags.brand) || has(p.b.brand, flags.brand));
    if (flags.category) pairs = pairs.filter((p) => has(p.a.category, flags.category));
    if (flags.reason) pairs = pairs.filter((p) => p.reason === flags.reason);
    if (flags.used) pairs = pairs.filter((p) => p.a.used > 0 || p.b.used > 0);
    const strip = ({ codes, codeRare, nameRare, ...r }) => r;
    if (flags.json) {
      console.log(JSON.stringify(pairs.map((p) => ({ reason: p.reason, reviewed: p.reviewed, a: strip(p.a), b: strip(p.b) })), null, 2));
      return;
    }
    const byReason = {};
    for (const p of pairs) byReason[p.reason] = (byReason[p.reason] || 0) + 1;
    console.log(`${pairs.length} near pairs, ${rows.length} component_detail rows scanned`);
    for (const reason of ['code', 'name', 'brand']) if (byReason[reason]) console.log(`  ${reason.padEnd(6)} ${byReason[reason]}`);
    console.log('');
    pairs.sort((x, y) => x.a.category.localeCompare(y.a.category) || x.a.brand.localeCompare(y.a.brand) || x.a.component_id - y.a.component_id);
    for (const p of pairs) {
      const brands = p.a.brand === p.b.brand ? p.a.brand : `${p.a.brand} + ${p.b.brand}`;
      console.log(`${p.reason.padEnd(6)} ${brands} / ${p.a.category}${p.reviewed ? ' (reviewed, kept apart)' : ''}`);
      console.log(`         ${describe(p.a)}`);
      console.log(`         ${describe(p.b)}`);
    }
    return;
  }

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

  console.log(`${groups.length} groups, ${rows.length} component_detail rows scanned`);
  for (const rel of ['duplicate', 'cosmetic', 'configuration', 'generation', 'review', 'variant']) {
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
