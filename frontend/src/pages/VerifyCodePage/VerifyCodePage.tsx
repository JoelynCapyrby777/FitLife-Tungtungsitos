import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Input, Button, FormLink } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import "../styles/login-page.css"; // Reutilizamos el fondo
import "../styles/verify-code-page.css"; // Estilos específicos para esta página

const VerifyCodePage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput('');

    if (!/^\d{6}$/.test(code)) {
      showToast('El código debe ser de 6 dígitos numéricos.', 'error');
      setErrorForInput('Código inválido');
      return;
    }

    setIsLoading(true);
    // Simulación de verificación de código
    await new Promise(resolve => setTimeout(resolve, 1000));

    showToast('¡Código verificado con éxito!', 'success');
    setIsLoading(false);
    navigate('/cambiarContraseña'); // Navegación correcta después del éxito
  };

  const handleResend = async () => {
    setIsLoading(true);
    // Simulación de reenvío
    await new Promise(resolve => setTimeout(resolve, 1000));
    showToast('Nuevo código enviado a tu correo.', 'info');
    setIsLoading(false);
  };

  return (
    <div className="login-page-background">
      <FormContainer
        title="Verificar código"
        subtitle="Ingresa el código de 6 dígitos que te enviamos por correo"
        titleAlign="left"
      >
        <form
          onSubmit={handleConfirm}
          noValidate
          className="form-container__body"
        >
          <Input
            label="Código de verificación"
            type="text"
            name="code"
            value={code}
            onChange={(e) => {
              // Permite solo números
              const numericValue = e.target.value.replace(/\D/g, '');
              setCode(numericValue);
            }}
            maxLength={6}
            error={errorForInput}
          />

          <Button type="submit" isLoading={isLoading}>
            Confirmar
          </Button>

          <div className="resend-link-container">
            ¿No recibiste el código?
            <button
              type="button"
              className="link-button"
              onClick={handleResend}
              disabled={isLoading}
            >
              Solicita otro aquí
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default VerifyCodePage;