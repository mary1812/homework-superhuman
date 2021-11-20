const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

// router.get('/heros');

router.post('/hero', heroController.createHero);

router.patch('/hero/:id', heroController.updateHero);

router.delete('/hero/:id', heroController.deleteHero);

module.exports = router;