import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Input, Button, FormLink } from "../components/ui";
import { useToast } from "../context/ToastContext";
import '../styles/login-page.css'; // Reutilizamos los estilos del login page

const RecoverAccountPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
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

    setIsLoading(true);

    // Simulación de una llamada a la API
    await new Promise(resolve => setTimeout(resolve, 1000));

    showToast("Si el correo existe, te hemos enviado un enlace para recuperar tu cuenta.", "success");
    setIsLoading(false);
    
    // Opcional: Redirigir al login después de enviar el correo
    // navigate("/"); 
  };

  return (
    <div className="login-page-background">
      <FormContainer
        title="Recuperar Cuenta"
        subtitle="Ingresa tu correo para reestablecer tu contraseña."
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
            error={errorForInput ? "Error" : ""}
          />

          <Button type="submit" isLoading={isLoading}>
            Enviar correo de recuperación
          </Button>
          
          <FormLink
            text="¿Recordaste tu contraseña?"
            linkText="Inicia sesión"
            to="/"
          />
        </form>
      </FormContainer>
    </div>
  );
};

export default RecoverAccountPage;