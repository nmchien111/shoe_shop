const express = require('express');
const { getHomePage, getFirstPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/first', getFirstPage);

module.exports = router;