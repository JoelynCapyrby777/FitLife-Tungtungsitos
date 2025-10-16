import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, id, ...props }) => {
  const inputId = id || React.useId();
  const errorId = error ? `${inputId}-error` : undefined;
  const hasError = !!error;

  return (
    <div className={`input-group ${hasError ? 'input-group--error' : ''}`}>
      <input
        id={inputId}
        className="input-group__field"
        placeholder=" " // Necesario para que el label pueda flotar
        aria-invalid={hasError}
        aria-describedby={errorId}
        {...props}
      />
      <label htmlFor={inputId} className="input-group__label">
        {label}
      </label>
      
    </div>
  );
};

export default Input;
