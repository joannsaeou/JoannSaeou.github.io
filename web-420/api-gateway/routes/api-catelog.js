var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST

router.post('/auth/register', auth_controller.user_register);

//GET

router.get('/auth/token', auth_controller.user_token);

module.exports = router;