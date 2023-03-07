const fs = require("fs");
const path = require("path");
const ruta = path.join( 
  path.dirname(process.mainModule.filename),
  "datos",
  "productos.json");

const getProductosDesdArchivo = (cb) => {
  fs.readFile(ruta, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Producto {
  constructor(titulo) {
    this.titulo = titulo;
  }
  guardar() {
    getProductosDesdArchivo(productos => {
      productos.push(this);
      fs.writeFile(ruta, JSON.stringify(productos), (err) => {
        console.log(err);
      });
    });
  }
  static mostrarTodo(cb) {
    getProductosDesdArchivo(cb);
  }
};
