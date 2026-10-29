// Run: npm test
const test = require('node:test')
const assert = require('assert')
const crypto = require('crypto')
const decrypt = require('../decrypt')

test('decrypts a value made with the legacy createCipher', () => {
  const cipher = crypto.createCipher('aes-256-ctr', 'd6F3Efeq')
  const hex = cipher.update('s3cret-Pass word!', 'utf8', 'hex') + cipher.final('hex')
  assert.strictEqual(decrypt(hex), 's3cret-Pass word!')
})
