// Runs one read-only SQL statement against the configured database and
// prints tab-separated rows (header first). Same config/.env + password
// decryption as index.js and scripts/load-sql.js, so no mysql client needed.
//
//   node scripts/db-query.js "SELECT title FROM bike_spec_label ORDER BY sort_order"
//
// Refuses anything that isn't a SELECT/SHOW/DESCRIBE/EXPLAIN — writes go
// through scripts/load-sql.js so they leave an auditable .sql file behind.

const mysql = require('mysql');
const crypto = require('crypto');
const config = require('../config');

function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const sql = (process.argv[2] || '').trim();
if (!/^(select|show|describe|explain)\b/i.test(sql)) {
  console.error('Usage: node scripts/db-query.js "<SELECT ...>"  (read-only statements only)');
  process.exit(1);
}

const conn = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: decrypt(config.db.password),
  database: config.db.name,
  connectTimeout: 15000,
});

conn.query(sql, (err, rows, fields) => {
  conn.end();
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  if (!rows.length) {
    console.log('(0 rows)');
    return;
  }
  const names = fields.map((f) => f.name);
  console.log(names.join('\t'));
  for (const r of rows) {
    console.log(names.map((n) => (r[n] === null ? 'NULL' : r[n] instanceof Date ? r[n].toISOString() : String(r[n]))).join('\t'));
  }
});
