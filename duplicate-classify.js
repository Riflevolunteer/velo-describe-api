// Groups component_detail rows that look like the same part and says how each
// extra row relates to the one worth keeping, so scripts/duplicate-report.js
// can list what is safe to merge and what is a real variant. Rows share a group
// when brand, category and the title agree once parentheticals, accents,
// punctuation and spacing are ignored ("Weinmann AG 500 (hex socket center
// bolt, red)" and "Weinmann AG 500"). Each non-survivor row is then one of:
//
//   duplicate      same part: identical title and no year conflict
//   cosmetic       differs only by colour, lettering, label, washer or finish
//   configuration  double / triple, road / pista, size or fitting differences
//   generation     a different production run: year ranges that don't overlap
//                  or a "v2" / "later version" / "type 3" marker
//   review         the difference is none of the above; a person decides
//   variant        a cosmetic row a person has reviewed and kept (REVIEWED_VARIANTS):
//                  a special edition, a finish sold as its own model, or a
//                  marking that dates the part
//
// Only duplicate and cosmetic are merge candidates; the rest are real parts.

const { GENERIC_WORDS } = require('./link-classify')

const COSMETIC_WORDS = /\b(black|white|silver|gold|red|blue|green|grey|gray|yellow|orange|anodi[sz]ed|polished|painted|finish|lettering|lettered|incised|label|labelled|labeled|logo|washers?|cap nut|nut|hex socket|center ?bolt|centre ?bolt|decal|edition|font|engraved|stamped|color|colour|sticker|badge|printed|signature|on (the )?(levers?|body|barrel|backside)|in (a |an )?(circle|oval|ovals|indent|rectangle)|oblong rectangle|knurled)\b/i
// Fitting, construction and material differences: a different part, not a repaint.
// Drilling for lightness counts (Modolo Flash drilled / non-drilled, drilled cogs), and so do shape
// and machining: lever shape, plug, base, races, cup flats, bolt count, cable stops (cosmetic review
// 2026-10-28: Altenburger, Cyclo Benelux, Magistroni, STM, AVA, Way Assauto, SunTour Cyclone).
const CONFIG_WORDS = /\b(double|triple|single|pista|strada|road|track|cross|tandem|mtb|touring|left|right|lh|rh|front|rear|quick release|qr|braze[- ]?on|clincher|tubular|\d+[ -]?(speed|mm|t|bcd)|bcd|short|long|cage|compact|(high|low|large|small)[ -]?flange|flange|pieces?|mount|clamps?|band|tab|spiders?|arms?|pins?|flutes?|fluted|rails?|springs?|wires?|taper|cottered|cotterless|expander|steel|alloy|alu(minum|minium)?|titanium|cro-?moly|chromoly|leather|suede|forged|smooth|slotted|holes|drilled|pulleys?|inner|outer|aero|sidepull|quill|girder|ferrule|sleeved|speed indicator|grooved|straight|(longer|shorter) lever|plastic body|plugs?|(squared|rounded) base|races|flats|milled|(one|two|single|twin)[ -]bolts?|stops?|(narrow|wide) (enlarged )?cent(er|re) section)\b/i
const GENERATION_WORDS = /\b(v\d|version|type \d|gen|generation|first|second|third|1st|2nd|3rd|early|earlier|later|late|new style|old style|mk ?\d|mark \d|prototype)\b/i

// Qualifiers in round or square brackets ("[black label]").
const parentheticals = (title) => (title.match(/\(([^)]*)\)|\[([^\]]*)\]/g) || []).map(s => s.slice(1, -1).trim()).filter(Boolean)
const dropParentheticals = (text) => text.replace(/\([^)]*\)|\[[^\]]*\]/g, ' ')

const fold = (text) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Title with parentheticals dropped, then reduced to letters and digits.
const groupKey = (title) => dropParentheticals(fold(title)).replace(/[^a-z0-9]+/g, '')

// Title kept whole (parentheticals included) but reduced the same way, except
// that "±" and "+" stay: "Mavic Comète ±" is a different wheel from "Mavic Comète".
const fullKey = (title) => fold(title).replace(/[^a-z0-9±+]+/g, '')

const yearOf = (value) => {
  const n = parseInt(value, 10)
  return Number.isNaN(n) ? null : n
}

// [from, to] or null when the row has no usable year. A missing end means the
// part is only known from one year.
function yearRange(row) {
  const from = yearOf(row.year_from)
  const to = yearOf(row.year_to)
  if (from === null && to === null) return null
  return [from ?? to, to ?? from]
}

