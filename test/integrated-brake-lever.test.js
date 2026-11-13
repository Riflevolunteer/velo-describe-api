// node --test test/ (npm test)
const test = require('node:test')
const assert = require('assert')
const { integratedBrakeLeverLink } = require('../scripts/generate-bike-update-sql')

const SBL = 'Shifting Brake Levers'

test('same text as an integrated shifter links to it', () => {
  assert.strictEqual(integratedBrakeLeverLink('shimano dura ace 8v sti', 'shimano dura ace 8v sti', 6365, SBL), 6365)
})

test('brake value that is a whole-word part of the shifter text links', () => {
  assert.strictEqual(integratedBrakeLeverLink('campagnolo chorus', 'campagnolo chorus ergopower', 6345, SBL), 6345)
})

test('separate levers next to a Rapidfire shifter do not link', () => {
  assert.strictEqual(integratedBrakeLeverLink('shimano deore xt 2 finger', 'shimano deore xt rapidfire', 7577, SBL), null)
})

test('a downtube / bar-end shifter (Shifters category) never lends its id', () => {
  assert.strictEqual(integratedBrakeLeverLink('shimano 600', 'shimano 600', 1234, 'Shifters'), null)
})

test('partial words do not count', () => {
  assert.strictEqual(integratedBrakeLeverLink('campagnolo chor', 'campagnolo chorus ergopower', 6345, SBL), null)
})

test('unlinked shifter gives nothing', () => {
  assert.strictEqual(integratedBrakeLeverLink('shimano 105 sti', 'shimano 105 sti', null, SBL), null)
})
