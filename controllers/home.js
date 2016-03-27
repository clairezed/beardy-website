var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var db = require('../db')

var Organizations = require('../models/organization')

// INDEX =======================================

router.get('/', (req, res, next) => {
  Organizations.all((err, docs) => {
    if (err) {
      throw err;
    }
    res.render('home',
      { title: 'Beardy website',
        organizations:  docs
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
