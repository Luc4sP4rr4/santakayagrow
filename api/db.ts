// db.ts

import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'SantaKayaGrow';

export async function connectToDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Conexión a la base de datos establecida');
    return client.db(dbName);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw new Error('Error al conectar a la base de datos');
  }
}
