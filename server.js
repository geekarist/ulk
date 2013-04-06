var express = require('express');
var http = require('http');
var ulk = require('./ulk');

var app = express();
app.get('/ulk', function(req, res) {
	var json = JSON.stringify({
		"Monday": 2100, 
		"Tuesday": 2150, 
		"Wednesday": 2000, 
		"Thursday": 0, 
		"Friday": 0, 
		"Saturday": 0, 
		"Sunday": 0
	});
	res.send(201, json);
});

var srv = http.createServer(app);
exports.close = srv.close;
srv.listen(3000);
console.log('Listening on port 3000');