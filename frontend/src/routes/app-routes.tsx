import { Routes, Route } from 'react-router-dom';

// Importamos los guardias de seguridad
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

// Importamos el Layout y todas las páginas
import { Layout } from '../components/layout';

import {
  LoginPage,
  RegisterPage,
  RecoverAccountPage,
  VerifyCodePage,
  ChangePasswordPage,
  HomePage,
  ProfilePage,
  RoutinesPage,
  RoutineDetailPage,
  WorkoutPage,
  ProgressPage
} from '../pages';

// Renombramos a AppRouter para consistencia con la nueva carpeta /router
const AppRouter = () => {
  return (
    <Routes>
      {/* --- ZONA PÚBLICA --- */}
      {/* El guardia PublicRoute protege estas rutas.
          Si ya iniciaste sesión, te redirigirá al Home. */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recuperar" element={<RecoverAccountPage />} />
        <Route path="/verificar" element={<VerifyCodePage />} />
        <Route path="/cambiarContraseña" element={<ChangePasswordPage />} />
      </Route>

      {/* --- ZONA VIP (PRIVADA) --- */}
      {/* El guardia PrivateRoute protege todo lo que está adentro.
          Si no has iniciado sesión, te redirigirá a /login. */}
      <Route element={<PrivateRoute />}>
        {/* Rutas que usan el Layout (Header/Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="routines" element={<RoutinesPage />} />
          <Route path="routines/:routineId" element={<RoutineDetailPage />} />
          <Route path="progress" element={<ProgressPage />} />
        </Route>
        
        {/* Ruta inmersiva sin Layout para una experiencia enfocada */}
        <Route path="/workout/:routineId" element={<WorkoutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

