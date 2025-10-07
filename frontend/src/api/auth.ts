// La URL base de tu API.
const BASE_URL = 'http://localhost:3000';

/**
 * Inicia sesión de un usuario llamando a la API real.
 */
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        correo: email, 
        contrasena: password 
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Credenciales incorrectas');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};

/**
 * Registra un nuevo usuario llamando a la API.
 * @param userData Un objeto con todos los datos del usuario requeridos por el backend.
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData), // Se envía el objeto completo
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'No se pudo completar el registro.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

export const getUserById = async (id: string | number) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'No se pudo obtener el usuario.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
};
