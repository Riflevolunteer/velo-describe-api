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
//
// Only duplicate and cosmetic are merge candidates; the rest are real parts.

const COSMETIC_WORDS = /\b(black|white|silver|gold|red|blue|green|grey|gray|yellow|orange|anodi[sz]ed|polished|painted|finish|lettering|lettered|incised|label|labelled|labeled|logo|washers?|cap nut|nut|hex socket|center ?bolt|centre ?bolt|decal|edition|font|drilled|engraved|stamped|color|colour|sticker|badge|printed|signature|on (the )?(levers?|body|barrel|backside)|in (a |an )?(circle|oval|ovals|indent|rectangle)|oblong rectangle|knurled)\b/i
// Fitting, construction and material differences: a different part, not a repaint.
const CONFIG_WORDS = /\b(double|triple|single|pista|strada|road|track|cross|tandem|mtb|touring|left|right|lh|rh|front|rear|quick release|qr|braze[- ]?on|clincher|tubular|\d+ ?(speed|mm|t|bcd)|bcd|short|long|cage|compact|(high|low|large|small)[ -]?flange|flange|pieces?|mount|clamps?|band|tab|spiders?|arms?|pins?|flutes?|fluted|rails?|springs?|wires?|taper|cottered|cotterless|expander|steel|alloy|alu(minum|minium)?|titanium|cro-?moly|chromoly|leather|suede|forged|smooth|slotted|holes|pulleys?|inner|outer|aero|sidepull|quill|girder|ferrule|sleeved|speed indicator)\b/i
const GENERATION_WORDS = /\b(v\d|version|type \d|gen|generation|first|second|third|1st|2nd|3rd|early|earlier|later|late|new style|old style|mk ?\d|mark \d|prototype)\b/i

const parentheticals = (title) => (title.match(/\(([^)]*)\)/g) || []).map(s => s.slice(1, -1).trim()).filter(Boolean)

const fold = (text) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Title with parentheticals dropped, then reduced to letters and digits.
const groupKey = (title) => fold(title).replace(/\([^)]*\)/g, ' ').replace(/[^a-z0-9]+/g, '')

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
      .map(row => ({ row, relation: relate(row, survivor) }))
      .sort((a, b) => a.row.component_id - b.row.component_id)
    groups.push({ survivor, others })
  }
  return groups.sort((a, b) => b.others.length - a.others.length || a.survivor.component_id - b.survivor.component_id)
}

module.exports = { groupKey, fullKey, yearRange, yearsDisjoint, pickSurvivor, relate, buildGroups, MERGE_CANDIDATE }
