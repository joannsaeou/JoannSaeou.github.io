/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 07 May 2020
; Modified By: Joann Saeou
; Description: Setting up API gateway part I and part II week-1
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000'; //web port # to localhost:3000
config.web.secret = 'secretToken' //password


module.exports = config;