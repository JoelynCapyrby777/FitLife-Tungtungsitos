import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; // El mensaje de error es opcional
}

const Input: React.FC<InputProps> = ({ label, error, id, ...props }) => {
  // Genera un ID único si no se proporciona uno, crucial para la accesibilidad
  const inputId = id || React.useId();
  const errorId = error ? `${inputId}-error` : undefined;

  // Determina si se debe aplicar la clase de error
  const hasError = !!error;
  const groupClasses = `input-group ${hasError ? 'input-group--error' : ''}`;

  return (
    <div className={groupClasses}>
      <div className="input-group__wrapper">
        <input
          id={inputId}
          className="input-group__field"
          placeholder=" " // IMPORTANTE: El placeholder no debe estar vacío para que :not(:placeholder-shown) funcione
          aria-invalid={hasError} // Indica a los lectores de pantalla si el campo es inválido
          aria-describedby={errorId} // Asocia el campo con su mensaje de error
          {...props}
        />
        {/* El label debe ir JUSTO DESPUÉS del input */}
        <label htmlFor={inputId} className="input-group__label">
          {label}
        </label>
      </div>

      {/* El mensaje de error se muestra condicionalmente */}
      {hasError && (
        <div id={errorId} className="input-group__error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;