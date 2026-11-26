const test = require('node:test')
const assert = require('node:assert/strict')
const { matchComponent } = require('../scripts/generate-bike-update-sql')

test('1990 Bianchi Axis top-pull front derailleur cannot select the bottom-pull XCD', () => {
  const records = [{ component_id: 2662, title: 'SunTour FD-XD10-GXH, XCD 6000', category: 'Front Derailleurs' }]
  assert.equal(matchComponent('SunTour XCD Top Pull', records, null, 'Front Derailleur', 1990, 'Axis'), null)
  assert.equal(matchComponent('SunTour FD-XD10-GXH', records, null, 'Front Derailleur', 1990, 'Axis').component_id, 2662)
})

test('MBK 1986/87 named tyres and Sedisport retain their reviewed identities', () => {
  const records = [
    { component_id: 6835, title: 'Michelin Hi-Lite Comp', category: 'Tyres' },
    { component_id: 10530, title: 'Michelin Hi Lite', category: 'Tyres' },
    { component_id: 8765, title: 'Sedis Sedisport', category: 'Chains' },
    { component_id: 11312, title: 'Stronglight 200, ST200D', category: 'Cranksets' },
    { component_id: 1889, title: 'Stronglight 200 LX', category: 'Cranksets' },
    { component_id: 3387, title: 'Sealed Helico Sport', category: 'Hubs' },
  ]
  const match = (value, label, bike, year = 1986) => matchComponent(value, records, null, label, year, bike)
  for (const year of [1986, 1987]) {
    for (const bike of ['C662CA Super Record', 'JO392 Triathlon Olympique']) {
      assert.equal(match('Michelin Hi-Lite Competition', 'Tyres', bike, year).component_id, 6835)
    }
    assert.equal(match('Nickel-plated Sedisport', 'Chain', 'C662CA Super Record', year).component_id, 8765)
  }
  assert.equal(match('Stronglight 200', 'Crankset', 'JO392 Triathlon Olympique'), null)
  assert.equal(match('Sealed Helico Sport', 'Hubs', 'JO392 Triathlon Olympique'), null)
  assert.equal(match('Michelin Hi-Lite Competition', 'Tyres', 'Other'), null)
  assert.equal(match('Nickel-plated Sedisport', 'Chain', 'Other'), null)
  assert.equal(match('Stronglight 200', 'Crankset', 'C502 Le Champion').component_id, 11312)
})

test('1986 Motobecane New 105 resolves both derailleurs without changing later or unrelated bikes', () => {
  const records = [
    { component_id: 2462, title: 'Shimano FD-1050-B / FD-1050-F, 105', category: 'Front Derailleurs' },
    { component_id: 2466, title: 'Shimano FD-A105, 105 Golden Arrow', category: 'Front Derailleurs' },
    { component_id: 4449, title: 'Shimano RD-1050, 105', category: 'Rear Derailleurs' },
    { component_id: 4452, title: 'Shimano RD-A105, 105 Golden Arrow', category: 'Rear Derailleurs' },
  ]
  for (const [label, id] of [['Front Derailleur', 2462], ['Rear Derailleur', 4449]]) {
    assert.equal(matchComponent('Shimano 105 NEW', records, null, label, 1986, 'C153S Jubilé Sport').component_id, id)
    assert.equal(matchComponent('Shimano 105 NEW', records, null, label, 1986, 'Other'), null)
    assert.equal(matchComponent('Shimano 105 NEW', records, null, label, 1985, 'C153S Jubilé Sport'), null)
    assert.equal(matchComponent('Shimano 105 NEW', records, null, label, 1988, 'A 500 Galaxie').component_id, id)
  }
})

test('a material-only seatpost does not match an unnamed Titec model', () => {
  const rows = [{ component_id: 1, title: 'Titec Aluminium', category: 'Seat Posts' }]
  assert.equal(matchComponent('Aluminium', rows, null, 'Seatpost', 1984, 'PH 12'), null)
  assert.equal(matchComponent('Titec Aluminium', rows, null, 'Seatpost', 1996, 'Other').component_id, 1)
})

test('1984 Motobecane Eco portraits do not resolve the overlapping Duopar rows', () => {
  for (const records of [
    [{ component_id: 4276, title: 'Huret Duopar Eco', category: 'Rear Derailleurs' }],
    [{ component_id: 4400, title: 'Sachs Huret Duopar Eco 2690-00 H / GC', category: 'Rear Derailleurs' }],
  ]) {
    for (const bike of ['Super Mirage', 'City-Becane']) {
      assert.equal(matchComponent('Huret Duopar Eco', records, null, 'Rear Derailleur', 1984, bike), null)
    }
  }
  assert.equal(matchComponent('Huret Club', [], null, 'Front Derailleur', 1984, 'City-Becane').component_id, 2379)
})

test('Interclub generic CLB cantilever remains unresolved after removing the page citation', () => {
  const records = [{ component_id: 604, title: 'CLB Cantilever Sport 1951, Cyclotouriste', category: 'Brakes' }]
  assert.equal(matchComponent('CLB cantilever', records, null, 'Front Brake', 1984, 'Interclub'), null)
})