// True only when both rows have years and the ranges don't overlap. With
// `touching`, ranges that share just an end year (1950-1965, 1965-1978) also
// count when both span more than one year: sequential runs when the titles
// differ, but under one title they are usually one part dated twice.
function yearsDisjoint(a, b, touching = false) {
  const ra = yearRange(a)
  const rb = yearRange(b)
  if (!ra || !rb) return false
  if (ra[1] < rb[0] || rb[1] < ra[0]) return true
  if (!touching) return false
  const spans = ra[0] < ra[1] && rb[0] < rb[1]
  return spans && (ra[1] === rb[0] || rb[1] === ra[0])
}

// Survivor: the row bike_specs already use most, then a catalogue-sourced row
// over a Velobase one (source_ref 1), then one with years, then the lowest id.
function pickSurvivor(rows) {
  const score = (r) => [
    r.used || 0,
    Number(r.source_ref) === 1 ? 0 : 1,
    yearRange(r) ? 1 : 0
  ]
  return [...rows].sort((a, b) => {
    const sa = score(a)
    const sb = score(b)
    for (let i = 0; i < sa.length; i++) if (sa[i] !== sb[i]) return sb[i] - sa[i]
    return a.component_id - b.component_id
  })[0]
}

// How `row` relates to `survivor`.
function relate(row, survivor) {
  if (fullKey(row.title) === fullKey(survivor.title)) {
    return yearsDisjoint(row, survivor) ? 'generation' : 'duplicate'
  }
  // What tells the two titles apart: parentheticals only one of them carries.
  const mine = parentheticals(row.title)
  const theirs = new Set(parentheticals(survivor.title).map(fold))
  const difference = [...mine.filter(p => !theirs.has(fold(p))), ...[...theirs].filter(p => !mine.map(fold).includes(p))].join(' ')
  if (yearsDisjoint(row, survivor, true) || GENERATION_WORDS.test(difference)) return 'generation'
  if (CONFIG_WORDS.test(difference)) return 'configuration'
  if (COSMETIC_WORDS.test(difference)) return 'cosmetic'
  // A bare title beside a qualified one ("Sugino GT" / "Sugino GT (triple)")
  // is not a spelling variant; leave it to a person.
  return 'review'
}

const MERGE_CANDIDATE = new Set(['duplicate', 'cosmetic'])

// Cosmetic rows a person reviewed and kept as real variants (2026-10-28, user's call: case by case,
// none merged). buildGroups reports them as 'variant', so they stop showing as merge candidates.
const REVIEWED_VARIANTS = new Map([
  [387, 'special edition: Modolo Speedy La Vie Claire (levers)'],
  [887, 'special edition: Modolo Speedy La Vie Claire (brakes)'],
  [5564, 'special edition: San Marco Rolls 1986 World Championship'],
  [7427, 'finish model: Dura-Ace DA-100 silver beside the Black Series 4501'],
  [4880, 'finish model: Alesa 913 Hard Anodized'],
  [2118, 'dating marking: Maillard Normandy cog lettered Normandy'],
  [2119, 'dating marking: Maillard Normandy body lettered Normandy on backside'],
  [3036, 'dating marking: Magistroni L. MAGISTRONI lettered on upper race'],
  [2551, 'dating marking: Simplex Competition LE SIMPLEX Bte SGDG badge (1949-55)'],
])

// --- Near pairs: the same part under another brand row or another name ---
//
// buildGroups only sees rows of one brand whose titles agree outside the
// parentheticals, so it misses "Atom (5 speed)" vs "Maillard Atom (5-speed)",
// "Rigida 15/21" vs "Rigida AL 1521" and "Gipiemme Crono Special (906AS)" vs
// "Gipiemme Crono Special 906 A". findNearPairs pairs rows of one category whose brands are
// the same or in one family below and whose years overlap (or are missing),
// on any of:
//
//   code    the same part number (3+ digits, "15/21" read as 1521), rare in
//           the category
//   name    the same model words once brand, family, generic words and
//           numbers are gone, and no other row of the category has them
//   brand   one row's model is the other row's brand ("Maillard Atom" beside
//           an Atom row), with the same numbers in the qualifiers
//
// A pair is a lead for a person, not a merge: it says only that two rows
// probably describe one part.

