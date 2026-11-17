// Compare the shared generator plan with loaded catalogues. No SQL/files written.
const path = require('node:path')
const {
  buildCataloguePlan, listInputFiles, parseFilename, catalogueLabel,
  readComponentRecords, readComponentBrandNames,
} = require('./generate-bike-update-sql')

function parseFlags(args) {
  const options = { json: false, limit: 20, help: false, files: [] }
  for (const arg of args) {
    if (arg === '--json') options.json = true
    else if (arg === '--help') options.help = true
    else if (/^--limit=\d+$/.test(arg) && Number.isSafeInteger(Number(arg.slice(8)))) options.limit = Number(arg.slice(8))
    else if (arg.startsWith('-')) throw new Error(`Unknown or invalid option: ${arg}. Use --help.`)
    else options.files.push(arg)
  }
  return options
}

function query(conn, sql) {
  return new Promise((resolve, reject) => conn.query(sql, (err, rows) => err ? reject(err) : resolve(rows)))
}

async function readSnapshot(conn) {
  await query(conn, 'SET TRANSACTION ISOLATION LEVEL REPEATABLE READ, READ ONLY')
  await query(conn, 'START TRANSACTION WITH CONSISTENT SNAPSHOT')
  try {
    return {
      components: await readComponentRecords(conn),
      brandNames: await readComponentBrandNames(conn),
      sources: await query(conn, "SELECT source_id, label FROM data_source WHERE source_type = 'catalogue'"),
      bikes: await query(conn, `SELECT b.bike_id, b.title, b.year_from, b.source_ref, bb.title AS brand
        FROM bike b LEFT JOIN bike_brand bb ON bb.brand_id = b.brand_id ORDER BY b.bike_id`),
      specs: await query(conn, `SELECT s.bike_spec_id, s.bike_id, l.title AS label, s.value_text, s.component_id
        FROM bike_spec s LEFT JOIN bike_spec_label l ON l.label_id = s.label_id ORDER BY s.bike_spec_id`),
    }
  } finally {
    await query(conn, 'ROLLBACK')
  }
}

// Match by catalogue, brand, bike title/year, label and stored value, never row order.
const key = parts => JSON.stringify(parts)
const sourceKey = label => String(label).toLowerCase()
function group(rows, getKey) {
  const map = new Map()
  for (const row of rows) {
    const k = getKey(row)
    if (!map.has(k)) map.set(k, [])
    map.get(k).push(row)
  }
  return map
}

function comparePlan(plan, snapshot, selectedSources) {
  const findings = []
  const summary = { compared: 0, unchanged: 0, gained: 0, lost: 0, changed: 0,
    missing_in_db: 0, missing_in_csv: 0, ambiguous: 0 }
  const sourcesById = new Map(selectedSources.map(s => [s.source_id, s]))
  const selectedBikes = snapshot.bikes.filter(b => sourcesById.has(b.source_ref))
  const bikeKey = (catalogue, brand, title, year) => key([sourceKey(catalogue), String(brand).toLowerCase(), title, String(year)])
  const bikesByKey = group(selectedBikes, b => bikeKey(sourcesById.get(b.source_ref).label, b.brand, b.title, b.year_from))
  const specsByBike = group(snapshot.specs, s => s.bike_id)
  const generatedByBike = group(plan.specs, s => bikeKey(s.catalogue, s.brand, s.bikeTitle, s.year))
  const generatedBikes = group(plan.bikes, b => bikeKey(b.catalogue, b.brand, b.title, b.year))
  const componentTitles = new Map(snapshot.components.map(c => [c.component_id, c.title]))
  const component = id => id == null ? null : { component_id: id, title: componentTitles.get(id) || null }
  const add = (kind, details) => { summary[kind]++; findings.push({ kind, ...details }) }
  for (const k of new Set([...generatedBikes.keys(), ...bikesByKey.keys()])) {
    const generated = generatedBikes.get(k) || []
    const live = bikesByKey.get(k) || []
    const [catalogue, brand, bike, year] = JSON.parse(k)
    const context = { catalogue, brand, bike, year }
    if (generated.length > 1 || live.length > 1) {
      add('ambiguous', { ...context, entity: 'bike', generated_rows: generated.length, bike_ids: live.map(b => b.bike_id) })
      continue
    }
    if (!generated.length || !live.length) {
      add(generated.length ? 'missing_in_db' : 'missing_in_csv', {
        ...context, entity: 'bike', bike_id: live[0]?.bike_id ?? null,
      })
      continue
    }
    const expected = group(generatedByBike.get(k) || [], s => key([s.label, s.valueText]))
    const actual = group(specsByBike.get(live[0].bike_id) || [], s => key([s.label, s.value_text]))
    for (const sk of new Set([...expected.keys(), ...actual.keys()])) {
      const g = expected.get(sk) || []
      const a = actual.get(sk) || []
      const [label, value] = JSON.parse(sk)
      const detail = { ...context, entity: 'spec', bike_id: live[0].bike_id, label, value,
        bike_spec_ids: a.map(s => s.bike_spec_id) }
      if (g.length > 1 || a.length > 1) {
        add('ambiguous', { ...detail, generated_rows: g.length })
      } else if (!g.length || !a.length) {
        add(g.length ? 'missing_in_db' : 'missing_in_csv', detail)
      } else {
        const current = a[0].component_id ?? null
        const proposed = g[0].matched?.component_id ?? null
        summary.compared++
        if (current === proposed) summary.unchanged++
        else add(current == null ? 'gained' : proposed == null ? 'lost' : 'changed', {
          ...detail, current: component(current), proposed: component(proposed),
        })
      }
    }
  }
  return { summary, findings }
}

