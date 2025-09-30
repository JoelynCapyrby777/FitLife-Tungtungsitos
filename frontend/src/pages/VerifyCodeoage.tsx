import React, { useState } from 'react';
import FormContainer from '../components/ui/FormContainer/FormContainer';
import Input from '../components/ui/Input/Input';
import Button from '../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import "../styles/VerifyCodePage.css";
import logo from '../assets/logotipo.svg';

const VerifyCodePage: React.FC = () => {
  const { showToast } = useToast();
  const [code, setCode] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^\d{6}$/.test(code)) {
      showToast('El código debe ser de 6 dígitos numéricos.', 'error');
      setErrorForInput('Código inválido');
      return;
    }
    setIsLoading(true);
    setErrorForInput('');
    // Aquí la lógica real de verificación del código
    showToast('¡Código verificado con éxito!', 'success');
    navigate('/HomePage');
    setIsLoading(false);
  };

  const handleResend = async () => {
    setIsLoading(true);
    // Aquí la lógica real para solicitar otro código
    showToast('Nuevo código enviado a tu correo.', 'info');
    setIsLoading(false);
  };

  return (
    <FormContainer
      title={
        <div className="verify-title-block">
          <div className="verify-header">
            <img src={logo} alt="Logo de la app" className="verify-logo" />
            <span className="verify-appname">LitLife</span>
          </div>
          <span>Verificar código</span>
        </div>
      }
      subtitle="Ingresa el código de 6 dígitos que te enviamos por correo"
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
            setCode(e.target.value.replace(/\D/, '')); 
            if (errorForInput) setErrorForInput('');
          }}
          maxLength={6}
          error={errorForInput}
        />

        <Button type="submit" isLoading={isLoading}  onClick={() => navigate("/cambiarContraseña")} >
          Confirmar
        </Button>

        <div className="resend-question">
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
    </FormContainer>
  );
};

export default VerifyCodePage;