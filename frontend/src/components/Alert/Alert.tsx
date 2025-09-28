// src/components/Alert.tsx
import React from 'react';
import './Alert.css';

// Definimos los tipos de alerta que aceptaremos
type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  children: React.ReactNode;
  type: AlertType;
  onClose?: () => void; // Función opcional para cerrar la alerta
}

const Alert: React.FC<AlertProps> = ({ children, type, onClose }) => {
  const alertClasses = `alert alert--${type}`;

  return (
    <div className={alertClasses}>
      <span className="alert__message">{children}</span>
      {onClose && (
        <button onClick={onClose} className="alert__close-button">
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;