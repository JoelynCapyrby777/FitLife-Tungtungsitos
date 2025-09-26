// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Se requiere un correo electrónico válido.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Se requiere un correo electrónico válido.');
      return;
    }

    setEmailError('');
    console.log('Email:', email);
  };

  return (
    <FormContainer
      title="Ingresa tu correo electrónico"
      subtitle="Continuar a los ajustes de la cuenta"
    >
      {/* 👈 Add the noValidate prop here */}
      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Ingresa tu correo electrónico"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError}
        />
        <Button type="submit">Regístrate o inicia sesión</Button>
      </form>
    </FormContainer>
  );
}

export default LoginPage;