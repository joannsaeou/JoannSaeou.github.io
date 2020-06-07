var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST

router.post('/auth/register', auth_controller.user_register);

//to  allow user login requests

router.post('/auth/login', auth_controller.user_login);

//GET

router.get('/auth/token', auth_controller.user_token);

module.exports = router;

//to allow user logout request

router.get('/auth/logout', auth_controller.user_logout);