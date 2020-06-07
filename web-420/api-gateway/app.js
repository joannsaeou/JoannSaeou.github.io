/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 03 May 2020
; Modified By: Joann Saeou
; Description: API gateway part I part II
;===========================================
*/

let header = require('../../saeou-header');
console.log(header.display('Saeou', 'Joann', '4.3 API-gateway part I, II, III'));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');



//mongoose connection 
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//mongodb connection string  to (change password)
mongoose.connect('mongodb+srv://admin:abc222abc@buwebdev-cluster-1-2eedp.mongodb.net/test?retryWrites=true&w=majority', {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true, //  <--- deprecationWarning to be removed  for future version
        useUnifiedTopology: true

    }).then(() => console.log('connection successful'))
    .catch((err) => console.log(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;