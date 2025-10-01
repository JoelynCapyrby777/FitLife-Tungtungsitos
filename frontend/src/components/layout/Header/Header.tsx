import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // 👈 1. Importar useNavigate
import './Header.css';
import logo from '../../../assets/logotipo.svg';
import { useAuth } from '../../../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // 👈 2. Inicializar el hook de navegación
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLogout = () => {
    if (isMenuOpen) toggleMenu();
    logout();
    navigate('/login'); // 👈 3. Redirigir al login después de cerrar sesión
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="FitLife Logo" className="header__logo" />
        <span className="header__brand-name">FitLife</span>
      </div>

      {user && (
        <>
          <nav className="header__nav-desktop">
            <NavLink to="/" className="header__link">Home</NavLink>
            <NavLink to="/profile" className="header__link">Perfil</NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">Cerrar Sesión</button>
          </nav>

          <button className="header__hamburger" onClick={toggleMenu} aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          <nav className={`header__nav-mobile ${isMenuOpen ? 'header__nav-mobile--open' : ''}`}>
            <button className="header__close-button" onClick={toggleMenu} aria-label="Cerrar menú">&times;</button>
            <NavLink to="/" className="header__link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/profile" className="header__link" onClick={closeMenu}>Perfil</NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">Cerrar Sesión</button>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
