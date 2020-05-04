/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 03 May 2020
; Modified By: Joann Saeou
; Description: API gateway part I
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;