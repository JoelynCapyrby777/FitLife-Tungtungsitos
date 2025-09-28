// src/components/Header.tsx
import React from 'react';
import './Header.css';
import logo from '../../assets/logotipo.svg'; // Asegúrate de que la ruta a tu logo sea correcta

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="FitLife Logo" className="header__logo" />
        <span className="header__brand-name">FitLife</span>
      </div>
    </header>
  );
};

export default Header;