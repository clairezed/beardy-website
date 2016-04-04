var express = require('express');
var router = express.Router();
var Organization = require('../models/organization')
var _ = require('lodash');

// INDEX =======================================

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// ORGANIZATION INDEX =======================================

// this route can get every oragnization, or be called with a query to extract specific ones
// ex : "https://beardy-website.herokuapp.com/api/organizations?website_url="+url
router.get('/organizations', function(req, res, next) {
  const query = req.query ? req.query : {};
  if(!_.isEmpty(req.query)) {
    console.log("params ==============================")
    console.log(req.query)
  }

  Organization.find(query).exec( function ( err, organizations, count ){
    if (err) {
      throw err;
    }
    res.contentType('application/json');
    res.json(organizations);
  });
});

module.exports = router;

