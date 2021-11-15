const heroRouter = require('express').Router();
const HeroController = require('../controllers/heroController');

heroRouter.post('/', HeroController.createHero);

module.exports = heroRouter;
