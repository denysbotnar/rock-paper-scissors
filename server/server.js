require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const { API_PORT } = process.env;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api/v1', routes);

app.listen(API_PORT, () => {
  console.log(`Example app listening on port ${API_PORT}!`);
});