// Makers that sold one part under each other's names. Pairs are allowed
// within a family, never across two families, so Atom and Simplex don't meet
// through Maillard.
const BRAND_FAMILIES = [
  ['maillard', 'atom', 'normandy'],
  ['spidel', 'simplex', 'stronglight', 'maillard', 'mafac'], // Spidel-badged parts
  ['huret', 'sachs huret', 'sachs', 'fichtel sachs'],
  ['suntour', 'dia compe'], // Dia-Compe made SunTour's brakes
  ['tange', 'tange seiki'],
  ['unica nitor', 'cinelli'], // Cinelli Unicanitor
]

// Near pairs a person has looked at and kept apart (first review 2026-10-26),
// as [lower id, higher id]. findNearPairs leaves them out unless asked; drop a
// line here to see a pair again.
const REVIEWED_NOT_DUPLICATES = [
  [33, 40], // different part: Campagnolo Record Pista / Campagnolo 1046, Record Pista
  [660, 691], // different part: Dia-Compe 980 / Dia-Compe Gran Compe GC980
  [692, 9107], // different part: Dia-Compe Gran-Compe / Dia-Compe Gran Compe 710
  [1098, 8652], // different part: Weinmann AG Delta 531 Pro / Weinmann AG Delta 531
  [1115, 8340], // different part: Weinmann AG 1020 / Weinmann W 1020 (BMX)
  [1129, 1130], // different part: Weinmann AG 570 / Weinmann AG 570 TOP
  [8085, 8086], // different part: Dia-Compe 890 / 1020 / 1080, long-reac / Dia-Compe 890 C/R III, long-reach side
  [1291, 1292], // different part: Shimano Dura-Ace 7500 A-Type track rin / Shimano Dura-Ace 7500 B-Type track rin
  [1298, 1321], // different part: Simplex Touriste / Stronglight Touriste
  [1592, 8826], // different part: Gipiemme Dual Sprint / Gipiemme Dual Sprint 700135 (Mini)
  [1869, 1882], // Spidel badge variant: Spidel 106 / Stronglight 106
  [1879, 8811], // different part: Stronglight 104 bis / Stronglight 104
  [2039, 7237], // Atom vs Maillard Atom era: Atom (3 speed, lettered Atom on backsi / Maillard Atom (3-speed)
  [2040, 7237], // Atom vs Maillard Atom era: Atom (3 speed, no ovals) / Maillard Atom (3-speed)
  [2041, 7238], // Atom vs Maillard Atom era: Atom (4 speed) / Maillard Atom (4-speed)
  [2042, 7239], // Atom vs Maillard Atom era: Atom (5 speed, 'S.I.C.C. Made in Italy / Maillard Atom (5-speed)
  [2042, 8127], // Atom vs Maillard Atom era: Atom (5 speed, 'S.I.C.C. Made in Italy / Maillard Atom 77 (5-speed)
  [2043, 7239], // Atom vs Maillard Atom era: Atom (5 speed, black cogs) / Maillard Atom (5-speed)
  [2043, 8127], // Atom vs Maillard Atom era: Atom (5 speed, black cogs) / Maillard Atom 77 (5-speed)
  [2044, 7239], // Atom vs Maillard Atom era: Atom (5 speed, silver cogs) / Maillard Atom (5-speed)
  [2574, 7313], // different part: Simplex SJ A103 / Simplex SJ A103 MB
  [2589, 2595], // Spidel badge variant: Simplex Super LJ / Spidel/Simplex Super LJ
  [2661, 2662], // different part: SunTour FD-XD00-GX, XCD 6000 / SunTour XCD 6000 (1990)
  [2682, 2683], // different part: Zeus Alfa 65 / Zeus Alfa (push rod style)
  [8531, 8618], // different part: Nitto Mod. 185 / Nitto Mod. 185-H
  [2953, 2954], // finish variant, kept (cosmetic review 2026-10-28): Campagnolo C-Record (Century Finish) / Campagnolo 304/104, C-Record
  [3004, 3006], // different part: Gipiemme Crono Sprint 500CE (Economy) / Gipiemme Crono Sprint 500 BP
  [3256, 3273], // different part: Campagnolo 1006, Gran Sport / Campagnolo 1006/A, Sport
  [3408, 8160], // different part: Mavic 580 CX / Mavic 580 CX Piste
  [3708, 3709], // different part: Campagnolo 1037, Record Strada / Campagnolo 1037/a, Record Strada Super
  [3989, 7247], // Spidel badge variant: Spidel/Atom/Maillard 600 / Maillard Atom 600 Sport
  [4281, 4299], // different part: Huret Super Success 2470 S / Huret Success 2460 / 2470
  [4303, 4304], // finish variant, kept (cosmetic review 2026-10-28): Huret Jubilee 2200 / 2252 / 2240 (firs / Huret Jubilee 2200 / 2252 / 2240 (firs
  [4600, 4669], // Spidel badge variant: Simplex LJ1000 T / Spidel LJ1000 T (Simplex)
  [4650, 4670], // Spidel badge variant: Simplex SLJ5000 / Spidel SLJ5000 (Simplex)
  [5071, 8191], // different part: Mavic M 231 CD / Mavic M 231
  [5072, 8192], // different part: Mavic M 261 / Mavic M 261 CD
  [5183, 5184], // different part: Super Champion Gentleman / Super Champion Gentleman 81
  [5748, 5749], // different part: Campagnolo 1044, Nuovo Record (Superle / Campagnolo 1044, Record
  [5753, 5754], // different part: Campagnolo 1045, Record (Narrow) / Campagnolo 1045/a, Record Superlegero 
  [5905, 7305], // Spidel badge variant: Spidel SLJ 4164, Serie Sport Ref 01 / Simplex SLJ4164
  [5989, 5990], // different part: Campagnolo 1013/5 1013/6, Record / Campagnolo 1013/6 Porta Catena, Record
  [6565, 6566], // different part: ITM 700 Replica / Italmanubri (ITM) 700 Replica Open
  [9470, 9471], // different part: ITM 500 SL / ITM 500 ATB
  [8387, 8388], // different part: Ritchey Mod Quad / Ritchey Quad
  [8157, 8158], // different part: Mavic TTM 504 / Mavic TTM 504 CD
]
const reviewedKey = (a, b) => `${Math.min(a, b)}|${Math.max(a, b)}`
const REVIEWED = new Set(REVIEWED_NOT_DUPLICATES.map(([a, b]) => reviewedKey(a, b)))

