/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 03 May 2020
; Modified By: Joann Saeou
; Description: Setting up API gateway part I week-1
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';


module.exports = config;