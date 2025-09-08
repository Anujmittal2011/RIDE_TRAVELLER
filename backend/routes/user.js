const express = require ('express');
const router = express.Router();
const {body} = require('express-validator');
const user = require('../controller/user');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 3}).withMessage('Password must be of 3 digits'),
],
    user.registerUser
);

module.exports = router;