function buildReport(files, snapshot) {
  const loadedSourceIds = new Set(snapshot.bikes.map(b => b.source_ref))
  const loadedSources = snapshot.sources.filter(s => loadedSourceIds.has(s.source_id))
  const sourcesByLabel = group(loadedSources, s => sourceKey(s.label))
  const selectedSources = []
  const selectedFiles = []
  const skippedFiles = []
  for (const file of files) {
    const parsed = parseFilename(path.basename(file))
    if (!parsed) throw new Error(`Invalid catalogue CSV filename: ${file}`)
    const label = catalogueLabel(parsed.year, parsed.brand, parsed.fileCountry, path.basename(file))
    const sources = sourcesByLabel.get(sourceKey(label)) || []
    if (sources.length > 1) throw new Error(`Ambiguous loaded catalogue source: ${label}`)
    if (!sources.length) skippedFiles.push({ file, reason: 'catalogue_not_loaded' })
    else {
      if (selectedSources.some(s => s.source_id === sources[0].source_id)) throw new Error(`Multiple CSVs for catalogue: ${label}`)
      selectedSources.push(sources[0])
      selectedFiles.push(file)
    }
  }
  const plan = buildCataloguePlan(selectedFiles, snapshot.components, snapshot.brandNames)
  return {
    scope: selectedSources.map(s => ({ source_id: s.source_id, label: s.label })),
    files: selectedFiles, skipped_files: skippedFiles,
    loaded_catalogues_without_selected_csv: loadedSources.filter(s => !selectedSources.some(t => t.source_id === s.source_id)),
    ...comparePlan(plan, snapshot, selectedSources),
  }
}

function formatReport(report, limit) {
  const lines = [
    `Generator/live-DB links: ${report.scope.length} loaded catalogues, ${report.summary.compared} specs compared`,
    `${report.summary.unchanged} unchanged; ${report.summary.gained} gained; ${report.summary.lost} lost; ${report.summary.changed} changed`,
    'Proposed matches only. Normal SQL generation fills NULL links; it does not replace or remove existing links.',
    `${report.skipped_files.length} unloaded CSVs skipped; ${report.loaded_catalogues_without_selected_csv.length} loaded catalogues outside selected CSVs.`,
  ]
  for (const kind of ['gained', 'lost', 'changed', 'missing_in_db', 'missing_in_csv', 'ambiguous']) {
    const rows = report.findings.filter(f => f.kind === kind)
    lines.push('', `${kind}: ${rows.length}`)
    for (const row of limit ? rows.slice(0, limit) : rows) lines.push(`  ${JSON.stringify(row)}`)
    if (limit && rows.length > limit) lines.push(`  ... ${rows.length - limit} more; use --limit=0 or --json`)
  }
  return lines.join('\n')
}

async function main(args = process.argv.slice(2)) {
  const options = parseFlags(args)
  if (options.help) {
    console.log('Usage: node scripts/compare-bike-links.js [--json] [--limit=N] [bike_specs/file.csv ...]\nRead-only comparison using current generator rules. Defaults to all local CSVs whose catalogues have loaded bikes.\nText shows 20 findings per kind; --limit=0 shows all; JSON is complete.\nExit: 0 comparison complete (differences may remain); 1 command/query failure.')
    return
  }
  const files = listInputFiles(options.files)
  if (!files.length) throw new Error('No catalogue CSV files found')
  process.env.DOTENV_CONFIG_QUIET = 'true'
  const mysql = require('mysql')
  const decrypt = require('../decrypt')
  const config = require('../config')
  const conn = mysql.createConnection({
    host: config.db.host, user: config.db.user, password: decrypt(config.db.password),
    database: config.db.name, connectTimeout: 15000,
  })
  const started_at = new Date().toISOString()
  try {
    const snapshot = await readSnapshot(conn)
    const report = { started_at, ...buildReport(files, snapshot), finished_at: new Date().toISOString() }
    console.log(options.json ? JSON.stringify(report, null, 2) : formatReport(report, options.limit))
  } finally {
    conn.end()
  }
}
if (require.main === module) main().catch(err => {
  console.error(`Bike link comparison failed: ${err.message}`)
  process.exitCode = 1
})
module.exports = { parseFlags, readSnapshot, comparePlan, buildReport, formatReport, main }
