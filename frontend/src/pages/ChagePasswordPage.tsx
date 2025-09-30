import React, { useState } from 'react';
import FormContainer from '../components/ui/FormContainer/FormContainer';
import PasswordInput from '../components/ui/PasswordInput/PassworInput';
import Button from '../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import "../styles/ChagePasswordPage.css";
import logo from '../assets/logotipo.svg';

const ChangePasswordPage: React.FC = () => {
  const { showToast } = useToast();
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChangePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword.length < 6) {
      showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
      setErrorForInput('Contraseña demasiado corta');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('Las contraseñas no coinciden.', 'error');
      setErrorForInput('Las contraseñas no coinciden');
      return;
    }
    setIsLoading(true);
    setErrorForInput('');
    // Aquí iría la lógica real para cambiar la contraseña
    // await updatePassword(newPassword);
    showToast('¡Contraseña actualizada con éxito!', 'success');
    navigate('/HomePage');
    setIsLoading(false);
  };

  return (
    <FormContainer
      title={
        <div className="changepass-title-block">
          <div className="changepass-header">
            <img src={logo} alt="Logo de la app" className="changepass-logo" />
            <span className="changepass-appname">LitLife</span>
          </div>
          <span>Cambiar contraseña</span>
        </div>
      }
      subtitle="Ingresa tu nueva contraseña"
    >
      <form
        onSubmit={handleChangePassword}
        noValidate
        className="form-container__body"
      >
        <PasswordInput
          label="Nueva contraseña"
          name="newPassword"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            if (errorForInput) setErrorForInput('');
          }}
          error={errorForInput}
        />

        <PasswordInput
          label="Confirmar nueva contraseña"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errorForInput) setErrorForInput('');
          }}
          error={errorForInput}
        />

        <Button type="submit" isLoading={isLoading}  onClick={() => navigate("/")}>
          Cambiar contraseña
        </Button>
      </form>
    </FormContainer>
  );
};

export default ChangePasswordPage;