const path = require('path');

const express = require('express');

const controladorProducto = require('../controllers/producto');

const router = express.Router();

// /admin/agregar-producto => GET
router.get('/agregar-producto', controladorProducto.getAgregarProducto);

// /admin/agregar-producto => POST
router.post('/agregar-producto', controladorProducto.postAgregarProducto);

module.exports = router;
