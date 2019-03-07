const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const { db } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.redirect('/posts');
// });

app.get('/', (req, res) => {
  // res.send('hello, world!');
  res.send(layout(''));
});

db.authenticate().then(() => {
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
