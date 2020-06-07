/* 
    ============================================
    ; Title: Assignment 4.3
    ; Author: Professor Krasso
    ; Date: 21 May 2020
    ; Modified By: Joann Saeou
    ; Description: API gateway part III  week-4 RESTFUL 
    ;===========================================
*/



// mongoose require statement
let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});


let User = mongoose.model("User", userSchema);


//to create a function to add users 
User.add = function (user, callback) {
    user.save(callback);
  };
  

  // Created a callback to  get by ID function
  User.getById = function (id, callback) {
    let query = {
      _id: id
    };
    this.findById(query, callback);
  };
  

  //  query for finding individual users by email
  User.getOne = function (e, callback) {
    let query = {email: e};
    this.findOne(query, callback);
  };



  module.exports =  User;

console.log(module.exports);