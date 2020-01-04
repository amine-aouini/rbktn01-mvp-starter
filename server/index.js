var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var assert = require('assert');
var mongoose = require('mongoose');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();
var url = 'mongodb://localhost:3000/data';
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.get('/', (err) => {
  // console.log(err);
  res.send('index')
    .catch((err) => {
      console.log(err);
      throw err
    })
});

app.post('/insert', function (req, res) {
  // items.selectAll(function (err, data) {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });

  var data = {
    fullName: req.body.name,
    id: req.body.id,
    roomOrSuit: req.body.bedOrSuit,
    from: req.body.from,
    to: req.body.to
  }
  mongoose.connect(url, { useNewUrlParser: true });

  mongoose.connect(url, function (err, db) {
    assert.equal(null, err);
    db.coolection('client-reservation').insertOne(data, function (err, result) {
      assert.equal(null, err);
      console.log('item inserted');


    })
  })

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

