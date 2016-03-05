var express = require('express');
var router = express.Router();
// var mongo = require('mongodb')
var db = require('../db')

// INDEX =======================================
router.get('/organizations', function(req, res, next) {

  var organization_collection =  db.get().collection('organizations');

  organization_collection.find().toArray(function(err, docs) {
    if (err) {
      throw err;
    }
    res.contentType('application/json');
    res.json(docs);
  });
});

module.exports = router;
