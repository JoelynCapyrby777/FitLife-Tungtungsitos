import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './routine-detail-page.css';
import { Button } from '../../components/ui';

// Datos de ejemplo para las rutinas
const routinesData = {
  'full-body-1': { 
    title: 'Fuerza Total para Principiantes', 
    description: 'Una rutina completa para construir una base sólida de fuerza en todo el cuerpo.',
    exercises: [
      { name: 'Sentadillas (Squats)', sets: '3', reps: '10-12' },
      { name: 'Flexiones (Push-ups)', sets: '3', reps: 'Al fallo' },
      { name: 'Remo con mancuerna', sets: '3', reps: '10 por brazo' },
      { name: 'Plancha (Plank)', sets: '3', reps: '30-60 seg' },
    ]
  },
  'cardio-blast-1': { 
    title: 'Cardio Intenso', 
    description: '30 minutos para quemar calorías y mejorar tu resistencia cardiovascular.',
    exercises: [
      { name: 'Saltos de tijera (Jumping Jacks)', sets: '1', reps: '3 min' },
      { name: 'Burpees', sets: '4', reps: '10' },
      { name: 'Rodillas altas (High Knees)', sets: '4', reps: '45 seg' },
      { name: 'Escaladores (Mountain Climbers)', sets: '4', reps: '45 seg' },
    ]
  },
  // ...más rutinas aquí según sea necesario
};

const RoutineDetailPage: React.FC = () => {
  const { routineId } = useParams<{ routineId: string }>();
  const routine = routineId ? routinesData[routineId as keyof typeof routinesData] : null;
  const navigate = useNavigate();

  if (!routine) {
    return (
      <div className="routine-detail-page">
        <h1>Rutina no encontrada</h1>
        <button className="back-arrow-btn" onClick={() => navigate(-1)}>
          <span className="back-arrow-icon">&#8592;</span> Volver
        </button>
      </div>
    );
  }

  return (
    <div className="routine-detail-page">
      <button className="back-arrow-btn" onClick={() => navigate(-1)}>
        <span className="back-arrow-icon">&#8592;</span>
        <span className="back-arrow-label">Regresar</span>
      </button>

      <header className="detail-header">
        <h1 className="detail-title">{routine.title}</h1>
        <p className="detail-description">{routine.description}</p>
      </header>

      <div className="start-workout-container">
        <Button styleType="primary" onClick={() => navigate(`/workout/${routineId}`)}>
          ¡Empezar a Entrenar!
        </Button>
      </div>

      <div className="exercises-list">
        <h2 className="exercises-title">Ejercicios</h2>
        {routine.exercises.map((exercise, index) => (
          <div className="exercise-item" key={index}>
            <div className="exercise-number">{index + 1}</div>
            <div className="exercise-details">
              <h3 className="exercise-name">{exercise.name}</h3>
              <p className="exercise-sets-reps">
                {exercise.sets} series x {exercise.reps} repeticiones
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutineDetailPage;