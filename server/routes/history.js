const routes = require('express').Router();
const HistoryService = require('../services/history');

routes.get('/', async (req, res) => {
// get all history records
  try {
    const historyEntries = await HistoryService.getAll();
    res.send(historyEntries);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

routes.post('/', async (req, res) => {
  // create new history record
  const { type, winner } = req.body;
  if (!type || !winner) {
    return res.status(400).send('Bad data');
  }
  try {
    await HistoryService.create({ type, winner });
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = routes;
