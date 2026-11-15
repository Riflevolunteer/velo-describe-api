const test = require('node:test')
const assert = require('node:assert/strict')
const { TABLES, buildQualityReport } = require('../quality-report')
const { parseFlags, readSnapshot, formatReport } = require('../scripts/quality-report')
const { matchComponent } = require('../scripts/generate-bike-update-sql')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

function fixture() {
  return {
    component_detail: [{ component_id: 1, title: 'Example', brand_id: 1, category_id: 1, group_id: 1, source_ref: 1, year_from: '1980', year_to: '1990', description: '' }],
    component_brand: [{ brand_id: 1, title: 'Example' }, { brand_id: 2, title: 'Other' }],
    component_category: [{ category_id: 1, title: 'Brakes' }, { category_id: 2, title: 'Shifting Brake Levers' }, { category_id: 3, title: 'Geared Hubs' }],
    component_group: [{ group_id: 1, title: 'Example group', brand_id: 1 }],
    bike: [{ bike_id: 1, title: 'Tourer', brand_id: 1, source_ref: 1, year_from: '1985', year_to: '1985' }],
    bike_brand: [{ brand_id: 1, title: 'Example' }],
    bike_spec: [{ bike_spec_id: 1, bike_id: 1, label_id: 1, value_text: 'Example', component_id: 1, source_ref: 1 }],
    bike_spec_label: [{ label_id: 1, title: 'Front Brake' }],
    data_source: [{ source_id: 1, label: 'Example catalogue', source_type: 'catalogue' }],
    category_brand: [{ category_id: 1, brand_id: 1 }],
  }
}
const byCheck = (data, check) => buildQualityReport(data).findings.filter(f => f.check === check)

test('valid snapshot is clean; unlinked specs, optional groups and shared groups are valid', () => {
  const data = fixture()
  assert.equal(buildQualityReport(data).findings.length, 0)
  data.bike[0].year_to = null // Normal single-year catalogue bike, not a metadata gap.
  assert.equal(buildQualityReport(data).findings.length, 0)
  data.component_detail[0].group_id = null
  data.bike_spec[0].component_id = null
  assert.equal(buildQualityReport(data).findings.length, 0)
  data.component_detail[0].group_id = 1
  data.component_group[0].brand_id = null
  assert.equal(buildQualityReport(data).findings.length, 0)
  delete data.data_source
  assert.throws(() => buildQualityReport(data), /Missing snapshot table/)
})

test('dangling references cover every relationship, including sources and lookup tables', () => {
  for (const [table, field] of [
    ['component_detail', 'brand_id'], ['component_detail', 'category_id'], ['component_detail', 'group_id'],
    ['component_detail', 'source_ref'], ['component_group', 'brand_id'],
    ['bike', 'brand_id'], ['bike', 'source_ref'], ['bike_spec', 'bike_id'],
    ['bike_spec', 'label_id'], ['bike_spec', 'component_id'], ['bike_spec', 'source_ref'],
    ['category_brand', 'brand_id'], ['category_brand', 'category_id'],
  ]) {
    const data = fixture()
    data[table][0][field] = 999
    const findings = byCheck(data, 'dangling_reference')
    assert.equal(findings.length, 1, `${table}.${field}`)
    assert.equal(findings[0].severity, 'error')
    assert.equal(findings[0].details.field, field)
  }
})

test('missing required references are errors; missing provenance is review, not a dangling reference', () => {
  const data = fixture()
  data.component_detail[0].brand_id = null
  data.bike_spec[0].label_id = null
  data.bike[0].source_ref = null
  assert.equal(byCheck(data, 'missing_required_reference').length, 2)
  assert.equal(byCheck(data, 'missing_provenance')[0].severity, 'review')
  assert.equal(byCheck(data, 'dangling_reference').length, 0)
})

test('group ownership errors include both brands and permit shared groups', () => {
  const data = fixture()
  data.component_group[0].brand_id = 2
  assert.deepEqual(byCheck(data, 'group_brand_conflict')[0].details, { brand_id: 1, group_id: 1, group_brand_id: 2 })
  data.component_group[0].brand_id = null
  assert.equal(byCheck(data, 'group_brand_conflict').length, 0)
})

