import { getDB } from '../database/database';

export const insertarUsuario = async (nombre, edad) => {
  const db = await getDB();
  const resultado = await db.runAsync(
    'INSERT INTO usuarios (nombre, edad) VALUES (?, ?);',
    [nombre, edad]
  );
  return resultado.lastInsertRowId;
};

export const consultarUsuarios = async () => {
  const db = await getDB();
  const filas = await db.getAllAsync(
    'SELECT * FROM usuarios ORDER BY id DESC;'
  );
  return filas;
};

export const consultarUsuarioPorId = async (id) => {
  const db = await getDB();
  const usuario = await db.getFirstAsync(
    'SELECT * FROM usuarios WHERE id = ?;',
    [id]
  );
  return usuario;
};

export const modificarUsuario = async (id, nombre, edad) => {
  const db = await getDB();
  const resultado = await db.runAsync(
    'UPDATE usuarios SET nombre = ?, edad = ? WHERE id = ?;',
    [nombre, edad, id]
  );
  return resultado.changes;
};

export const borrarUsuario = async (id) => {
  const db = await getDB();
  const resultado = await db.runAsync(
    'DELETE FROM usuarios WHERE id = ?;',
    [id]
  );
  return resultado.changes;
};
