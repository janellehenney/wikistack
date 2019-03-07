const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');
const { wikipage } = require('../views');

wikiRouter.get('/', (req, res, next) => {
  try {
    res.send('entered wikirouter home');
  } catch (err) {
    next(err);
  }
});

wikiRouter.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await page.save();
    res.redirect('/');
    console.log(page);
  } catch (error) {
    next(error);
  }
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});

wikiRouter.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikipage(page, 'Janelle'));
  } catch (error) {
    next(error);
  }
});

module.exports = wikiRouter;