const words = (text) => fold(text).replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean)
const brandKey = (brand) => words(brand).join(' ')

function brandsCompatible(a, b) {
  const ka = brandKey(a)
  const kb = brandKey(b)
  if (ka === kb) return true
  return BRAND_FAMILIES.some((family) => family.includes(ka) && family.includes(kb))
}

// Title digits once "15/21" is joined up, without years, measurements or
// wheel sizes.
const numberText = (title) => fold(title)
  .replace(/(\d)\/(\d)/g, '$1$2') // "15/21", not "40 / 50 / 60"
  .replace(/\b\d+(\.\d+)?\s*(mm|cm|g|gr|grams|oz|in|t|teeth|holes?|h|psi|speeds?|v|bcd|deg|degrees?)\b/g, ' ')
  .replace(/(?<![a-z][-.]?)\b(19|20)\d\d\b/g, ' ') // not "MF-2000" or "LD-1900"
  .replace(/\b(700|650)\s*[abcx]\b/g, ' ')
  .replace(/\bx\s*\d+/g, ' ') // lengths: "AS-40E x190"

// Part numbers: tokens with a run of 3+ digits, hyphens and dots dropped and
// a Campagnolo-style "/G" suffix kept ("BB-A450" -> bba450, "1006/G" ->
// 1006g, "AL 1521" -> 1521). Two codes match when they are equal or one is
// bare digits equal to the other's digits, so "BB-A450" and "BB-M450" don't.
const codesOf = (title) => new Set(numberText(title)
  .replace(/(\d)\s*\/\s*([a-z]\b)/g, '$1$2')
  .split(/[\s,/()\[\]]+/)
  .map((t) => t.replace(/[-.]/g, ''))
  .filter((t) => /\d{3,}/.test(t)))
const codeDigits = (code) => code.replace(/\D/g, '')
const codesMatch = (x, y) => x === y || (codeDigits(x) === codeDigits(y) && (/^\d+$/.test(x) || /^\d+$/.test(y)))
// Every number, for telling two numbered parts apart ("No. 185" / "No. 187").
const numbersOf = (title) => new Set((numberText(title).match(/\d+/g) || []).map((n) => n.replace(/^0+(?=\d)/, '')))

// Catalogue words that number a part rather than name it.
const NUMBER_WORDS = new Set(['no', 'nr', 'ref', 'mod', 'art', 'cat', 'model'])

// Words outside the parentheticals, less the given brand words, numbering
// words and bare numbers; with `generic`, generic words go too.
function modelWords(title, dropWords, { generic = true } = {}) {
  const core = dropParentheticals(fold(title))
  return new Set(words(core).filter((w) => !dropWords.has(w) && !(generic && GENERIC_WORDS.has(w)) && !NUMBER_WORDS.has(w) && !/^\d+$/.test(w)))
}

