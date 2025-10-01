import React from 'react';
import './form-container.css'; // Asegúrate que el nombre del css esté en minúscula

interface FormContainerProps {
  title: React.ReactNode; // Acepta ReactNode para títulos complejos
  subtitle?: string;
  children: React.ReactNode;
  titleAlign?: 'center' | 'left'; // Nueva prop para alineación
}

const FormContainer: React.FC<FormContainerProps> = ({ 
  title, 
  subtitle, 
  children, 
  titleAlign = 'center' // 'center' es el valor por defecto
}) => {
  // Se añade una clase modificadora si la alineación no es a la izquierda
  const headerClasses = `form-container__header ${
    titleAlign === 'center' ? 'form-container__header--center' : ''
  }`;

  return (
    <div className="form-container">
      <header className={headerClasses}>
        <h1 className="form-container__title">{title}</h1>
        {subtitle && <p className="form-container__subtitle">{subtitle}</p>}
      </header>
      {children}
    </div>
  );
};

export default FormContainer;