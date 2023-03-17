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
  const precio = req.body.precio;
  const desc = req.body.descripcion;
  const producto = new Producto(null, titulo, urlImagen, desc, precio);
  producto.guardar()
  .then(() => {
    res.redirect("/");
  })
  .catch((err) => console.log(err));
};

exports.postEditarProducto = (req, res, next) => {
  const idProd = req.body.idProducto;
  const tituloActualizado = req.body.titulo;
  const precioActualizado = req.body.precio;
  const urlImagenActualizada = req.body.urlImagen;
  const descActualizada = req.body.descripcion;
  const productoActualizado = new Producto(
    idProd,
    tituloActualizado,
    urlImagenActualizada,
    descActualizada,
    precioActualizado
  );
  productoActualizado.guardar();
  res.redirect("/admin/productos");
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

exports.postBorrarProducto = (req, res, next) => {
  const idProd = req.body.idProducto;
  Producto.borrarPorId(idProd);
  res.redirect('/admin/productos');
  };
