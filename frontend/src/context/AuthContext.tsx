
import { createContext, useState, useContext, type ReactNode } from 'react';

// Definimos cómo se verá un objeto de usuario
interface User {
  email: string;
}

interface AuthContextType {
  user: User | null; // El usuario puede existir (User) o no (null)
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // Aquí podrías guardar el usuario en localStorage para persistir la sesión
  };

  const logout = () => {
    setUser(null);
    // Aquí limpiarías el localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};