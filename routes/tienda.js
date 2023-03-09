const path = require('path');

const express = require('express');
const controladorTienda = require('../controllers/tienda');
const router = express.Router();

router.get('/', controladorTienda.getIndex);
router.get('/productos', controladorTienda.getProductos);
router.get('/carrito', controladorTienda.getCarrito);
router.get('/comprar-ahora', controladorTienda.getComprarAhora);

module.exports = router;
