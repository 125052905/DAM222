export const guardarEnStorage = async (clave, valor) => {
  try {
    const jsonValue = JSON.stringify(valor);
    window.localStorage.setItem(clave, jsonValue);
  } catch (error) {
    console.error('Error al guardar en LocalStorage:', error);
    throw error;
  }
};

export const obtenerDeStorage = async (clave) => {
  try {
    const jsonValue = window.localStorage.getItem(clave);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error al leer de LocalStorage:', error);
    throw error;
  }
};

export const eliminarDeStorage = async (clave) => {
  try {
    window.localStorage.removeItem(clave);
  } catch (error) {
    console.error('Error al eliminar de LocalStorage:', error);
    throw error;
  }
};