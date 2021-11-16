const heroRouter = require('express').Router();
const HeroController = require('../controllers/heroController');

heroRouter.post('/', HeroController.createHero);

heroRouter.patch('/', HeroController.updateHero);

heroRouter.delete('/:id', HeroController.deleteHero);

module.exports = heroRouter;
