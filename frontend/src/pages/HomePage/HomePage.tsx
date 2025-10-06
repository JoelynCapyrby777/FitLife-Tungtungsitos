import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
import { Dumbbell, BarChart2 } from "lucide-react";
import './home-page.css';

// Usamos solo Lucide icons y color/tipografía global
const CardIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="card-icon">{icon}</div>
);

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const { openModal } = useModal();

  return (
    <div className="homepage-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">¡Bienvenido de nuevo, {user?.email}!</h1>
        <p className="dashboard-subtitle">
          Listo para empezar a transformar tu vida. ¿Qué haremos hoy?
        </p>
      </header>

      <div className="dashboard-grid">
  
        <Link to="/routines" className="dashboard-card">
          <CardIcon icon={<Dumbbell size={30} color="var(--color-primary)" />} />
          <h2 className="card-title">Iniciar Rutina</h2>
          <p className="card-description">
            Explora y comienza una de las rutinas preparadas para ti.
          </p>
        </Link>

        <Link to="/progress" className="dashboard-card">
          <CardIcon icon={<BarChart2 size={30} color="var(--color-primary)" />} />
          <h2 className="card-title">Ver Progreso</h2>
          <p className="card-description">
            Revisa tus estadísticas y mira cuánto has avanzado.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;