const ctrl = require('../helpers/ctrl.js');
const HttpError = require('../helpers/HttpError.js');
const { WorldDB } = require('../db/countries.js');

const getCountries = async (req, res, next) => {
  try {
    const result = await WorldDB.find({});
    if (!result) {
      throw HttpError('No countries found', 404);
    }
    console.log(result);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getCountries: ctrl(getCountries),
};
