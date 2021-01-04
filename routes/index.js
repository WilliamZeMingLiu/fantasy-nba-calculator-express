var express = require('express');
var index = express();
var db = require('../db/database.js');

//Global variable
let dbName = "FantasyBasketballCalculator.";

//Select top players from season in order
index.get('/', function(req, res, next) {
  res.send("Routes for index.js -> /:table <br> Routes for player.js -> /players/:table/:name");
});

index.get('/:table', function(req, res, next) {
	var sqlScript = "SELECT * FROM " + dbName + req.params.table + ";";
  console.log(req.params.table);
	db.query(sqlScript, function (err, result) {
    	if (err) throw err;
    	res.send(result);
  	});
});

index.use((req,res) => {
	res.status(404).send();
});

index.get('/favico.ico', (req, res) => {
    res.sendStatus(404);
});

module.exports = index;