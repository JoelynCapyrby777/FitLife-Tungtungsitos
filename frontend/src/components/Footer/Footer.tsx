// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__copyright">© 2025 FitLife. Todos los derechos reservados.</span>
        <div className="footer__links">
          <a href="/privacy" className="footer__link">Privacidad</a>
          <a href="/terms" className="footer__link">Términos</a>
          <a href="/contact" className="footer__link">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;