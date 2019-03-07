const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki/', wikiRouter);
app.use('/user/', userRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

app.get('/', (req, res) => {
  // res.send('hello, world!');
  res.send(layout(''));
});

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`app is listening port ${PORT}`);
  });
};

init();
