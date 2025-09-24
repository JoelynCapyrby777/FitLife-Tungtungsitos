import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Añade más rutas aquí en el futuro */}
    </Routes>
  );
}

export default AppRoutes;