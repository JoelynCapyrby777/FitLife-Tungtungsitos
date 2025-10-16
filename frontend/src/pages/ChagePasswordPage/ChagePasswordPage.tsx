import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput, Button, FormLink } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import AuthSplitLayout from "../../components/ui/AuthSplitContainer/AuthSplitLayout";
import "../LoginPage/login-page.css";
import "./chage-password-page.css";

// Mensaje izquierdo animado
const ChangePassLeftContent = () => (
  <div>
    <h1>Establece tu nueva contraseña</h1>
    <p>Recuerda usar una contraseña segura y no compartirla con nadie.</p>
    <div className="auth-split-layout__feature-list">
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🔒</span>
        <span className="auth-split-layout__feature-text">Seguridad reforzada</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🤫</span>
        <span className="auth-split-layout__feature-text">Privacidad garantizada</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">💡</span>
        <span className="auth-split-layout__feature-text">No uses datos personales evidentes</span>
      </div>
    </div>
  </div>
);

const ChangePasswordPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorForInput, setErrorForInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput('');

    if (newPassword.length < 6) {
      showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
      setErrorForInput('newPassword');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('Las contraseñas no coinciden.', 'error');
      setErrorForInput('confirmPassword');
      return;
    }

    setIsLoading(true);

    // Simulación de una llamada a la API para cambiar la contraseña
    await new Promise(resolve => setTimeout(resolve, 1000));

    showToast('¡Contraseña actualizada con éxito! Ya puedes iniciar sesión.', 'success');
    setIsLoading(false);
    navigate('/'); // Redirige al login después de cambiar la contraseña
  };

  return (
    <div className="login-page-background">
      <AuthSplitLayout
        leftContent={
          <div key="changepass" className="animated-left-content">
            <ChangePassLeftContent />
          </div>
        }
      >
        <div className="form-container">
          <div className="changepass-title-block">
            <div className="changepass-header">
              <img src="/src/assets/logotipo.svg" alt="Logo de FitLife" className="changepass-logo" />
              <span className="changepass-appname">FitLife</span>
            </div>
            <h3 className="form-header__title">Crear nueva contraseña</h3>
            <p className="form-header__subtitle">Asegúrate de que sea segura y fácil de recordar.</p>
          </div>
          <form
            onSubmit={handleChangePassword}
            noValidate
            className="form-container__body"
          >
            <PasswordInput
              label="Nueva contraseña"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={errorForInput === 'newPassword' ? 'Error' : ''}
            />

            <PasswordInput
              label="Confirmar nueva contraseña"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errorForInput === 'confirmPassword' ? 'Error' : ''}
            />

            <Button type="submit" isLoading={isLoading}>
              Cambiar contraseña
            </Button>

            <FormLink
              text="¿No necesitas cambiarla?"
              linkText="Volver al inicio de sesión"
              to="/"
            />
          </form>
        </div>
      </AuthSplitLayout>
    </div>
  );
};

export default ChangePasswordPage;