import React, { createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { User } from '../types'; // Importamos nuestro tipo de usuario

// La respuesta completa de la API de login
interface AuthResponse {
  token: string;
  User: User;
}

interface AuthContextType {
  user: User | null;
  login: (authData: AuthResponse) => void;
  logout: () => void;
  isLoading: boolean; // Para saber si estamos verificando la sesión inicial
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Empezamos cargando

  useEffect(() => {
    // Al cargar la app, revisamos si hay un token guardado
    try {
      const storedToken = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('authUser');

      if (storedToken && storedUser) {
        // Si encontramos token y usuario, lo restauramos
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error al restaurar la sesión", error);
    } finally {
      setIsLoading(false); // Terminamos de cargar
    }
  }, []);

  const login = (authData: AuthResponse) => {
    setUser(authData.User);
    localStorage.setItem('authToken', authData.token);
    localStorage.setItem('authUser', JSON.stringify(authData.User)); // Guardamos el usuario también
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  // No renderizamos la app hasta saber si hay o no sesión
  if (isLoading) {
    return <div>Cargando...</div>; // O un componente Spinner a pantalla completa
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};