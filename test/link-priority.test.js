const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const classifier = require('../link-classify')
const { buildLinkPriority } = require('../link-priority')

const brands = [{ brand_id: 1, title: 'SunTour' }, { brand_id: 2, title: 'Kalloy' }]
const brandIndex = classifier.buildBrandIndex(brands, [])
const part = (component_id, title, brand_id = 1, category_id = 7) =>
  ({ component_id, title, brand_id, category_id, year_from: 1980, year_to: 1985 })

test('spacing variants find candidates only within the detected maker and category', () => {
  const hint = buildLinkPriority([
    part(1, 'SunTour LD-2800 LePree'), part(2, 'Sun Tour Le Pree'),
    part(3, 'Other LePree', 2), part(4, 'SunTour LePree', 1, 8)
  ], brandIndex)
  for (const value of ['SunTour LePree', 'Sun Tour Le Pree']) {
    const { brands: detected } = classifier.classifyValue(value, brandIndex)
    const result = hint(value, detected, [7])
    assert.equal(result.next, 'override')
    assert.deepEqual(result.candidates.map(c => c.component_id), [1, 2])
    assert.equal(result.candidate_count, 2)
  }
})

test('hints retain code digits and do not count a shared maker as a shared model', () => {
  const hint = buildLinkPriority([part(1, 'Kalloy SP-248', 2), part(2, 'Kalloy SP-250', 2)], brandIndex)
  assert.deepEqual(hint('Kalloy SP-248 alloy', ['kalloy'], [7]).candidates.map(c => c.component_id), [1])
  assert.equal(hint('Kalloy SP-999', ['kalloy'], [7]).next, 'source_hunt')
  assert.equal(hint('Kalloy alloy', ['kalloy'], [7]).candidate_count, 0)
  assert.equal(hint('LePree', [], [7]).candidate_count, 0)
  assert.equal(hint('SunTour LePree', ['suntour'], []).candidate_count, 0)
})

test('count includes all candidates; examples are stable, deduplicated and capped at three', () => {
  const rows = [5, 2, 4, 1, 3].map(id => part(id, 'SunTour LePree'))
  const hint = buildLinkPriority(rows, brandIndex)
  const result = hint('SunTour LePree', ['suntour', 'sun tour'], [7, 7])
  assert.equal(result.candidate_count, 5)
  assert.deepEqual(result.candidates, rows.slice().sort((a, b) => a.component_id - b.component_id)
    .slice(0, 3).map(({ component_id, title, year_from, year_to }) => ({ component_id, title, year_from, year_to })))
})

test('a shared model word still finds a row with extra construction qualifiers', () => {
  const hint = buildLinkPriority([part(1, 'SunTour LePree (GT long cage)')], brandIndex)
  assert.equal(hint('SunTour Le Pree GT', ['suntour'], [7]).candidate_count, 1)
})

// Exercise the actual route with fixture queries, including the no-list path.
async function coverage(unlinked) {
  const sql = []
  const queries = [
    [{ brand_id: 9, brand: 'Example', label_id: 1, label: 'Shifters', specs: 1, linked: 0 }],
    [{ brand_id: 9, bikes: 1 }],
    [{ label_id: 1, value_text: 'Sun Tour Le Pree', bikes: 1 }],
    brands, [], [], [{ label_id: 1, category_id: 7 }],
    [{ brand_id: 1, category_id: 7 }], [part(1, 'SunTour LePree')]
  ]
  const source = fs.readFileSync(require.resolve('../index'), 'utf8')
  const start = source.indexOf("app.get('/linkCoverage'")
  const end = source.indexOf('// eBay Sporting Goods', start)
  return new Promise((resolve, reject) => {
    vm.runInNewContext(source.slice(start, end), {
      ...classifier, buildLinkPriority, NON_LINKABLE_SPEC_LABELS: new Set(),
      connection: { query(statement, params, callback) {
        sql.push(statement)
        callback(null, queries[sql.length - 1])
      } },
      app: { get(_path, handler) {
        handler({ query: { unlinked } }, {
          send: data => resolve({ data: JSON.parse(JSON.stringify(data)), sql }),
          status: () => ({ json: reject })
        })
      } }, console
    })
  })
}

test('coverage route returns hints and leaves totals unchanged', async () => {
  const { data, sql } = await coverage('10')
  const value = data.unlinked_values[0].values[0]
  assert.equal(value.next, 'override')
  assert.equal(value.candidate_count, 1)
  assert.equal(value.candidates[0].component_id, 1)
  assert.equal(data.overall.specs, 1)
  assert.equal(data.overall.linked, 0)
  assert.equal(sql.length, 9)
})

test('coverage with unlinked=0 skips candidate and classifier queries', async () => {
  const { data, sql } = await coverage('0')
  assert.equal(data.unlinked_values, undefined)
  assert.equal(sql.length, 2)
})
