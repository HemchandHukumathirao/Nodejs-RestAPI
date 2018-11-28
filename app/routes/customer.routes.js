let express = require('express');
let router = express.Router();

let customers = require('../controllers/customer.controller.js');

// Create a new Customer
router.post('/api/customers', customers.create);

// Retrieve all Customer
router.get('/api/customers', customers.findAll);

// Retrieve a single Customer by Id
router.get('/api/customers/:id', customers.findOne);

// Update a Customer with Id
router.put('/api/customers', customers.update);

// Delete a Customer with Id
router.delete('/api/customers/:id', customers.delete);

module.exports = router;