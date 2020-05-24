/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   17 februrary 2020
; Modified By: Joann Saeou
; Description: name header exercise-2.3
;===========================================
*/


exports.display = function(firstName, lastName, assignment) {
    let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
        new Date().toLocaleDateString('en-US')

    return output
}


/**
 * Params: Joann Saeou Header from Web-231
 * Response: output
 * Description: header from web-231
 */