const test = require('node:test')
const assert = require('node:assert/strict')
const { matchComponent } = require('../scripts/generate-bike-update-sql')

const candidates = [
  { component_id: -1, title: 'Ariake 77-17', category: 'Saddles' },
  { component_id: 11429, title: 'Ariake 77-17-IS', category: 'Saddles' },
  { component_id: -3, title: 'Ariake 77C-DX', category: 'Saddles' },
  { component_id: -4, title: 'Ariake 77CP-DX', category: 'Saddles' },
  { component_id: 5234, title: 'Ariake Jaguar II', category: 'Saddles' },
]
const match = (value, year, bike, rows = candidates) => matchComponent(value, rows, null, 'Saddle', year, bike)

test('Miyata full 77-17-IS code resolves base-code ambiguity only on attested bikes', () => {
  for (const [year, bike] of [[1979, '912'], [1979, '710'], [1979, '600'], [1980, '710'], [1980, '610']]) {
    assert.equal(match('ARIAKE 77-17-IS padded', year, bike).component_id, 11429)
  }
  for (const [year, bike] of [[1980, '912'], [1981, '710'], [1979, 'Other bike']]) {
    assert.equal(match('ARIAKE 77-17-IS padded', year, bike), null)
  }
  assert.equal(match('ARIAKE 77-17 quilted vinyl & padded', 1979, '400').component_id, -1)
})

test('Miyata frame-dependent Ariake alternatives stay unlinked with a unique base-code candidate', () => {
  const base = [candidates[0]]
  assert.equal(match('ARIAKE 77-17, quilted vinyl top, padded; 81-L for ladies', 1982, '110', base), null)
  assert.equal(match('ARIAKE 77-17 (81L for Mixte)', 1983, '90', base), null)
  assert.equal(match('ARIAKE 77-17, quilted vinyl top, padded', 1981, '110', base).component_id, -1)
})

test('Ariake 77C-DX and 77CP-DX remain separate from each other and Jaguar II', () => {
  assert.equal(match('ARIAKE 77C-DX Vinyl', 1985, 'Pista').component_id, -3)
  assert.equal(match('ARIAKE 77CP-DX, anatomically styled, padded', 1981, '912').component_id, -4)
  assert.equal(match('ARIAKE Jaguar-II 77CDX padded', 1979, '800').component_id, 5234)
  assert.equal(match('ARIAKE Jaguar-II 77IS padded', 1979, '1000').component_id, 5234)
})
