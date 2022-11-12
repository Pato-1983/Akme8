const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/API/productsApiController');

router.get('/', productsApiController.list)
//router.get('/lastProduct', productApiController.lastProduct)
//router.get('/search', productApiController.search)
//router.get('/filter', productApiController.filter)
router.get('/:id', productsApiController.detail)

module.exports = router;