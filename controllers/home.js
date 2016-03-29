'use strict';

// Dependencies ----------------------------------------------

const express = require('express');
const router = express.Router();
const Organization = require('../models/organization')

// INDEX =======================================

router.get('/', (req, res, next) => {
  // Organization.find(function ( err, organizations, count ){
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



// SHOW ========================================
router.get('organizations/:id', function(req, res) {
  var id = new mongo.ObjectID(req.params.id);
  var organization_collection =  db.get().collection('organizations');

  organization_collection.find({ _id: id }).toArray(function(err, docs) {
    if (err) {
      throw err;
    }
    organization = docs[0]
    res.render('organizations/show',
      { title: organization.name,
        organization:  organization
      }
    );
  });
})


// NEW =======================================
// TODO, à l'occasion
/* GET New User page. */
// router.get('organizations/new-organization', function(req, res) {
//     res.render('new-organization', { title: 'Add New Orga' });
// });

module.exports = router;
