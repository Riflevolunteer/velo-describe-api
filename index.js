const express = require('express');
const mysql = require('mysql');
const EbayAuthToken = require('ebay-oauth-nodejs-client');
const fetch = require('node-fetch');
const loadEnv = require('./load-env');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

async function main() {

const config = require('./config');

const connection = mysql.createPool({
  connectionLimit: 100,
  host     : config.db.host,
  user     : config.db.user,
  password : decrypt(config.db.password), // TODO encrypt
  database : config.db.name
});

const ebayAuthToken = new EbayAuthToken({
  clientId: config.marketplace.clientId,
  clientSecret: config.marketplace.clientSecret,
  devid: config.marketplace.devid
});

let AccessToken = {}
let TokenExpiryDate = null

const isAccessTokenValid = () => TokenExpiryDate && (Date.now() < TokenExpiryDate)

const getAccessToken = async () => {
  if (AccessToken && isAccessTokenValid(AccessToken)) {
    return AccessToken.access_token
  }
  
  const rawToken = await ebayAuthToken.getApplicationToken('PRODUCTION', `${config.marketplace.url}oauth/api_scope`)
  AccessToken = JSON.parse(rawToken)
  TokenExpiryDate = Date.now() + (Number(AccessToken.expires_in) * 1000)
  return AccessToken.access_token
}

// Starting our app.
const app = express();

// Add headers before the routes are defined
 app.use(function (req, res, next) {
  
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
}); 

// Creating a GET route that returns data from the 'users' table.
app.get('/categories', function (req, res, next) {
  // Connecting to the database.
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query('SELECT * FROM component_category', function (error, results, fields) {
        connection.release();
        // If some error occurs, we throw an error.
        if(error) {
          console.error(error && error.message)
          return res.status(500).json({ error: error.message })
        }

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  } 
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message }) 
  }
});

// Creating a GET route that returns data from the 'users' table.
app.get('/componentsbybrandcategory', function (req, res, next) {
  // Connecting to the database.
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      const brand_id = req.query.brand_id;
      const category_id = req.query.category_id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compd.* FROM component_detail compd
                          where compd.brand_id=? and compd.category_id=?`, [brand_id, category_id], function (error, results, fields) {
        connection.release();
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  } catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message }) 
  }
});

// Creating a GET route that returns data from the 'users' table.
app.get('/brandsbycategory', function (req, res, next) {
  // Connecting to the database.
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      const brand_id = req.query.id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compb.* FROM component_brand compb
                          join category_brand catb on compb.brand_id = catb.brand_id
                          join component_category compc on compc.category_id = catb.category_id
                          where compc.category_id=?`, [brand_id], function (error, results, fields) {
        connection.release();
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message }) 
  }
});

