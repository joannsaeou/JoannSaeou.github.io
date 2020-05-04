/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 03 May 2020
; Modified By: Joann Saeou
; Description: API gateway part I
;===========================================
*/



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index')
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://jsaeou:s8Ppu7ODacksF2Be@buwebdev-cluster-1-2eedp.mongodb.net/test?retryWrites=true&w=majority', {
        promiseLibrary: require('bluebird')
    }).then(() => console.log('connection successful'))
    .catch((err) => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


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