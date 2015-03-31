var express = require('express');
var fn = require('./functions');
var app = express();


app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/test', fn.test);

app.listen(1000);
console.log("Server running at 127.0.0.1:1000");
