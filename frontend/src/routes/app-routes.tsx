import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/Homepage';
import RegisterPage from '../pages/RegisterPage';
import RecoverAccountPage from '../pages/RecoverAccountPage';
import VerifyCodePage from '../pages/VerifyCodeoage';
import ChangePasswordPage from '../pages/ChagePasswordPage';
// Suponiendo que creas estos archivos:
// import RegisterPage from '../pages/RegisterPage';
// import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => {
  return (

      <Routes>
        {/* El componente Layout se aplica a todas estas rutas */}
        <Route path="/" element={<Layout />}>
        
          {/* ---- PÁGINAS ---- */}
          <Route path='/cambiarContraseña' element={<ChangePasswordPage/>} />
          <Route path= '/verificar' element={<VerifyCodePage/>} />
          <Route path= '/recuperar' element={<RecoverAccountPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route index element={<LoginPage />} />
          <Route path='home' element={<HomePage />} />
          
        </Route>
      </Routes>

  );
};

export default AppRoutes;

