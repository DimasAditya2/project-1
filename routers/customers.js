const express = require('express')
const Customer = require('../controllers/customers')
const customers = express.Router()

// ? Customer login
customers.get('/customers/login', Customer.renderLogUser)
customers.post('/customers/login', Customer.handlerLogUser)

// ? Customer register
customers.get('/customers/register', Customer.renderRegUser)
customers.post('/customers/register', Customer.handlerLogUser)




module.exports = customers