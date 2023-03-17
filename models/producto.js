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
    return bd.execute(
      'INSERT INTO productos (titulo, precio, urlImagen, descripcion) VALUES (?, ?, ?, ?)',
      [this.titulo, this.precio, this.urlImagen, this.descripcion]
    )
  }
  static borrarPorId(id) {

  }
  static mostrarProductos() {
    return bd.execute('SELECT * FROM productos');
  }
  static encontrarPorId(id) {

  }
};

