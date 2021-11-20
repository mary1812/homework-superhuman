const heroRouter = require('express').Router();
const HeroController = require('../controllers/heroController');

heroRouter.post('/', HeroController.createHero);

heroRouter.patch('/:id', HeroController.updateHero);

heroRouter.delete('/:id', HeroController.deleteHero);

module.exports = heroRouter;
