const Producto = require("../models/producto");
const Carrito = require("../models/carrito");

exports.getProductos = (req, res, next) => {
  Producto.mostrarProductos()
  .then(([filas, datosCampo]) => {
    res.render("tienda/lista-productos", {
      prods: filas,
      tituloPagina: "Todos los productos",
      ruta: "/productos",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Producto.mostrarProductos()
  .then(([filas, datosCampo]) => {
    res.render("tienda/index", {
      prods: filas,
      tituloPagina: "Tienda",
      ruta: "/",
    });
  })
  .catch((err) => console.log(err));
};

exports.getCarrito = (req, res, next) => {
  Carrito.getCarrito((carrito) => {
    Producto.mostrarProductos((productos) => {
      const productosCarrito = [];
      for (producto of productos) {
        const datosProductoEnCarrito = carrito.productos.find(
          (prod) => prod.id === producto.id
        );
        if (datosProductoEnCarrito) {
          productosCarrito.push({
            datosProducto: producto,
            cant: datosProductoEnCarrito.cant,
          });
        }
      }
      res.render("tienda/carrito", {
        ruta: "/carrito",
        tituloPagina: "Su Carrito",
        productos: productosCarrito,
      });
    });
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
  Producto.encontrarPorId(idProd)
  .then(([producto]) => {
    res.render("tienda/detalle-producto", {
      producto: producto[0],
      tituloPagina: producto.titulo,
      ruta: "/productos",
    });
  })
  .catch((err) => console.log(err));
};

exports.postCarrito = (req, res, next) => {
  const idProd = req.body.idProducto;
  Producto.encontrarPorId(idProd, (producto) => {
    Carrito.agregarProducto(idProd, producto.precio);
  });
  res.redirect("/carrito");
};

exports.postBorrarArticuloCarrito = (req, res, next) => {
  const idProd = req.body.idProducto;
  Producto.encontrarPorId(idProd, producto => {
  Carrito.borrarProducto(idProd, producto.precio);
  res.redirect('/carrito');
  });
  };
