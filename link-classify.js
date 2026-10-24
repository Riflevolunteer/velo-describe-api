// Classifies an unlinked bike_spec value_text by whether anyone could act on
// it, so /linkCoverage can list only the values worth a COMPONENT_OVERRIDES
// entry or a source hunt. Most unlinked values are correctly unlinked: a
// material ("Alloy"), a size ("1/2" x 3/32"", "14-28T"), a maker with no
// model ("Simplex", "SEDIS"), the bike maker's own part ("Raleigh Maes Alloy")
// or an either/or choice ("Concor or Rolls"). What's left once brands,
// generic words and sizes are taken out decides the class:
//
//   none        "None", "Not Specified"
//   either_or   names two alternatives; never one link
//   dimension   sizes / tooth counts only
//   generic     materials, finishes and part nouns only
//   brand_only  a component brand plus generic words: no model to pick
//   house       a bike brand with no component rows in that category
//   actionable  a brand plus a model word ("Simplex SJA", "Kalloy SP-248")
//   unbranded   a model word but no known brand ("Rapidfire Plus", "Turbo")
//
// Only actionable and unbranded are worth a look; the rest are counted.

// Materials, finishes, part nouns and catalogue boilerplate. A value made only
// of these (plus brands and sizes) names nothing more specific than its maker.
const GENERIC_WORDS = new Set(`
  alloy alloys alu aluminium aluminum dural duralumin duralinox light lightweight steel chrome chromed
  plated cp nickel stainless cromo chromoly crmo black silver white gold grey gray red blue brown green anodised
  anodized polished satin finish engraved
  quick release qr side pull centre center centerpull centrepull sidepull caliper calliper cantilever
  double single dual levers lever course racing race road touring sport sports racer competition
  tubular tubulars tyres tires tyre tire tubes clincher clinchers gum gumwall amber skinwall skin wall
  wired folding high pressure hp skinwall amberwall multi uni directional
  rims rim hubs hub small large flange flanges sealed bearing bearings cotterless cottered crank cranks
  arm arms chainwheel chainwheels chainring chainrings chainset crankset triple ring rings guard disc
  pedals pedal quill platform rat trap toe clips clip straps strap reflectors reflector rubber block
  nylon base anatomical anatomic padded leather plastic vinyl suede imitation saddle mattress
  micro adjust adjustment adjustable fluted allen bolt key forward extension hidden expander recessed
  countersunk clamp integral stem stems bar bars bend handlebar handlebars drop randonneur pattern maes
  italienne pantographed headset bottom bracket bb seatpost seat post pin cartridge
  freewheel cassette speed speeds sprocket sprockets links link narrow chain derailleur derailleurs
  gear front rear shift shifters shifter down tube cable cables hooded hoods rubber nutted nut
  with and to order of the a for in on type style model new standard
  mm inch inches teeth tooth x psi hole holes
  drilled demi component power ratchet non loosening low reinforced reinforcing ferrules eyeletted
  covered quilted fixing candle shape forged very safety sp shimmed sleeve tig welded moly ucp resin
  aerodynamic mountain mtb direct fit end square taper spoke protector tape barrel controls
  thickened cutaway section cage three five brake brakes wheel wheels frame fitting gears grips
  milled zinc core perforated junior extensions cradle wide high wing nuts hub hubs
`.trim().split(/\s+/))

const NONE_VALUES = new Set(['none', 'not specified', 'n a', 'nil', 'no', 'not fitted'])

// Catalogue spellings of makers that neither a component_brand title nor the
// first word of a component title covers. Lowercase, normalized.
const EXTRA_BRANDS = ['sun tour', 'christophe', 'lapize', 'ttt', 'daido', 'san marco']

// component_brand titles that are also everyday words; matching them would
// turn "Super Record" into a brand plus nothing.
const BRAND_STOPWORDS = new Set(['record', 'sun', 'win', 'super', 'special', 'pop', 'sil'])

