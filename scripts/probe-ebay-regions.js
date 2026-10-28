// Read-only probe for the "eBay listings by region" TODO: runs a few real
// search_text values against a candidate region preset (several marketplaces)
// and shows, per marketplace, how many listings come back, in which
// currencies, from which item countries, and what shipping eBay quotes. Each
// search runs in four variants so we can see what the buyer-location knobs
// actually do before choosing a ranking:
//
//   base      what /getTopListings sends today
//   filter    + filter=deliveryCountry:<buyer>   (drop items that don't ship there?)
//   context   + contextualLocation=country=<buyer> in X-EBAY-C-ENDUSERCTX
//             (shipping quoted to the buyer?)
//   both      filter + context
//
//   node scripts/probe-ebay-regions.js
//   node scripts/probe-ebay-regions.js --buyer GB --marketplaces EBAY_GB,EBAY_DE,EBAY_FR,EBAY_IT,EBAY_US
//   node scripts/probe-ebay-regions.js "Saddles|Brooks B17" "Hubs|Campagnolo Record"
//   node scripts/probe-ebay-regions.js --json <scratchpad>/probe.json
//
// Each positional arg is "<component_category title>|<search_text>"; the
// category picks the same ladder /getTopListings uses (ebay-categories.js).
// No DB needed. Uses the app's own eBay credentials (same config/.env as
// index.js). Cost: queries x marketplaces x 4 variants Browse calls, times up
// to 3 ladder rungs when the leaf category is empty (defaults: 4 x 5 x 4 =
// 80+, Browse quota 5,000/day). The total is printed at the end.

const fs = require('fs');
const EbayAuthToken = require('ebay-oauth-nodejs-client');
const fetch = require('node-fetch');
const config = require('../config');
const { categoryLadder } = require('../ebay-categories');

// Same campaign id as fetchEbayListings in index.js.
const AFFILIATE_CONTEXT = 'affiliateCampaignId=5339210616';
const LIMIT = 5;

// Candidate US preset from the TODO; not yet in EBAY_MARKETPLACES (AU, CA).
const DEFAULT_MARKETPLACES = ['EBAY_US', 'EBAY_CA', 'EBAY_GB', 'EBAY_AU', 'EBAY_DE'];
// Values shaped like component_detail.search_text (brand + title). Swap in
// real rows when the DB is reachable.
const DEFAULT_QUERIES = [
  'Rear Derailleurs|Campagnolo Nuovo Record',
  'Saddles|Brooks B17',
  'Brakes|Mafac Racer',
  'Cranksets|Stronglight 93',
];

function parseArgs(argv) {
  const opts = { buyer: 'US', marketplaces: DEFAULT_MARKETPLACES, queries: [], json: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--buyer') opts.buyer = argv[++i].toUpperCase();
    else if (arg === '--marketplaces') opts.marketplaces = argv[++i].split(',').map(m => m.trim().toUpperCase());
    else if (arg === '--json') opts.json = argv[++i];
    else opts.queries.push(arg);
  }
  if (!opts.queries.length) opts.queries = DEFAULT_QUERIES;
  opts.queries = opts.queries.map(q => {
    const [category, ...rest] = q.split('|');
    if (!rest.length) throw new Error(`Expected "<category>|<search text>", got: ${q}`);
    return { category, query: rest.join('|') };
  });
  return opts;
}

function variants(buyer) {
  const context = `${AFFILIATE_CONTEXT},contextualLocation=${encodeURIComponent(`country=${buyer}`)}`;
  const filter = `deliveryCountry:${buyer}`;
  return [
    { name: 'base', context: AFFILIATE_CONTEXT, filter: null },
    { name: 'filter', context: AFFILIATE_CONTEXT, filter },
    { name: 'context', context, filter: null },
    { name: 'both', context, filter },
  ];
}

let calls = 0;

