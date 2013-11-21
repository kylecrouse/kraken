'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;

var QMongoDB = require('q-mongodb');
var db = QMongoDB.connect(process.env.MONGOHQ_URL || 'mongodb://127.0.0.1:27017/kraken');

app.configure(function () {
  app.use(express.static(path.resolve(__dirname + '/../app')));
});

app.get('/api/insert', function (req, res, next) {
  db.invoke('collection', 'test')
    .invoke('remove')
    .invoke('insert', { a: 1, b: 2 })
    .then(function (items) {
      res.send(items);
    })
    .fail(function (err) {
      console.log(err);
      res.send('' + err);
    })
    .done();
});

app.get('/api/find', function (req, res, next) {
  db.invoke('collection', 'test')
    .invoke('findOne', { a: 1 })
    .then(function (items) {
      res.send(items);
    })
    .fail(function (err) {
      console.log(err);
      res.send('' + err);
    })
    .done();
});

app.listen(port);
console.log('Listening on port ' + port);