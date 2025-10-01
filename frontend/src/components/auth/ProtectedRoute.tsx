import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    // Si no hay usuario, redirige a la página de login
    return <Navigate to="/" replace />;
  }

  // Si hay usuario, permite el acceso a la página solicitada
  return <Outlet />;
};

export default ProtectedRoute;
