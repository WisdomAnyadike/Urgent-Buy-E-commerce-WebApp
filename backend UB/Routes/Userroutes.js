const express = require('express')
const {SignUp, logIn } = require('../Controllers/Usercontroller')
const Router = express.Router()


Router.post('/signup' , SignUp)
Router.post('/login' , logIn)

module.exports = Router