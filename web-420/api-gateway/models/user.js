/* 
    ============================================
    ; Title: Assignment 2.3
    ; Author: Professor Krasso
    ; Date: 07 May 2020
    ; Modified By: Joann Saeou
    ; Description: API gateway part I and partII week-1 RESTFUL 
    ;===========================================
*/



// user.js
let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});


module.exports = mongoose.model('User', userSchema)