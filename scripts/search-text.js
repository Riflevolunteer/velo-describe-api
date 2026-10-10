// Builds component_detail.search_text: the eBay query string for a component
// (/getTopListings searches it verbatim). In-app search (/searchComponents)
// matches title + category + brand instead, so this is eBay-only.
//
// Rule: the title with bracketed notes dropped ("(1st version)", "[sic]" -
// sellers rarely write them and every extra word narrows an eBay search),
// commas / quotes / semicolons removed, punctuation-only tokens ("/", "-")
// dropped, and the brand prepended when none of its words is already in the
// title. No category name: /getTopListings filters by eBay category instead.
// Punctuation inside a token is kept (part numbers: "1020/A", "RD-M730",
// "Mod. 84").
//
//   node scripts/search-text.js "<title>" "<brand title>"
//
// Ingest skills call this for every inserted or retitled row.

// Words in component_brand titles that aren't the name sellers use.
const BRAND_STOPWORDS = new Set([
  'ag', 'gmbh', 'kg', 'co', 'ltd', 'limited', 'inc', 'company', 'corporation',
  'and', 'the', 'made', 'in', 'japan', 'spain', 'usa', 'sa', 'ermua',
  'technology', 'chains', 'chain', 'trading', 'cycle', 'motor',
])

const fold = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const alnumWords = s => fold(s).split(/[^a-z0-9]+/).filter(Boolean)

// The words that count as "the brand is already named": every non-stopword
// of the brand title, including an abbreviation in brackets ("ITM" for
// "Italmanubri (ITM)").
function brandWords(brand) {
  return alnumWords(brand).filter(w => !BRAND_STOPWORDS.has(w) && (w.length >= 3 || /\(([^)]*)\)/.test(brand)))
}

// The short form to prepend: brand title without bracketed parts or
// stopwords, e.g. "Weinmann AG" -> "Weinmann", "Sakae/Ringyo (SR)" -> "Sakae/Ringyo".
function shortBrand(brand) {
  return brand.replace(/\([^)]*\)/g, ' ').split(/\s+/)
    .filter(w => /[\p{L}\p{N}]/u.test(w) && !BRAND_STOPWORDS.has(fold(w).replace(/[^a-z0-9]/g, '')))
    .join(' ')
}

function ebaySearchText(title, brand) {
  const tokensOf = s => s
    .replace(/\([^)]*\)|\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*$/, ' ') // unclosed bracket (truncated title): drop to the end
    .replace(/[()[\],";]/g, ' ')
    .split(/\s+/)
    .filter(w => /[\p{L}\p{N}]/u.test(w))
  let tokens = tokensOf(title)
  // A title that is nothing but a bracketed note keeps its words.
  if (!tokens.length) tokens = tokensOf(title.replace(/[()[\]]/g, ' '))

  if (brand) {
    const titleWords = new Set(tokens.flatMap(alnumWords))
    const words = brandWords(brand)
    // Also catch the brand written run-together ("Cyclepro" for "Cycle Pro").
    const joined = alnumWords(brand.replace(/\([^)]*\)/g, ' ')).join('')
    const named = words.some(w => titleWords.has(w)) || alnumWords(tokens.join(' ')).join('').includes(joined)
    if (words.length && !named) {
      tokens = [...shortBrand(brand).split(/\s+/).filter(Boolean), ...tokens]
    }
  }
  return tokens.join(' ')
}

module.exports = { ebaySearchText }

if (require.main === module) {
  const [title, brand] = process.argv.slice(2)
  if (!title) {
    console.error('Usage: node scripts/search-text.js "<title>" "<brand title>"')
    process.exit(1)
  }
  console.log(ebaySearchText(title, brand))
}
