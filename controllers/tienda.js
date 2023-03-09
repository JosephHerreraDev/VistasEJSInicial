const Producto = require("../models/producto");

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
}