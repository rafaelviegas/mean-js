var express = require('express');
var consign = require('consign');
var app = express();

//configurações do express
app.use(express.static('./public'));

consign({cwd : 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;