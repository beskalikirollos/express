var express = require('express');
var app = express(); 
const path = require('path')
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
app.get('/chi_sono', function (req, res) {
    res.send('<h1>ciao sono cipollos</h1>');
});
app.get('/h', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});