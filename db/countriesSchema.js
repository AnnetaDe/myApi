const Joi = require('joi');
const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

const countrySchema = new Schema({
  en: {
    type: String,
    required: true,
  },
  alpha2: {
    type: String,
  },
  translations: {
    type: Object,
  },
  flag: {
    type: String,
  },
});

countrySchema.post('save', handleMongooseError);
const countryDB = model('country', countrySchema);
module.exports = countryDB;
