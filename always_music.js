// Ejemplo de cómo obtener argumentos desde la consola
const args = process.argv.slice(2); // Ignoramos los primeros dos elementos
console.log("Argumentos recibidos:", args);

// app.js

const { Client } = require('pg');

// Configura la conexión a la base de datos
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

// Función para registrar un nuevo estudiante
async function registrarEstudiante(nombre, rut, curso, nivel) {
  // Implementar la lógica para insertar el estudiante en la base de datos
  
}

// Función para obtener un estudiante por rut
async function obtenerEstudiantePorRut(rut) {
  // Implementar la lógica para consultar el estudiante por rut
 
}

// ... Implementa las demás funciones ...

// Ejemplo de uso
async function main() {
  await connect();
  const [command, ...args] = process.argv.slice(2);

  if (command === 'registrar') {
    const [nombre, rut, curso, nivel] = args;
    await registrarEstudiante(nombre, rut, curso, nivel);
  } else if (command === 'consultar') {
    const [rut] = args;
    await obtenerEstudiantePorRut(rut);
  }
  // ... Implementa otros comandos según tus necesidades ...
}

main();


// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432, // Puerto por defecto de PostgreSQL
  max: 20, // Máximo de conexiones simultáneas
  idleTimeoutMillis: 5000, // Tiempo máximo de inactividad de un cliente (5 segundos)
  connectionTimeoutMillis: 2000, // Tiempo de espera para un nuevo cliente (2 segundos)
});

module.exports = pool;

// estudiantes.js
const pool = require('./db');

// 1. Agregar un nuevo estudiante
async function agregarEstudiante(nombre, rut, curso, nivel) {
  try {
    const query = {
      text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)',
      values: [nombre, rut, curso, nivel],
    };
    await pool.query(query);
    console.log('Estudiante registrado correctamente');
  } catch (error) {
    console.error('Error al registrar estudiante:', error);
  }
}

// 2. Consultar todos los estudiantes registrados
async function consultarEstudiantes() {
  try {
    const query = 'SELECT * FROM estudiantes';
    const result = await pool.query(query);
    const estudiantes = result.rows;
    console.log('Estudiantes registrados:', estudiantes);
  } catch (error) {
    console.error('Error al consultar estudiantes:', error);
  }
}

// ... Implementa las demás funciones según los requerimientos ...

module.exports = {
  agregarEstudiante,
  consultarEstudiantes,
  // ... Otras funciones ...
};
