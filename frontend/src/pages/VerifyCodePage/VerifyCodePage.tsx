import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import AuthSplitLayout from "../../components/ui/AuthSplitContainer/AuthSplitLayout";
import VerifyCodeLeftContent from "../../components/ui/AuthMessages/VerifyCodeLeftContent";
import "./verifyCodePage.css"
import "./verify-code-page.css";

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
    await new Promise(resolve => setTimeout(resolve, 1000));

    showToast('¡Código verificado con éxito!', 'success');
    setIsLoading(false);
    navigate('/cambiarContraseña');
  };

  const handleResend = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    showToast('Nuevo código enviado a tu correo.', 'info');
    setIsLoading(false);
  };

  return (
    <div className="login-page-background">
      <AuthSplitLayout
        leftContent={
          <div key="verify" className="animated-left-content">
            <VerifyCodeLeftContent />
          </div>
        }
      >
        <div className="form-container">
          <div className="verify-title-block">
            <div className="verify-header">
              <img src="/src/assets/logotipo.svg" alt="Logo de FitLife" className="verify-logo" />
              <span className="verify-appname">FitLife</span>
            </div>
            <h3 className="form-header__title">Verificar código</h3>
            <p className="form-header__subtitle">Ingresa el código de 6 dígitos que te enviamos por correo</p>
          </div>
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
                className="resend-link"
                onClick={handleResend}
                disabled={isLoading}
              >
                Solicita otro aquí
              </button>
            </div>
          </form>
        </div>
      </AuthSplitLayout>
    </div>
  );
};

export default VerifyCodePage;