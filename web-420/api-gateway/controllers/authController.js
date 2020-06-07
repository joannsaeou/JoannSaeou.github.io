let User = require("../models/user");
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');





// Register a new user on POST
exports.user_register = function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    let newUser = new User({

        username: req.body.username,
        password: hashedPassword,
        email: req.body.email

    });
    // add new user on POST
    User.add(newUser, (err, user) => {

        if (err)

            return res.status(500).send('There was a problem registering the user');

        let token = jwt.sign({ id: user._id }, config.web.secret, {

            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token });
    });

};
// Verify token on GET
exports.user_token = function(req, res) {

    let token = req.headers['x-access-token'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided' });

    jwt.verify(token, config.web.secret, function(err, decoded) {

        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate the user.' });


        User.findById(decoded.id, function(err, user) {

            if (err) return res.status(500).send('There was a problem finding the user.');
            if (!user) return res.status(404).send('No user found');

            res.status(200).send(user);
        });
    });
};


// to add a function to handle user login request

exports.user_login = function(req, res) {
    console.log(req.body);
    
    User.getOne(req.body.email, function(err, user) {

        if (err) return res.status(500).send('Error on server.');
        if (!user) return res.status(404).send('No user found');

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) return res.status(404).send({ auth: false, token: null });

        let token = jwt.sign({ id: user._id }, config.web.secret, {
            expiresIn: 86400 //expires in 24 hours


        });

        res.status(200).send({ auth: true, token: token });


    })
};

//to create a function to handle user logout requests

exports.user_logout = function(req, res) {
    res.status(200).send({ auth: false, token: null });


};