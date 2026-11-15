// Read-only whole-DB integrity report. No schema changes, files or data writes.
// Usage: node scripts/quality-report.js [--json] [--limit=20]
// Exit: 0 = no errors (reviews may remain), 2 = data errors, 1 = command/query failure.
const { TABLES, buildQualityReport } = require('../quality-report')

function parseFlags(args) {
  const options = { json: false, limit: 20, help: false }
  for (const arg of args) {
    if (arg === '--json') options.json = true
    else if (arg === '--help') options.help = true
    else if (/^--limit=\d+$/.test(arg) && Number.isSafeInteger(Number(arg.slice(8)))) options.limit = Number(arg.slice(8))
    else throw new Error(`Unknown or invalid option: ${arg}. Use --help.`)
  }
  return options
}

function query(conn, sql) {
  return new Promise((resolve, reject) => conn.query(sql, (err, rows) => err ? reject(err) : resolve(rows)))
}

async function readSnapshot(conn) {
  // Enforce read-only mode in MySQL and use one repeatable-read snapshot so
  // concurrent ingestion cannot produce false dangling-reference findings.
  await query(conn, 'SET TRANSACTION ISOLATION LEVEL REPEATABLE READ, READ ONLY')
  await query(conn, 'START TRANSACTION WITH CONSISTENT SNAPSHOT')
  try {
    const snapshot = {}
    for (const [table, columns] of Object.entries(TABLES)) {
      snapshot[table] = await query(conn, `SELECT ${columns.map(c => `\`${c}\``).join(', ')} FROM \`${table}\``)
    }
    return snapshot
  } finally {
    await query(conn, 'ROLLBACK')
  }
}

function formatReport(report, limit) {
  const lines = [
    `Data quality: ${report.scope}, ${report.started_at} to ${report.finished_at}`,
    `${report.summary.error} errors; ${report.summary.review} review findings (not proven bad links)`,
    'Counts are findings, not distinct rows; duplicate specs count once per set.',
  ]
  for (const severity of ['error', 'review']) {
    lines.push('', severity === 'error' ? 'ERRORS' : 'REVIEW CANDIDATES')
    const checks = [...new Set(report.findings.filter(f => f.severity === severity).map(f => f.check))]
    if (!checks.length) lines.push('  None')
    for (const check of checks) {
      const findings = report.findings.filter(f => f.severity === severity && f.check === check)
      const shown = limit === 0 ? findings : findings.slice(0, limit)
      lines.push(`  ${check}: ${findings.length}`)
      for (const f of shown) {
        lines.push(`    ${f.table} ${JSON.stringify(f.id)} ${JSON.stringify(f.title)}: ${f.reason}`)
        if (Object.keys(f.details).length) lines.push(`      ${JSON.stringify(f.details)}`)
      }
      if (shown.length < findings.length) lines.push(`    ... ${findings.length - shown.length} more; use --limit=0 or --json for all findings`)
    }
  }
  return lines.join('\n')
}

async function main(args = process.argv.slice(2)) {
  const options = parseFlags(args)
  if (options.help) {
    console.log('Usage: node scripts/quality-report.js [--json] [--limit=N]\nRead-only whole-database integrity checks. Text shows 20 findings per check by default; --limit=0 shows all.\nJSON always includes every finding. Exit codes: 0 no errors, 2 data errors, 1 command/query failure.')
    return
  }
  // Load credentials only after validating flags; --help never connects.
  const mysql = require('mysql')
  const decrypt = require('../decrypt')
  // dotenv's startup banner would corrupt machine-readable stdout.
  process.env.DOTENV_CONFIG_QUIET = 'true'
  const config = require('../config')
  const conn = mysql.createConnection({
    host: config.db.host, user: config.db.user, password: decrypt(config.db.password),
    database: config.db.name, connectTimeout: 15000,
  })
  const started_at = new Date().toISOString()
  try {
    const snapshot = await readSnapshot(conn)
    const report = { started_at, finished_at: new Date().toISOString(), ...buildQualityReport(snapshot) }
    console.log(options.json ? JSON.stringify(report, null, 2) : formatReport(report, options.limit))
    process.exitCode = report.summary.error ? 2 : 0
  } finally {
    conn.end()
  }
}

if (require.main === module) {
  main().catch(err => {
    console.error(`Quality report failed: ${err.message}`)
    process.exitCode = 1
  })
}

module.exports = { parseFlags, readSnapshot, formatReport, main }
