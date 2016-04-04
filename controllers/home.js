'use strict';

// Dependencies ----------------------------------------------

const express = require('express');
const router = express.Router();
const Organization = require('../models/organization')

// INDEX =======================================

router.get('/', (req, res, next) => {
  Organization.find({}).sort({date: 'desc'}).exec(function ( err, organizations, count ){
    if (err) {
      throw err;
    }
    res.render( 'home', {
      title : 'Beardy website',
      organizations : organizations
    });
  });
});


module.exports = router;