test('generic 1980-83 Super Record rear specs cannot select the atypical PAT. 80 specimen', () => {
  const early = { component_id: 4149, title: 'Campagnolo 4001, Super Record (PAT. 80 specimen)', category: 'Rear Derailleurs' }
  const later = { component_id: 4151, title: 'Campagnolo 4001 / 0102018, Super Record (screw-mounted spring)', category: 'Rear Derailleurs' }
  for (const records of [[early], [later], [early, later]]) {
    for (const value of ['Campagnolo Super Record', 'Campagnolo Super Rekord']) {
      for (const year of [1980, 1981, 1982, 1983]) {
        const selected = matchComponent(value, records, null, 'Rear Derailleur', year, 'Super Corsa')
        if (year === 1981 || year === 1982) assert.equal(selected.component_id, 4151)
        else assert.equal(selected, null)
        assert.equal(matchComponent(value, records, null, 'Rear Derailleur', year, 'Other'), null)
      }
      assert.equal(matchComponent(value, records, null, 'Rear Derailleur', 1979, 'Other').component_id, 4148)
      assert.equal(matchComponent(value, records, null, 'Rear Derailleur', 1984, 'Other').component_id, 4152)
      assert.equal(matchComponent(value, [], null, 'Front Derailleur', 1981, 'Other').component_id, 2313)
    }
  }
})

test('1987 Bianchi C-Record cranks require generation evidence even with a unique candidate', () => {
  const early = { component_id: 1483, title: 'Campagnolo C-Record', category: 'Cranksets' }
  const late = { component_id: 1482, title: 'Campagnolo C-Record (1987-1994)', category: 'Cranksets' }
  for (const records of [[early], [late], [early, late]]) {
    for (const bike of ['X4', 'MONDIALE']) {
      assert.equal(matchComponent('Campagnolo C Record 53/42T', records, null, 'Crankset', 1987, bike), null)
      // Keep the reviewed guard bounded to these two bikes and this catalogue year.
      assert.equal(matchComponent('Campagnolo C Record 53/42T', records, null, 'Crankset', 1986, bike).component_id, 1483)
      assert.equal(matchComponent('Campagnolo C Record 53/42T', records, null, 'Crankset', 1988, bike).component_id, 1482)
    }
    assert.equal(matchComponent('Campagnolo C Record 53/42T', records, null, 'Crankset', 1987, 'Other bike').component_id, 1482)
  }
})

test('Tangent combined XC-9010 brakes cannot select the rear-only SE component', () => {
  for (const records of [
    [{ component_id: 1055, title: 'SunTour XC-9010', category: 'Brakes' }],
    [{ component_id: 1054, title: 'SunTour CT-XC00, XC9000', category: 'Brakes' },
      { component_id: 1055, title: 'SunTour CT-XC10, XC9000', category: 'Brakes' }]
  ]) {
    assert.equal(matchComponent('SunTour XC-9010', records, null, 'Brakes', 1989, 'Tangent'), null)
  }
  // Other categories retain their independently reviewed group mappings.
  assert.equal(matchComponent('SunTour XC-9010', [], null, 'Rear Derailleur', 1989, 'Tangent').component_id, 4781)
})

test('unidentified Grizzly hubs and Alessandro rims stay unlinked even with one candidate', () => {
  for (const [value, label, category, year, bike, id, title] of [
    ['SunTour XC-Pro', 'Hubs', 'Hubs', 1991, 'Grizzly', 3628, 'SunTour HB-XP00-R, XC-Pro (rear freewheel hub)'],
    ['SunTour XC-Pro', 'Hubs', 'Hubs', 1991, 'Grizzly', 99999, 'SunTour XC-Pro'],
    ['Nisi Corsa', 'Rims', 'Rims', 1982, 'Alessandro', 5131, 'Nisi Corsa Toro (no eyelets)'],
  ]) {
    const records = [{ component_id: id, title, category }]
    assert.equal(matchComponent(value, records, null, label, year, bike), null)
    // The null decision is bounded; it must not suppress normal matching elsewhere.
    if (value === 'Nisi Corsa' || title === 'SunTour XC-Pro') {
      assert.equal(matchComponent(value, records, null, label, year + 1, bike).component_id, id)
      assert.equal(matchComponent(value, records, null, label, year, 'Other bike').component_id, id)
    }
  }
})

test('unresolved alternatives, colour and qualified tyre names do not inherit a unique substring hit', () => {
  for (const [value, category, label, year, bike, id, title] of [
    ['Brooks Professional or Ideale 90', 'Saddles', 'Saddle', 1973, 'PX 10', 10057, 'Brooks Professional'],
    ['Black', 'Chains', 'Chain', 1986, 'Sierra', 10740, 'Sachs SC 40 Black'],
    ['Black', 'Chains', 'Chain', 1986, 'Everest', 10740, 'Sachs SC 40 Black'],
    ["D'Alessandro Super-Cross Tubulars", 'Tyres', 'Tyres', 1973, 'Z 66', 11138, "D'Alessandro Super"],
  ]) {
    assert.equal(matchComponent(value, [{ component_id: id, title, category }], null, label, year, bike), null, value)
    // A guard for the unresolved phrase must not disable the actual named component.
    assert.equal(matchComponent(title, [{ component_id: id, title, category }], null, label, 1996, 'Other').component_id, id)
  }
})

