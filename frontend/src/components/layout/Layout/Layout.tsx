// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../../ui/ScrollToTopButton/ScrollToTopButton';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        {/* 2. Outlet es el marcador de posición donde React Router
            renderizará la página actual (LoginPage, etc.) */}
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;