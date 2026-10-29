const crypto = require('crypto')

const PASSWORD = 'd6F3Efeq'

// crypto.createDecipher is deprecated; it derived the key and IV from the
// password with OpenSSL's EVP_BytesToKey (MD5, no salt, one round). Doing that
// derivation here and using createDecipheriv decrypts the values already
// stored in .env and SSM unchanged, with no re-encryption needed.
function deriveKeyAndIv(password, keyLen, ivLen) {
  const password_ = Buffer.from(password, 'utf8')
  let block = Buffer.alloc(0)
  let out = Buffer.alloc(0)
  while (out.length < keyLen + ivLen) {
    block = crypto.createHash('md5').update(Buffer.concat([block, password_])).digest()
    out = Buffer.concat([out, block])
  }
  return { key: out.subarray(0, keyLen), iv: out.subarray(keyLen, keyLen + ivLen) }
}

function decrypt(text) {
  const { key, iv } = deriveKeyAndIv(PASSWORD, 32, 16)
  const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv)
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}

module.exports = decrypt
