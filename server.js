const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const countriesRouter = require('./routes/countriesRouter');
const { configDotenv } = require('dotenv');

const PORT = configDotenv().parsed.PORT;
const startServer = () => {
  app.use(morgan('tiny'));
  app.use(cors());
  app.use(express.json());
  app.use('/api/world', countriesRouter);

  app.use((_, res) => {
    res.status(404).json({ message: 'you are using my api' });
  });
  app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
  });
  app.listen(3000, () => {
    console.log('Server is on and OK.:', PORT);
  });
};
module.exports = startServer;
