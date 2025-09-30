import React, { useState } from 'react';
import { FormContainer, Input, Button } from '../components/ui';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { checkEmailExists } from '../api/auth';
import PasswordInput from '../components/ui/PasswordInput/PassworInput';
import "../styles/LoginPage.css"
import logo from '../assets/logotipo.svg'

const LoginPage: React.FC = () => {
  const { showToast } = useToast();
  const { login } = useAuth();


  const [email, setEmail] = useState<string>('');
  const [password, setPasssword] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast('Por favor, ingresa un formato de correo válido.', 'error');
      setErrorForInput('Error de validación');
      return;
    } else {
      if (password.length <= 6) {
        showToast('Por favor, ingresa la contraseña correcta', 'error')
        setErrorForInput('Error de validacion');
        return;
      }
    }

    setIsLoading(true);
    setErrorForInput('');

    try {
      const emailExists = await checkEmailExists(email);
      
      if (emailExists) {
        showToast('¡Bienvenido de nuevo!', 'success');
        login({ email: email });
        // 👇 3. ¡Aquí está la magia! Navegamos a la nueva página
        navigate('/home');
      } else {
        showToast('Correo no encontrado. Creando cuenta...', 'info');
        login({ email: email }); // También iniciamos sesión para un nuevo usuario
        // Navegamos al mismo lugar para que pueda llenar sus datos
        navigate('/ns');
      }
    } catch (error) {
      showToast('Ocurrió un error al conectar con el servidor.', 'error');
      setIsLoading(false);

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      showToast('¡Bienvenido de nuevo! Redirigiendo...', 'success');
      navigate('/HomePage');
    } else {
      showToast('Correo no encontrado. Redirigiendo al registro...', 'info');
      navigate('/register');
    }
    // Ya no ponemos setIsLoading(false) aquí porque la navegación desmontará el componente.
  };

  return (
    <FormContainer
      title={
        <div className="login-title-block">
          <div className="login-header">
            <img src={logo} alt="Logo de la app" className="login-logo" />
            <span className="login-appname">LitLife</span>
          </div>
          <span>Inicio de sesión</span>
        </div>
      }
      subtitle="¡Bienvenido de nuevo!"
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="form-container__body"
      >
        <Input
          label="Correo electrónico"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorForInput) setErrorForInput('');
          }}
          error={errorForInput}
        />

        <div >
          <PasswordInput
            label="Contraseña"
            name="password"
            value={password}
            onChange={(e) => {
              setPasssword(e.target.value);
              if (errorForInput) setErrorForInput('');
            }}
            error={errorForInput}
          />
          <span className="forgot-password">
            ¿Olvidaste tu contraseña?{""}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/recuperar")}
            >
              Recupérala aquí
            </button>
          </span>
        </div>

        <Button type="submit" isLoading={isLoading}>
          Continuar
        </Button>


        <div className="register-link">
          ¿Aún no tienes cuenta?{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/register")}
          >
            Regístrate
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;