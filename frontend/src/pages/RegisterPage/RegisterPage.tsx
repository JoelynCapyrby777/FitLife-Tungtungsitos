import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Input, PasswordInput, Button, FormLink } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import { registerUser } from "../../api/auth";
import '../styles/login-page.css';

const RegisterPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorForInput, setErrorForInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Por favor, ingresa un correo válido.", "error");
      setErrorForInput("email");
      return;
    }
    if (password.length < 6) {
      showToast("La contraseña debe tener mínimo 6 caracteres.", "error");
      setErrorForInput("password");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Las contraseñas no coinciden.", "error");
      setErrorForInput("confirmPassword");
      return;
    }

    setIsLoading(true);

    try {
      // Creamos el objeto completo con los datos del formulario y los valores por defecto
      const userData = {
        correo: email,
        contrasena: password,
        nombre: 'Nuevo Usuario', // Valor por defecto
        pesoKg: 0,              // Valor por defecto
        edad: 0,                // Valor por defecto
        estaturaMetros: 0,      // Valor por defecto
      };

      await registerUser(userData);
      
      showToast("¡Registro exitoso! Ahora inicia sesión.", "success");
      navigate("/");

    } catch (error: any) {
      showToast(error.message || "No se pudo completar el registro.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-background">
      <FormContainer
        title="Crear Cuenta"
        subtitle="¡Es rápido y fácil!"
        titleAlign="left"
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
            onChange={(e) => setEmail(e.target.value)}
            error={errorForInput === 'email' ? 'Error' : ''}
          />
          <PasswordInput
            label="Contraseña"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorForInput === 'password' ? 'Error' : ''}
          />
          <PasswordInput
            label="Confirmar contraseña"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errorForInput === 'confirmPassword' ? 'Error' : ''}
          />
          <Button type="submit" isLoading={isLoading}>
            Crear cuenta
          </Button>
          <FormLink
            text="¿Ya tienes cuenta?"
            linkText="Inicia sesión"
            to="/"
          />
        </form>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;
