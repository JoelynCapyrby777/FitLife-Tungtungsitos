import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Este es el "cadenero" de la entrada.
// Si YA has iniciado sesión, no te deja ver el login de nuevo y te manda al home.
const PublicRoute: React.FC = () => {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
