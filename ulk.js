var express = require('express');
var hello = require('./hello');
var http = require('http');

var app = express.createServer();
app.get('/hello', function(req, res) {
	res.send(201, hello.sayHello());
});

var srv = http.createServer(app);
exports.close = srv.close;
srv.listen(3000);
console.log('Listening on port 3000');
