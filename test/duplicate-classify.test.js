// node test/duplicate-classify.test.js (npm test)
const test = require('node:test')
const assert = require('assert')
const { groupKey, relate, buildGroups, findNearPairs, brandsCompatible, MERGE_CANDIDATE } = require('../duplicate-classify')

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

test('square-bracket qualifiers group like parentheticals', () => {
  assert.strictEqual(groupKey('Weinmann AG Symetric [black label]'), groupKey('Weinmann AG Symetric [red label]'))
})

// Near pairs: rows carry a brand title, as from duplicate-report.js.
const brandIds = new Map()
const part = (brand, title, extra = {}) => {
  if (!brandIds.has(brand)) brandIds.set(brand, brandIds.size + 1)
  return row(title, { brand, brand_id: brandIds.get(brand), ...extra })
}
const nearOf = (...rows) => findNearPairs(rows).map((p) => p.reason)

test('a shared rare part number pairs rows, "15/21" read as 1521', () => {
  assert.deepStrictEqual(nearOf(part('Rigida', 'Rigida 15/21'), part('Rigida', 'Rigida AL 1521')), ['code'])
  assert.deepStrictEqual(nearOf(part('Atom', 'Atom 440'), part('Maillard', 'Maillard Atom 440')), ['code'])
  assert.deepStrictEqual(nearOf(part('Spidel', 'Spidel SLJ 4164, Serie Sport Ref 01'), part('Simplex', 'Simplex SLJ4164')), ['code'])
})

test('lettered part numbers must agree', () => {
  assert.deepStrictEqual(nearOf(part('Shimano', 'Shimano BB-A450, Exage Sport'), part('Shimano', 'Shimano BB-M450, Exage Mountain')), [])
  assert.deepStrictEqual(nearOf(part('SunTour', 'SunTour FD-XC00-GX, XC 9000'), part('SunTour', 'SunTour FD-SP00-B, Sprint 9000')), [])
})

test('a part number shared by many rows of the category is not evidence', () => {
  const rows = ['A', 'B', 'C', 'D'].map((x) => part('Shimano', `Shimano 600 ${x}x`))
  assert.deepStrictEqual(findNearPairs(rows, { maxCodeRows: 3 }), [])
})

test('years, two model names and real variants keep rows apart', () => {
  assert.deepStrictEqual(nearOf(part('Atom', 'Atom 440', { year_from: '1950', year_to: '1960' }), part('Maillard', 'Maillard Atom 440', { year_from: '1978', year_to: '1979' })), [])
  assert.deepStrictEqual(nearOf(part('Gipiemme', 'Gipiemme Crono Special 905 A'), part('Gipiemme', 'Gipiemme Crono Sprint 905 C')), [])
  assert.deepStrictEqual(nearOf(part('Shimano', 'Shimano FD-5500, braze-on, 105'), part('Shimano', 'Shimano FD-5500, clamp-on, 105')), [])
  assert.deepStrictEqual(nearOf(part('SunTour', 'SunTour FD-2700, MounTech v1'), part('SunTour', 'SunTour FD-2700, MounTech v2')), [])
})

test('the same model words pair rows of two family brands', () => {
  assert.deepStrictEqual(nearOf(part('Simplex', 'Simplex Super LJ Luxe'), part('Spidel', 'Spidel Super LJ Luxe (Simplex)')), ['name'])
  assert.deepStrictEqual(nearOf(part('Simplex', 'Simplex SLJ5000'), part('Spidel', 'Spidel SLJ5000 (Simplex)')), ['code'])
  assert.deepStrictEqual(nearOf(part('Zeus', 'Zeus Super Alfa'), part('Zeus', 'Zeus Super Alfa 71')), ['name'])
})

test('name pairs need every word to agree and the same numbers', () => {
  assert.deepStrictEqual(nearOf(part('Gipiemme', 'Gipiemme Crono Sprint'), part('Gipiemme', 'Gipiemme Crono Sprint Triple')), [])
  assert.deepStrictEqual(nearOf(part('Shimano', 'Shimano BL-6207, 600EX'), part('Shimano', 'Shimano BL-6208, 600EX')), [])
  assert.deepStrictEqual(nearOf(part('SunTour', 'SunTour LD-1900, VX'), part('SunTour', 'SunTour LD-1950, VX')), [])
})

test("one row's model is the other's brand", () => {
  assert.deepStrictEqual(nearOf(part('Atom', 'Atom (5 speed, silver cogs)'), part('Maillard', 'Maillard Atom (5-speed)')), ['brand'])
  assert.deepStrictEqual(nearOf(part('Atom', 'Atom (4 speed)'), part('Maillard', 'Maillard Atom (5-speed)')), [])
})

