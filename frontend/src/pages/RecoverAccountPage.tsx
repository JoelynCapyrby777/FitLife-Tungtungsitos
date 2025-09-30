import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logotipo.svg";
import FormContainer from "../components/ui/FormContainer/FormContainer";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import { useToast } from "../context/ToastContext";

const RecoverAccountPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [errorForInput, setErrorForInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Por favor, ingresa un correo válido.", "error");
      setErrorForInput("Correo no válido");
      return;
    }

    setIsLoading(true);
    setErrorForInput("");

    // Aquí deberías llamar a tu API para enviar el correo de recuperación
   

    showToast("Te hemos enviado un correo para recuperar tu cuenta.", "success");
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
          <span className="login-title">Recuperar cuenta</span>
        </div>
      }
      subtitle="Ingresa tu correo para recuperar el acceso"
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

        <Button type="submit" isLoading={isLoading} onClick={() => navigate("/verificar")}>
          Enviar recuperación
        </Button>

        <div className="register-link">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/")}
          >
            Inicia sesión aquí
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RecoverAccountPage;