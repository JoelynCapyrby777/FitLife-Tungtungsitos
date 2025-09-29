// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '..';
import { ScrollToTopButton } from '../../ui';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;