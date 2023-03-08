const Producto = require("../models/producto");

exports.getAgregarProducto = (req, res, next) => {
  res.render("admin/agregar-producto", {
    tituloPagina: "Agregar Producto",
    path: "/admin/agregar-producto",
  });
};

exports.getProductos = (req, res, next) => {
  Producto.mostrarTodo(productos => {
    res.render("tienda/lista-productos", {
      prods: productos,
      tituloPagina: "Tienda",
      path: "/",
      tieneProductos: productos.length > 0,
    });
  });
};

exports.postAgregarProducto = (req, res, next) => {
  const producto = new Producto(req.body.titulo);
  producto.guardar();
  res.redirect("/");
};