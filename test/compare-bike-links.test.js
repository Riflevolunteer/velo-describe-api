const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const vm = require('node:vm')
const generator = require('../scripts/generate-bike-update-sql')
const { parseFlags, comparePlan, buildReport, formatReport, readSnapshot } = require('../scripts/compare-bike-links')

function fixture() {
  const source = { source_id: 10, label: '1985 Example catalogue' }
  const bike = { bike_id: 20, source_ref: 10, brand: 'Example', title: 'Tourer', year_from: '1985' }
  const spec = (value, id) => ({ catalogue: source.label, brand: bike.brand, bikeTitle: bike.title,
    year: '1985', label: 'Saddle', valueText: value, matched: id == null ? null : { component_id: id } })
  const plan = { bikes: [{ catalogue: source.label, brand: bike.brand, title: bike.title, year: '1985' }], specs: [] }
  const snapshot = { sources: [source], bikes: [bike], specs: [], components: [], brandNames: new Set() }
  function add(value, current, proposed) {
    plan.specs.push(spec(value, proposed))
    snapshot.specs.push({ bike_spec_id: snapshot.specs.length + 1, bike_id: 20, label: 'Saddle', value_text: value, component_id: current })
  }
  return { source, plan, snapshot, add }
}

test('MBK partial catalogue preserves the printed 1986/87 interval and uppercase brand without changing single-year SQL', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'velo-mbk-test-'))
  try {
    const file = path.join(dir, '1986_mbk_spec_1986_87_partial.csv')
    fs.writeFileSync(file, 'Model,Type,Frame Material\nTri-Delta,Triathlon,High-rigidity sloping frame\n')
    const plan = generator.buildCataloguePlan([file], [], new Set())
    assert.equal(plan.bikes[0].brand, 'MBK')
    assert.equal(plan.bikes[0].year, '1986')
    assert.equal(plan.bikes[0].yearTo, '1987')
    assert.equal(plan.bikes[0].catalogue, 'MBK Course et Loisir (1986/87, partial)')
    assert.equal(plan.catalogSources.get(plan.bikes[0].catalogue).country, null)
    const sql = generator.renderCatalogueSql(plan)
    assert.match(sql, /INSERT INTO bike \([^\n]*search_text, year_to, source_ref\)/)
    assert.match(sql, /'1987', \(SELECT source_id FROM data_source/)
    const single = path.join(dir, '1988_mbk_spec.csv')
    fs.writeFileSync(single, 'Model,Type\nOther,Road\n')
    const singlePlan = generator.buildCataloguePlan([single], [], new Set())
    assert.equal(singlePlan.bikes[0].yearTo, undefined)
    assert.doesNotMatch(generator.renderCatalogueSql(singlePlan), /year_to/)
  } finally { fs.rmSync(dir, { recursive: true }) }
})

test('compares identities independent of order, with explicit null transitions and component titles', () => {
  const f = fixture()
  f.add('gain', null, 1); f.add('loss', 1, null); f.add('change', 1, 2)
  f.add('same link', 1, 1); f.add('same null', null, null)
  f.snapshot.components = [{ component_id: 1, title: 'Old' }, { component_id: 2, title: 'New' }]
  f.snapshot.specs.reverse()
  const report = comparePlan(f.plan, f.snapshot, [f.source])
  assert.deepEqual(report.summary, { compared: 5, unchanged: 2, gained: 1, lost: 1, changed: 1,
    missing_in_db: 0, missing_in_csv: 0, ambiguous: 0 })
  assert.deepEqual(report.findings[2].proposed, { component_id: 2, title: 'New' })
})

test('missing rows and duplicates are structural differences, never link losses or arbitrary picks', () => {
  const f = fixture()
  f.add('duplicate live', 1, 2)
  f.snapshot.specs.push({ ...f.snapshot.specs[0], bike_spec_id: 9 })
  f.add('only CSV', null, 1); f.snapshot.specs.pop()
  f.add('only DB', 1, null); f.plan.specs.pop()
  f.add('duplicate CSV', 1, 2); f.plan.specs.push({ ...f.plan.specs.at(-1) })
  const { summary } = comparePlan(f.plan, f.snapshot, [f.source])
  assert.equal(summary.compared, 0)
  assert.equal(summary.missing_in_db, 1)
  assert.equal(summary.missing_in_csv, 1)
  assert.equal(summary.ambiguous, 2)
  f.snapshot.bikes.push({ ...f.snapshot.bikes[0], bike_id: 21 })
  assert.equal(comparePlan(f.plan, f.snapshot, [f.source]).findings[0].entity, 'bike')
})

