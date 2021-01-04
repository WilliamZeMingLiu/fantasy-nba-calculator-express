var express = require('express');
var players = express();
var db = require('../db/database.js');

//Select single player by season
players.get('/players/:table/:name', function(req, res, next) {
	var sqlScript = "SELECT * FROM " + req.params.table + " WHERE Player='" + req.params.name + "';";
	db.query(sqlScript, function (err, result) {
    	if (err) throw err;
    	res.send(result);
  	});
});

players.use((req,res) => {
	res.status(404).send();
});

module.exports = players;