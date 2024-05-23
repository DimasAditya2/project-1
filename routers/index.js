const express = require('express')
const Controller = require('../controllers/Controller')
const router = express.Router()

router.get('/home', Controller.home)
router.use('/accounts', require('./customers'))
router.use('/accounts', require('./sellers'))

module.exports = router