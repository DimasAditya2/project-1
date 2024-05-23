const express = require('express')
const Sellers = require('../controllers/sellers')
const sellers = express.Router()


// login
sellers.get('/sellers/login', Sellers.renderLogSeller)
sellers.post('/sellers/login', Sellers.handlerRegSeller)
// register
sellers.get('/sellers/register', Sellers.renderRegSeller)
sellers.post('/sellers/register', Sellers.handlerRegSeller)

module.exports = sellers