import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, PasswordInput, FormLink } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { loginUser } from '../../api/auth';
import AuthTabs from '../../components/ui/AuthTabs/AuthTabs';
import AuthSplitLayout from '../../components/ui/AuthSplitContainer/AuthSplitLayout';
import LoginLeftContent from '../../components/ui/AuthMessages/LoginLeftContent';
import "../../components/ui/AuthMessages/Animation.css"
import "./login-page.css";

const LoginPage: React.FC = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [activeTab] = useState<'login' | 'register'>('login');

  const handleTabClick = (tab: 'login' | 'register') => {
    if (tab === 'register') {
      navigate('/register');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput('');

    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast('Por favor, ingresa un formato de correo válido.', 'error');
      setErrorForInput('email');
      return;
    }
    if (password.length <= 6) {
      showToast('La contraseña debe tener más de 6 caracteres.', 'error');
      setErrorForInput('password');
      return;
    }

    setIsLoading(true);

    try {
      const authData = await loginUser(email, password);
      // Guarda el token en localStorage
      if (authData?.token) {
        localStorage.setItem('token', authData.token);
      }
      
      if (authData?.user) localStorage.setItem('user', JSON.stringify(authData.user));

      showToast('¡Bienvenido de nuevo!', 'success');
      login(authData);
      navigate('/');
    } catch (error: any) {
      showToast(error.message || 'Hubo un problema al iniciar sesión.', 'error');
      setErrorForInput('email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-background">
      <AuthSplitLayout leftContent={
        <div key="login" className="animated-left-content">
          <LoginLeftContent />
        </div>
      }>
        <div className={`form-container ${isLoading ? 'form-container--loading' : ''}`}>
          <div className="form-header__brand">
            <img src="/src/assets/logotipo.svg" alt="Logo de FitLife" className="form-header__logo" />
            <span className="form-header__brand-name">FitLife</span>
          </div>

          <h3 className="form-header__title">Inicio de sesión</h3>
          <p className="form-header__subtitle">¡Bienvenido de nuevo!</p>

          <AuthTabs activeTab={activeTab} onTabClick={handleTabClick} />

          <form onSubmit={handleSubmit} noValidate className="form-container__body">
            <Input
              label="Correo electrónico"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errorForInput === 'email' ? 'Error' : ''}
            />

            <div>
              <PasswordInput
                label="Contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errorForInput === 'password' ? 'Error' : ''}
              />
              <FormLink
                text="¿Olvidaste tu contraseña? "
                linkText="Recupérala aquí"
                to="/recuperar"
                textAlign="right"
              />
            </div>

            <Button type="submit" isLoading={isLoading}>
              Continuar
            </Button>
          </form>
        </div>
      </AuthSplitLayout>
    </div>
  );
};

export default LoginPage;