test('reviewed Peugeot tyres and Cinelli Durex rims survive broader competing titles', () => {
  for (const [value, category, label, year, bike, id, title, broadTitle] of [
    ['Michelin Hi-lite Road 700 x 20 C', 'Tyres', 'Tyres', 1987, "PH 501 W 'Ventoux'", 9498, 'Michelin Hi-Lite Road', 'Michelin Hi Lite'],
    ['700x19 Michelin Hi-lite Pro', 'Tyres', 'Tyres', 1987, 'Triathlon', 6836, 'Michelin Hi-Lite Pro', 'Michelin Hi Lite'],
    ['700x20C Michelin Hi-lite Comp', 'Tyres', 'Tyres', 1987, 'Galaxie', 6835, 'Michelin Hi-Lite Comp', 'Michelin Hi Lite'],
    ['Ambrosio Montreal Durex tubular', 'Rims', 'Rims', 1986, '840 SLX Competition', 4913, 'Ambrosio Montreal Durex', 'Ambrosio Montreal'],
  ]) {
    const records = [{ component_id: id, title, category }, { component_id: 99999, title: broadTitle, category }]
    assert.equal(matchComponent(value, records, null, label, year, bike).component_id, id)
    assert.equal(matchComponent(value, records, null, label, year + 1, bike), null, 'No unsupported year extension')
  }
})

test('1986 Team Miyata SP-7200 restores the stored decision without selecting other bikes', () => {
  const records = [{ component_id: 5899, title: 'Shimano SP-7200, Dura-Ace EX', category: 'Seat Posts' }]
  assert.equal(matchComponent('SHIMANO Dura-Ace EX', records, null, 'Seatpost', 1986, 'Team Miyata').component_id, 5899)
  assert.equal(matchComponent('SHIMANO Dura-Ace EX', records, null, 'Seatpost', 1986, 'Other'), null)
})

test('1985–86 SR and Kusuki fitments link without conflating H.L. or generic Rocky', () => {
  const rows = [
    { component_id: 11690, title: 'Sakae/Ringyo (SR) MTB-204', category: 'Handlebars' },
    { component_id: 11691, title: 'Kusuki BMT-3-26', category: 'Handlebars' },
    { component_id: 11692, title: 'Kusuki Rockey-2', category: 'Stems' },
    { component_id: 11694, title: 'Sakae/Ringyo (SR) MTB-210', category: 'Handlebars' },
  ]
  const match = (value, label, year, bike) => matchComponent(value, rows, null, label, year, bike)
  assert.equal(match('SR MTB-204 Alloy', 'Handlebars', 1985, 'Terra Runner OR').component_id, 11690)
  assert.equal(match('SR MTB-204', 'Handlebars', 1986, 'K2').component_id, 11690)
  assert.equal(match('KUSUKI BMT-3-26 Alloy', 'Handlebars', 1986, 'Trail Runner').component_id, 11691)
  assert.equal(match('KUSUKI ROCKY 2 Alloy Black', 'Stem', 1986, 'Trail Runner').component_id, 11692)
  assert.equal(match('H.L. MTB 210', 'Handlebars', 1987, '830'), null)
  assert.equal(match('Rocky II, alloy', 'Stem', 1986, 'Orient Express'), null)
  assert.equal(match('Kusuki Rocky III adjustable, alloy', 'Stem', 1986, 'Seneca'), null)
})

test('Delta treatment and fitted chain length cannot select an ordinary Sedisport model', () => {
  const rows = [
    { component_id: 8765, title: 'Sedis Sedisport', category: 'Chains' },
    { component_id: 1401, title: 'Sedis Pro', category: 'Chains' },
    { component_id: 8764, title: 'Sedis Sedicolor', category: 'Chains' },
  ]
  for (const records of [[rows[0]], rows]) {
    for (const [value, bike] of [
      ['112 links, Delta treated', 'PL 8 M'],
      ['Sedis, 110 links, Delta treated', 'PX 18 M'],
      ['Sedis, 110 links, Delta treated', 'PX 18 MC'],
      ['Sedis, 110 links, Delta treated', 'PK 65 lady'],
    ]) assert.equal(matchComponent(value, records, null, 'Chain', 1980, bike), null)
    for (const [value, year] of [
      ['Sedissport, 108 links, Delta treated', 1980],
      ['Sedisport, Delta treated', 1982],
      ['Sedisport, nickel-plated', 1989],
      ['Sedisport Gold', 1983],
      ['Sedisport', 1988],
    ]) assert.equal(matchComponent(value, records, null, 'Chain', year, 'Other').component_id, 8765)
    assert.equal(matchComponent('Sedisport or Uniglide', records, null, 'Chain', 1982, 'Jubilee Sport'), null)
  }
  assert.equal(matchComponent('Sedis Pro', rows, null, 'Chain', 1988, 'Other').component_id, 1401)
})
