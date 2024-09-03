const express = require('express');

const { getCountries } = require('../controllers/countriesControllers.js');

const countryRouter = express.Router();

countryRouter.get('/', getCountries);

module.exports = countryRouter;
