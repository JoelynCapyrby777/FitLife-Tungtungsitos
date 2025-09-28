import React, { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useToast } from '../context/ToastContext';

// --- Simulación de API (sin cambios) ---
const checkEmailExists = async (email: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const existingUsers = ['usuario.existente@gmail.com', 'test@dominio.com'];
  return existingUsers.includes(email.toLowerCase());
};
// --- Fin de la simulación ---

const LoginPage: React.FC = () => {
  const { showToast } = useToast();
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

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      showToast('¡Bienvenido de nuevo! Redirigiendo...', 'success');
      // navigate('/login/password');
    } else {
      showToast('Correo no encontrado. Redirigiendo al registro...', 'info');
      // navigate('/register');
    }
    setIsLoading(false);
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