test('duplicate specs are one finding per exact set, even with conflicting links or sources', () => {
  const data = fixture()
  data.bike_spec.push({ ...data.bike_spec[0], bike_spec_id: 2, component_id: null, source_ref: null })
  data.bike_spec.push({ ...data.bike_spec[0], bike_spec_id: 3, value_text: 'Different value' })
  const findings = byCheck(data, 'duplicate_bike_spec')
  assert.equal(findings.length, 1)
  assert.deepEqual(findings[0].details.bike_spec_ids, [1, 2])
  assert.deepEqual(findings[0].details.component_ids, [1, null])
})

test('linked category checks allow split brakes, integrated levers, and geared hubs', () => {
  const data = fixture()
  const check = () => byCheck(data, 'linked_category_conflict')
  for (const label of ['Front Brake', 'Rear Brake', 'Brakes']) {
    data.bike_spec_label[0].title = label
    assert.equal(check().length, 0)
    // Both consumers use the extracted category map.
    assert.equal(matchComponent('Example', [{ component_id: 1, title: 'Example', category: 'Brakes' }], null, label, 1985, 'Tourer').component_id, 1)
  }
  data.bike_spec_label[0].title = 'Brake Levers'
  assert.equal(check().length, 1)
  data.component_detail[0].category_id = 2
  assert.equal(check().length, 0)
  data.bike_spec_label[0].title = 'Shifters'
  assert.equal(check().length, 0)
  data.bike_spec_label[0].title = 'Hubs'
  data.component_detail[0].category_id = 3
  assert.equal(check().length, 0)
  data.bike_spec_label[0].title = 'Unknown Label'
  assert.equal(byCheck(data, 'unmapped_linked_label')[0].severity, 'review')
})

test('date conflicts are review findings; partial overlap is flagged and missing bounds stay unknown', () => {
  const data = fixture()
  data.bike[0].year_from = '1979'
  data.bike[0].year_to = '1985'
  let finding = byCheck(data, 'linked_date_conflict')[0]
  assert.equal(finding.severity, 'review')
  assert.equal(finding.details.component_id, 1)
  data.component_detail[0].year_from = null
  assert.equal(byCheck(data, 'linked_date_conflict').length, 0)
  data.bike[0].year_to = '1991'
  assert.equal(byCheck(data, 'linked_date_conflict').length, 1)
  data.component_detail[0].year_to = null
  assert.equal(byCheck(data, 'linked_date_conflict').length, 0)
})

test('incomplete, unparsed and reversed dates have separate outcomes', () => {
  const data = fixture()
  data.component_detail[0].year_to = null
  assert.equal(byCheck(data, 'incomplete_dates')[0].severity, 'review')
  data.component_detail[0].year_from = '1980s'
  data.component_detail[0].year_to = 'c. 1990'
  assert.equal(byCheck(data, 'unparsed_dates').length, 1)
  assert.equal(byCheck(data, 'linked_date_conflict').length, 0)
  data.component_detail[0].year_from = '1990'
  data.component_detail[0].year_to = '1980'
  assert.equal(byCheck(data, 'reversed_dates')[0].severity, 'error')
  assert.equal(byCheck(data, 'linked_date_conflict').length, 0)
})

test('Freewheel vocabulary includes cassette/fixed-sprocket cases for review rather than proven wrong links', () => {
  const data = fixture()
  data.bike_spec_label[0].title = 'Freewheel'
  for (const title of ['Cassettes', 'Single Sprockets']) {
    data.component_category[0].title = title
    assert.equal(byCheck(data, 'broad_freewheel_label')[0].severity, 'review')
    assert.equal(byCheck(data, 'linked_category_conflict').length, 0)
  }
  data.component_category[0].title = 'Brakes'
  assert.equal(byCheck(data, 'linked_category_conflict')[0].severity, 'error')
})

