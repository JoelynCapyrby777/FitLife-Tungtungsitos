import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/logotipo.svg';
import { useAuth } from '../../../context/AuthContext';
import { Home, User, LogOut, Menu, X, Bell, Utensils } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    if (isMenuOpen) toggleMenu();
    logout();
    navigate('/login');
  };

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

      {user ? (
        <>
          <nav className="header__nav-desktop">
            <NavLink to="/" className="header__link">
              <Home size={20} style={{ marginRight: 7, verticalAlign: 'middle' }} />
              Home
            </NavLink>
            <NavLink to="/profile" className="header__link">
              <User size={20} style={{ marginRight: 7, verticalAlign: 'middle' }} />
              Perfil
            </NavLink>
            <NavLink to="/meals" className="header__link">
              <Utensils size={20} style={{ marginRight: 7, verticalAlign: 'middle' }} />
              Comidas
            </NavLink>
            <NavLink to="/notifications" className="header__link header__notifications-link">
              <Bell size={20} style={{ marginRight: 7, verticalAlign: 'middle' }} />
              <span className="visually-hidden">Notificaciones</span>
            </NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">
              <LogOut size={20} style={{ marginRight: 7, verticalAlign: 'middle' }} />
              Cerrar Sesión
            </button>
          </nav>

          <button className="header__hamburger" onClick={toggleMenu} aria-label="Abrir menú">
            <Menu size={28} />
          </button>

          <nav className={`header__nav-mobile ${isMenuOpen ? 'header__nav-mobile--open' : ''}`}>
            <button className="header__close-button" onClick={toggleMenu} aria-label="Cerrar menú">
              <X size={32} />
            </button>
            <NavLink to="/" className="header__link" onClick={closeMenu}>
              <Home size={22} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Home
            </NavLink>
            <NavLink to="/profile" className="header__link" onClick={closeMenu}>
              <User size={22} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Perfil
            </NavLink>
            <NavLink to="/meals" className="header__link" onClick={closeMenu}>
              <Utensils size={22} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Comidas
            </NavLink>
            <button onClick={handleLogout} className="header__link header__link--button">
              <LogOut size={22} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Cerrar Sesión
            </button>
          </nav>
        </>
      ) : (
        <>
          <nav className="header__nav-desktop">
            <NavLink to="/PaginaPrincipal" className="header__link">
              Inicio
            </NavLink>
            <NavLink to="/Nosotros" className="header__link">
              Nosotros
            </NavLink>
          </nav>

           <div className="header__nav-actions">
            <NavLink to="/login" className="header__link header__link--button">
              Iniciar sesión
            </NavLink>
            <NavLink to="/register" className="header__link header__link--register">
              Regístrate
            </NavLink>
          </div>

        </>
      )}
    </header>
  );
};

export default Header;