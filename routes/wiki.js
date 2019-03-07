const express = require("express");
const addPage = require("/views/addPage");
const wikiRouter = express.Router();

wikiRouter.get("/", (req, res, next) => {
  try {
    res.send("entered wikirouter home");
  } catch (err) {
    next(err);
  }
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
