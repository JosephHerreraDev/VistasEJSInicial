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
  constructor(titulo, urlImagen, descripcion, precio) {
    this.titulo = titulo;
    this.urlImagen = urlImagen;
    this.descripcion = descripcion;
    this.precio = precio;
  }
  guardar() {
    this.id = Math.random().toString();
    getProductosDesdeArchivo((productos) => {
      productos.push(this);
      fs.writeFile(ruta, JSON.stringify(productos), (err) => {
        console.log(err);
      });
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
};
