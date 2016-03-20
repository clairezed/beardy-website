var db = require('../db')
var mongo = require('mongodb')

exports.all = function(cb) {
  var collection = db.get().collection('organizations')

  collection.find().toArray(function(err, docs) {
    cb(err, docs)
  })
}

exports.one = function(id, cb) {
  var id = new mongo.ObjectID(id);
  var collection = db.get().collection('organizations')


  collection.find({ _id: id }).toArray(function(err, docs) {
    cb(err, docs[0])
  })
}