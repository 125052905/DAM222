import { guardarEnStorage, obtenerDeStorage, eliminarDeStorage } from '../storage/localStorage';

const STORAGE_KEY = 'usuarios_app';

const validarUsuario = ({ nombre, edad }) => {
  if (!nombre || nombre.trim().length < 2) {
    throw new Error('El nombre es obligatorio y debe tener al menos 2 caracteres.');
  }
  const edadNum = Number(edad);
  if (!edad || isNaN(edadNum) || edadNum <= 0 || edadNum > 120) {
    throw new Error('Ingresa una edad válida (entre 1 y 120).');
  }
};

export const obtenerUsuarios = async () => {
  const usuarios = await obtenerDeStorage(STORAGE_KEY);
  return Array.isArray(usuarios) ? usuarios : [];
};

export const obtenerUsuarioPorId = async (id) => {
  const usuarios = await obtenerUsuarios();
  return usuarios.find((u) => String(u.id) === String(id)) || null;
};

export const agregarUsuario = async ({ nombre, edad }) => {
  validarUsuario({ nombre, edad });
  const usuarios = await obtenerUsuarios();

  const nuevoUsuario = {
    id: Date.now().toString(),
    nombre: nombre.trim(),
    edad: Number(edad),
  };

  await guardarEnStorage(STORAGE_KEY, [...usuarios, nuevoUsuario]);
  return nuevoUsuario;
};

export const actualizarUsuario = async (id, { nombre, edad }) => {
  validarUsuario({ nombre, edad });
  const usuarios = await obtenerUsuarios();

  const indice = usuarios.findIndex((u) => String(u.id) === String(id));
  if (indice === -1) {
    throw new Error('Usuario no encontrado.');
  }

  usuarios[indice] = {
    ...usuarios[indice],
    nombre: nombre.trim(),
    edad: Number(edad),
  };

  await guardarEnStorage(STORAGE_KEY, usuarios);
  return usuarios[indice];
};

export const eliminarUsuario = async (id) => {
  const usuarios = await obtenerUsuarios();
  const listaFiltrada = usuarios.filter((u) => String(u.id) !== String(id));
  await guardarEnStorage(STORAGE_KEY, listaFiltrada);
};

export const limpiarUsuarios = async () => {
  await eliminarDeStorage(STORAGE_KEY);
};