// src/components/FormContainer.jsx
import React from 'react';
import './FormContainer.css';

/**
 * Componente contenedor para formularios.
 * Le da un estilo de tarjeta a los formularios de login y registro.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.title - El título del formulario (ej. "Ingresar", "Registrarse").
 * @param {string} props.subtitle - Un subtítulo o descripción debajo del título.
 * @param {React.ReactNode} props.children - Los componentes hijos (inputs, botones) a renderizar dentro del contenedor.
 */
function FormContainer({ children, title, subtitle }) {
  return (
    <div className="form-container">
      <div className="form-container__header">
        <h1 className="form-container__title">{title}</h1>
        <p className="form-container__subtitle">{subtitle}</p>
      </div>
      <div className="form-container__body">
        {children}
      </div>
    </div>
  );
}

export default FormContainer;