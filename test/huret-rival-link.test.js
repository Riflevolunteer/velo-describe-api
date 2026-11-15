const test = require('node:test')
const assert = require('node:assert/strict')
const { matchComponent } = require('../scripts/generate-bike-update-sql')

test('1988 PXR 80 stays unlinked even when a short-cage Rival becomes a unique match', () => {
  for (const candidate of [
    { component_id: 4401, title: 'Sachs Huret Rival 2850-00', category: 'Rear Derailleurs' },
    { component_id: 8957, title: 'Huret Rival', category: 'Rear Derailleurs' },
  ]) {
    assert.equal(matchComponent('Huret Rival', [candidate], null, 'Rear Derailleur', 1988, 'PXR 80'), null)
  }
})

test('PXR 80 null decision preserves normal matching outside the exact bike/year', () => {
  const candidates = [{ component_id: 4401, title: 'Sachs Huret Rival 2850-00', category: 'Rear Derailleurs' }]
  for (const [year, bike] of [[1987, 'PXR 80'], [1989, 'PXR 80'], [1988, 'Other bike']]) {
    assert.equal(matchComponent('Huret Rival', candidates, null, 'Rear Derailleur', year, bike).component_id, 4401)
  }
})

test('Rival front and explicitly coded rear decisions are unaffected', () => {
  assert.equal(matchComponent('Huret Rival', [], null, 'Front Derailleur', 1988, 'PXR 80').component_id, 8488)
  assert.equal(matchComponent('Huret Rival AR: 41-1D', [], null, 'Rear Derailleur', 1987, 'Other bike').component_id, 8957)
})
