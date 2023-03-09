const Producto = require("../models/producto");

exports.getAgregarProducto = (req, res, next) => {
  res.render("admin/agregar-producto", {
    tituloPagina: "Agregar Producto",
    ruta: "/admin/agregar-producto",
  });
};

exports.postAgregarProducto = (req, res, next) => {
  const producto = new Producto(req.body.titulo);
  producto.guardar();
  res.redirect("/");
};

exports.getProductos = (req, res, next) => {
  Producto.mostrarTodo((productos) => {
    res.render("admin/productos", {
      prods: productos,
      tituloPagina: "Administrar Productos",
      ruta: "/admin/productos",
    });
  });
};
