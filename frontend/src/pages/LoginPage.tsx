import React, { useState } from 'react';

import { FormContainer, Input, Button } from '../components/ui';

import { useToast } from '../context/ToastContext';
import { checkEmailExists } from '../api/auth'; 


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