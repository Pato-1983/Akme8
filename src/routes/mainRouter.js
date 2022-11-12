const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/contact', mainController.contact);

router.get('/help', mainController.help);

router.get('/about', mainController.about);

router.get('/navBar', mainController.navBar);

module.exports = router;

