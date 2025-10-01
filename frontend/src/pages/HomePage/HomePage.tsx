import React from 'react';
import { Link } from 'react-router-dom'; // 👈 1. Importar el componente Link
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
import './home-page.css';

const CardIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="card-icon">{icon}</div>
);

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const { openModal } = useModal();

  return (
    <div className="homepage-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">¡Bienvenido de nuevo, {user?.email}!</h1>
        <p className="dashboard-subtitle">Listo para empezar a transformar tu vida. ¿Qué haremos hoy?</p>
      </header>

      <div className="dashboard-grid">
        {/* Card Principal: Sigue abriendo el modal */}
        <button className="dashboard-card cta-card" onClick={() => openModal('physicalData')}>
          <CardIcon icon="✍️" />
          <h2 className="card-title">Completa tu Perfil</h2>
          <p className="card-description">Registra tus datos físicos para obtener planes personalizados y un seguimiento preciso.</p>
        </button>

        {/* 👇 2. Convertimos las tarjetas en enlaces 👇 */}
        <Link to="/routines" className="dashboard-card">
          <CardIcon icon="🏋️" />
          <h2 className="card-title">Iniciar Rutina</h2>
          <p className="card-description">Explora y comienza una de las rutinas preparadas para ti.</p>
        </Link>
        
        <Link to="/progress" className="dashboard-card">
          <CardIcon icon="📊" />
          <h2 className="card-title">Ver Progreso</h2>
          <p className="card-description">Revisa tus estadísticas y mira cuánto has avanzado.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;