test('country editions stay separate even with identical bike names, years and values', () => {
  const f = fixture()
  f.add('same spec', null, 1)
  f.snapshot.sources.push({ source_id: 11, label: '1985 Example (GB) catalogue' })
  f.snapshot.bikes.push({ ...f.snapshot.bikes[0], bike_id: 21, source_ref: 11 })
  f.snapshot.specs.push({ ...f.snapshot.specs[0], bike_spec_id: 2, bike_id: 21, component_id: 1 })
  f.plan.bikes.push({ ...f.plan.bikes[0], catalogue: f.snapshot.sources[1].label })
  f.plan.specs.push({ ...f.plan.specs[0], catalogue: f.snapshot.sources[1].label, matched: null })
  const { summary } = comparePlan(f.plan, f.snapshot, f.snapshot.sources)
  assert.equal(summary.gained, 1)
  assert.equal(summary.lost, 1)
  assert.equal(summary.ambiguous, 0)
})

test('shared pipeline handles combined cells, integrated levers and stored truncation without writing SQL', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'velo-compare-test-'))
  try {
    const file = path.join(dir, '1993_example_spec.csv')
    fs.writeFileSync(file, 'Model,Shifters,Brake Levers,Derailleurs,Extras\nTourer,Acme Combined,Acme Combined,front / rear,' + 'x'.repeat(260) + '\n')
    const records = [{ component_id: 70001, title: 'Acme Combined', category: 'Shifting Brake Levers' }]
    const plan = generator.buildCataloguePlan([file], records, new Set(['acme']))
    assert.equal(plan.integratedLeverCount, 1)
    assert.equal(plan.specs.find(s => s.label === 'Brake Levers').matched.component_id, 70001)
    assert.ok(plan.specs.some(s => s.label === 'Front Derailleur'))
    assert.ok(plan.specs.some(s => s.label === 'Rear Derailleur'))
    assert.equal(plan.specs.find(s => s.label === 'Extras').valueText.length, 255)
    const sql = generator.renderCatalogueSql(plan)
    assert.match(sql, /70001/)
    const report = buildReport([file, path.join(dir, '1994_example_spec.csv')], {
      components: records, brandNames: new Set(['acme']), specs: [],
      sources: [{ source_id: 1, label: '1993 Example catalogue' }],
      bikes: [{ bike_id: 1, source_ref: 1, title: 'Tourer', brand: 'Example', year_from: '1993' }],
    })
    assert.equal(report.scope.length, 1)
    assert.equal(report.skipped_files[0].reason, 'catalogue_not_loaded') // Unloaded file need not even exist.
    assert.equal(report.summary.missing_in_db, plan.specs.length)
    assert.throws(() => buildReport([file, file], {
      components: [], brandNames: new Set(), specs: [],
      sources: [{ source_id: 1, label: '1993 Example catalogue' }], bikes: [{ source_ref: 1 }],
    }), /Multiple CSVs/)
  } finally { fs.rmSync(dir, { recursive: true }) }
})

test('same-year Falcon Merckx brochure keeps its own provenance in generation and comparison', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'velo-merckx-test-'))
  try {
    const file = path.join(dir, '1973_falcon_spec_merckx.csv')
    fs.writeFileSync(file, 'Model,Type,Saddle\nEddy Merckx Competition Model 100,Road Racing,Plastic\n')
    const plan = generator.buildCataloguePlan([file], [], new Set())
    const label = 'Falcon Eddy Merckx brochure (c. 1973)'
    assert.equal(plan.bikes[0].brand, 'Falcon')
    assert.equal(plan.bikes[0].catalogue, label)
    assert.equal(plan.catalogSources.get(label).country, null)
    assert.match(generator.renderCatalogueSql(plan), /g2_itemId=27333/)
    assert.equal(generator.catalogueLabel('1973', 'Falcon', null), '1973 Falcon catalogue')
    assert.equal(generator.catalogueLabel('1973', 'Falcon', 'GB'), '1973 Falcon (GB) catalogue')
    const report = buildReport([file], {
      components: [], brandNames: new Set(), specs: [],
      sources: [{ source_id: 1, label: '1973 Falcon catalogue' }, { source_id: 2, label }],
      bikes: [{ bike_id: 1, source_ref: 2, title: plan.bikes[0].title, brand: 'Falcon', year_from: '1973' }],
    })
    assert.equal(report.scope.length, 1)
    assert.equal(report.scope[0].source_id, 2)
    assert.equal(report.summary.missing_in_db, 1)
  } finally { fs.rmSync(dir, { recursive: true }) }
})

