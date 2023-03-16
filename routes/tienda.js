const path = require('path');

const express = require('express');
const controladorTienda = require('../controllers/tienda');
const router = express.Router();

router.get('/', controladorTienda.getIndex);
router.get('/productos', controladorTienda.getProductos);
router.get('/productos/:idProducto', controladorTienda.getProducto);
router.get('/carrito', controladorTienda.getCarrito);
router.post('/eliminar-articulo-carrito', controladorTienda.postBorrarArticuloCarrito);
router.get('/ordenes', controladorTienda.getOrdenes);
router.get('/comprar-ahora', controladorTienda.getComprarAhora);
router.post('/carrito', controladorTienda.postCarrito);

module.exports = router;
