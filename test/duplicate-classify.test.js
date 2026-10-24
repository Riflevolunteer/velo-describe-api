// node test/duplicate-classify.test.js (npm test)
const test = require('node:test')
const assert = require('assert')
const { groupKey, relate, buildGroups } = require('../duplicate-classify')

let nextId = 1
const row = (title, extra = {}) => ({
  component_id: nextId++, brand_id: 1, category_id: 1, title,
  year_from: null, year_to: null, source_ref: 1, used: 0, ...extra
})

test('groupKey ignores parentheticals, accents, punctuation and spacing', () => {
  assert.strictEqual(groupKey('Weinmann AG 500 (hex socket center bolt, red)'), groupKey('Weinmann AG  500'))
  assert.strictEqual(groupKey('Mavic Comète'), groupKey('Mavic Comète ±'))
  assert.strictEqual(groupKey('Shimano Deore-XT'), groupKey('Shimano Deore XT'))
  assert.notStrictEqual(groupKey('Weinmann AG 500'), groupKey('Weinmann AG 605'))
})

test('identical titles with no year conflict are duplicates', () => {
  const a = row('Wolber Neo Pro', { year_from: '1978', year_to: '1980' })
  const b = row('Wolber Neo Pro', { year_from: '1980', year_to: '1990' })
  assert.strictEqual(relate(b, a), 'duplicate')
  assert.strictEqual(relate(row('Sugino AT'), row('Sugino AT', { year_from: '1980' })), 'duplicate')
})

test('a ± or + in the title is part of the name', () => {
  assert.strictEqual(relate(row('Mavic Comète ±'), row('Mavic Comète')), 'review')
})

test('identical titles in disjoint years are different generations', () => {
  const a = row('Shimano Deore XT', { year_from: '1994', year_to: '1995' })
  const b = row('Shimano Deore XT', { year_from: '1996', year_to: '1998' })
  assert.strictEqual(relate(b, a), 'generation')
})

test('colour and lettering parentheticals are cosmetic', () => {
  const base = row('Weinmann AG 500', { source_ref: 160 })
  assert.strictEqual(relate(row('Weinmann AG 500 (hex socket center bolt, red)'), base), 'cosmetic')
  assert.strictEqual(relate(row('MAFAC Racer (lettered MAFAC; black plastic washers)'), row('MAFAC Racer')), 'cosmetic')
})

test('version markers and year gaps are generations', () => {
  assert.strictEqual(relate(row('Campagnolo 4061, Super Record (v2)'), row('Campagnolo 4061, Super Record (v1)')), 'generation')
  assert.strictEqual(relate(row('GB Super Hood (later version)'), row('GB Super Hood (earlier version)')), 'generation')
  const old = row('Sugino Pro Dynamic (Cottered)', { year_from: '1950', year_to: '1965' })
  assert.strictEqual(relate(row('Sugino Pro Dynamic', { year_from: '1965', year_to: '1978' }), old), 'generation')
})

test('fitting differences are configurations', () => {
  assert.strictEqual(relate(row('Stronglight 107 (triple)'), row('Stronglight 107')), 'configuration')
  assert.strictEqual(relate(row('Zeus 2000 Titanium (Pista)'), row('Zeus 2000 Titanium (Strada)')), 'configuration')
})

test('flange, material and mounting differences are configurations', () => {
  assert.strictEqual(relate(row('Galli (low flange, GG skewer)'), row('Galli (high flange, GALLI skewer)')), 'configuration')
  assert.strictEqual(relate(row('Alas bottom bracket (titanium)'), row('Alas bottom bracket (steel)')), 'configuration')
  assert.strictEqual(relate(row('Shimano FD-7410, Dura-Ace 7400 (braze on)'), row('Shimano FD-7410, Dura-Ace 7400')), 'configuration')
  assert.strictEqual(relate(row('Maillard 700, Professional (low flange)'), row('Maillard 700, Professional (large flange)')), 'configuration')
})

test('markings on the part are cosmetic', () => {
  assert.strictEqual(relate(row("Olimpic Super ('Super Olimpic' on levers)"), row("Olimpic Super ('Olimpic' on levers)")), 'cosmetic')
  assert.strictEqual(relate(row('FB (FB in circle)'), row('FB (FB in circle with inset rectangle)')), 'cosmetic')
})

test('an unexplained difference is left for review', () => {
  assert.strictEqual(relate(row('Modolo Speedy (variation 2)'), row('Modolo Speedy')), 'review')
})

test('the survivor is the most used row, then a catalogue row', () => {
  const velobase = row('Weinmann AG 605 (inset lettering)')
  const catalogue = row('Weinmann AG 605', { source_ref: 162 })
  const used = row('Weinmann AG 605 (incised lettering, cap nut)', { used: 10 })
  assert.strictEqual(buildGroups([velobase, catalogue, used])[0].survivor, used)
  assert.strictEqual(buildGroups([velobase, catalogue])[0].survivor, catalogue)
})

test('rows differing in brand or category never group', () => {
  const rows = [row('Mavic MA 40'), row('Mavic MA 40', { category_id: 2 }), row('Mavic MA 40', { brand_id: 2 })]
  assert.strictEqual(buildGroups(rows).length, 0)
})
