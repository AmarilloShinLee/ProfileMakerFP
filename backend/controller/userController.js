const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

//token creation
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    try{
        const user = await User.login(req.body.userEmail, req.body.userPassword)

        //create token
        const token = createToken(user._id)

        const userEmail = user.userEmail;
        const userRole = user.userRole;

        res.status(200).json({userEmail, userRole, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// register user
const registerUser = (req, res) => {
    const {firstname, lastname, password, email, skills, type, desc} = req.body
    
    try{
        const user = User.create({firstname, lastname, password, email, skills, type, desc})

        console.log("Register Successful");
        res.status(200).json({data: "Register successful!"})
    } catch (error) {
        console.log("Register Error");
        console.log(error);
        res.status(400).json({error: error.message})
    }    
}

module.exports = { registerUser, loginUser };