const qualifierNumbers = (title) => new Set(parentheticals(title).flatMap((p) => fold(p).match(/\d+/g) || []))

const sameSet = (a, b) => a.size === b.size && [...a].every((x) => b.has(x))


function familyWords(brand) {
  const k = brandKey(brand)
  const out = new Set(words(brand))
  for (const family of BRAND_FAMILIES) if (family.includes(k)) family.forEach((name) => words(name).forEach((w) => out.add(w)))
  return out
}

// Cage and fitting codes that set two numbered parts apart (RD "T" / "GT",
// "GS" / "SGS"), on top of CONFIG_WORDS.
const VARIANT_CODES = /\b(t|gt|ss|gs|sgs|sp|lh|rh)\b/

// Words each title has and the other lacks, outside brand and numbers,
// parentheticals included: what tells the two rows apart.
function differingWords(a, b) {
  const drop = new Set([...familyWords(a.brand), ...familyWords(b.brand)])
  // A short prefix and its number are one word ("SLJ 4164" = "SLJ4164").
  const all = (r) => {
    const tokens = words(r.title).filter((w) => !drop.has(w))
    const merged = []
    for (const t of tokens) {
      const last = merged[merged.length - 1]
      if (/^\d/.test(t) && last && /^[a-z]{1,3}$/.test(last)) merged[merged.length - 1] = last + t
      else merged.push(t)
    }
    return new Set(merged.filter((w) => !/^\d+$/.test(w)))
  }
  const wa = all(a)
  const wb = all(b)
  return { onlyA: [...wa].filter((w) => !wb.has(w)), onlyB: [...wb].filter((w) => !wa.has(w)) }
}

// A real variant (double / triple, braze-on, v1 / v2), not the same part.
const isVariant = (a, b) => {
  const { onlyA, onlyB } = differingWords(a, b)
  const diff = [...onlyA, ...onlyB].join(' ')
  return CONFIG_WORDS.test(diff) || GENERATION_WORDS.test(diff) || VARIANT_CODES.test(diff)
}

// Each title names something the other doesn't ("Crono Special" / "Crono
// Sprint", "Uomo" / "Donna"): two models. One-letter and two-letter codes
// ("CN", "SL") don't count.
const twoModels = (a, b) => {
  const { onlyA, onlyB } = differingWords(a, b)
  const named = (list) => list.some((w) => w.length >= 3)
  return named(onlyA) && named(onlyB)
}

// Each row has a lettered part number the other lacks ("FD-XC00" / "FD-SP00",
// "FH-M900" / "HB-M900"), whatever else they share.
const lettered = (title) => numberText(title).split(/[\s,/()\[\]]+/)
  .map((t) => t.replace(/[-.]/g, ''))
  .filter((t) => /[a-z]/.test(t) && /\d/.test(t) && t.length >= 3)
const partNumbersDisagree = (a, b) => {
  const la = lettered(a.title)
  const lb = lettered(b.title)
  return la.some((x) => !lb.includes(x)) && lb.some((x) => !la.includes(x))
}

// How a and b are near, or null.
function nearReason(a, b) {
  if (a.category_id !== b.category_id || a.component_id === b.component_id) return null
  if (!brandsCompatible(a.brand, b.brand)) return null
  if (a.brand_id === b.brand_id && groupKey(a.title) === groupKey(b.title)) return null // buildGroups has it
  if (yearsDisjoint(a, b) || isVariant(a, b) || twoModels(a, b)) return null
  if (!partNumbersDisagree(a, b)) for (const x of a.codes) {
    if (!a.codeRare.has(codeDigits(x))) continue
    for (const y of b.codes) if (codesMatch(x, y)) return 'code'
  }
  // Two numbered titles are two parts unless they carry the same numbers,
  // whatever the words say ("BL-6207, 600EX" / "BL-6208, 600EX").
  const na = numbersOf(a.title)
  const nb = numbersOf(b.title)
  if (na.size && nb.size && !sameSet(na, nb)) return null
  // Every word must agree, generic ones included, or "Crono Sprint Triple"
  // would pair with "Crono Sprint".
  const drop = new Set([...familyWords(a.brand), ...familyWords(b.brand)])
  const wa = modelWords(a.title, drop, { generic: false })
  const wb = modelWords(b.title, drop, { generic: false })
  const rare = a.nameRare && b.nameRare
  if (rare && modelWords(a.title, drop).size && sameSet(wa, wb)) return 'name'
  if (brandKey(a.brand) !== brandKey(b.brand)) {
    // "Maillard Atom" beside "Atom": strip each row's own brand, then the
    // other's; what is left must agree, and so must the qualifier numbers.
    const own = (r) => modelWords(r.title, new Set(words(r.brand)))
    const minus = (set, brand) => new Set([...set].filter((w) => !words(brand).includes(w)))
    const ra = minus(own(a), b.brand)
    const rb = minus(own(b), a.brand)
    const named = own(a).size !== ra.size || own(b).size !== rb.size
    if (named && sameSet(ra, rb) && sameSet(qualifierNumbers(a.title), qualifierNumbers(b.title))) return 'brand'
  }
  return null
}

