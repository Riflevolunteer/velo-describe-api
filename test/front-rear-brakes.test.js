const test = require('node:test')
const assert = require('node:assert/strict')
const { expandLabel, splitCellValue, matchComponent } = require('../scripts/generate-bike-update-sql')

test('explicit front/rear brake labels match calipers independently of other categories', () => {
  const records = [
    { component_id: 1, title: 'Example M730', category: 'Brakes' },
    { component_id: 2, title: 'Example M731', category: 'Brakes' },
    { component_id: 3, title: 'Example M730', category: 'Rear Derailleurs' },
    { component_id: 4, title: 'Example M731', category: 'Brake Levers' },
  ]
  assert.equal(matchComponent('Example M730', records, null, 'Front Brake', 1987, 'Test').component_id, 1)
  assert.equal(matchComponent('Example M731', records, null, 'Rear Brake', 1987, 'Test').component_id, 2)
})

test('shared and reach-pair brake descriptions stay a single Brakes spec', () => {
  for (const valueText of ['Cantilever front and rear', 'Dural front/rear CLB', 'Weinmann 610/750']) {
    assert.deepEqual(splitCellValue(expandLabel('Brakes'), valueText), [{ label: 'Brakes', valueText }])
  }
})

test('front/rear hints associate reversed parts with their actual position', () => {
  assert.deepEqual(splitCellValue(['Front Brake', 'Rear Brake'], 'Shimano BR-M731 Rer; Shimano BR-M730 Frt'), [
    { label: 'Front Brake', valueText: 'Shimano BR-M730 Frt' },
    { label: 'Rear Brake', valueText: 'Shimano BR-M731 Rer' },
  ])
})

test('a catalogue decision is scoped to its bike and year', () => {
  const value = "Shimano M451 'U' brake rear"
  assert.equal(matchComponent(value, [], null, 'Rear Brake', 1989, 'Ozark').component_id, 7213)
  assert.equal(matchComponent(value, [], null, 'Rear Brake', 1988, 'Ozark'), null)
  assert.equal(matchComponent(value, [], null, 'Rear Brake', 1989, 'Other'), null)
})

test('an unresolved rear remains unlinked even if a tempting candidate is unique', () => {
  const tempting = [{ component_id: 7212, title: "Shimano M450 'U' brake rear", category: 'Brakes' }]
  assert.equal(matchComponent("Shimano M450 'U' brake rear", tempting, null, 'Rear Brake', 1989, 'Chinook'), null)
  assert.equal(matchComponent('SunTour XC rear', [{ component_id: 1052, title: 'SunTour XC rear', category: 'Brakes' }], null, 'Rear Brake', 1986, 'Ridge Runner'), null)
})

test('a split does not force ambiguous group-only brakes into a generation', () => {
  assert.equal(matchComponent('Shimano Deore XT', [{ component_id: 983, title: 'Shimano Deore XT', category: 'Brakes' }], null, 'Front Brake', 1989, 'Europe Express'), null)
  assert.equal(matchComponent('Shimano Exage Mountain; rear U-brake', [], null, 'Rear Brake', 1989, 'Alpine Express'), null)
})
