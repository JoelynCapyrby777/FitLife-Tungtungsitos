import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 1. Importar el hook de navegación
import { FormContainer, Input, Button } from '../components/ui';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';
import { checkEmailExists } from '../api/auth';

const LoginPage: React.FC = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate(); // 👈 2. Inicializar el hook

  const [email, setEmail] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast('Por favor, ingresa un formato de correo válido.', 'error');
      setErrorForInput('Error de validación');
      return;
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
    }
    // Ya no ponemos setIsLoading(false) aquí porque la navegación desmontará el componente.
  };

  return (
    <FormContainer
      title="Ingresa tu correo"
      subtitle="Para registrarte o iniciar sesión"
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
        <Button type="submit" isLoading={isLoading}>
          Continuar
        </Button>
      </form>
    </FormContainer>
  );
};

export default LoginPage;