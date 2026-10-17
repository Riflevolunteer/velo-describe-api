// Generates idempotent UPDATEs that set bike.bike_type from scripts/bike_type.tsv.
//
//   node scripts/generate-bike-type-sql.js <out.sql>
//
// The TSV's "other" bucket (tandems) is stored as 'tandem'. One guarded UPDATE
// per bike, so a re-run changes nothing. Comments are on their own lines
// because load-sql.js splits on ";\n".

const fs = require('fs');
const path = require('path');

const ALLOWED = new Set(['road', 'touring', 'track', 'cyclocross', 'mountain', 'tandem', 'city', 'hybrid', 'children']);
const out = process.argv[2];
if (!out) {
  console.error('Usage: node scripts/generate-bike-type-sql.js <out.sql>');
  process.exit(1);
}

const lines = fs.readFileSync(path.join(__dirname, 'bike_type.tsv'), 'utf8').trim().split('\n');
const header = lines.shift().split('\t');
const idCol = header.indexOf('bike_id');
const typeCol = header.indexOf('proposed_type');
if (idCol < 0 || typeCol < 0) throw new Error('bike_type.tsv header missing bike_id / proposed_type');

const counts = {};
let sql = '-- bike.bike_type from scripts/bike_type.tsv\n';
for (const line of lines) {
  const f = line.split('\t');
  const id = parseInt(f[idCol], 10);
  const type = f[typeCol] === 'other' ? 'tandem' : f[typeCol];
  if (!Number.isInteger(id) || !ALLOWED.has(type)) throw new Error('bad row: ' + line);
  counts[type] = (counts[type] || 0) + 1;
  sql += `UPDATE bike SET bike_type='${type}' WHERE bike_id=${id} AND (bike_type IS NULL OR bike_type <> '${type}');\n`;
}
fs.writeFileSync(out, sql);
console.log(lines.length + ' bikes', counts);
