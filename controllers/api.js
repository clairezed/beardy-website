var express = require('express');
var router = express.Router();
var Organization = require('../models/organization')
var _ = require('lodash');

// INDEX =======================================

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// ORGANIZATION INDEX =======================================

router.get('/organizations', function(req, res, next) {
  const query = req.query ?
    req.query : {};
  if(!_.isEmpty(req.query)) {
    console.log("params ==============================")
    console.log(req.query)
  }
  console.log("query ====================")
  console.log(query)

  Organization.find(query).exec( function ( err, organizations, count ){
    if (err) {
      throw err;
    }
    res.contentType('application/json');
    res.json(organizations);
  });
});

module.exports = router;


// BY_WESITE_URL =======================================
router.get('organizations/:website_host', function(req, res) {

  var url = req.params.website_host;

  Organization.findOne({ website_url: url}, function (err, doc){
    console.log(error);
    console.log(doc);
    if (err) {
      throw err;
    }
    res.contentType('application/json');
    res.json(doc);
  // doc is a Document
});
  // var organization_collection =  db.get().collection('organizations');

  // organization_collection.find({ _id: id }).toArray(function(err, docs) {
  //   if (err) {
  //     throw err;
  //   }
  //   organization = docs[0]
  //   res.render('organizations/show',
  //     { title: organization.name,
  //       organization:  organization
  //     }
  //   );
  // });
})