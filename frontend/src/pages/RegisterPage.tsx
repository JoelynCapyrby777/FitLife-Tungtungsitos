import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logotipo.svg";
import FormContainer from "../components/ui/FormContainer/FormContainer";
import Input from "../components/ui/Input/Input";
import PasswordInput from "../components/ui/PasswordInput/PassworInput";
import Button from "../components/ui/Button/Button";
import { useToast } from "../context/ToastContext";
import '../styles/RegisterPage.css'

const RegisterPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorForInput, setErrorForInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simula registro (debes conectar a tu API real)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validaciones básicas
    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Por favor, ingresa un correo válido.", "error");
      setErrorForInput("Correo no válido");
      return;
    }
    if (password.length < 6) {
      showToast("La contraseña debe tener mínimo 6 caracteres.", "error");
      setErrorForInput("Contraseña no válida");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Las contraseñas no coinciden.", "error");
      setErrorForInput("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);
    setErrorForInput("");

    // Aquí deberías llamar a tu API para registrar usuario
    // const result = await registerUser(email, password);

    showToast("¡Registro exitoso! Redirigiendo...", "success");
    navigate("/login");

    setIsLoading(false);
  };

  return (
    <FormContainer
      title={
        <div className="login-title-block">
          <div className="login-header">
            <img src={logo} alt="Logo de la app" className="login-logo" />
            <span className="login-appname">LitLife</span>
          </div>
          <span className="login-title">Registro de cuenta</span>
        </div>
      }
      subtitle="¡Crea tu cuenta!"
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
            if (errorForInput) setErrorForInput("");
          }}
          error={errorForInput}
        />

        <PasswordInput
          label="Contraseña"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errorForInput) setErrorForInput("");
          }}
          error={errorForInput}
        />

        <PasswordInput
          label="Confirmar contraseña"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errorForInput) setErrorForInput("");
          }}
          error={errorForInput}
        />

        <Button type="submit" isLoading={isLoading}
        onClick={() => navigate("/register")}>
          Crear cuenta
        </Button>

        

        <div className="register-link">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/")}
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterPage;