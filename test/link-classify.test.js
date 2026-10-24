// node test/link-classify.test.js (npm test)
const test = require('node:test')
const assert = require('assert')
const { normalizeValue, buildBrandIndex, classifyValue } = require('../link-classify')

const index = buildBrandIndex(
  [
    { brand_id: 1, title: 'Simplex' },
    { brand_id: 2, title: 'Sedis' },
    { brand_id: 3, title: 'Weinmann AG' },
    { brand_id: 4, title: 'Sakae/Ringyo (SR)' },
    { brand_id: 5, title: 'Maillard' },
    { brand_id: 6, title: 'Cinelli' },
    { brand_id: 7, title: 'Raleigh' },
    { brand_id: 8, title: 'Record' },
    { brand_id: 9, title: 'Kalloy' }
  ],
  ['Raleigh', 'Cinelli', 'Bianchi'],
  [{ brand_id: 5, word: 'Normandy' }, { brand_id: 5, word: 'Maillard' }]
)
// Cinelli has handlebar rows; Raleigh has none in this category.
const hasRows = (ids) => ids.includes(6)
const cls = (text) => classifyValue(text, index, hasRows).class

test('normalizeValue folds spelling variants together', () => {
  assert.strictEqual(normalizeValue('½" x 3/32"'), normalizeValue('1/2" x 3/32"'))
  assert.strictEqual(normalizeValue('Sedis, 108 links'), normalizeValue('SEDIS 108 links'))
  assert.strictEqual(normalizeValue('Raleigh/SR alloy'), 'raleigh sr alloy')
})

test('non-actionable classes', () => {
  assert.strictEqual(cls('None'), 'none')
  assert.strictEqual(cls('Not Specified'), 'none')
  assert.strictEqual(cls('None (Fixed Gear)'), 'none')
  assert.strictEqual(cls('Concor or Rolls'), 'either_or')
  assert.strictEqual(cls('1/2" x 3/32"'), 'dimension')
  assert.strictEqual(cls('14-15-17-19-21T'), 'dimension')
  assert.strictEqual(cls('700C'), 'dimension')
  assert.strictEqual(cls('Alloy'), 'generic')
  assert.strictEqual(cls('Dural side-pull'), 'generic')
  assert.strictEqual(cls('Alloy, Q.R.'), 'generic')
  assert.strictEqual(cls('Simplex'), 'brand_only')
  assert.strictEqual(cls('Sedis, 108 links'), 'brand_only')
  assert.strictEqual(cls('Weinmann alloy'), 'brand_only')
  assert.strictEqual(cls('Maillard 14-15-17-19-21-24'), 'brand_only')
  assert.strictEqual(cls('Raleigh light alloy'), 'house')
  assert.strictEqual(cls('Bianchi Hi-density'), 'house')
})

test('a bike brand with rows in the category is a maker', () => {
  assert.strictEqual(cls('Cinelli'), 'brand_only')
  assert.strictEqual(cls('Cinelli Giro d\'Italia'), 'actionable')
})

test('actionable and unbranded values', () => {
  assert.strictEqual(cls('Simplex SJA'), 'actionable')
  assert.strictEqual(cls('Kalloy SP-248'), 'actionable')
  assert.strictEqual(cls('SR Custom Light Alloy'), 'actionable')
  // A brand's own title word named after the brand is its model.
  assert.strictEqual(cls('Maillard Normandy 14-15-17-19-21-24'), 'actionable')
  // "Record" is a component_brand title but also a model word.
  assert.strictEqual(cls('Super Record'), 'unbranded')
  assert.strictEqual(cls('Rapidfire Plus'), 'unbranded')
})
