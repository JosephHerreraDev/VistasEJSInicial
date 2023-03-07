const Producto = require("../models/producto");
exports.getAgregarProducto = (req, res, next) => {
  res.render("agregar-producto", {
    tituloPagina: "Agregar Productos Nuevos",
    path: "/admin/agregar-producto",
  });
};
exports.postAgregarProducto = (req, res, next) => {
  const producto = new Producto(req.body.titulo);
  producto.guardar();
  res.redirect("/");
};
exports.getProductos = (req, res, next) => {
  Producto.mostrarTodo(productos => {
    res.render("tienda", {
      prods: productos,
      tituloPagina: "Tienda",
      path: "/",
      tieneProductos: productos.length > 0,
    });
  });
};
