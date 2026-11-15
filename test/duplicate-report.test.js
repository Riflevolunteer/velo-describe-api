const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const classifier = require('../duplicate-classify')

const script = fs.readFileSync(path.join(__dirname, '../scripts/duplicate-report.js'), 'utf8')
const part = (component_id, qualifier, used = 0) => ({
  component_id, brand_id: 1, brand: 'Example', category_id: 1, category: 'Freewheels',
  title: `Example (${qualifier})`, used, source_ref: 1,
})

// Exercise the actual CLI filters, summaries and rendering against fixed query
// results, without DB credentials, a connection or filesystem scratch files.
function report(rows, flags) {
  const output = []
  let ended = false
  vm.runInNewContext(script, {
    require(name) {
      if (name === 'mysql') return { createConnection: () => ({
        query: (_sql, callback) => callback(null, rows),
        end: () => { ended = true },
      }) }
      if (name === '../decrypt') return () => ''
      if (name === '../config') return { db: {} }
      if (name === '../duplicate-classify') return classifier
      throw new Error(`Unexpected require: ${name}`)
    },
    process: { argv: ['node', 'duplicate-report.js', ...flags], exit: code => { throw new Error(`Exit ${code}`) } },
    console: { log: s => output.push(s), error: s => { throw new Error(s) } },
  })
  assert.ok(ended)
  return output.join('\n')
}

test('merge JSON reports the missed pair and counts pairs rather than extra rows', () => {
  const rows = [part(90001, '5 speed', 10), part(90002, '6 speed, silver'), part(90003, '6 speed, silver')]
  const result = JSON.parse(report(rows, ['--merge', '--json']))
  assert.deepEqual(result.summary, { duplicate: { pairs: 1 } })
  assert.deepEqual(result.groups[0].pairs.map(p => [p.a.component_id, p.b.component_id]), [[90002, 90003]])
  assert.equal(result.groups[0].others, undefined)
  const text = report(rows, ['--merge'])
  assert.match(text, /1 pairs/)
  assert.match(text, /90002/)
  assert.match(text, /90003/)
  assert.doesNotMatch(text, /90001|keep|repoint/)
})

test('combined filters must match the same pair and used checks both endpoints', () => {
  const rows = [part(90001, '5 speed', 10), part(90002, '6 speed, silver'), part(90003, '6 speed, gold')]
  assert.deepEqual(JSON.parse(report(rows, ['--merge', '--used', '--json'])).groups, [])
  rows[2].used = 1
  for (const flags of [
    ['--merge', '--used'], ['--relation=cosmetic', '--used'],
    ['--relation=cosmetic', '--category=freewheel', '--brand=example', '--used'],
  ]) {
    const result = JSON.parse(report(rows, [...flags, '--json']))
    assert.deepEqual(result.summary, { cosmetic: { pairs: 1 } })
    assert.equal(result.groups[0].pairs.length, 1)
  }
  rows[1].used = 1
  rows[2].used = 0
  assert.equal(JSON.parse(report(rows, ['--merge', '--used', '--json'])).groups.length, 1)
})

test('all n(n-1)/2 comparisons are reported once and reviewed finishes are excluded from merges', () => {
  const rows = [part(90001, '5 speed'), part(90002, '6 speed, silver'), part(90003, '6 speed, gold'), part(90004, '7 speed')]
  assert.equal(JSON.parse(report(rows, ['--json'])).groups[0].pairs.length, 6)
  const kept = [part(2163, '6 speed, gold'), part(2164, '6 speed, silver'), part(90005, '5 speed')]
  assert.deepEqual(JSON.parse(report(kept, ['--merge', '--json'])).groups, [])
})
