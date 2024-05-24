const express = require('express')
const Controller = require('../controllers/Controller')
const UserController = require('../controllers/userController')
const {isLogin, isAdmin} = require('../middlewares/auth');

const router = express.Router()

router.get('/register', UserController.registerForm)
router.post('/register', UserController.registerHandler)

router.get('/login', UserController.login)
router.post('/login', UserController.loginPost)

router.get('/logout', UserController.logout)

router.use(isLogin)

router.get('/home', Controller.home)
router.use('/accounts', require('./customers'))
router.use('/accounts', require('./sellers'))

module.exports = router