// Creating a GET route that returns data from the 'users' table.
app.get('/componentdetail', function (req, res, next) {
  // Connecting to the database.
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      const component_id = req.query.id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compd.*, compg.title as group_title, ds.label as source_label, ds.source_type FROM component_detail compd
                          left join component_group compg on compg.group_id=compd.group_id
                          left join data_source ds on ds.source_id=compd.source_ref
                          where compd.component_id=?`, [component_id], function (error, results, fields) {
        connection.release();
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  } 
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message }) 
  }
});

// Creating a GET route that returns a component group and its member components.
app.get('/componentGroup', function (req, res, next) {
  const group_id = req.query.id;
  if (!group_id) {
    res.status(400).json({ error: 'No id parameter' })
    return
  }
  try {
    let responded = false
    const fail = (error) => {
      if (responded) return
      responded = true
      console.error(error && error.message)
      res.status(500).json({ error: error.message })
    }

    const groupPromise = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM component_group WHERE group_id=?', [group_id], function (error, groupResults) {
        if (error) return reject(error)
        resolve(groupResults)
      });
    });

    const componentsPromise = new Promise((resolve, reject) => {
      connection.query(`SELECT compd.component_id, compd.title, compd.year_from, compd.year_to, compd.category_id, compc.title as category_title
                          FROM component_detail compd
                          left join component_category compc on compc.category_id=compd.category_id
                          where compd.group_id=? order by compd.title`, [group_id], function (error, componentResults) {
        if (error) return reject(error)
        resolve(componentResults)
      });
    });

    Promise.all([groupPromise, componentsPromise]).then(([groupResults, componentResults]) => {
      if (responded) return
      res.send({ group: groupResults[0] || null, components: componentResults })
    }).catch(fail)
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Creating a GET route that returns component suggestions matching a search term.
app.get('/searchComponents', function (req, res, next) {
  const q = req.query.q;
  if (!q) {
    res.status(400).json({ error: 'No query parameter' })
    return
  }

  const escapeLike = (s) => s.replace(/[%_]/g, '\\$&');

  const words = [...new Set(
    q.trim().split(/\s+/).filter(w => w.length > 0)
  )].filter(w => w.length >= 3).slice(0, 8); // drop sub-3-char words; cap at 8 words

  if (words.length === 0) {
    res.send([])
    return
  }

  const whereClauses = words.map(() => 'compd.search_text LIKE ?').join(' AND ');
  const params = words.map(w => `%${escapeLike(w)}%`);

  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      connection.query(`SELECT compd.component_id, compd.title, compd.description, compc.title as category_title FROM component_detail compd
                          left join component_category compc on compc.category_id=compd.category_id
                          where ${whereClauses} order by compd.title limit 10`, params, function (error, results, fields) {
        connection.release();
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        res.send(results)
      });
    });
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Creating a GET route that returns all bike brands.
app.get('/bikeBrands', function (req, res, next) {
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      connection.query('SELECT * FROM bike_brand order by title', function (error, results, fields) {
        connection.release();
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        res.send(results)
      });
    });
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Creating a GET route that returns the bikes for a brand.
app.get('/bikesbybrand', function (req, res, next) {
  const brand_id = req.query.brand_id;
  if (!brand_id) {
    res.status(400).json({ error: 'No brand_id parameter' })
    return
  }
  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      connection.query(`SELECT bike_id, title, category, year_from, year_to, created_at FROM bike
                          where brand_id=? order by year_from, title`, [brand_id], function (error, results, fields) {
        connection.release();
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        res.send(results)
      });
    });
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Creating a GET route that returns a bike and its spec lines. Each spec carries
// component_id/component_title when ingestion linked it to a component_detail row,
// so the UI can render it as a link; otherwise value_text is shown as plain text.
app.get('/bikedetail', function (req, res, next) {
  const bike_id = req.query.id;
  if (!bike_id) {
    res.status(400).json({ error: 'No id parameter' })
    return
  }
  try {
    let responded = false
    const fail = (error) => {
      if (responded) return
      responded = true
      console.error(error && error.message)
      res.status(500).json({ error: error.message })
    }

    const bikePromise = new Promise((resolve, reject) => {
      connection.query(`SELECT b.*, bb.title as brand_title, ds.label as source_label, ds.source_type FROM bike b
                          left join bike_brand bb on bb.brand_id=b.brand_id
                          left join data_source ds on ds.source_id=b.source_ref
                          where b.bike_id=?`, [bike_id], function (error, bikeResults) {
        if (error) return reject(error)
        resolve(bikeResults)
      });
    });

    const specsPromise = new Promise((resolve, reject) => {
      connection.query(`SELECT bs.bike_spec_id, bsl.title as label, bs.value_text, bs.component_id, bs.updated_at,
                               compd.title as component_title, compd.category_id, compc.title as category_title
                          FROM bike_spec bs
                          left join bike_spec_label bsl on bsl.label_id=bs.label_id
                          left join component_detail compd on compd.component_id=bs.component_id
                          left join component_category compc on compc.category_id=compd.category_id
                          where bs.bike_id=? order by bsl.sort_order, bs.bike_spec_id`, [bike_id], function (error, specResults) {
        if (error) return reject(error)
        resolve(specResults)
      });
    });

    Promise.all([bikePromise, specsPromise]).then(([bikeResults, specResults]) => {
      if (responded) return
      if (!bikeResults[0]) {
        res.status(404).json({ error: 'Bike not found' })
        return
      }
      res.send({ bike: bikeResults[0], specs: specResults })
    }).catch(fail)
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Creating a GET route that returns bike suggestions matching a search term.
// Same multi-word AND matching as /searchComponents, against bike.search_text.
app.get('/searchBikes', function (req, res, next) {
  const q = req.query.q;
  if (!q) {
    res.status(400).json({ error: 'No query parameter' })
    return
  }

  const escapeLike = (s) => s.replace(/[%_]/g, '\\$&');

  // Bike model names are short tokens ("Z 77", "SL 1"), so unlike
  // /searchComponents only single-character words are dropped here.
  const words = [...new Set(
    q.trim().split(/\s+/).filter(w => w.length > 0)
  )].filter(w => w.length >= 2).slice(0, 8);

  if (words.length === 0) {
    res.send([])
    return
  }

  const whereClauses = words.map(() => 'b.search_text LIKE ?').join(' AND ');
  const params = words.map(w => `%${escapeLike(w)}%`);

  try {
    connection.getConnection(function (err, connection) {
      if (err) {
        console.error(err && err.message)
        return res.status(500).json({ error: err.message })
      }
      connection.query(`SELECT b.bike_id, b.title, b.category, b.year_from, b.year_to, bb.title as brand_title FROM bike b
                          left join bike_brand bb on bb.brand_id=b.brand_id
                          where ${whereClauses} order by b.year_from, b.title limit 10`, params, function (error, results, fields) {
        connection.release();
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message })
          return
        }
        res.send(results)
      });
    });
  }
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  }
});

// Spec categories that describe the bike itself rather than name a part that
// could exist in component_detail: there is no component_category for a frame
// material, a lug pattern, a gearing count or an "Extras" line, so their
// bike_spec rows can never carry a component_id. (Groupset / Components names
// a component_group, not a component_detail row, and bike_spec only links to
// the latter.) /linkCoverage reports these separately so they don't drag the
// link-rate numbers down. Keep in step with bike_spec_label when labels change.
const NON_LINKABLE_SPEC_LABELS = new Set([
  'Frame Material', 'Fork', 'Lugs', 'Gearing', 'Toe Clips', 'Spokes',
  'Cable & Tape', 'Fenders', 'Groupset / Components', 'Extras'
])

// Creating a GET route that reports how many bike_spec rows are linked to a
// component_detail row: overall, per spec category (weakest first), per bike
// brand and per brand x category, so the link-rate audit in TODO.md can be
// re-run without walking /bikeBrands -> /bikesbybrand -> /bikedetail. Also
// lists the most common unlinked value_text per linkable category with the
// number of bikes carrying each, which is the worklist for the next catalogue
// or COMPONENT_OVERRIDES pass; ?unlinked=N sets how many values per category
// (default 10, max 50, 0 omits the list). Read-only aggregate SQL.
app.get('/linkCoverage', function (req, res, next) {
  const unlinkedLimit = req.query.unlinked === undefined ? 10 : Number(req.query.unlinked)
  if (!Number.isInteger(unlinkedLimit) || unlinkedLimit < 0 || unlinkedLimit > 50) {
    res.status(400).json({ error: 'unlinked must be an integer from 0 to 50' })
    return
  }

  const query = (sql, params) => new Promise((resolve, reject) => {
    connection.query(sql, params, (error, results) => error ? reject(error) : resolve(results))
  });
  // One decimal place; null rather than 0 when there is nothing to measure.
  const pct = (linked, specs) => specs ? Math.round(linked / specs * 1000) / 10 : null
  const weakestFirst = (a, b) => (a.pct ?? 101) - (b.pct ?? 101) || b.specs - a.specs

  // Everything except the unlinked-value list is derived from this one
  // brand x category GROUP BY: the per-category, per-brand and overall totals
  // are just sums over it.
  const cellsPromise = query(`SELECT bb.brand_id, bb.title as brand, bsl.label_id, bsl.title as label,
                                     COUNT(bs.bike_spec_id) as specs, SUM(bs.component_id IS NOT NULL) as linked
                                FROM bike_spec bs
                                left join bike b on b.bike_id=bs.bike_id
                                left join bike_brand bb on bb.brand_id=b.brand_id
                                left join bike_spec_label bsl on bsl.label_id=bs.label_id
                                group by bb.brand_id, bb.title, bsl.label_id, bsl.title`)
  const bikesPromise = query('SELECT brand_id, COUNT(*) as bikes FROM bike group by brand_id')
  // Distinct bikes rather than spec rows, so a value repeated across a bike's
  // split compound cells doesn't count twice.
  const unlinkedPromise = unlinkedLimit === 0 ? Promise.resolve([]) : query(
    `SELECT label_id, label, value_text, bikes FROM (
        SELECT bsl.label_id, bsl.title as label, bs.value_text, COUNT(DISTINCT bs.bike_id) as bikes,
               ROW_NUMBER() OVER (PARTITION BY bsl.label_id ORDER BY COUNT(DISTINCT bs.bike_id) DESC, bs.value_text) as rn
          FROM bike_spec bs
          join bike_spec_label bsl on bsl.label_id=bs.label_id
          where bs.component_id IS NULL and bsl.title not in (?)
          group by bsl.label_id, bsl.title, bs.value_text
     ) ranked where rn <= ? order by label_id, rn`, [[...NON_LINKABLE_SPEC_LABELS], unlinkedLimit])

  Promise.all([cellsPromise, bikesPromise, unlinkedPromise]).then(([cellRows, bikeRows, unlinkedRows]) => {
    // SUM() comes back from the mysql driver as a DECIMAL string.
    const cells = cellRows.map(r => ({
      brand_id: r.brand_id, brand: r.brand, label_id: r.label_id, label: r.label,
      specs: Number(r.specs), linked: Number(r.linked),
      linkable: !NON_LINKABLE_SPEC_LABELS.has(r.label)
    }))

    const addTo = (totals, cell) => {
      totals.specs += cell.specs
      totals.linked += cell.linked
      if (cell.linkable) {
        totals.linkable_specs += cell.specs
        totals.linkable_linked += cell.linked
      }
      return totals
    }
    const emptyTotals = () => ({ specs: 0, linked: 0, linkable_specs: 0, linkable_linked: 0 })
    const finishTotals = (t) => ({
      ...t, pct: pct(t.linked, t.specs), linkable_pct: pct(t.linkable_linked, t.linkable_specs)
    })

    const overall = finishTotals(cells.reduce(addTo, emptyTotals()))

    const byLabel = new Map()
    const byBrand = new Map()
    for (const cell of cells) {
      if (!byLabel.has(cell.label_id)) byLabel.set(cell.label_id, { label_id: cell.label_id, label: cell.label, linkable: cell.linkable, specs: 0, linked: 0 })
      const l = byLabel.get(cell.label_id)
      l.specs += cell.specs
      l.linked += cell.linked
      if (!byBrand.has(cell.brand_id)) byBrand.set(cell.brand_id, { brand_id: cell.brand_id, brand: cell.brand, bikes: 0, ...emptyTotals() })
      addTo(byBrand.get(cell.brand_id), cell)
    }
    for (const r of bikeRows) {
      if (byBrand.has(r.brand_id)) byBrand.get(r.brand_id).bikes = Number(r.bikes)
    }

    const categories = [...byLabel.values()].filter(l => l.linkable)
      .map(({ linkable, ...l }) => ({ ...l, unlinked: l.specs - l.linked, pct: pct(l.linked, l.specs) }))
      .sort(weakestFirst)
    const non_linkable_categories = [...byLabel.values()].filter(l => !l.linkable)
      .map(({ linkable, ...l }) => l)
      .sort((a, b) => b.specs - a.specs)
    const brands = [...byBrand.values()].map(finishTotals)
      .sort((a, b) => (a.linkable_pct ?? 101) - (b.linkable_pct ?? 101) || b.linkable_specs - a.linkable_specs)
    const brandOrder = new Map(brands.map((b, i) => [b.brand_id, i]))
    const brand_categories = cells.filter(c => c.linkable)
      .map(({ linkable, ...c }) => ({ ...c, pct: pct(c.linked, c.specs) }))
      .sort((a, b) => brandOrder.get(a.brand_id) - brandOrder.get(b.brand_id) || weakestFirst(a, b))

    // Same weakest-first order as `categories`, so the first entry is the
    // category most worth working on next.
    const unlinkedByLabel = new Map()
    for (const r of unlinkedRows) {
      if (!unlinkedByLabel.has(r.label_id)) unlinkedByLabel.set(r.label_id, [])
      unlinkedByLabel.get(r.label_id).push({ value_text: r.value_text, bikes: Number(r.bikes) })
    }
    const unlinked_values = unlinkedLimit === 0 ? undefined : categories
      .filter(c => unlinkedByLabel.has(c.label_id))
      .map(c => ({ label_id: c.label_id, label: c.label, values: unlinkedByLabel.get(c.label_id) }))

    res.send({ overall, categories, non_linkable_categories, brands, brand_categories, unlinked_values })
  }).catch((error) => {
    console.error(error && error.message)
    res.status(500).json({ error: error.message })
  })
});

// eBay Sporting Goods > Cycling > Bicycle Components & Parts. Scopes every
// search to this category so a generic part name (e.g. "Simplex") doesn't
// pull in unrelated listings from other categories that happen to match the
// same keywords. Confirmed live on every marketplace in EBAY_MARKETPLACES.
const EBAY_BICYCLE_PARTS_CATEGORY_ID = '57262'

// Marketplaces this app is allowed to query, matching the brands' home
// markets already covered by ingested catalogues (French Simplex, Italian
// Campagnolo/Nisi, British Raleigh/Brooks, German Sachs). All confirmed live
// against the Browse API with the category filter above before adding here.
const EBAY_MARKETPLACES = new Set(['EBAY_US', 'EBAY_GB', 'EBAY_DE', 'EBAY_FR', 'EBAY_IT'])
const DEFAULT_EBAY_MARKETPLACE = 'EBAY_US'

// Validates the optional ?marketplace= query param against EBAY_MARKETPLACES,
// defaulting to DEFAULT_EBAY_MARKETPLACE. Throws a 400 error object (same
// shape as fetchEbayListings) on an unrecognized value, rather than silently
// falling back — an unrecognized marketplace is almost always a typo the
// caller should see, not a query that should quietly run against the US site.
function resolveMarketplace(req) {
  const marketplace = req.query.marketplace
  if (!marketplace) return DEFAULT_EBAY_MARKETPLACE
  if (!EBAY_MARKETPLACES.has(marketplace)) {
    const error = new Error(`Unsupported marketplace: ${marketplace}. Supported: ${[...EBAY_MARKETPLACES].join(', ')}`)
    error.status = 400
    throw error
  }
  return marketplace
}

// Same as resolveMarketplace but for /getTopListings. Defaults to US only:
// existing app clients render `price` without checking `currency`, so
// fanning out to every marketplace by default would show e.g. GBP/EUR
// prices with no indication they aren't dollars. ?marketplace=ALL opts in
// to the multi-marketplace fan-out (each listing keeps its own
// price/currency, so that request shape doesn't have the cross-currency
// blending problem /getMarketPlacePrices' single min/max/avg would);
// ?marketplace=EBAY_XX still narrows to just one.
function resolveMarketplaces(req) {
  if (!req.query.marketplace) return [DEFAULT_EBAY_MARKETPLACE]
  if (req.query.marketplace === 'ALL') return [...EBAY_MARKETPLACES]
  return [resolveMarketplace(req)]
}

// Shared eBay item search used by /getMarketPlacePrices and /getTopListings so both
// endpoints always apply the same affiliate tracking header and error handling.
async function fetchEbayListings(query, limit, accessToken, marketplace) {
  const result = await fetch(`${config.marketplace.url}buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&category_ids=${EBAY_BICYCLE_PARTS_CATEGORY_ID}&limit=${limit}`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'X-EBAY-C-MARKETPLACE-ID': marketplace,
      'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=5339210616'
    }
  })
  if (result.status !== 200) {
    const error = new Error('Market place failed to return data')
    error.status = 400
    throw error
  }
  const body = await result.json()
  return body.itemSummaries || []
}

app.get('/getMarketPlacePrices', async function (req, res, next) {
  const query = req.query.query
  if(!query) {
    res.status(400).json({error: 'No query parameter'})
    return
  }

  try {
    const marketplace = resolveMarketplace(req)
    const accessToken = await getAccessToken()
    const itemSummaries = await fetchEbayListings(query, 10, accessToken, marketplace)
    const prices = itemSummaries.map(itemSummary => Number(itemSummary.price.value))

    res.send(
      {
        maxPrice: prices.length ? Math.max(...prices) : 0,
        minPrice: prices.length ? Math.min(...prices) : 0,
        avgPrice: prices.length ? Number(prices.reduce((a,b) => a+b, 0) / prices.length).toFixed(2) : 0,
        // All items in one search share a marketplace, so a single currency
        // covers the whole result set - null only when there were no items.
        currency: itemSummaries[0]?.price?.currency || null,
        marketplace
      })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).json({ error: err.message })
  }
})

app.get('/getTopListings', async function (req, res, next) {
  const query = req.query.query
  if (!query) {
    res.status(400).json({ error: 'No query parameter' })
    return
  }

  try {
    const marketplaces = resolveMarketplaces(req)
    const accessToken = await getAccessToken()
    // allSettled: one marketplace erroring (rate limit, transient failure)
    // shouldn't sink a request that asked for all five.
    const perMarketplace = await Promise.allSettled(
      marketplaces.map(async (marketplace) => {
        const itemSummaries = await fetchEbayListings(query, 5, accessToken, marketplace)
        return itemSummaries.map(itemSummary => ({
          title: itemSummary.title,
          url: itemSummary.itemAffiliateWebUrl || itemSummary.itemWebUrl,
          price: itemSummary.price ? Number(itemSummary.price.value) : null,
          currency: itemSummary.price ? itemSummary.price.currency : null,
          marketplace
        }))
      })
    )
    perMarketplace.filter(r => r.status === 'rejected').forEach(r => console.error('getTopListings marketplace fetch failed:', r.reason))
    // Raw eBay relevance order isn't comparable across marketplaces, so once
    // there's more than one, price is the only sensible common sort key.
    const listings = perMarketplace
      .filter(r => r.status === 'fulfilled')
      .flatMap(r => r.value)
      .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    res.send({ listings, marketplaces })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).json({ error: err.message })
  }
})

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/categories so you can see the data.');
});

}

loadEnv().then(main).catch((err) => {
  console.error('Failed to start:', err && err.message)
  process.exit(1)
})