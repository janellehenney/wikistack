const express = require("express");
//const addPage = require("../views/addPage");
const wikiRouter = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

wikiRouter.get("/", (req, res, next) => {
  try {
    res.send("entered wikirouter home");
  } catch (err) {
    next(err);
  }
});

wikiRouter.post("/", async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
