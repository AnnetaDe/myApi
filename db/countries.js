const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

const worldSchema = new Schema(
  {
    en: {
      type: String,
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
  },

  { versionKey: false, timestamps: true }
);

const WorldDB = model('World', worldSchema, 'world');
module.exports = { WorldDB };
