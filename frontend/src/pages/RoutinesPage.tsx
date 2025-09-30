import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/routines-page.css';

// Datos de ejemplo para las rutinas
const routines = [
  { id: 'full-body-1', title: 'Fuerza Total para Principiantes', duration: '45 min', difficulty: 'Fácil' },
  { id: 'cardio-blast-1', title: 'Cardio Intenso', duration: '30 min', difficulty: 'Intermedio' },
  { id: 'yoga-flex-1', title: 'Flexibilidad y Yoga', duration: '60 min', difficulty: 'Fácil' },
  { id: 'upper-body-1', title: 'Tren Superior Avanzado', duration: '50 min', difficulty: 'Difícil' },
  { id: 'core-crusher-1', title: 'Abdomen de Acero', duration: '20 min', difficulty: 'Intermedio' },
];

const RoutinesPage: React.FC = () => {
  return (
    <div className="routines-page">
      <header className="routines-header">
        <h1 className="routines-title">Explora las Rutinas</h1>
        <p className="routines-subtitle">Encuentra el entrenamiento perfecto para ti y empieza a moverte.</p>
      </header>

      <div className="routines-grid">
        {routines.map((routine) => (
          <Link to={`/routines/${routine.id}`} key={routine.id} className="routine-card">
            <div className="card-content">
              <h2 className="routine-title">{routine.title}</h2>
              <div className="routine-meta">
                <span>🕒 {routine.duration}</span>
                <span className={`difficulty-tag difficulty--${routine.difficulty.toLowerCase()}`}>
                  {routine.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoutinesPage;
