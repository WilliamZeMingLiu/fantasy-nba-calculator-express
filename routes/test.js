const index = require('./index.js');
const players = require('./players.js');
const request = require('supertest');

request(index)
  .get('/FantasyBasketballCalculator.17_18Season/PTS/')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    else {
    	for(var i=0; i < res.body.length; i++){
    		console.log(res.body[i]);
    	}
    }
  });

 request(index)
  .get('/FantasyBasketballCalculator.17_18Season/GS/5')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    else {
    	for(var i=0; i < res.body.length; i++){
    		console.log(res.body[i]);
    	}
    }
  });

  request(players)
  .get('/players/FantasyBasketballCalculator.17_18Season/James Harden')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    else {
    	for(var i=0; i < res.body.length; i++){
    		console.log(res.body[i]);
    	}
    }
  });
