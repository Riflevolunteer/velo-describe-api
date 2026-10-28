// eBay sites searched for each buyer region on /getTopListings?region=. The
// user picks a region in the app (US by default); it's a country with its own
// Browse site, and the request filters every site to listings that ship
// there (deliveryCountry). Home site first, then the others in order.
//
// Chosen from the 2026-10-28 coverage run (TODO.md): for every buyer, GB,
// US, FR and DE add the most listings the home site doesn't have, because
// that's where vintage parts are listed locally; IT fills the 5th slot where
// the home site is one of those four. SG scored high too, but only because
// its top 50 are US / GB sellers that rank lower on those sites, so it's left
// out. The small EU sites (AT, BE, CH, ES, IE, NL, PL) show mostly other
// countries' stock, so they're only ever the home site.
//
// Only sites the Browse API serves: IN, MY, PH, TW, NZ, SE and JP are
// rejected, and MX / BR silently return US results. All 16 pass
// scripts/validate-ebay-categories.js.

const EUROPE_CORE = ['EBAY_GB', 'EBAY_US', 'EBAY_FR', 'EBAY_DE']

const EBAY_REGIONS = {
  US: ['EBAY_US', 'EBAY_DE', 'EBAY_FR', 'EBAY_GB', 'EBAY_IT'],
  GB: ['EBAY_GB', 'EBAY_US', 'EBAY_FR', 'EBAY_DE', 'EBAY_IT'],
  DE: ['EBAY_DE', 'EBAY_GB', 'EBAY_FR', 'EBAY_US', 'EBAY_IT'],
  FR: ['EBAY_FR', 'EBAY_GB', 'EBAY_US', 'EBAY_DE', 'EBAY_IT'],
  IT: ['EBAY_IT', 'EBAY_GB', 'EBAY_FR', 'EBAY_US', 'EBAY_DE'],
  AU: ['EBAY_AU', 'EBAY_FR', 'EBAY_GB', 'EBAY_US', 'EBAY_DE'],
  CA: ['EBAY_CA', 'EBAY_GB', 'EBAY_FR', 'EBAY_DE', 'EBAY_US'],
  HK: ['EBAY_HK', 'EBAY_GB', 'EBAY_US', 'EBAY_AU', 'EBAY_DE'],
  SG: ['EBAY_SG', 'EBAY_GB', 'EBAY_FR', 'EBAY_US', 'EBAY_DE'],
  AT: ['EBAY_AT', ...EUROPE_CORE],
  BE: ['EBAY_BE', ...EUROPE_CORE],
  CH: ['EBAY_CH', ...EUROPE_CORE],
  ES: ['EBAY_ES', ...EUROPE_CORE],
  IE: ['EBAY_IE', ...EUROPE_CORE],
  NL: ['EBAY_NL', ...EUROPE_CORE],
  PL: ['EBAY_PL', ...EUROPE_CORE],
}

// Every site any region searches.
const REGION_MARKETPLACES = [...new Set(Object.values(EBAY_REGIONS).flat())]

// Joins each site's listings in region order (home first). A listing can show
// on several sites (a US seller shipping worldwide turns up on GB, DE, IT...),
// so each eBay item id is kept only the first time, which is its copy on the
// earliest site in the region's list. Listings without an id are all kept.
function mergeRegionListings(perSite) {
  const seen = new Set()
  return perSite.flat().filter(listing => {
    if (listing.itemId == null) return true
    if (seen.has(listing.itemId)) return false
    seen.add(listing.itemId)
    return true
  })
}

module.exports = {
  EBAY_REGIONS,
  REGION_MARKETPLACES,
  mergeRegionListings,
}
