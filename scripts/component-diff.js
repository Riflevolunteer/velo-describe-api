// Lists component_detail rows whose title matches a regex, with category,
// years, source_id and the tail of the description — the lookup used when
// diffing a manufacturer catalog against the DB by part number.
//
//   node scripts/component-diff.js '<MySQL REGEXP on title>' [brand]
//   node scripts/component-diff.js '10(3[4-9]|4[0-9]|5[0-3])(/|,| |$)' Campagnolo
//
// Read-only; same DB config as scripts/db-query.js.

const mysql = require('mysql');
const crypto = require('crypto');
const config = require('../config');

function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const [pattern, brand] = process.argv.slice(2);
if (!pattern) {
  console.error("Usage: node scripts/component-diff.js '<title regexp>' [brand]");
  process.exit(1);
}

const conn = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: decrypt(config.db.password),
  database: config.db.name,
  connectTimeout: 15000,
});

const sql = `
  SELECT d.component_id, c.title AS category, d.title, d.year_from, d.year_to, d.source_id,
         RIGHT(d.description, 60) AS description_tail
    FROM component_detail d
    JOIN component_category c ON c.category_id = d.category_id
    LEFT JOIN component_brand b ON b.brand_id = d.brand_id
   WHERE d.title REGEXP ? ${brand ? 'AND b.title = ?' : ''}
   ORDER BY c.title, d.title`;

conn.query(sql, brand ? [pattern, brand] : [pattern], (err, rows) => {
  conn.end();
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  if (!rows.length) {
    console.log('(0 rows)');
    return;
  }
  const pad = (s, n) => String(s ?? '').padEnd(n);
  for (const r of rows) {
    console.log(
      `${pad(r.component_id, 5)} ${pad(r.category, 20)} ${pad(r.title, 70)} ${pad(r.year_from, 5)} ${pad(r.year_to, 5)} ${pad(r.source_id, 36)} ${r.description_tail}`
    );
  }
  console.log(`${rows.length} rows`);
});
