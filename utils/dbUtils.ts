import { connectToDatabase } from "../api/db";
import { producto }from "../api/products";
// Crear un nuevo producto
export async function crearProducto(producto: any) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('products');
      const resultado = await collection.insertOne(producto);
      return resultado.insertedId;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw new Error('Error al crear el producto');
    }
  }

  
  
  // Crear un nuevo usuario
  export async function crearUsuario(usuario: any) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('usuarios');
      const resultado = await collection.insertOne(usuario);
      return resultado.insertedId;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw new Error('Error al crear el usuario');
    }
  }
  
// Leer todos los productos
export async function obtenerProductos() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('products');
      const productos = await collection.find().toArray();
      console.log(productos)
      return productos;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('Error al obtener los productos');
    }
  }
  
  // Leer todos los usuarios
  export async function obtenerUsuarios() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('usuarios');
      const usuarios = await collection.find().toArray();
      return usuarios;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw new Error('Error al obtener los usuarios');
    }
  }

  // Actualizar un producto por su ID
export async function actualizarProducto(id: string, productoActualizado: any) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('productos');
      const resultado = await collection.updateOne({ _id: id }, { $set: productoActualizado });
      return resultado.modifiedCount;
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      throw new Error('Error al actualizar el producto');
    }
  }
  
  // Actualizar un usuario por su ID
  export async function actualizarUsuario(id: string, usuarioActualizado: any) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('usuarios');
      const resultado = await collection.updateOne({ _id: id }, { $set: usuarioActualizado });
      return resultado.modifiedCount;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw new Error('Error al actualizar el usuario');
    }
  }

  // Eliminar un producto por su ID
export async function eliminarProducto(id: string) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('productos');
      const resultado = await collection.deleteOne({ _id: id });
      return resultado.deletedCount;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      throw new Error('Error al eliminar el producto');
    }
  }
  
  // Eliminar un usuario por su ID
  export async function eliminarUsuario(id: string) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('usuarios');
      const resultado = await collection.deleteOne({ _id: id });
      return resultado.deletedCount;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw new Error('Error al eliminar el usuario');
    }
  }
  