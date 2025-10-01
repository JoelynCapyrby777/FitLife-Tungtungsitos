import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import './progress-page.css';

const ProgressPage: React.FC = () => {
  const { history } = useProgress();

  return (
    <div className="progress-page">
      <header className="progress-header">
        <h1 className="progress-title">Mi Progreso</h1>
        <p className="progress-subtitle">¡Cada entrenamiento cuenta! Sigue así.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{history.length}</span>
          <span className="stat-label">Rutinas Completadas</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">0</span>
          <span className="stat-label">Días de Racha</span>
        </div>
      </div>

      <div className="history-section">
        <h2 className="history-title">Historial de Entrenamientos</h2>
        {history.length === 0 ? (
          <p className="no-history-message">Aún no has completado ninguna rutina. ¡Vamos a empezar!</p>
        ) : (
          <div className="history-list">
            {history.map((workout) => (
              <div className="history-item" key={workout.id}>
                <div className="history-icon">💪</div>
                <div className="history-details">
                  <span className="history-workout-title">{workout.title}</span>
                  <span className="history-workout-date">{workout.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
