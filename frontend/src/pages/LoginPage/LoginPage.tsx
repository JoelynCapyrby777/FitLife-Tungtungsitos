import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, Input, Button, PasswordInput, FormLink } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { loginUser } from '../../api/auth';
import "./login-page.css";

const LoginPage: React.FC = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      
      showToast('¡Bienvenido de nuevo!', 'success');
      // 👇 Le pasamos la respuesta completa (token + User) al contexto
      login(authData); 
      navigate('/'); // Navegar a la página principal

    } catch (error: any) {
      showToast(error.message || 'Hubo un problema al iniciar sesión.', 'error');
      setErrorForInput('email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-background"> 
      <FormContainer title="Inicio de Sesión" subtitle="¡Bienvenido de nuevo!" titleAlign="left">
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
              text=""
              linkText="¿Olvidaste tu contraseña?"
              to="/recuperar"
              textAlign="right"
            />
          </div>

          <Button type="submit" isLoading={isLoading}>
            Iniciar Sesión
          </Button>

          <FormLink
            text="¿Aún no tienes cuenta?"
            linkText="Regístrate"
            to="/register"
            textAlign="center"
          />
        </form>
      </FormContainer>
    </div>
  );
};

export default LoginPage;

