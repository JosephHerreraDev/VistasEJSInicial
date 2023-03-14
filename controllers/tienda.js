const Producto = require("../models/producto");
const Carrito = require("../models/carrito");

exports.getProductos = (req, res, next) => {
  Producto.mostrarTodo((productos) => {
    res.render("tienda/lista-productos", {
      prods: productos,
      tituloPagina: "Todos los productos",
      ruta: "/productos",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Producto.mostrarTodo((productos) => {
    res.render("tienda/index", {
      prods: productos,
      tituloPagina: "Tienda",
      ruta: "/",
    });
  });
};

exports.getCarrito = (req, res, next) => {
  res.render("tienda/carrito", {
    tituloPagina: "Su Carrito",
    ruta: "/carrito",
  });
};

exports.getOrdenes = (req, res, next) => {
  res.render("tienda/ordenes", {
    ruta: "/ordenes",
    tituloPagina: "Sus Ordenes",
  });
};

exports.getComprarAhora = (req, res, next) => {
  res.render("tienda/comprar-ahora", {
    tituloPagina: "Comprar Ahora",
  });
};
exports.getProducto = (req, res, next) => {
  const idProd = req.params.idProducto;
  Producto.encontrarPorId(idProd, (producto) => {
    res.render("tienda/detalle-producto", {
      producto: producto,
      tituloPagina: producto.titulo,
      ruta: "/productos",
    });
  });
};

exports.postCarrito = (req, res, next) => {
  const idProd = req.body.idProducto;
  Producto.encontrarPorId(idProd, producto => {
  Carrito.agregarProducto(idProd, producto.precio);
  });
  res.redirect('/carrito');
};


