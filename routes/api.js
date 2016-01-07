var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/organizations', function(req, res, next) {
  var db = req.db
  var organizations = db.object.organizations

  res.json(organizations);
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
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