test('Merckx links explicit Record equipment and blocks the generic Cinelli stem inheritance', () => {
  const rows = [
    { component_id: 6487, title: 'Cinelli 1A (Cinelli Milano logo)', category: 'Stems' },
    { component_id: 3260, title: 'Campagnolo 1035, Record (high flange)', category: 'Hubs' },
    { component_id: 1496, title: 'Campagnolo 1049, Record Strada', category: 'Cranksets' },
  ]
  const match = (value, label, bike, year = 1973) => generator.matchComponent(value, rows, null, label, year, bike)
  for (const bike of ['Eddy Merckx Competition Model 100', 'Eddy Merckx Super Competition Model 102']) {
    assert.equal(match('Q/R L/F Campagnolo Hubs', 'Hubs', bike).component_id, 3260)
    assert.equal(match('Campagnolo Record cotterless chainwheel & cranks.', 'Crankset', bike).component_id, 1496)
    assert.equal(match('Cinelli.', 'Stem', bike), null)
    assert.equal(match('Q/R L/F Campagnolo Hubs', 'Hubs', bike, 1972), null)
  }
  assert.equal(match('Cinelli', 'Stem', "Eddy Merckx Giro D'Italia Model 104"), null)
  assert.equal(match('Cinelli', 'Stem', 'San Remo Model 94').component_id, 6487)
  assert.equal(match('Q/R L/F Campagnolo Hubs', 'Hubs', 'Other model'), null)
})

test('Bottecchia keeps the printed edition date and does not invent a chain from the combined heading', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'velo-bottecchia-test-'))
  try {
    const file = path.join(dir, '1972_bottecchia_us_spec.csv')
    fs.writeFileSync(file, 'Model,Freewheel & Chain\nProfessionale,Quintuple REGINA ORO\n')
    const plan = generator.buildCataloguePlan([file], [
      { component_id: 2182, title: 'Regina Extra Oro 5 speed', category: 'Freewheels' },
      { component_id: 2194, title: 'Regina Extra Oro 6 speed', category: 'Freewheels' },
    ], new Set(['regina']))
    const label = 'Bottecchia US catalogue (September 1972)'
    assert.equal(plan.bikes[0].year, '1972')
    assert.equal(plan.bikes[0].catalogue, label)
    assert.equal(plan.catalogSources.get(label).country, 'US')
    assert.match(generator.renderCatalogueSql(plan), /archive: 1973; printed BOTT\. USA III/)
    assert.equal(plan.specs.length, 1)
    assert.equal(plan.specs[0].label, 'Freewheel')
    assert.equal(plan.specs[0].rawLabel, 'Freewheel & Chain')
    assert.equal(plan.specs[0].matched.component_id, 2182)
    assert.equal(generator.catalogueLabel('1972', 'Bottecchia', 'US'), '1972 Bottecchia (US) catalogue')
  } finally { fs.rmSync(dir, { recursive: true }) }
})

test('Bottecchia group links stay scoped and incomplete model descriptions cannot select variants', () => {
  const group = 'GRUPPO CAMPAGNOLO NUOVO RECORD'
  const records = [
    { component_id: 2297, category: 'Front Derailleurs', title: 'Campagnolo 1052/1 Record' },
    { component_id: 4125, category: 'Rear Derailleurs', title: 'Campagnolo 1020/A Nuovo Record' },
    { component_id: 1496, category: 'Cranksets', title: 'Campagnolo 1049 Nuovo Record Strada' },
    { component_id: 2963, category: 'Headsets', title: 'Campagnolo 1039 Record Strada' },
    { component_id: 30, category: 'Bottom Brackets', title: 'Campagnolo 1046/a Nuovo Record Strada' },
    { component_id: 3708, category: 'Pedals', title: 'Campagnolo 1037 Record Strada' },
    { component_id: 3259, category: 'Hubs', title: 'Campagnolo Nuovo Record' },
    { component_id: 5749, category: 'Seat Posts', title: 'Campagnolo Nuovo Record' },
    { component_id: 3233, category: 'Hubs', title: 'Campagnolo Nuovo Tipo' },
    { component_id: 4120, category: 'Rear Derailleurs', title: 'Campagnolo Gran Turismo' },
    { component_id: 4162, category: 'Rear Derailleurs', title: 'Campagnolo Valentino Extra' },
    { component_id: 99999, category: 'Front Derailleurs', title: 'Campagnolo Gran Turismo' },
  ]
  const match = (value, label, bike, year = 1972) => generator.matchComponent(value, records, null, label, year, bike)
  for (const [label, id] of Object.entries({ 'Front Derailleur': 2297, 'Rear Derailleur': 4125,
    Crankset: 1496, Headset: 2963, 'Bottom Bracket': 30, Pedals: 3708 })) {
    assert.equal(match(group, label, 'Professionale').component_id, id)
    assert.equal(match(group, label, 'Other model'), null)
    assert.equal(match(group, label, 'Professionale', 1973), null)
  }
  assert.equal(match(group, 'Hubs', 'Professionale'), null)
  assert.equal(match(group, 'Seatpost', 'Professionale'), null)
  assert.equal(match('CAMPAGNOLO NUOVO TIPO large flange with quick release', 'Hubs', "Giro d'Italia"), null)
  for (const bike of ['Gran Turismo', 'Special', 'Lady Special']) {
    assert.equal(match('CAMPAGNOLO NUOVO TIPO, large flange, quick release', 'Hubs', bike), null)
  }
  const turismo = 'CAMPAGNOLO GRAN TURISMO with derailleur - 10 speed'
  assert.equal(match(turismo, 'Rear Derailleur', 'Gran Turismo').component_id, 4120)
  assert.equal(match(turismo, 'Front Derailleur', 'Gran Turismo'), null)
  for (const bike of ['Special', 'Lady Special']) {
    const value = 'CAMPAGNOLO VALENTINO EXTRA with derailleur - 10 speed'
    assert.equal(match(value, 'Rear Derailleur', bike).component_id, 4162)
    assert.equal(match(value, 'Front Derailleur', bike), null)
  }
})

