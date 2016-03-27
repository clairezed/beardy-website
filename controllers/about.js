var express = require('express');
var router = express.Router();


// INDEX =======================================

router.get('/', (req, res, next) => {
  res.render('about');
});


module.exports = router;
