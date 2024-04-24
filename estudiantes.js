// estudiantes.js
const db = require('./db');

// 1. Registrar un nuevo estudiante
async function registrarEstudiante(nombre, rut, curso, nivel) {
  try {
    await db.connect();
    const query = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
    await db.client.query(query, [nombre, rut, curso, nivel]);
    console.log('Estudiante registrado correctamente');
  } catch (error) {
    console.error('Error al registrar estudiante:', error);
  } finally {
    await db.client.end();
  }
}

// 2. Obtener registro de un estudiante por rut
async function obtenerEstudiantePorRut(rut) {
  try {
    await db.connect();
    const query = 'SELECT * FROM estudiantes WHERE rut = $1';
    const result = await db.client.query(query, [rut]);
    console.log('Estudiante encontrado:', result.rows[0]);
  } catch (error) {
    console.error('Error al obtener estudiante por rut:', error);
  } finally {
    await db.client.end();
  }
}

// 3. Obtener todos los estudiantes registrados
async function obtenerTodosLosEstudiantes() {
  try {
    await db.connect();
    const query = 'SELECT * FROM estudiantes';
    const result = await db.client.query(query);
    console.log('Estudiantes registrados:', result.rows);
  } catch (error) {
    console.error('Error al obtener estudiantes registrados:', error);
  } finally {
    await db.client.end();
  }
}

// 4. Actualizar información de un estudiante
async function actualizarEstudiante(rut, nuevoNombre, nuevoCurso, nuevoNivel) {
  try {
    await db.connect();
    const query = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4';
    await db.client.query(query, [nuevoNombre, nuevoCurso, nuevoNivel, rut]);
    console.log('Información del estudiante actualizada correctamente');
  } catch (error) {
    console.error('Error al actualizar información del estudiante:', error);
  } finally {
    await db.client.end();
  }
}

// 5. Eliminar registro de un estudiante
async function eliminarEstudiante(rut) {
  try {
    await db.connect();
    const query = 'DELETE FROM estudiantes WHERE rut = $1';
    await db.client.query(query, [rut]);
    console.log('Estudiante eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar estudiante:', error);
  } finally {
    await db.client.end();
  }
}

module.exports = {
    registrarEstudiante,
    obtenerEstudiantePorRut,
    obtenerTodosLosEstudiantes,
    actualizarEstudiante,
    eliminarEstudiante,
  };