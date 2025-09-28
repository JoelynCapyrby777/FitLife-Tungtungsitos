// src/App.tsx
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { ToastProvider } from './context/ToastContext';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'; // 👈 1. Importar
import './App.css';

function App() {
  return (
    <ToastProvider> 
      <div className="app-layout">
        <Header />
        <main className="app-content">
          <AppRoutes /> 
        </main>
        <Footer />
      </div>
      
      {/* 2. Colocamos el botón aquí, fuera del layout principal */}
      <ScrollToTopButton />
    </ToastProvider>
  );
}

export default App;