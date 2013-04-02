var express = require('express');
var hello = require('./hello');
var app = express();

app.get('/hello', function(req, res) {
  res.send(hello.sayHello());
});

app.listen(3000);
console.log('Listening on port 3000');
