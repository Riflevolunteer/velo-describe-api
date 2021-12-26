const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

const connection = mysql.createPool({
  connectionLimit: 100,
  host     : 'velo-components.c1jrhk9b0rum.eu-central-1.rds.amazonaws.com',
  user     : 'admin',
  password : decrypt('2182d8992e652a206118'), // TODO encrypt
  database : 'velo-components'
});

// Starting our app.
const app = express();

// Add headers before the routes are defined
 app.use(function (req, res, next) {
  
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006', 'http://expc02yl10klvch:19006', 'http://expc02yl10klvch:3000/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

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
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query('SELECT * FROM component_category', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if(error) { 
          console.error(error && error.message)
          res.status(500).json({ error: error.message }) 
        }

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
      connection.release();
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
      const brand_id = req.query.brand_id;
      const category_id = req.query.category_id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compd.* FROM component_detail compd 
                          where compd.brand_id=${brand_id} and compd.category_id=${category_id}`, function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message }) 
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
      connection.release();
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
      const brand_id = req.query.id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compb.* FROM component_brand compb 
                          join category_brand catb on compb.brand_id = catb.brand_id 
                          join component_category compc on compc.category_id = catb.category_id
                          where compc.category_id=${brand_id}`, function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message }) 
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
      connection.release();
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
      const component_id = req.query.id;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query(`SELECT compd.*, compg.title as group_title FROM component_detail compd 
                          join component_group compg on compg.group_id=compd.group_id where compd.component_id=${component_id}`, function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) {
          console.error(error && error.message)
          res.status(500).json({ error: error.message }) 
          return
        }
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
      connection.release();
    });
  } 
  catch (error) {
    console.error(error && error.message)
    res.status(500).json({ error: error.message }) 
  }
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://EXPC02YL10KLVCH:3000/categories so you can see the data.');
});