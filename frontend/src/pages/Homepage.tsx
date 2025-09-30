import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useModal } from '../context/ModalContext';
import './home-page.css'; // Nombre de archivo estandarizado

// Un pequeño componente de ícono para las tarjetas
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
        {/* Card Principal: Llamado a la acción para el modal */}
        <button className="dashboard-card cta-card" onClick={() => openModal('physicalData')}>
          <CardIcon icon="✍️" />
          <h2 className="card-title">Completa tu Perfil</h2>
          <p className="card-description">Registra tus datos físicos para obtener planes personalizados y un seguimiento preciso.</p>
        </button>

        {/* Cards de ejemplo para futuras funcionalidades */}
        <div className="dashboard-card placeholder-card">
          <CardIcon icon="🏋️" />
          <h2 className="card-title">Iniciar Rutina</h2>
          <p className="card-description">Explora y comienza una de las rutinas preparadas para ti.</p>
        </div>
        
        <div className="dashboard-card placeholder-card">
          <CardIcon icon="📊" />
          <h2 className="card-title">Ver Progreso</h2>
          <p className="card-description">Revisa tus estadísticas y mira cuánto has avanzado.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
