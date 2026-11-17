const test = require('node:test')
const assert = require('node:assert/strict')
const { matchComponent } = require('../scripts/generate-bike-update-sql')

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
