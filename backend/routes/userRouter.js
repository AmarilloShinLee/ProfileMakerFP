const router = require('express').Router(); // use express router for this one
let User = require('../models/user.model'); // assign temporary variables
const jwt = require('jsonwebtoken');

//controller functions
const { registerUser, loginUser} = require('../controller/userController')

//login route
router.post('/login', loginUser)

//register route
router.post('/register', registerUser)

module.exports = router;