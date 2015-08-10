var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {

  router.get('/', function(req, res) {
    res.send(__dirname + '/index.html');
  });

  app.use(router);
}