import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/logotipo.svg'; // Ajusta la ruta a tu logo
import { useAuth } from '../../../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (isMenuOpen) toggleMenu(); // Cierra el menú si está abierto
    logout();
  };

  return (
    <header className="header">
      {/* 👇 CAMBIO AQUÍ: Se reemplazó el <div> por un <NavLink> */}
      <NavLink to="/" className="header__brand">
        <img src={logo} alt="FitLife Logo" className="header__logo" />
        <span className="header__brand-name">FitLife</span>
      </NavLink>

      {/* Todo el menú (escritorio y móvil) solo se renderiza SI hay un usuario */}
      {user && (
        <>
          {/* Navegación para Escritorio */}
          <nav className="header__nav-desktop">
            <NavLink to="/physical-data" className="header__link">Mis Datos Físicos</NavLink>
            <NavLink to="/profile" className="header__link">Perfil</NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">Cerrar Sesión</button>
          </nav>

          {/* Botón de Hamburguesa para Móvil */}
          <button className="header__hamburger" onClick={toggleMenu} aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          {/* Panel de Navegación para Móvil (se muestra condicionalmente) */}
          <nav className={`header__nav-mobile ${isMenuOpen ? 'header__nav-mobile--open' : ''}`}>
            <button className="header__close-button" onClick={toggleMenu} aria-label="Cerrar menú">
              &times;
            </button>
            <NavLink to="/physical-data" className="header__link" onClick={toggleMenu}>Mis Datos Físicos</NavLink>
            <NavLink to="/profile" className="header__link" onClick={toggleMenu}>Perfil</NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">Cerrar Sesión</button>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;