test('snapshot is read-only and rolls back on failed queries', async () => {
  for (const fail of [false, true]) {
    const queries = []
    const conn = { query(sql, params, callback) {
      const cb = callback || params
      queries.push(sql)
      cb(fail && sql.includes('FROM bike_spec ') ? new Error('fixture query failure') : null, [])
    } }
    if (fail) await assert.rejects(readSnapshot(conn), /fixture query failure/)
    else assert.equal((await readSnapshot(conn)).specs.length, 0)
    assert.match(queries[0], /REPEATABLE READ, READ ONLY/)
    assert.equal(queries[1], 'START TRANSACTION WITH CONSISTENT SNAPSHOT')
    assert.equal(queries.at(-1), 'ROLLBACK')
    assert.ok(queries.every(sql => /^(SET TRANSACTION|START TRANSACTION|SELECT|ROLLBACK)/.test(sql)))
  }
})

test('limits change text examples only; flags reject accidental write options', () => {
  const f = fixture(); f.add('a', null, 1); f.add('b', null, 1)
  const report = { ...comparePlan(f.plan, f.snapshot, [f.source]), scope: [f.source], skipped_files: [], loaded_catalogues_without_selected_csv: [] }
  assert.match(formatReport(report, 1), /1 more/)
  assert.doesNotMatch(formatReport(report, 0), /more;/)
  assert.equal(report.findings.length, 2)
  for (const flag of ['--write', '--limit=-1', '--limit=no', '--limit=9007199254740992']) assert.throws(() => parseFlags([flag]))
})

test('CLI JSON is complete and failure closes the connection without a partial report', async () => {
  const script = fs.readFileSync(path.join(__dirname, '../scripts/compare-bike-links.js'), 'utf8')
  for (const fail of [false, true]) {
    const output = []
    let closed = false
    const moduleMock = { exports: {} }
    const f = fixture()
    const requireMock = name => {
      if (name === 'node:path') return path
      if (name === './generate-bike-update-sql') return { ...generator,
        listInputFiles: () => ['1985_example_spec.csv'], buildCataloguePlan: () => f.plan,
        readComponentRecords: async () => [], readComponentBrandNames: async () => new Set(),
      }
      if (name === '../config') return { db: {} }
      if (name === '../decrypt') return () => ''
      if (name === 'mysql') return { createConnection: () => ({
        query(sql, cb) {
          const rows = sql.includes('FROM data_source') ? f.snapshot.sources : sql.includes('FROM bike b') ? f.snapshot.bikes : []
          cb(fail && sql.startsWith('SELECT') ? new Error('fixture failure') : null, rows)
        }, end() { closed = true },
      }) }
      throw new Error(`Unexpected require ${name}`)
    }
    vm.runInNewContext(script, { require: requireMock, module: moduleMock, process: { env: {} }, console: { log: s => output.push(s) } })
    if (fail) {
      await assert.rejects(moduleMock.exports.main(['--json']), /fixture failure/)
      assert.equal(output.length, 0)
    } else {
      await moduleMock.exports.main(['--json'])
      assert.equal(JSON.parse(output.join('')).scope.length, 1)
    }
    assert.ok(closed)
  }
})
