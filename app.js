"use strict";

require('./response');

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

// database lowdb ---------------------------------------------------
// const low = require('lowdb')
// const storage = require('lowdb/file-async')

// const db = low('data/db.json', { storage })

// app.use((req,res,next) => {
//     req.db = db;
//     next();
// });

// database mongo ---------------------------------------------
const db = require('./db')
console.log(config.mongo.url);
// console.log('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/'+ config.mongo.dbname);

// db.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/'+ config.mongo.dbname, function(err) {
db.connect(config.mongo.url, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    console.log('connected to mongo')
  }
})

// Routing ==========================================================

const homeController = require('./controllers/home');
var apiController = require('./controllers/api');

app.use('/', homeController);
app.use('/api', apiController);


// Errors handlers ==================================================

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
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