test('255-character descriptions are review candidates, including multibyte text', () => {
  const data = fixture()
  data.component_detail[0].description = 'é'.repeat(255)
  assert.equal(byCheck(data, 'description_at_limit')[0].severity, 'review')
})

test('snapshot uses a read-only consistent transaction, fixed SELECTs and rollback', async () => {
  const sqls = []
  const data = fixture()
  const conn = { query(sql, callback) {
    sqls.push(sql)
    const table = sql.match(/FROM `([^`]+)`/)
    callback(null, table ? data[table[1]] : [])
  } }
  assert.deepEqual(await readSnapshot(conn), data)
  assert.deepEqual(sqls.slice(0, 2), ['SET TRANSACTION ISOLATION LEVEL REPEATABLE READ, READ ONLY', 'START TRANSACTION WITH CONSISTENT SNAPSHOT'])
  assert.equal(sqls.at(-1), 'ROLLBACK')
  assert.equal(sqls.filter(s => /^SELECT /.test(s)).length, Object.keys(TABLES).length)
  assert.ok(sqls.slice(2, -1).every(s => /^SELECT /.test(s) && !/\b(image|UPDATE|DELETE|INSERT|ALTER)\b/i.test(s)))
})

test('query failures roll back and fail rather than returning a partial clean report', async () => {
  const sqls = []
  const conn = { query(sql, callback) {
    sqls.push(sql)
    callback(/^SELECT /.test(sql) ? new Error('Fixture query failed') : null, [])
  } }
  await assert.rejects(readSnapshot(conn), /Fixture query failed/)
  assert.equal(sqls.at(-1), 'ROLLBACK')
})

test('CLI flags reject invalid limits and text truncation preserves full counts', () => {
  assert.equal(parseFlags(['--json', '--limit=0']).limit, 0)
  for (const flag of ['--limit=-1', '--limit=abc', '--limit=9007199254740992', '--write']) {
    assert.throws(() => parseFlags([flag]), /invalid option/)
  }
  const data = fixture()
  data.bike[0].source_ref = null
  data.bike_spec[0].source_ref = null
  const report = buildQualityReport(data)
  const text = formatReport(report, 1)
  assert.match(text, /missing_provenance: 2/)
  assert.match(text, /1 more/)
  assert.doesNotMatch(formatReport(report, 0), /more;/)
  assert.equal(report.findings.length, 2)
})

test('CLI emits parseable complete JSON, sets error status and closes on query failure', async () => {
  for (const mode of ['clean', 'error', 'failure']) {
    const data = fixture()
    if (mode === 'error') data.bike_spec[0].component_id = 999
    const output = []
    let closed = false
    const processMock = { env: {}, exitCode: undefined }
    const moduleMock = { exports: {} }
    const requireMock = name => {
      if (name === '../quality-report') return { TABLES, buildQualityReport }
      if (name === '../decrypt') return () => 'fixture'
      if (name === '../config') {
        assert.equal(processMock.env.DOTENV_CONFIG_QUIET, 'true')
        return { db: {} }
      }
      if (name === 'mysql') return { createConnection: () => ({
        query(sql, callback) {
          const table = sql.match(/FROM `([^`]+)`/)
          callback(mode === 'failure' && table ? new Error('Fixture failure') : null, table ? data[table[1]] : [])
        },
        end() { closed = true },
      }) }
      throw new Error(`Unexpected require: ${name}`)
    }
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../scripts/quality-report.js'), 'utf8'), {
      require: requireMock, module: moduleMock, process: processMock, console: { log: s => output.push(s) },
    })
    if (mode === 'failure') {
      await assert.rejects(moduleMock.exports.main(['--json']), /Fixture failure/)
      assert.equal(output.length, 0)
    } else {
      await moduleMock.exports.main(['--json', '--limit=0'])
      const report = JSON.parse(output.join(''))
      assert.equal(report.summary.error, mode === 'error' ? 1 : 0)
      assert.equal(processMock.exitCode, mode === 'error' ? 2 : 0)
      assert.equal(report.tables.bike_spec, 1)
    }
    assert.ok(closed)
  }
})
