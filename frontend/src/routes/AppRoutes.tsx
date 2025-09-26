import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<LoginPage />} />
      {/* Añade más rutas aquí en el futuro */}
    </Routes>
  );
}

export default AppRoutes;