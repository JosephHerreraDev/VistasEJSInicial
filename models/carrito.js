const fs = require("fs");
const path = require("path");
const ruta = path.join(
  path.dirname(process.mainModule.filename),
  "datos",
  "carrito.json"
);
module.exports = class Carrito {
  static agregarProducto(id, precioProducto) {
    // Obtener el carrito anterior
    fs.readFile(ruta, (err, fileContent) => {
      let carrito = { productos: [], precioTotal: 0 };
      if (!err) {
        carrito = JSON.parse(fileContent);
      }
      // Analizar el carrito => Encontrar productos existente
      const indiceProductoExistente = carrito.productos.findIndex(
        (prod) => prod.id === id
      );
      const productoExistente = carrito.productos[indiceProductoExistente];
      let productoActualizado;
      // Agregar un producto nuevo/ incrementar la cantidad
      if (productoExistente) {
        productoActualizado = { ...productoExistente };
        productoActualizado.cant = productoActualizado.cant + 1;
        carrito.productos = [...carrito.productos];
        carrito.productos[indiceProductoExistente] = productoActualizado;
      } else {
        productoActualizado = { id: id, cant: 1 };
        carrito.productos = [...carrito.productos, productoActualizado];
      }
      carrito.precioTotal = carrito.precioTotal + +precioProducto;
      fs.writeFile(ruta, JSON.stringify(carrito), (err) => {
        console.log(err);
      });
    });
  }
  static borrarProducto(id, precioProducto) {
    fs.readFile(ruta, (err, fileContent) => {
      if (err) {
        return;
      }
      const carritoActualizado = { ...JSON.parse(fileContent) };
      const producto = carritoActualizado.productos.find(
        (prod) => prod.id === id
      );
      if (!producto) {
        return;
      }
      const cantProducto = producto.cant;
      carritoActualizado.productos = carritoActualizado.productos.filter(
        (prod) => prod.id !== id
      );
      carritoActualizado.precioTotal =
        carritoActualizado.precioTotal - precioProducto * cantProducto;

      fs.writeFile(ruta, JSON.stringify(carritoActualizado), (err) => {
        console.log(err);
      });
    });
  }
  static getCarrito(cb) {
    fs.readFile(ruta, (err, fileContent) => {
      const carrito = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(carrito);
      }
    });
  }
  static borrarProducto(id, precioProducto) {
    fs.readFile(ruta, (err, fileContent) => {
      if (err) {
        return;
      }
      const carritoActualizado = { ...JSON.parse(fileContent) };
      const producto = carritoActualizado.productos.find(
        (prod) => prod.id === id
      );
      const cantProducto = producto.cant;
      carritoActualizado.productos = carritoActualizado.productos.filter(
        (prod) => prod.id !== id
      );
      carritoActualizado.precioTotal =
        carritoActualizado.precioTotal - precioProdu;
      cto * cantProducto;
      fs.writeFile(ruta, JSON.stringify(carritoActualizado), (err) => {
        console.log(err);
      });
    });
  }
  static getCarrito(cb) {
    fs.readFile(ruta, (err, fileContent) => {
      const carrito = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(carrito);
      }
    });
  }
};
