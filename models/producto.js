const fs = require("fs");
const path = require("path");
const ruta = path.join(
  path.dirname(process.mainModule.filename),
  "datos",
  "productos.json"
);

const getProductosDesdeArchivo = (cb) => {
  fs.readFile(ruta, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Producto {
  constructor(id, titulo, urlImagen, descripcion, precio) {
    this.id = id;
    this.titulo = titulo;
    this.urlImagen = urlImagen;
    this.descripcion = descripcion;
    this.precio = precio;
  }
  guardar() {
    getProductosDesdeArchivo((productos) => {
      if (this.id) {
        const indiceProductoExistente = productos.findIndex(
          (prod) => prod.id === this.id
        );
        const productosActualizados = [...productos];
        productosActualizados[indiceProductoExistente] = this;
        fs.writeFile(ruta, JSON.stringify(productosActualizados), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        productos.push(this);
        fs.writeFile(ruta, JSON.stringify(productos), (err) => {
          console.log(err);
        });
      }
    });
  }
  static mostrarTodo(cb) {
    getProductosDesdeArchivo(cb);
  }
  static encontrarPorId(id, cb) {
    getProductosDesdeArchivo((productos) => {
      const producto = productos.find((p) => p.id === id);
      cb(producto);
    });
  }
  static borrarPorId(id) {
    getProductosDesdeArchivo( productos => {
    const productosActualizados = productos.filter(prod => prod.id !== id);
    fs.writeFile(ruta, JSON.stringify(productosActualizados), err = {
    if(err) {
      
    }
    });
    });
  }
};
