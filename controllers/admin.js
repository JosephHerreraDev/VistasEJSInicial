const Producto = require("../models/producto");

exports.getEditarProducto = (req, res, next) => {
  const modoEditar = req.query.editar;
  if (!modoEditar) {
    return res.redirect("/");
  }
  const idProd = req.params.idProducto;
  Producto.encontrarPorId(idProd, (producto) => {
    if (!producto) {
      return res.redirect("/");
    }
    res.render("admin/editar-producto", {
      tituloPagina: "Editar Producto",
      ruta: "/admin/editar-producto",
      editando: modoEditar,
      producto: producto,
    });
  });
};

exports.getAgregarProducto = (req, res, next) => {
  res.render("admin/editar-producto", {
    tituloPagina: "Agregar Productos",
    ruta: "/admin/agregar-producto",
    editando: false,
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

exports.postEditarProducto = (req, res, next) => {
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
