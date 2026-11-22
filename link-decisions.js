// Reviewed-unlinked registry for /linkCoverage: bike specs someone already
// reviewed and deliberately left without a component_id, so they stop being
// listed as open work. Two sources count:
//
//   1. COMPONENT_OVERRIDES entries in scripts/generate-bike-update-sql.js that
//      explicitly resolve to `id: null` for the spec's bike/year (reported by
//      explicitUnlinkOverride; an out-of-range miss is still an open gap).
//   2. REVIEWED_UNLINKED below, for decisions recorded in
//      .agents/skills/ingest-bike-specs/references/link-decisions.md that the
//      generator has no override for (the matcher already refuses them).
//
// Keys use the generator's normalizeForMatch, so an entry matches the same
// spellings an override would. The reasoning stays in link-decisions.md;
// `ref` points at it. Matching here never changes a link.
const { normalizeForMatch, explicitUnlinkOverride } = require('./scripts/generate-bike-update-sql')

const NOTES = '.agents/skills/ingest-bike-specs/references/link-decisions.md'

// { label, value, bike?, from?, to?, reason, ref }
//   label  bike_spec_label title, e.g. 'Headset' (case-insensitive)
//   value  stored bike_spec.value_text (normalised on load)
//   bike   exact bike title; from/to inclusive catalogue years
//   reason one line; ref = notes anchor holding the decision
const at = (anchor) => `${NOTES}#${anchor}`
const y = (year) => ({ from: year, to: year })
const MBK88 = 'mbk-catalogue-1988-fr--applied-link-review-2026-11-20'
const REVIEWED_UNLINKED = [
  // Mixed calls (2026-10-30)
  { label: 'Headset', value: 'Lightrace Luxe', ...y(1982), reason: 'only 3032 Lightrace Grand Luxe (undated) and 3033 Super (1984)', ref: at('mixed-calls-2026-10-30') },
  { label: 'Front Derailleur', value: 'Simplex SJA', ...y(1981), reason: 'SJ A102/A103/A222/A223; neighbour years disagree', ref: at('mixed-calls-2026-10-30') },
  { label: 'Hubs', value: 'Maillard 700 Pro', ...y(1983), reason: 'large or low flange not printed', ref: at('mixed-calls-2026-10-30') },
  { label: 'Brake Levers', value: 'Mafac Promotion', ...y(1982), reason: 'four Promotion variants', ref: at('mixed-calls-2026-10-30') },
  { label: 'Chain', value: 'Sedisport 270 black', ...y(1990), reason: 'no Sedisport 270 row', ref: at('mixed-calls-2026-10-30') },
  // Freewheels / cassettes
  { label: 'Freewheel', value: 'Regina CXS 7-speed', bike: '860 Record Corsa', ...y(1986), reason: '2169 is the 6-speed only', ref: at('freewheels--cassettes') },
  // Seatposts
  { label: 'Seatpost', value: 'Suntour QR-120', ...y(1986), reason: 'a seat bolt, not a post', ref: at('seatposts') },
  // Rims
  { label: 'Rims', value: 'Campagnolo Omega Super hard anodized', ...y(1989), reason: '4957/4961/4958 all cover 1989', ref: at('rims') },
  { label: 'Rims', value: 'Ambrosio Elite anodized', ...y(1989), reason: 'Extra Elite, Super Elite or Aero Elite', ref: at('rims') },
  { label: 'Rims', value: 'Araya RM alloy, 26 x 1.50, stainless steel spokes', ...y(1986), reason: 'RM series; model not printed', ref: at('rims') },
  { label: 'Rims', value: 'Mavic 190 NE, black anodised', ...y(1989), reason: 'DB has 190FB and 195NE only', ref: at('rims') },
  { label: 'Rims', value: 'Crono 700 and Hypothesis 26', ...y(1989), reason: 'two rims in one cell', ref: at('rims') },
  { label: 'Rims', value: 'Alesa alloy, hollow section', ...y(1989), reason: 'maker only, no model', ref: at('rims') },
  { label: 'Rims', value: 'Alesa hollow section, anodised', ...y(1989), reason: 'maker only, no model', ref: at('rims') },
  { label: 'Rims', value: 'Campagnolo Sigma', from: 1991, to: 1992, reason: 'four Sigma tubular rows cover 1991', ref: at('rims') },
  { label: 'Rims', value: 'Campagnolo Omega', ...y(1994), reason: '4955/4957/4961 all fit', ref: at('rims') },
  // Saddles
  { label: 'Saddle', value: 'Concor', from: 1986, to: 1988, reason: 'Concor is a family by 1985, not one model', ref: at('saddles') },
  { label: 'Saddle', value: 'Concor Moda', from: 1986, to: 1988, reason: 'Concor is a family by 1985, not one model', ref: at('saddles') },
  { label: 'Saddle', value: 'Concor in MODA grid colours', from: 1986, to: 1988, reason: 'Concor is a family by 1985, not one model', ref: at('saddles') },
  { label: 'Saddle', value: 'Mondial silver', ...y(1987), reason: 'Mundialita or an Iscaselle Mondial', ref: at('saddles') },
  { label: 'Saddle', value: 'Ideale "Donna" ladies\' race saddle', ...y(1982), reason: 'no Donna row', ref: at('saddles') },
  { label: 'Saddle', value: 'Viscount MTN, anatomic', reason: 'maker only', ref: at('saddles') },
  { label: 'Saddle', value: 'Brooks B-15', from: 1970, to: 1972, reason: 'every B15 row is 1950s-dated', ref: at('saddles') },
  { label: 'Saddle', value: 'Brooks B15', from: 1970, to: 1972, reason: 'every B15 row is 1950s-dated', ref: at('saddles') },
  { label: 'Saddle', value: 'San Marco Gilux race', ...y(1978), reason: '5555 GI-LUX 311 undated, 5556 GI-LUX 312 from 1980', ref: at('saddles') },
  { label: 'Saddle', value: 'Selle Italia CX', ...y(1982), reason: 'no Selle Italia CX row', ref: at('saddles') },
  { label: 'Saddle', value: 'Sella Italia CX', ...y(1984), reason: 'no Selle Italia CX row', ref: at('saddles') },
  // Stems
  { label: 'Stem', value: 'CTA', ...y(1989), reason: 'MTB stem; 6452 is the aero road CTA', ref: at('stems') },
  { label: 'Stem', value: 'Sakae RY', ...y(1985), reason: 'only 1974 RY-70/90/110 and 1982 RY2 rows', ref: at('stems') },
  { label: 'Stem', value: 'Sakae RY, 70 mm', ...y(1985), reason: 'only 1974 RY-70/90/110 and 1982 RY2 rows', ref: at('stems') },
  { label: 'Stem', value: 'Sakae RY, 80 mm (510) / 90 mm (530, 550)', ...y(1985), reason: 'only 1974 RY-70/90/110 and 1982 RY2 rows', ref: at('stems') },
  { label: 'Stem', value: 'TTT Grand Prix', from: 1970, to: 1971, reason: 'only 1960/1964/undated Gran Prix Special rows', ref: at('stems') },
  // Handlebars
  { label: 'Handlebars', value: 'SR CTSD', bike: '100', ...y(1986), reason: 'nearest 7888 CTD is a different code', ref: at('handlebars') },
  { label: 'Handlebars', value: 'Franco Italia, blue Benotto tape', ...y(1989), reason: 'Philippe 2897 (1970-82) or Milremo 2868 (1984)', ref: at('handlebars') },
  { label: 'Handlebars', value: 'CTA alloy randonneur bars, white Bike Ribbon tape', ...y(1989), reason: '2782 ATAX CTA is a racing bend', ref: at('handlebars') },
  { label: 'Handlebars', value: 'ITM Mondiale', from: 1991, to: 1992, reason: '9198 Mondial 90/A ends 1990', ref: at('handlebars') },
  { label: 'Handlebars', value: 'Sakae MTB-220', ...y(1991), reason: 'only MTB-226SB (1993)', ref: at('handlebars') },
  { label: 'Handlebars', value: 'Sakae MTB-227', ...y(1991), reason: 'only MTB-226SB (1993)', ref: at('handlebars') },
  { label: 'Handlebars', value: '3T Pro Light', ...y(1994), reason: 'no row', ref: at('handlebars') },
  { label: 'Handlebars', value: 'Cinelli Eubios 26', ...y(1994), reason: 'no row', ref: at('handlebars') },
  { label: 'Handlebars', value: 'T.T.T. Rekord', ...y(1981), reason: 'bend not printed', ref: at('handlebars') },
  { label: 'Handlebars', value: 'T.T.T. Record Competizione', ...y(1978), reason: 'DB splits it by bend; none printed', ref: at('handlebars') },
  // Tyres
  { label: 'Tyres', value: 'Clement silk tubulars, extra-light', ...y(1978), reason: 'three road Seta Extra rows', ref: at('tyres') },
  { label: 'Tyres', value: 'Hutchinson Silk', from: 1971, to: 1972, reason: 'no row fits (9050 is 1976-78 track, 9266 is 1985)', ref: at('tyres') },
  { label: 'Tyres', value: 'Vittoria Seta', ...y(1985), reason: 'three road Corsa Seta variants', ref: at('tyres') },
  { label: 'Tyres', value: 'Vittoria Seta, original', ...y(1985), reason: 'three road Corsa Seta variants', ref: at('tyres') },
  { label: 'Tyres', value: 'Wolber Rallye', ...y(1984), reason: 'Rallye 19/20TKS/22/23', ref: at('tyres') },
  { label: 'Tyres', value: 'IRC "Roadlite Ex" 700 x 25C - 100PSI', ...y(1986), reason: '9099 is a 1978 27in Road Lite Z', ref: at('tyres') },
  { label: 'Tyres', value: 'IRC Roadlite 100PSI skinwall', ...y(1986), reason: '9099 is a 1978 27in Road Lite Z', ref: at('tyres') },
  // Pedals
  { label: 'Pedals', value: 'Campagnolo Pista', ...y(1972), reason: '3711 or 3715, both 1971+', ref: at('pedals') },
  { label: 'Pedals', value: 'Sun Tour Superbe', ...y(1980), reason: 'PL-1000 Custom or PL-4000 Pro', ref: at('pedals') },
  { label: 'Pedals', value: 'Ofmega Pista', reason: 'Master or Mistral Pista', ref: at('pedals') },
  { label: 'Pedals', value: 'Ofmega Competizione', reason: 'not the Super Competizione', ref: at('pedals') },
  // Shifters
  { label: 'Shifters', value: 'SunTour GPX AccuShift', ...y(1989), reason: '6286 B or 6287 C', ref: at('shifters') },
  { label: 'Shifters', value: 'Huret Rival front and rear with black ratchet levers', ...y(1987), reason: '6108 is the indexed Aris', ref: at('shifters') },
  { label: 'Shifters', value: 'SIMPLEX PRESTIGE stem shifter', ...y(1974), reason: 'stem row 6226 is 1964-65', ref: at('shifters') },
  // Brake Levers
  { label: 'Brake Levers', value: 'Shimano Sport LX aero', ...y(1989), reason: 'BL-A450 to A453 all Exage Sport', ref: at('brake-levers') },
  // Crankset
  { label: 'Crankset', value: 'SR alloy XCT/GXC 48/38/28T', ...y(1990), reason: '8004 XCT is 1992 and GXC is unexplained', ref: at('crankset') },
  { label: 'Crankset', value: 'T.A. PROFESSIONAL 42-52', reason: 'TA 1690/1693 or Professional 3-arm', ref: at('crankset') },
  { label: 'Crankset', value: 'Thun Coronado', ...y(1986), reason: '1444/1445/1446 all fit', ref: at('crankset') },
  { label: 'Crankset', value: 'Mavic anodised 42x52', ...y(1987), reason: '630 or 635', ref: at('crankset') },
  { label: 'Crankset', value: 'Sugino Mighty 46/36/26T', ...y(1993), reason: 'MTB Mighty rows are 1995', ref: at('crankset') },
  // Brakes
  { label: 'Brakes', value: 'SHIMANO New 600 EX', ...y(1986), reason: 'BR-6207-49 short or -57 long reach', ref: at('brakes') },
  { label: 'Brakes', value: 'CLB / GL 47-60', ...y(1989), reason: 'three undated GL 47-60 version rows', ref: at('brakes') },
  { label: 'Brakes', value: 'Gipiemme Modolo Spidi', ...y(1982), reason: 'Modolo version not identified', ref: at('brakes') },
  { label: 'Brakes', value: 'Alloy side pull, Dia Compe G.500 Q.R., Anat gum hoods', ...y(1987), reason: '678 G-N series or 9106 500G', ref: at('brakes') },
  // Rear Derailleurs
  { label: 'Rear Derailleur', value: 'SHIMANO New 600 EX', ...y(1986), reason: 'RD-6207 short/GS or RD-6208 SIS', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Shimano Santé', ...y(1988), reason: 'RD-5000 and RD-5001 both cover 1988', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Shimano Santé, SIS indexed', ...y(1988), reason: 'RD-5000 and RD-5001 both cover 1988', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Huret Duopar', bike: 'PCA 10', ...y(1984), reason: '4302, 4400 Eco or 8173 long cage', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Huret Duopar', bike: 'PCA 15', ...y(1984), reason: '4302, 4400 Eco or 8173 long cage', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Gipiemme Sprint 610', ...y(1982), reason: 'variant or era unclear', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Simplex SOI T/SP, white', ...y(1989), reason: 'maybe S001N T / S002 GT misprints', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Simplex SOI GT/SP, white', ...y(1989), reason: 'maybe S001N T / S002 GT misprints', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Simplex SX A430 GT/SP', ...y(1988), reason: 'no SX430 row', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Suntour MT Tech', ...y(1986), reason: '4712/7785/4711 all fit', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'SUNTOUR New SEVEN', ...y(1986), reason: 'RD-1900 ends 1985', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Simplex SX', ...y(1981), reason: 'variant or era unclear', ref: at('rear-derailleurs') },
  { label: 'Rear Derailleur', value: 'Shimano Deore', ...y(1986), reason: 'variant or era unclear', ref: at('rear-derailleurs') },
  // Front Derailleurs
  { label: 'Front Derailleur', value: 'Simplex SLJA 22', ...y(1986), reason: 'SLJ A422 or A522', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Suntour Cyclone II', ...y(1984), reason: 'FD-2300 or FD-2400', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Sun Tour Cyclone II GT Wide Ratio', ...y(1984), reason: 'FD-2300 or FD-2400', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Suntour Mountech', ...y(1987), reason: 'FD-2700 v1/v2, both dated 1984-85', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Suntour MT Tech', ...y(1986), reason: 'FD-2700 v1/v2, both dated 1984-85', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'SunTour GPX', ...y(1989), reason: 'GP00-SSB braze-on or -SSH clamp', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'SUNTOUR Sprint', ...y(1986), reason: 'FD-3900 Sprint starts 1987', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Campagnolo Super Nuovo Record, 12 speed', ...y(1974), reason: '1052/SR 2313 starts 1975', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: "Shimano 'Z' series G5", ...y(1986), reason: 'Z202/Z204/Z206 all fit', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Shimano AL 11 SIS', ...y(1988), reason: 'later indexed version, no row', ref: at('front-derailleurs') },
  { label: 'Front Derailleur', value: 'Shimano Deore', ...y(1986), reason: 'DE10 or M700', ref: at('front-derailleurs') },
  // Bottom Brackets
  { label: 'Bottom Bracket', value: 'Zeus Ciclo-Cross', ...y(1973), reason: '188 Ref.33 or 190 Ref.34', ref: at('bottom-brackets') },
  // MBK Catalogue 1988 (FR)
  ...[
    ['Headset', 'Shimano New 600 EX'], ['Brakes', 'Shimano New 600 EX'], ['Front Derailleur', 'Shimano New 600 EX'],
    ['Rear Derailleur', 'Shimano New 600 EX'], ['Pedals', 'Shimano New 600 EX'], ['Chain', 'Shimano New 600 EX'],
    ['Crankset', 'Shimano New 600 EX, 42-52'], ['Crankset', 'Shimano New 600 EX Biopace, 42-52'],
    ['Freewheel', 'Shimano New 600 EX, 6 speeds, 13-23'],
  ].map(([label, value]) => ({ label, value, ...y(1988), reason: '6207, 6208 SIS or 6400 generation not printed', ref: at(MBK88) })),
  { label: 'Brakes', value: 'Shimano New 105', ...y(1988), reason: 'BR-1050-49 or -57 reach', ref: at(MBK88) },
  { label: 'Front Derailleur', value: 'Huret Rival', ...y(1988), reason: 'Rival 1086-00 / AV 62.1 D / ARIS Rival unresolved', ref: at(MBK88) },
  { label: 'Rear Derailleur', value: 'Huret Rival', ...y(1988), reason: 'Rival 2850-00 / AR 41.1 D / ARIS Rival unresolved', ref: at(MBK88) },
  { label: 'Crankset', value: 'Stronglight 100, 30-40-50', ...y(1988), reason: '11311 ST100T or 1875 100 LX', ref: at(MBK88) },
  { label: 'Rear Derailleur', value: 'Huret Duopar Eco', ...y(1988), reason: '4276 or 4400', ref: at(MBK88) },
  { label: 'Freewheel', value: 'Aris Rival, 6 speeds, 13-24', ...y(1988), reason: '2211 or 2121 bare Aris rows', ref: at(MBK88) },
  { label: 'Freewheel', value: 'Aris New Success, 6 speeds, 13-24', ...y(1988), reason: '2211 or 2121 bare Aris rows', ref: at(MBK88) },
  { label: 'Handlebars', value: '3TTT Grand Prix', ...y(1988), reason: '2768, 2761 or 2769', ref: at(MBK88) },
  { label: 'Tyres', value: 'Wolber Corsa tubulars', ...y(1988), reason: '6911 is the specific Corsa 80', ref: at(MBK88) },
  { label: 'Hubs', value: 'Helicosport', ...y(1988), reason: "3387's version not established", ref: at(MBK88) },
  { label: 'Brakes', value: 'Shimano Deore XT', ...y(1988), reason: 'BR-M730 or M731', ref: at(MBK88) },
  { label: 'Headset', value: 'Shimano 600', ...y(1988), reason: '600 generation not printed', ref: at(MBK88) },
]

