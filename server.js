var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var bodyParser = require('body-parser');
var db = require('./config/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes');

app.listen(port);
console.log('Server is running on port:', port);