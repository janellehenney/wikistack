const express = require('express');
const { addPage } = require('../views');
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {
  try {
    res.send('entered wikirouter home');
  } catch (err) {
    next(err);
  }
});

wikiRouter.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

wikiRouter.get('/add', (req, res, next) => {
  res.send('got to GET /wiki/add');
});

module.exports = wikiRouter;
