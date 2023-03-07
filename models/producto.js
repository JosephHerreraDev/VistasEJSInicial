const fs = require("fs");
const path = require("path");
module.exports = class Producto {
  constructor(titulo) {
    this.titulo = titulo;
  }
  guardar() {
    const ruta = path.join(
      path.dirname(process.mainModule.filename),
      "datos",
      "productos.json"
    );
    // Leer archivos de esta manera, no es lo mas recomendable
    // hay otra funcion createReadStream la cual funciona mejor
    fs.readFile(ruta, (err, fileContent) => {
      let productos = [];
      if (!err) {
        productos = JSON.parse(fileContent);
      }
      productos.push(this);
      fs.writeFile(ruta, JSON.stringify(productos), (err) => {
        console.log(err);
      });
    });
  }
  static mostrarTodo(cb) {
    const ruta = path.join(
      path.dirname(process.mainModule.filename),
      "datos",
      "productos.json"
    );
    fs.readFile(ruta, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};