// Lowercase, accents and quote/inch marks gone, "½" as "1/2", every other
// separator a single space. Two values with the same key are the same
// catalogue text ("1/2" x 3/32"" and "½" x 3/32"", "Sedis, 108 links" and
// "SEDIS 108 links").
function normalizeValue(text) {
  return String(text)
    .replace(/½/g, ' 1/2').replace(/¼/g, ' 1/4').replace(/¾/g, ' 3/4')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/["'`´’”“]/g, '')
    .replace(/(\d)\s*\/\s*(\d)/g, '$1\u0000$2')
    .replace(/[^a-z0-9\u0000]+/g, ' ')
    .replace(/\u0000/g, '/')
    .replace(/\s+/g, ' ')
    .trim()
}

// "Weinmann AG", "Daido Kogyo Co., Ltd.": catalogues drop these.
const CORPORATE_SUFFIX = /(\s(ag|sa|gmbh|kg|co|ltd|inc|spa|srl|llc|kogyo))+$/

// Single letters too: what's left of "Q.R." or "S.P." once the dots go.
// Part numbers ("SP-248", "TH-305", "CX650"): letters then digits, which the
// word split would otherwise read as a generic word and a size. Not "x 25c".
const MODEL_CODE = /\b(?!x\b)[a-z]{1,4}-?\d{2,}[a-z]?\b/gi

const isDimensionWord = (w) => /^\d+(\/\d+)?([a-z]{1,3})?$/.test(w) || /^[a-z]$/.test(w)

// Builds the brand phrases matched inside values, longest first so
// "selle san marco" wins over "san marco". Each component_brand title also
// contributes its parts ("Sakae/Ringyo (SR)" -> sakae, ringyo, sr), and
// titleWords the first word its component titles start with, which is how
// catalogues name the maker ("Weinmann" for Weinmann AG, "Normandy" and
// "Ideale" filed under Maillard and Tron & Berthet).
// componentBrands: [{ brand_id, title }]; bikeBrands: [title];
// titleWords: [{ brand_id, word }].
function buildBrandIndex(componentBrands, bikeBrands, titleWords = []) {
  const phrases = new Map()
  const add = (phrase, entry) => {
    if (phrase.length < 2 || BRAND_STOPWORDS.has(phrase) || GENERIC_WORDS.has(phrase) || /^\d+$/.test(phrase)) return
    if (!phrases.has(phrase)) phrases.set(phrase, { phrase, brandIds: new Set(), bike: false, titleWordOnly: true })
    const existing = phrases.get(phrase)
    for (const id of entry.brandIds || []) existing.brandIds.add(id)
    existing.bike = existing.bike || !!entry.bike
    existing.titleWordOnly = existing.titleWordOnly && !!entry.titleWord
  }
  for (const { brand_id, title } of componentBrands) {
    for (const part of [title, ...String(title).split(/[/()]|\s-\s/)]) {
      add(normalizeValue(part).replace(CORPORATE_SUFFIX, ''), { brandIds: [brand_id] })
    }
  }
  for (const { brand_id, word } of titleWords) add(normalizeValue(word), { brandIds: [brand_id], titleWord: true })
  for (const phrase of EXTRA_BRANDS) add(phrase, {})
  for (const title of bikeBrands) add(normalizeValue(title), { bike: true })
  return [...phrases.values()].sort((a, b) => b.phrase.length - a.phrase.length)
}

// brandIndex from buildBrandIndex. brandHasRows(brandIds) says whether any of
// those component brands has component_detail rows in the value's category;
// it decides whether a bike brand is the maker of a real catalogued part
// (Cinelli bars) or the bike's own house part (a Raleigh headset).
function classifyValue(text, brandIndex, brandHasRows = () => false) {
  const key = normalizeValue(text)
  if (!key || NONE_VALUES.has(key) || /^none\b/.test(key)) return { key, class: 'none', brands: [] }
  if (/(^|\s)or(\s|$)/.test(key)) return { key, class: 'either_or', brands: [] }

  let rest = ` ${key} `
  const found = []
  for (const entry of brandIndex) {
    const needle = ` ${entry.phrase} `
    if (rest.includes(needle)) {
      found.push(entry)
      rest = rest.split(needle).join(' ')
    }
  }
  // A title word of a brand that is also named outright is that brand's
  // model, not a second maker: "Maillard Normandy" is a Maillard freewheel.
  const models = found.filter((e) => e.titleWordOnly &&
    found.some((f) => f !== e && [...e.brandIds].some((id) => f.brandIds.has(id))))
  const brandsFound = found.filter((e) => !models.includes(e))
  const words = rest.trim().split(' ').filter(Boolean)
  const codes = String(text).replace(/\./g, '').match(MODEL_CODE) || []
  const leftover = [...models.map((e) => e.phrase), ...codes, ...words.filter((w) => !GENERIC_WORDS.has(w) && !isDimensionWord(w))]
  const brands = brandsFound.map((e) => e.phrase)
  // A bike brand counts as a component maker only where it has rows in this
  // category; otherwise it's the bike's house part.
  const makers = brandsFound.filter((e) => !e.bike || brandHasRows([...e.brandIds]))

  if (leftover.length) return { key, class: makers.length ? 'actionable' : brandsFound.length ? 'house' : 'unbranded', brands }
  if (makers.length) return { key, class: 'brand_only', brands }
  if (brandsFound.length) return { key, class: 'house', brands }
  const allWords = key.split(' ')
  const sized = allWords.filter((w) => isDimensionWord(w) || w === 'x' || w === 'speed' || w === 'speeds' || w === 'teeth')
  return { key, class: sized.length === allWords.length ? 'dimension' : 'generic', brands }
}

const ACTIONABLE_CLASSES = new Set(['actionable', 'unbranded'])
// Display order for per-class counts: worth a look first, then by how much a
// value says.
const CLASS_ORDER = ['actionable', 'unbranded', 'brand_only', 'house', 'either_or', 'generic', 'dimension', 'none']

module.exports = { normalizeValue, buildBrandIndex, classifyValue, ACTIONABLE_CLASSES, CLASS_ORDER, GENERIC_WORDS }