// Same ladder walk as fetchEbayListings, but keeps eBay's total and errors
// rather than throwing, so one bad marketplace doesn't stop the probe.
async function search(query, categoryIds, marketplace, variant, accessToken) {
  let last = { items: [], total: 0, categoryId: null };
  for (const categoryId of categoryIds) {
    const params = new URLSearchParams({ q: query, category_ids: categoryId, limit: String(LIMIT) });
    if (variant.filter) params.set('filter', variant.filter);
    calls++;
    let result;
    try {
      result = await fetch(`${config.marketplace.url}buy/browse/v1/item_summary/search?${params}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-EBAY-C-MARKETPLACE-ID': marketplace,
          'X-EBAY-C-ENDUSERCTX': variant.context,
        },
      });
    } catch (err) {
      return { error: err.code || err.message, categoryId };
    }
    const body = await result.json().catch(() => ({}));
    if (result.status !== 200) {
      const message = (body.errors && body.errors[0] && body.errors[0].message) || JSON.stringify(body).slice(0, 200);
      return { error: `HTTP ${result.status} ${message}`, categoryId };
    }
    last = { items: body.itemSummaries || [], total: body.total || 0, categoryId, warnings: body.warnings };
    if (last.items.length) break;
  }
  return last;
}

function summarise(item) {
  const shipping = (item.shippingOptions || [])[0];
  return {
    // legacyItemId is the same listing across marketplaces; itemId isn't.
    id: item.legacyItemId,
    title: item.title,
    price: item.price ? `${item.price.value} ${item.price.currency}` : null,
    shipping: shipping && shipping.shippingCost
      ? `${shipping.shippingCost.value} ${shipping.shippingCost.currency}${shipping.shippingCostType ? ` ${shipping.shippingCostType}` : ''}`
      : null,
    itemCountry: item.itemLocation ? item.itemLocation.country : null,
  };
}

// Counts of each value, e.g. { USD: 4, GBP: 1 }, as "USD 4, GBP 1".
function tally(values) {
  const counts = new Map();
  values.forEach(v => counts.set(v ?? '-', (counts.get(v ?? '-') || 0) + 1));
  return [...counts].map(([k, n]) => `${k} ${n}`).join(', ') || '-';
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const auth = new EbayAuthToken({
    clientId: config.marketplace.clientId,
    clientSecret: config.marketplace.clientSecret,
    devid: config.marketplace.devid,
  });
  const accessToken = JSON.parse(await auth.getApplicationToken('PRODUCTION', `${config.marketplace.url}oauth/api_scope`)).access_token;

  console.log(`buyer=${opts.buyer} marketplaces=${opts.marketplaces.join(',')} limit=${LIMIT}`);
  const report = [];
  for (const { category, query } of opts.queries) {
    const categoryIds = categoryLadder(category);
    console.log(`\n==== ${category}: "${query}"  ladder=${categoryIds.join('>')}`);
    for (const marketplace of opts.marketplaces) {
      console.log(`\n  -- ${marketplace}`);
      for (const variant of variants(opts.buyer)) {
        const result = await search(query, categoryIds, marketplace, variant, accessToken);
        const items = (result.items || []).map(summarise);
        report.push({ category, query, marketplace, variant: variant.name, ...result, items });
        if (result.error) {
          console.log(`    ${variant.name.padEnd(8)} ERROR ${result.error}`);
          continue;
        }
        console.log(`    ${variant.name.padEnd(8)} total=${String(result.total).padEnd(6)} rung=${result.categoryId}`
          + `  currency: ${tally(items.map(i => i.price && i.price.split(' ')[1]))}`
          + `  from: ${tally(items.map(i => i.itemCountry))}`
          + `  shipping quoted: ${items.filter(i => i.shipping).length}/${items.length}`
          + (result.warnings ? `  WARN ${JSON.stringify(result.warnings).slice(0, 150)}` : ''));
        // Item detail only for the variant we'd likely ship, to keep output readable.
        if (variant.name === 'both') {
          items.forEach(i => console.log(`             ${(i.price || '-').padEnd(14)} ship ${(i.shipping || '-').padEnd(24)} ${i.itemCountry || '--'}  ${i.title.slice(0, 60)}`));
        }
      }
    }
  }

  // A listing can show on several sites (a US seller shipping worldwide turns
  // up on CA / AU / GB too), which would fill a merged top 5 with repeats.
  console.log('\nSame listing on more than one site (variant "both"):');
  for (const { query } of opts.queries) {
    const seen = new Map();
    report.filter(r => r.query === query && r.variant === 'both').forEach(r =>
      r.items.forEach(i => seen.set(i.id, [...(seen.get(i.id) || []), r.marketplace])));
    const repeats = [...seen.values()].filter(sites => sites.length > 1);
    console.log(`  ${query.padEnd(28)} ${seen.size} distinct listings, ${repeats.length} on 2+ sites`
      + (repeats.length ? ` (${tally(repeats.map(sites => sites.join('+')))})` : ''));
  }

  console.log(`\n${calls} Browse calls`);
  if (opts.json) {
    fs.writeFileSync(opts.json, JSON.stringify(report, null, 2));
    console.log(`Full results written to ${opts.json}`);
  }
}

main().catch(err => { console.error(err.message || err); process.exit(1); });
