const express = require('express');
const heroController = require('./controllers/heroController')
const app = express();

const bodyParser = express.json();

app.use(bodyParser);

app.get('/heros', async function (req, res, next) {
  console.log('heros not found');
});

app.post('/hero', heroController.createHero);

module.exports = app;