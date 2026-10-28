// Run: npm test
const test = require('node:test')
const assert = require('assert')
const { EBAY_REGIONS, REGION_MARKETPLACES, mergeRegionListings } = require('../ebay-regions')

test('every region starts with its own site and lists 5 distinct sites', () => {
  for (const [region, sites] of Object.entries(EBAY_REGIONS)) {
    assert.strictEqual(sites[0], `EBAY_${region}`)
    assert.strictEqual(sites.length, 5, region)
    assert.strictEqual(new Set(sites).size, 5, region)
  }
})

test('regions cover the 16 Browse sites', () => {
  assert.deepStrictEqual([...REGION_MARKETPLACES].sort(), [
    'EBAY_AT', 'EBAY_AU', 'EBAY_BE', 'EBAY_CA', 'EBAY_CH', 'EBAY_DE', 'EBAY_ES', 'EBAY_FR',
    'EBAY_GB', 'EBAY_HK', 'EBAY_IE', 'EBAY_IT', 'EBAY_NL', 'EBAY_PL', 'EBAY_SG', 'EBAY_US',
  ])
})

test('merge keeps site order and drops repeats, keeping the earliest site', () => {
  const merged = mergeRegionListings([
    [{ itemId: '1', marketplace: 'EBAY_US' }, { itemId: '2', marketplace: 'EBAY_US' }],
    [{ itemId: '3', marketplace: 'EBAY_DE' }, { itemId: '1', marketplace: 'EBAY_DE' }],
    [],
    [{ itemId: '2', marketplace: 'EBAY_GB' }, { itemId: '4', marketplace: 'EBAY_GB' }],
  ])
  assert.deepStrictEqual(merged.map(l => `${l.marketplace}:${l.itemId}`),
    ['EBAY_US:1', 'EBAY_US:2', 'EBAY_DE:3', 'EBAY_GB:4'])
})

test('merge keeps listings that have no item id', () => {
  const merged = mergeRegionListings([[{ itemId: null }], [{ itemId: null }]])
  assert.strictEqual(merged.length, 2)
})
