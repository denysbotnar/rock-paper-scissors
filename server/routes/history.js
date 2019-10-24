const routes = require('express').Router();
const HistoryService = require('../services/history');

routes.get('/', async (req, res) => {
// get all history records
  const historyEntries = await HistoryService.getAll();
  res.send(historyEntries);
});

routes.post('/', async (req, res) => {
  // create new history record
  try {
    await HistoryService.create(req.body.history);
    res.send('OK');
  } catch (error) {
    res.statusCode(500).send(error);
  }
});

module.exports = routes;
