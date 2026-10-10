// Checks every category id in ebay-categories.js against each marketplace's
// live eBay category tree, and prints the localised names. Run by hand before
// changing the map: Browse silently ignores a category id that isn't in the
// marketplace's tree, so a bad id never errors at request time - it just
// turns a narrow search into an unfiltered one.
//
//   node scripts/validate-ebay-categories.js
//
// Exits 1 if any mapped leaf is missing or isn't a leaf, or any parent id is
// missing, on any marketplace. Uses the app's own eBay credentials (same
// config/.env as index.js); the Taxonomy API needs only oauth/api_scope.
// Costs 2 Taxonomy calls per marketplace (quota 5,000/day).

const EbayAuthToken = require('ebay-oauth-nodejs-client');
const fetch = require('node-fetch');
const config = require('../config');
const { BICYCLE_PARTS, TYRES_TUBES_WHEELS, CYCLING, COMPONENT_CATEGORY_LEAVES } = require('../ebay-categories');

// Keep in step with EBAY_MARKETPLACES in index.js.
const MARKETPLACES = ['EBAY_US', 'EBAY_GB', 'EBAY_DE', 'EBAY_FR', 'EBAY_IT'];

async function get(path, accessToken) {
  const result = await fetch(`${config.marketplace.url}${path}`, { headers: { Authorization: `Bearer ${accessToken}` } });
  const body = await result.json();
  if (result.status !== 200) throw new Error(`${path}: HTTP ${result.status} ${JSON.stringify(body).slice(0, 300)}`);
  return body;
}

// Flattens a category subtree into id -> { name, leaf }.
function indexTree(node, index = new Map()) {
  index.set(node.category.categoryId, { name: node.category.categoryName, leaf: !!node.leafCategoryTreeNode });
  (node.childCategoryTreeNodes || []).forEach(child => indexTree(child, index));
  return index;
}

async function main() {
  const auth = new EbayAuthToken({
    clientId: config.marketplace.clientId,
    clientSecret: config.marketplace.clientSecret,
    devid: config.marketplace.devid,
  });
  const accessToken = JSON.parse(await auth.getApplicationToken('PRODUCTION', `${config.marketplace.url}oauth/api_scope`)).access_token;

  let failures = 0;
  for (const marketplace of MARKETPLACES) {
    const { categoryTreeId } = await get(`commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=${marketplace}`, accessToken);
    const subtree = await get(`commerce/taxonomy/v1/category_tree/${categoryTreeId}/get_category_subtree?category_id=${CYCLING}`, accessToken);
    const index = indexTree(subtree.categorySubtreeNode);
    console.log(`\n== ${marketplace} (tree ${categoryTreeId})`);

    for (const id of [CYCLING, BICYCLE_PARTS, TYRES_TUBES_WHEELS]) {
      const node = index.get(id);
      if (!node) { failures++; console.log(`  FAIL parent ${id} missing`); continue; }
      console.log(`  ok   parent ${id} ${node.name}`);
    }
    for (const [title, { leaf, parent }] of Object.entries(COMPONENT_CATEGORY_LEAVES)) {
      const node = index.get(leaf);
      if (!node) { failures++; console.log(`  FAIL ${title}: ${leaf} missing`); continue; }
      if (!node.leaf) { failures++; console.log(`  FAIL ${title}: ${leaf} ${node.name} is not a leaf`); continue; }
      if (!index.has(parent)) { failures++; console.log(`  FAIL ${title}: parent ${parent} missing`); continue; }
      console.log(`  ok   ${title}: ${leaf} ${node.name}`);
    }
  }

  console.log(failures ? `\n${failures} problem(s) found` : '\nAll category ids valid on every marketplace');
  process.exit(failures ? 1 : 0);
}

main().catch(err => { console.error(err.message || err); process.exit(1); });