test('brands outside one family never pair', () => {
  assert.ok(brandsCompatible('Maillard', 'Atom'))
  assert.ok(brandsCompatible('Spidel', 'Simplex'))
  assert.ok(!brandsCompatible('Atom', 'Simplex'))
  assert.deepStrictEqual(nearOf(part('Ofmega', 'Ofmega 4164'), part('Simplex', 'Simplex SLJ4164')), [])
})

test('rows buildGroups already groups are not near pairs', () => {
  assert.deepStrictEqual(nearOf(part('Mavic', 'Mavic 580 (black)'), part('Mavic', 'Mavic 580')), [])
})

test('pairs reviewed and kept apart are left out unless asked for', () => {
  const a = { component_id: 1869, brand_id: 900, brand: 'Spidel', category_id: 1, title: 'Spidel 106', source_ref: 1, used: 0 }
  const b = { component_id: 1882, brand_id: 901, brand: 'Stronglight', category_id: 1, title: 'Stronglight 106', source_ref: 1, used: 0 }
  assert.deepStrictEqual(findNearPairs([a, b]), [])
  assert.deepStrictEqual(findNearPairs([a, b], { includeReviewed: true }).map((p) => [p.reason, p.reviewed]), [['code', true]])
})

test('drilling for lightness is a configuration, not a finish', () => {
  assert.strictEqual(relate(row('Modolo Flash (drilled)'), row('Modolo Flash (non-drilled)')), 'configuration')
})

test('shape, machining and speed-count differences are configurations', () => {
  const base = row('Altenburger (black button)')
  assert.strictEqual(relate(row('Altenburger (finger grooved)'), base), 'configuration')
  assert.strictEqual(relate(row('Altenburger (straight lever)'), base), 'configuration')
  assert.strictEqual(relate(row('Way-Assauto (flats on cups)'), row('Way Assauto (knurled on cups)')), 'configuration')
  assert.strictEqual(relate(row('STM (two bolts, two black ribs)'), row('STM (straight post)')), 'configuration')
  assert.strictEqual(relate(row('Regina Extra BX (6-speed, silver)'), row('Regina Extra BX (5-speed)')), 'configuration')
  assert.strictEqual(relate(row('SunTour Cyclone (no cable housing stop; black anodized)'), row('SunTour Cyclone (with cable housing stop)')), 'configuration')
})

test('reviewed cosmetic rows report as kept variants, not merge candidates', () => {
  const survivor = row('Modolo Speedy', { component_id: 386, source_ref: 9 })
  const edition = row('Modolo Speedy (La Vie Claire edition)', { component_id: 387 })
  const other = row('Modolo Speedy (red lettering)', { component_id: 99999 })
  const [group] = buildGroups([survivor, edition, other])
  const byId = Object.fromEntries(group.others.map(o => [o.row.component_id, o.relation]))
  assert.strictEqual(byId[387], 'variant')
  assert.strictEqual(byId[99999], 'cosmetic')
  assert.ok(!MERGE_CANDIDATE.has('variant'))
})

test('a reviewed exact-title pair reports as a kept variant', () => {
  const later = row('Simplex double (both levers on right)', { component_id: 6200, year_from: '1955', year_to: '1956' })
  const earlier = row('Simplex double (both levers on right)', { component_id: 6201, year_from: '1950', year_to: '1955' })
  assert.strictEqual(relate(earlier, later), 'duplicate')
  assert.strictEqual(buildGroups([later, earlier])[0].others[0].relation, 'variant')
})

test('construction and shape words from the 2026-10-29 review are configurations', () => {
  assert.strictEqual(relate(row('SunTour Alpha (7sp)'), row('SunTour Alpha (6sp)')), 'configuration')
  assert.strictEqual(relate(row('Prior (4 cogs)'), row('Prior (3 cogs)')), 'configuration')
  assert.strictEqual(relate(row('Vredestein Slimline Sprint (700C)'), row('Vredestein Slimline Sprint (27 x 1-1/4 x 1-1/16)')), 'configuration')
  assert.strictEqual(relate(row('Nisi Countach (with eyelets)'), row('Nisi Countach (no eyelets)')), 'configuration')
  assert.strictEqual(relate(row('Galli (pointed tip)'), row('Galli (rounded tip)')), 'configuration')
  assert.strictEqual(relate(row('Gipiemme Crono Special (907AS)'), row('Gipiemme Crono Special (906AS)')), 'configuration')
})

test('a reviewed marking row that relate() leaves for review reports as a kept variant', () => {
  const survivor = row('Caimi (BREV CAIMI)', { component_id: 2056 })
  const other = row('Caimi (CAIMI)', { component_id: 2057 })
  assert.strictEqual(relate(other, survivor), 'review')
  assert.strictEqual(buildGroups([survivor, other])[0].others[0].relation, 'variant')
})