function compile(entries) {
  return entries.map((e) => {
    if (!e.label || !e.value || !e.reason || !e.ref) {
      throw new Error(`REVIEWED_UNLINKED entry needs label, value, reason and ref: ${JSON.stringify(e)}`)
    }
    return { ...e, labelKey: e.label.trim().toLowerCase(), valueKey: normalizeForMatch(e.value) }
  })
}

const COMPILED = compile(REVIEWED_UNLINKED)

function registryHit(entries, label, valueText, bikeTitle, year) {
  const labelKey = String(label).trim().toLowerCase()
  const valueKey = normalizeForMatch(String(valueText))
  const y = Number(year)
  return entries.find((e) =>
    e.labelKey === labelKey && e.valueKey === valueKey &&
    (e.bike == null || e.bike === bikeTitle) &&
    (e.from == null || y >= e.from) && (e.to == null || y <= e.to))
}

// Returns { source, reason, ref } when the spec is a reviewed no-link, else
// null. `entries` is for tests; production uses the compiled registry.
function isReviewedUnlinked(label, valueText, bikeTitle, year, entries = COMPILED) {
  if (!label || !valueText) return null
  const hit = registryHit(entries, label, valueText, bikeTitle, year)
  if (hit) return { source: 'registry', reason: hit.reason, ref: hit.ref }
  const override = explicitUnlinkOverride(String(valueText), String(label), year, bikeTitle)
  if (override) {
    return {
      source: 'override',
      reason: `COMPONENT_OVERRIDES['${override.category}']['${override.key}'] resolves to null`,
      ref: 'scripts/generate-bike-update-sql.js'
    }
  }
  return null
}

module.exports = { REVIEWED_UNLINKED, NOTES, compile, isReviewedUnlinked }
