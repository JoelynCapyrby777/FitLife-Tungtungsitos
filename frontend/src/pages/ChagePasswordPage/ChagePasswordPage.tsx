import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, PasswordInput, Button, FormLink } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import "../styles/login-page.css"; // Reutilizamos el fondo

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
      <FormContainer
        title="Crear nueva contraseña"
        subtitle="Asegúrate de que sea segura y fácil de recordar."
        titleAlign="left"
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
      </FormContainer>
    </div>
  );
};

export default ChangePasswordPage;