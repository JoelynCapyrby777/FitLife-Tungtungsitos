
import './Button.css';

function Button({ children, type, styleType = 'primary' }) {
  // Construimos las clases CSS dinámicamente
  const buttonClass = `btn btn--${styleType}`;
  
  return (
    <button className={buttonClass} type={type}>
      {children}
    </button>
  );
}

export default Button;