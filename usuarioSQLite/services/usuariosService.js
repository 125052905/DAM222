import { insertarUsuario,consultarUsuarios,consultarUsuarioPorId,modificarUsuario,borrarUsuario,} from '../repositories/usuariosRepository';

const validarUsuario = ({ nombre, edad }) => {
  if (!nombre || String(nombre).trim() === '') {
    throw new Error('El nombre es obligatorio');
  }
  const edadNumero = Number(edad);
  if (!edad || isNaN(edadNumero) || !Number.isInteger(edadNumero) || edadNumero <= 0) {
    throw new Error('La edad debe ser un número entero mayor a 0');
  }
  return {
    nombreLimpio: String(nombre).trim(),
    edadNumero,
  };
};

export const agregarUsuario = async ({ nombre, edad }) => {
  const { nombreLimpio, edadNumero } = validarUsuario({ nombre, edad });
  return await insertarUsuario(nombreLimpio, edadNumero);
};

export const obtenerUsuarios = async () => {
  return await consultarUsuarios();
};

export const obtenerUsuarioPorId = async (id) => {
  if (!id) return null;
  return await consultarUsuarioPorId(Number(id));
};

export const actualizarUsuario = async (id, { nombre, edad }) => {
  if (!id) {
    throw new Error('ID de usuario no valido');
  }
  const { nombreLimpio, edadNumero } = validarUsuario({ nombre, edad });
  return await modificarUsuario(Number(id), nombreLimpio, edadNumero);
};

export const eliminarUsuario = async (id) => {
  if (!id) {
    throw new Error('ID de usuario no valido');
  }
  return await borrarUsuario(Number(id));
};