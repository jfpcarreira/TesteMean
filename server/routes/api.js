// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Pessoa = require('../models/pessoa');

// Routes
Pessoa.methods(['get', 'post', 'put', 'delete']);
Pessoa.register(router, '/pessoas');

// Return router
module.exports = router;
