import * as SQLite from 'expo-sqlite';

let dbPromise = null;

export const initDB = async () => {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = await SQLite.openDatabaseAsync('usuarios.db');
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          edad INTEGER NOT NULL
        );
      `);
      return db;
    })();
  }
  return dbPromise;
};

export const getDB = async () => {
  return await initDB();
};