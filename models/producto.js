const Carrito = require("./carrito");
const bd = require("../util/basedatos");

module.exports = class Producto {
  constructor(id, titulo, urlImagen, descripcion, precio) {
    this.id = id;
    this.titulo = titulo;
    this.urlImagen = urlImagen;
    this.descripcion = descripcion;
    this.precio = precio;
  }
  guardar() { 

  }
  static borrarPorId(id) {

  }
  static mostrarProductos() {
    return bd.execute('SELECT * FROM productos');
  }
  static encontrarPorId(id) {

  }
};

