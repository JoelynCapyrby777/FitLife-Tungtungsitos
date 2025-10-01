import React from 'react';
import { useNavigate } from 'react-router-dom';
import './form-link.css';

interface FormLinkProps {
  text: string;
  linkText: string;
  to: string;
  textAlign?: 'left' | 'center' | 'right';
}

const FormLink: React.FC<FormLinkProps> = ({ 
  text, 
  linkText, 
  to, 
  textAlign = 'center' 
}) => {
  const navigate = useNavigate();

  // Se añade una clase para controlar la alineación del texto
  const containerClasses = `form-link-container form-link-container--${textAlign}`;

  return (
    <div className={containerClasses}>
      {text}{" "}
      <button
        type="button"
        className="link-button"
        onClick={() => navigate(to)}
      >
        {linkText}
      </button>
    </div>
  );
};

export default FormLink;