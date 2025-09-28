import React from 'react';
import './FormContainer.css';

interface FormContainerProps {
  title: string;
  subtitle?: string; // El subtítulo es opcional
  children: React.ReactNode; // Para aceptar cualquier elemento hijo (inputs, botones, etc.)
}

const FormContainer: React.FC<FormContainerProps> = ({ title, subtitle, children }) => {
  return (
    <div className="form-container">
      <header className="form-container__header">
        <h1 className="form-container__title">{title}</h1>
        {subtitle && <p className="form-container__subtitle">{subtitle}</p>}
      </header>
      
      {/* 👇 Ya no necesitamos el <main> con la clase aquí 👇 */}
      {children}
    </div>
  );
};

export default FormContainer;

/*
  Ejemplo de cómo usarlo en otra parte de tu app:

  <FormContainer title="Crear Cuenta" subtitle="Ingresa tus datos para registrarte">
    <Input label="Nombre de usuario" type="text" />
    <Input label="Email" type="email" />
    <Input label="Contraseña" type="password" />
    <button>Registrarse</button>
  </FormContainer>
*/