// rows as for buildGroups plus `brand` (the component_brand title). A code
// counts only when at most `maxCodeRows` rows of the category carry it, so
// "Shimano 600" doesn't pair every 600 part; likewise a set of model words
// only when at most `maxNameRows` rows share it, so "Vainqueur 999" or
// "Dura-Ace" doesn't pair every variant. Pairs in REVIEWED_NOT_DUPLICATES are
// left out unless `includeReviewed`. Returns { a, b, reason, reviewed } with
// a.component_id < b.component_id.
function findNearPairs(rows, { maxCodeRows = 3, maxNameRows = 2, includeReviewed = false } = {}) {
  const withCodes = rows.filter((r) => r.title).map((r) => ({ ...r, codes: codesOf(r.title) }))
  const codeCount = new Map()
  const digitsOf = (r) => new Set([...r.codes].map(codeDigits))
  for (const r of withCodes) for (const d of digitsOf(r)) {
    const k = `${r.category_id}|${d}`
    codeCount.set(k, (codeCount.get(k) || 0) + 1)
  }
  for (const r of withCodes) r.codeRare = new Set([...digitsOf(r)].filter((d) => codeCount.get(`${r.category_id}|${d}`) <= maxCodeRows))
  const nameKey = (r) => `${r.category_id}|${[...modelWords(r.title, familyWords(r.brand), { generic: false })].sort().join(' ')}`
  const nameCount = new Map()
  for (const r of withCodes) nameCount.set(nameKey(r), (nameCount.get(nameKey(r)) || 0) + 1)
  for (const r of withCodes) r.nameRare = nameCount.get(nameKey(r)) <= maxNameRows

  const byCategory = new Map()
  for (const r of withCodes) {
    if (!byCategory.has(r.category_id)) byCategory.set(r.category_id, [])
    byCategory.get(r.category_id).push(r)
  }
  const pairs = []
  for (const members of byCategory.values()) {
    members.sort((x, y) => x.component_id - y.component_id)
    for (let i = 0; i < members.length; i++) {
      for (let j = i + 1; j < members.length; j++) {
        const reviewed = REVIEWED.has(reviewedKey(members[i].component_id, members[j].component_id))
        if (reviewed && !includeReviewed) continue
        const reason = nearReason(members[i], members[j])
        if (reason) pairs.push({ a: members[i], b: members[j], reason, reviewed })
      }
    }
  }
  return pairs
}

// rows: { component_id, brand_id, category_id, title, year_from, year_to,
// source_ref, used }. Returns groups of two or more, biggest first.
function buildGroups(rows) {
  const byKey = new Map()
  for (const row of rows) {
    if (!row.title) continue
    const key = `${row.brand_id}|${row.category_id}|${groupKey(row.title)}`
    if (!byKey.has(key)) byKey.set(key, [])
    byKey.get(key).push(row)
  }
  const groups = []
  for (const members of byKey.values()) {
    if (members.length < 2) continue
    const survivor = pickSurvivor(members)
    const others = members.filter(r => r !== survivor)
      .map(row => {
        const relation = relate(row, survivor)
        return { row, relation: relation === 'cosmetic' && REVIEWED_VARIANTS.has(row.component_id) ? 'variant' : relation }
      })
      .sort((a, b) => a.row.component_id - b.row.component_id)
    groups.push({ survivor, others })
  }
  return groups.sort((a, b) => b.others.length - a.others.length || a.survivor.component_id - b.survivor.component_id)
}

module.exports = { groupKey, fullKey, yearRange, yearsDisjoint, pickSurvivor, relate, buildGroups, MERGE_CANDIDATE, REVIEWED_VARIANTS, codesOf, brandsCompatible, findNearPairs }
