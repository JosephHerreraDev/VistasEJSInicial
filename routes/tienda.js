const path = require('path');

const express = require('express');

const controladorProductos = require('../controllers/producto')

const router = express.Router();

router.get('/', controladorProductos.getProductos);

module.exports = router;
