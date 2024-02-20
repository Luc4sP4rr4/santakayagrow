import { ObjectId } from "mongodb";

export const producto = {
    _id: new ObjectId,
    nombre: 'alga delta',
    marca: '9labz',
    tipo: 'fertilizante',
    descripcion: 'producto a base de algas para la estimulacion de la produccion de flora',
    precioMinorista: 99.99,
    precioMayorista: 79.99,
    costo: 49.99,
    presentacion: '250ml',
    stock:'15',
    // Otras propiedades del producto...
  };
  

// const mongoose = require('mongoose'); 

// // Definir el esquema del producto
// const productoSchema = new mongoose.Schema({
//   nombre: { type: String, required: true },
//   marca: { type: String, required: true },
//   tipo: { type: String },
//   descripcion: { type: String },
//   precioMinorista: { type: Number, required: true },
//   precioMayorista: { type: Number },
//   costo: { type: Number, required: true },
//   presentacion: { type: String },
//   // Otros campos del producto...
// });

// // Crear un modelo a partir del esquema
// const Producto = mongoose.model('Producto', productoSchema);

// module.exports = Producto;
