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


module.exports = mongoose.model('User', userSchema);

//callback add function
module.exports.add = (user, callback) => {
    user.save(callback);

}

//callback get by ID function
module.exports.getById = (id, callback) => {
    var query = { _id: id };
    user.findById(query, callback);


}