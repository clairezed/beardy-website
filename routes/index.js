var express = require('express');
var router = express.Router();

// var low = require('lowdb');
// var storage = require('lowdb/file-async');
// var db = low('data/db.json', { storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db

  var organizations_data = db.object.organizations
  var organizations_databis = db('organizations').value()
  var org_single = db('organizations').find({ name: 'Agglo' })

  res.render('index',
    { title: 'Beardy website',
      organizations:  organizations_data,
      organizationsbis:  organizations_databis,
      orga: org_single
    });
});


/* GET New User page. */
router.get('/new-organization', function(req, res) {
    res.render('new-organization', { title: 'Add New Orga' });
});

router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

module.exports = router;
