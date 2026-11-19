const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const classifier = require('../link-classify')
const { buildLinkPriority } = require('../link-priority')
const { explicitUnlinkOverride } = require('../scripts/generate-bike-update-sql')
const { REVIEWED_UNLINKED, compile, isReviewedUnlinked } = require('../link-decisions')

test('explicit null overrides are reported; out-of-range misses and links are not', () => {
  // COMPONENT_OVERRIDES['Front Derailleurs']: "huret rival system" is
  // id: null for the 1985 Motobecane Mirage; "huret eco system" links 8796.
  assert.deepEqual(explicitUnlinkOverride('Huret Rival System', 'Front Derailleur', 1985, 'Mirage'),
    { category: 'Front Derailleurs', key: 'huret rival system' })
  assert.equal(explicitUnlinkOverride('Huret Rival System', 'Front Derailleur', 1984, 'Mirage'), null)
  assert.equal(explicitUnlinkOverride('Huret Rival System', 'Front Derailleur', 1985, 'Other'), null)
  assert.equal(explicitUnlinkOverride('Huret Eco System', 'Front Derailleur', 1985, 'Nomade'), null)
  assert.equal(explicitUnlinkOverride('Huret Rival System', 'Frame Material', 1985, 'Mirage'), null)
})

test('registry entries match by normalised value with optional bike and year scope', () => {
  const entries = compile([
    { label: 'Headset', value: 'Lightrace Luxe', from: 1982, to: 1982, reason: 'two undated rows', ref: 'notes#a' },
    { label: 'Saddle', value: 'Ideale "Donna"', bike: 'Lady', reason: 'no row', ref: 'notes#b' }
  ])
  const hit = isReviewedUnlinked('headset ', 'LIGHTRACE-LUXE', 'Any', 1982, entries)
  assert.deepEqual(hit, { source: 'registry', reason: 'two undated rows', ref: 'notes#a' })
  assert.equal(isReviewedUnlinked('Headset', 'Lightrace Luxe', 'Any', 1983, entries), null)
  assert.equal(isReviewedUnlinked('Saddle', 'Ideale "Donna"', 'Lady', 1990, entries).ref, 'notes#b')
  assert.equal(isReviewedUnlinked('Saddle', 'Ideale "Donna"', 'Gent', 1990, entries), null)
  // Overrides are consulted after the registry.
  assert.equal(isReviewedUnlinked('Front Derailleur', 'Huret Rival System', 'Mirage', 1985, entries).source, 'override')
  assert.equal(isReviewedUnlinked('', 'x', 'y', 1985, entries), null)
})

test('registry entries need label, value, reason and ref', () => {
  assert.throws(() => compile([{ label: 'Headset', value: 'x', reason: 'r' }]), /needs label, value, reason and ref/)
  assert.doesNotThrow(() => compile(REVIEWED_UNLINKED))
})

test('every registry ref points at an existing heading in the link-decisions notes', () => {
  const notes = fs.readFileSync(require.resolve('../.agents/skills/ingest-bike-specs/references/link-decisions.md'), 'utf8')
  const slug = heading => heading.trim().toLowerCase().replace(/[^\w\- ]/g, '').replace(/ /g, '-')
  const anchors = new Set(notes.split('\n').filter(l => /^#{1,6} /.test(l)).map(l => slug(l.replace(/^#+ /, ''))))
  for (const entry of REVIEWED_UNLINKED) {
    const [file, anchor] = entry.ref.split('#')
    assert.equal(file, '.agents/skills/ingest-bike-specs/references/link-decisions.md')
    assert.ok(anchors.has(anchor), `missing heading for ${entry.ref}`)
  }
  const keys = REVIEWED_UNLINKED.map(e => [e.label, e.value, e.bike ?? '', e.from ?? '', e.to ?? ''].join('|'))
  assert.equal(new Set(keys).size, keys.length, 'duplicate registry entry')
})

// Run the real /linkCoverage source against fixture rows, as link-priority.test.js does.
async function coverage(query, unlinkedRows) {
  const sql = []
  const queries = [
    [{ brand_id: 9, brand: 'Example', label_id: 1, label: 'Front Derailleur', specs: 4, linked: 1 }],
    [{ brand_id: 9, bikes: 3 }],
    unlinkedRows,
    [{ brand_id: 1, title: 'Huret' }], [], [], [{ label_id: 1, category_id: 9 }],
    [{ brand_id: 1, category_id: 9 }], []
  ]
  const source = fs.readFileSync(require.resolve('../index'), 'utf8')
  const start = source.indexOf("app.get('/linkCoverage'")
  const end = source.indexOf('// eBay Sporting Goods', start)
  return new Promise((resolve, reject) => {
    vm.runInNewContext(source.slice(start, end), {
      ...classifier, buildLinkPriority, isReviewedUnlinked, NON_LINKABLE_SPEC_LABELS: new Set(),
      connection: { query(statement, params, callback) {
        sql.push(statement)
        callback(null, queries[sql.length - 1])
      } },
      app: { get(_path, handler) {
        handler({ query }, {
          send: data => resolve({ status: 200, data: JSON.parse(JSON.stringify(data)), sql }),
          status: code => ({ json: body => resolve({ status: code, data: body, sql }) })
        })
      } }, console
    })
  })
}

const rows = [
  // Reviewed: explicit null override for this bike/year only.
  { label_id: 1, label: 'Front Derailleur', value_text: 'Huret Rival System', bike_title: 'Mirage', year: 1985, bikes: 1 },
  // Same text on another bike is still open work, merged with a second bike.
  { label_id: 1, label: 'Front Derailleur', value_text: 'Huret Rival System', bike_title: 'Other', year: 1985, bikes: 1 },
  { label_id: 1, label: 'Front Derailleur', value_text: 'Huret Rival System', bike_title: 'Third', year: 1986, bikes: 1 }
]

test('reviewed no-links leave the worklist but totals stay unchanged', async () => {
  const { data, sql } = await coverage({ unlinked: '10' }, rows)
  assert.match(sql[2], /b\.title as bike_title/)
  const entry = data.unlinked_values[0]
  assert.equal(entry.values.length, 1)
  assert.equal(entry.values[0].bikes, 2)
  assert.equal(entry.values[0].variants, undefined) // one spelling, merged across bikes
  assert.deepEqual(entry.reviewed_unlinked, { values: 1, bikes: 1 })
  assert.equal(entry.reviewed, undefined)
  assert.deepEqual(data.reviewed_unlinked, { values: 1, bikes: 1 })
  assert.equal(data.overall.specs, 4)
  assert.equal(data.overall.linked, 1)
  assert.equal(data.categories[0].unlinked, 3)
})

test('reviewed=1 lists reviewed values with reason and ref; bad values are rejected', async () => {
  const { data } = await coverage({ unlinked: '10', reviewed: '1' }, rows)
  const [listed] = data.unlinked_values[0].reviewed
  assert.equal(listed.value_text, 'Huret Rival System')
  assert.equal(listed.source, 'override')
  assert.equal(listed.ref, 'scripts/generate-bike-update-sql.js')
  assert.equal(listed.bikes, 1)
  const bad = await coverage({ reviewed: 'yes' }, rows)
  assert.equal(bad.status, 400)
  const off = await coverage({ unlinked: '0' }, rows)
  assert.equal(off.data.reviewed_unlinked, undefined)
  assert.equal(off.sql.length, 2)
})
