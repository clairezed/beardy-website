"use strict";

// require('./response');

// Base dependencies =====================================================
var express = require('express'),
    http = require('http'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

let app = express();

var config = require('./config')(app.get('env'));

// view engine setup ------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.methodOverride());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Database =====================================================

// database mongoose ------------------------------------------
const mongoose   = require('mongoose');
mongoose.connect(config.mongo.url)

var Organization = require('./models/organization')
const organizationSeeds = require('./seeds/organizations.json')
Organization.seed(organizationSeeds)
// database mongo ---------------------------------------------
// const db = require('./db')
// console.log(config.mongo.url);


// db.connect(config.mongo.url, function(err) {
//   if (err) {
//     console.log('Unable to connect to Mongo.')
//     process.exit(1)
//   } else {
//     console.log('connected to mongo')
//   }
// })

// database lowdb ---------------------------------------------------
// const low = require('lowdb')
// const storage = require('lowdb/file-async')

// const db = low('data/db.json', { storage })

// app.use((req,res,next) => {
//     req.db = db;
//     next();
// });

// Routing ==========================================================

const aboutController = require('./controllers/about');
const apiController = require('./controllers/api');
const homeController = require('./controllers/home');

app.use('/about', aboutController);
app.use('/api', apiController);
app.use('/', homeController);


// Errors handlers ==================================================

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Oups, une 404');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
