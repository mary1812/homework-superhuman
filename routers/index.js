const express = require('express');
const router = express.Router();

const heroRouter = require('./heroRouter');

router.use('/hero', heroRouter);



module.exports = router;