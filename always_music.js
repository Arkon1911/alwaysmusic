// archivo base de datos
const { Client } = require('pg');

const client = new Client({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432, // Puerto por defecto de PostgreSQL
});

async function connect() {
  try {
    await client.connect();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = {
  client,
  connect,
};