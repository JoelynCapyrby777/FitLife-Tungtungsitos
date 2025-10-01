import React from 'react';
import Spinner from '../Spinner/Spinner';
import './button.css'; // Asegúrate de que este es el CSS que refinamos

// 1. Definimos la "interfaz" de las props que nuestro componente aceptará.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // `children` es lo que va dentro del botón (texto, íconos, etc.).
  children: React.ReactNode;
  
  // `styleType` es opcional (?) y solo puede ser 'primary' o 'secondary'.
  styleType?: 'primary' | 'secondary';

  isLoading?: boolean; 
}


const Button: React.FC<ButtonProps> = ({
  children,
  styleType = 'primary', // Valor por defecto si no se especifica.
  className, // Aceptamos una clase externa para mayor flexibilidad.
  isLoading = false,
  ...rest // `rest` captura todas las demás props (onClick, disabled, type, etc.).
}) => {

  // 3. Construimos las clases dinámicamente, corrigiendo "btn" a "button".
  // También añadimos la clase externa si existe.
  const buttonClasses = [
    'button', // Clase base.
    `button--${styleType}`, // Modificador de estilo.
    isLoading ? 'button--loading' : '',
    className // Clases adicionales pasadas como prop.
  ].filter(Boolean).join(' '); // Filtra valores nulos y une con espacios.

  return (
    // 4. Pasamos las clases y el resto de las props al elemento <button>.
    <button className={buttonClasses} disabled={isLoading} {...rest}>
      {isLoading ? <Spinner /> : children} {/* 👈 4. Muestra Spinner o el texto */}
    </button>
  );
};

export default Button;