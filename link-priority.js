// Review hints only: shared model text does not establish identity or fitment.
const { normalizeValue, GENERIC_WORDS } = require('./link-classify')

const compact = text => normalizeValue(text).replace(/\s+/g, '')

function buildLinkPriority(componentRows, brandIndex) {
  const brandIds = new Map()
  for (const entry of brandIndex) {
    const key = compact(entry.phrase)
    if (!brandIds.has(key)) brandIds.set(key, new Set())
    for (const id of entry.brandIds) brandIds.get(key).add(id)
  }
  const byBrandCategory = new Map()
  for (const row of componentRows) {
    const key = `${row.brand_id}|${row.category_id}`
    if (!byBrandCategory.has(key)) byBrandCategory.set(key, [])
    byBrandCategory.get(key).push({ row, title: compact(row.title) })
  }

  return (value, brands, categoryIds) => {
    const aliases = new Set(brands.map(compact))
    const ids = new Set(brands.flatMap(b => [...(brandIds.get(compact(b)) || [])]))
    // Remove detected maker phrases, accepting spacing variants such as
    // SunTour / Sun Tour, before looking for model text in component titles.
    const words = normalizeValue(value).split(' ')
    const model = []
    for (let i = 0; i < words.length;) {
      let end = i
      for (let j = i + 1; j <= words.length; j++) {
        if (aliases.has(words.slice(i, j).join(''))) end = j
      }
      if (end > i) { i = end; continue }
      const word = words[i++]
      if (!GENERIC_WORDS.has(word) && !/^\d+(\/\d+)?([a-z]{1,3})?$/.test(word)) model.push(word)
    }
    // Preserve codes whose prefixes are generic words (SP-248, TH-305).
    const codes = String(value).match(/\b(?!x\b)[a-z]{1,4}-?\d{2,}[a-z]?\b/gi) || []
    const terms = [...codes.map(compact), model.join(''), ...model.filter(word => word.length >= 3)].filter(Boolean)
    const found = new Map()
    for (const id of ids) {
      for (const category of categoryIds) {
        for (const { row, title } of byBrandCategory.get(`${id}|${category}`) || []) {
          if (terms.some(term => title.includes(term))) found.set(row.component_id, row)
        }
      }
    }
    const candidates = [...found.values()].sort((a, b) => a.component_id - b.component_id)
    return {
      next: candidates.length ? 'override' : 'source_hunt',
      candidate_count: candidates.length,
      candidates: candidates.slice(0, 3).map(({ component_id, title, year_from, year_to }) =>
        ({ component_id, title, year_from, year_to }))
    }
  }
}

module.exports = { buildLinkPriority }
