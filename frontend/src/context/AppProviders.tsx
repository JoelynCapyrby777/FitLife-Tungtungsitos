import React from 'react';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { ModalProvider } from './ModalContext';
import { ProgressProvider } from './ProgressContext';

// Este componente agrupa todos los proveedores de contexto de la aplicación
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <ModalProvider>
          <ProgressProvider>
            {children}
          </ProgressProvider>
        </ModalProvider>
      </ToastProvider>
    </AuthProvider>
  );
};
