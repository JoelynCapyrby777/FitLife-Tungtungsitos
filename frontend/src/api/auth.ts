// src/api/auth.ts

/**
 * Simula una llamada a la API para verificar si un correo electrónico ya está registrado.
 * @param email El correo electrónico a verificar.
 * @returns Una promesa que resuelve a `true` si el email existe, `false` si no.
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  console.log(`Verificando si el email "${email}" existe...`);
  await new Promise(resolve => setTimeout(resolve, 500));

  const existingUsers = ['usuario.existente@gmail.com', 'test@dominio.com'];

  return existingUsers.includes(email.toLowerCase());
};

