const express = require('express');
const router = express.Router();

const HeroController = require('../controllers/heroController');

router.post('/hero', HeroController.createHero);

router.patch('/hero/:id', HeroController.updateHero);

router.delete('/hero/:id', HeroController.deleteHero);

module.exports = router;
