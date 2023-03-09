const Producto = require("../models/producto");

exports.getAgregarProducto = (req, res, next) => {
  res.render("admin/agregar-producto", {
    tituloPagina: "Agregar Producto",
    ruta: "/admin/agregar-producto",
  });
};

exports.postAgregarProducto = (req, res, next) => {
  const titulo = req.body.titulo;
  const urlImagen = req.body.urlImagen;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const producto = new Producto(titulo, urlImagen, descripcion, precio);
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
