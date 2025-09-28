// src/components/ScrollToTopButton/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para escuchar el evento de scroll en la ventana
  useEffect(() => {
    const toggleVisibility = () => {
      // Si el usuario ha bajado más de 300px, muestra el botón
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpia el listener cuando el componente se desmonta para evitar fugas de memoria
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para hacer el scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // ¡La magia del scroll suave!
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top__button">
          &#8679; {/* Este es el código para una flecha hacia arriba */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;