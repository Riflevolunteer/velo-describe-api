// eBay category ids for narrowing marketplace searches by component_category.
//
// Leaf ids are identical on every marketplace in EBAY_MARKETPLACES (only the
// localised names differ), so one static map serves all of them. Run
// `node scripts/validate-ebay-categories.js` before changing anything here:
// Browse silently ignores a category id that isn't in the marketplace's tree,
// so a stale id would quietly turn a narrow search into an unfiltered one.

// Sporting Goods > Cycling > Bicycle Components & Parts
const BICYCLE_PARTS = '57262'
// Sporting Goods > Cycling > Bicycle Tires, Tubes & Wheels. Tyres and wheels
// are NOT under 57262, so they widen to this instead.
const TYRES_TUBES_WHEELS = '185023'
// Sporting Goods > Cycling: parent of both of the above
const CYCLING = '7294'

// component_category.title -> eBay leaf category and the parent to widen to.
// Shifting Brake Levers and Single Sprockets are judgment calls (177824 vs
// 100245, 177809 vs 177811); revisit with CATEGORY_REFINEMENTS if results
// look thin.
const COMPONENT_CATEGORY_LEAVES = {
  'Rear Derailleurs': { leaf: '177813', parent: BICYCLE_PARTS },
  'Front Derailleurs': { leaf: '177812', parent: BICYCLE_PARTS },
  'Shifters': { leaf: '177824', parent: BICYCLE_PARTS },
  'Shifting Brake Levers': { leaf: '177824', parent: BICYCLE_PARTS },
  'Brake Levers': { leaf: '100245', parent: BICYCLE_PARTS },
  'Brakes': { leaf: '177808', parent: BICYCLE_PARTS },
  'Hubs': { leaf: '177820', parent: BICYCLE_PARTS },
  'Geared Hubs': { leaf: '177820', parent: BICYCLE_PARTS },
  'Cranksets': { leaf: '109118', parent: BICYCLE_PARTS },
  'Chainrings': { leaf: '177811', parent: BICYCLE_PARTS },
  'Bottom Brackets': { leaf: '177805', parent: BICYCLE_PARTS },
  'Headsets': { leaf: '177819', parent: BICYCLE_PARTS },
  'Pedals': { leaf: '36137', parent: BICYCLE_PARTS },
  'Seat Posts': { leaf: '58101', parent: BICYCLE_PARTS },
  'Chains': { leaf: '42320', parent: BICYCLE_PARTS },
  'Freewheels': { leaf: '177809', parent: BICYCLE_PARTS },
  'Cassettes': { leaf: '177809', parent: BICYCLE_PARTS },
  'Single Sprockets': { leaf: '177809', parent: BICYCLE_PARTS },
  'Rims': { leaf: '177821', parent: BICYCLE_PARTS },
  'Saddles': { leaf: '177822', parent: BICYCLE_PARTS },
  'Stems': { leaf: '177827', parent: BICYCLE_PARTS },
  'Handlebars': { leaf: '177817', parent: BICYCLE_PARTS },
  'Tyres': { leaf: '177828', parent: TYRES_TUBES_WHEELS },
  'Wheel(sets)': { leaf: '177830', parent: TYRES_TUBES_WHEELS },
}

// Ordered category ids to try, narrowest first. A search stops at the first
// rung that returns items. An unknown or missing category starts at 57262,
// matching the old fixed filter. Deliberately never widens past Cycling to no
// category filter: unfiltered results for a part name are mostly unrelated
// listings (Brooks Brothers shirts for "Brooks"), worse than no results.
function categoryLadder(categoryTitle) {
  const entry = COMPONENT_CATEGORY_LEAVES[categoryTitle]
  if (!entry) return [BICYCLE_PARTS, CYCLING]
  return [entry.leaf, entry.parent, CYCLING]
}

module.exports = {
  BICYCLE_PARTS,
  TYRES_TUBES_WHEELS,
  CYCLING,
  COMPONENT_CATEGORY_LEAVES,
  categoryLadder,
}
