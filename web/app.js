'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;

var QMongoDB = require('q-mongodb');

app.use(express.static(path.resolve(__dirname + '/../app')));

app.get('/api/', function (req, res, next) {
  res.send('111');
  // QMongoDB.db('kraken').then(function (db) {
  //   return QMongoDB.collection(db, 'venue');
  // }).then(function (collection) {
  //   // Perform standard collection operations here
  // }).then(function () {
  //   return QMongoDB.closeAll();
  // });
});

app.listen(port);
console.log('Listening on port ' + port);