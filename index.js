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
      connection.query(`SELECT compd.*, compg.title as group_title FROM component_detail compd
                          left join component_group compg on compg.group_id=compd.group_id where compd.component_id=?`, [component_id], function (error, results, fields) {
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
      connection.query(`SELECT b.*, bb.title as brand_title FROM bike b
                          left join bike_brand bb on bb.brand_id=b.brand_id
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

// Shared eBay item search used by /getMarketPlacePrices and /getTopListings so both
// endpoints always apply the same affiliate tracking header and error handling.
async function fetchEbayListings(query, limit, accessToken) {
  const result = await fetch(`${config.marketplace.url}buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&limit=${limit}`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
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
    const accessToken = await getAccessToken()
    const itemSummaries = await fetchEbayListings(query, 10, accessToken)
    const prices = itemSummaries.map(itemSummary => Number(itemSummary.price.value))

    res.send(
      {
        maxPrice: prices.length ? Math.max(...prices) : 0,
        minPrice: prices.length ? Math.min(...prices) : 0,
        avgPrice: prices.length ? Number(prices.reduce((a,b) => a+b, 0) / prices.length).toFixed(2) : 0
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
    const accessToken = await getAccessToken()
    const itemSummaries = await fetchEbayListings(query, 5, accessToken)
    const listings = itemSummaries.map(itemSummary => ({
      title: itemSummary.title,
      url: itemSummary.itemAffiliateWebUrl || itemSummary.itemWebUrl,
      price: itemSummary.price ? Number(itemSummary.price.value) : null,
      currency: itemSummary.price ? itemSummary.price.currency : null
    }))
    res.send({ listings })
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