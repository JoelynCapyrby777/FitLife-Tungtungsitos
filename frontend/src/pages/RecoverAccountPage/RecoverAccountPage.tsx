import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, FormLink } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import AuthSplitLayout from "../../components/ui/AuthSplitContainer/AuthSplitLayout";
import RecoverLeftContent from "../../components/ui/AuthMessages/RecoverLeftContent";
import "../../components/ui/AuthMessages/Animation.css"
import '../LoginPage/login-page.css';
// Se reutiliza el diseño del login por que ahi ya esta lo que necesita

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

    showToast("Si el correo existe, te hemos enviado un codigo para recuperar tu cuenta.", "success");
    setIsLoading(false);
    navigate("/verificar"); 
  };

  return (
    <div className="login-page-background">
      <AuthSplitLayout leftContent={
        <div key="recover" className="animated-left-content">
          <RecoverLeftContent />
        </div>
      } >
        <div className={`form-container ${isLoading ? 'form-container--loading' : ''}`}>
          <div className="form-header__brand">
            <img src="/src/assets/logotipo.svg" alt="Logo de FitLife" className="form-header__logo" />
            <span className="form-header__brand-name">FitLife</span>
          </div>
          <h3 className="form-header__title">Recuperar Cuenta</h3>
          <p className="form-header__subtitle">Ingresa tu correo para restablecer tu contraseña.</p>
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
        </div>
      </AuthSplitLayout>
    </div>
  );
};

export default RecoverAccountPage;