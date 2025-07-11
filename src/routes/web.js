const express = require('express');
const { getHomePage, getFirstPage, createNewUser, createUserPage, editUserPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/create', createUserPage);

router.get('/update/:id', editUserPage);

router.post('/create-user', createNewUser);

router.get('/first', getFirstPage);

module.exports = router;