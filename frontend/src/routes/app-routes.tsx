import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout/Layout';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/Homepage';

const AppRoutes = () => {
  return (

      <Routes>
        {/* El componente Layout se aplica a todas estas rutas */}
        <Route path="/" element={<Layout />}>
        
          {/* ---- PÁGINAS ---- */}
          
          <Route index element={<LoginPage />} />
          <Route path='1' element={<HomePage />} />
          
        </Route>
      </Routes>

  );
};

export default AppRoutes;

