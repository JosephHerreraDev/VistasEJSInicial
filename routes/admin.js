const path = require('path');
const express = require('express');
const controladorAdmin = require('../controllers/admin');
const router = express.Router();

router.get('/agregar-producto', controladorAdmin.getAgregarProducto);
router.post('/agregar-producto', controladorAdmin.postAgregarProducto);
router.post('/editar-producto/', controladorAdmin.postEditarProducto);
router.post('/borrar-producto', controladorAdmin.postBorrarProducto);
router.get('/editar-producto/:idProducto', controladorAdmin.getEditarProducto);
router.get('/productos', controladorAdmin.getProductos);
router.post('/producto', controladorAdmin.postAgregarProducto);

module.exports = router;
