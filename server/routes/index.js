const routes = require('express').Router();
const history = require('./history');

routes.use('/history', history);

module.exports = routes;
