// Runs one or more .sql files against the configured database (same
// config/.env + password decryption the app uses), so no mysql client install
// is needed. Statements are executed in file order, in batches, and a
// per-table summary of affected rows is printed at the end.
//
//   node scripts/load-sql.js --check                 # connectivity + schema/row-count snapshot, no writes
//   node scripts/load-sql.js scripts/cleanup.sql velobase-update.sql
//
// The RDS instance is publicly accessible but its security group only allows
// specific IPs on 3306 — if the connection hangs/ETIMEDOUT, add your current
// IP to the RDS security group (see README).

const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const crypto = require('crypto');

const config = require('../config');

// Mirrors decrypt() in index.js.
function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const BATCH_SIZE = 200;

function splitStatements(sql) {
  // Generated files have one statement per `;` + newline and never contain
  // that sequence inside a string literal; comment-only lines are dropped.
  const withoutComments = sql
    .split('\n')
    .filter((line) => !line.trim().startsWith('--'))
    .join('\n');
  return withoutComments
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function tableOf(statement) {
  const m = statement.match(/^\s*(INSERT\s+INTO|DELETE\s+FROM|ALTER\s+TABLE|UPDATE)\s+`?(\w+)`?/i);
  return m ? `${m[1].split(/\s+/)[0].toUpperCase()} ${m[2]}` : statement.split(/\s+/).slice(0, 2).join(' ');
}

function query(conn, sql, params) {
  return new Promise((resolve, reject) => {
    conn.query(sql, params, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

async function check(conn) {
  const rows = await query(
    conn,
    `SELECT TABLE_NAME, COLUMN_NAME, COLUMN_TYPE FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME IN ('component_detail','component_group')
       AND COLUMN_NAME IN ('title','description','search_text','source_id')
     ORDER BY TABLE_NAME, COLUMN_NAME`
  );
  console.log('Schema:');
  for (const r of rows) console.log(`  ${r.TABLE_NAME}.${r.COLUMN_NAME}: ${r.COLUMN_TYPE}`);
  const hasSourceId = rows.some((r) => r.TABLE_NAME === 'component_detail' && r.COLUMN_NAME === 'source_id');
  console.log(`  component_detail.source_id present: ${hasSourceId ? 'yes' : 'NO — schema is behind scripts/component_detail.sql'}`);

  console.log('Row counts:');
  for (const t of ['component_brand', 'component_group', 'component_category', 'category_brand', 'component_detail']) {
    const [{ n }] = await query(conn, `SELECT COUNT(*) AS n FROM ${t}`);
    console.log(`  ${t}: ${n}`);
  }
  const [{ n: ofmegaBrakes }] = await query(
    conn,
    `SELECT COUNT(*) AS n FROM component_detail d
       JOIN component_brand b ON b.brand_id = d.brand_id
       JOIN component_category c ON c.category_id = d.category_id
     WHERE b.title = 'Ofmega' AND c.title = 'Brakes'`
  );
  console.log(`  Ofmega brakes (canary for the dedupe fix): ${ofmegaBrakes}`);
}

async function runFile(conn, file) {
  const sql = fs.readFileSync(file, 'utf8');
  const statements = splitStatements(sql);
  console.log(`\n${file}: ${statements.length} statements`);
  const summary = new Map();
  const started = Date.now();
  for (let i = 0; i < statements.length; i += BATCH_SIZE) {
    const batch = statements.slice(i, i + BATCH_SIZE);
    let results;
    try {
      results = await query(conn, batch.join(';\n') + ';');
    } catch (err) {
      console.error(`\nFailed in batch starting at statement ${i + 1} of ${file}:`);
      console.error(`  ${err.message}`);
      throw err;
    }
    const list = batch.length === 1 ? [results] : results;
    list.forEach((r, j) => {
      const key = tableOf(batch[j]);
      const cur = summary.get(key) || { statements: 0, affected: 0 };
      cur.statements++;
      cur.affected += r && typeof r.affectedRows === 'number' ? r.affectedRows : 0;
      summary.set(key, cur);
    });
    process.stdout.write(`\r  ${Math.min(i + BATCH_SIZE, statements.length)}/${statements.length}`);
  }
  console.log(`  done in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  for (const [key, v] of summary) console.log(`  ${key}: ${v.statements} statements, ${v.affected} rows affected`);
}

async function main() {
  const args = process.argv.slice(2);
  const doCheck = args.includes('--check');
  const files = args.filter((a) => a !== '--check');
  if (!doCheck && files.length === 0) {
    console.error('Usage: node scripts/load-sql.js [--check] [file.sql ...]');
    process.exit(2);
  }
  for (const f of files) {
    if (!fs.existsSync(f)) {
      console.error(`Not found: ${f}`);
      process.exit(2);
    }
  }

  const conn = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: decrypt(config.db.password),
    database: config.db.name,
    multipleStatements: true,
    connectTimeout: 15000,
  });
  await new Promise((resolve, reject) => conn.connect((err) => (err ? reject(err) : resolve())));
  console.log(`Connected to ${config.db.host} / ${config.db.name}`);

  try {
    if (doCheck) await check(conn);
    for (const f of files) await runFile(conn, path.resolve(f));
    if (files.length) {
      console.log('\nPost-load snapshot:');
      await check(conn);
    }
  } finally {
    conn.end();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
