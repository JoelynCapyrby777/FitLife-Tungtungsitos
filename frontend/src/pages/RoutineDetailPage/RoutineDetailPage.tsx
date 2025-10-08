import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './routine-detail-page.css';
import { Button } from '../../components/ui';

// Interfaces
interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

interface RoutineData {
  title: string;
  description: string;
  exercises: Exercise[];
}

// Datos de ejemplo para las rutinas
const routinesData: Record<string, RoutineData> = {
  'full-body-1': {
    title: 'Fuerza Total para Principiantes',
    description: 'Una rutina completa para construir una base sólida de fuerza en todo el cuerpo.',
    exercises: [
      { name: 'Sentadillas (Squats)', sets: '3', reps: '10-12' },
      { name: 'Flexiones (Push-ups)', sets: '3', reps: 'Al fallo' },
      { name: 'Remo con mancuerna', sets: '3', reps: '10 por brazo' },
      { name: 'Plancha (Plank)', sets: '3', reps: '30-60 seg' },
    ],
  },
  'cardio-blast-1': {
    title: 'Cardio Intenso',
    description: '30 minutos para quemar calorías y mejorar tu resistencia cardiovascular.',
    exercises: [
      { name: 'Saltos de tijera (Jumping Jacks)', sets: '1', reps: '3 min' },
      { name: 'Burpees', sets: '4', reps: '10' },
      { name: 'Rodillas altas (High Knees)', sets: '4', reps: '45 seg' },
      { name: 'Escaladores (Mountain Climbers)', sets: '4', reps: '45 seg' },
    ],
  },
  'yoga-flex-1': {
    title: 'Flexibilidad y Yoga',
    description: 'Mejora tu flexibilidad y equilibrio con esta rutina de yoga.',
    exercises: [
      { name: 'Perro boca abajo', sets: '3', reps: '30 seg' },
      { name: 'Guerrero I', sets: '3', reps: '45 seg por lado' },
      { name: 'Postura del niño', sets: '2', reps: '60 seg' },
      { name: 'Estiramiento de isquiotibiales', sets: '3', reps: '30 seg' },
    ],
  },
  'upper-body-1': {
    title: 'Tren Superior Avanzado',
    description: 'Desarrolla fuerza y masa muscular en el tren superior.',
    exercises: [
      { name: 'Press de banca', sets: '4', reps: '8-10' },
      { name: 'Dominadas', sets: '4', reps: 'Al fallo' },
      { name: 'Press militar', sets: '3', reps: '10' },
      { name: 'Fondos en paralelas', sets: '3', reps: '12' },
    ],
  },
  'core-crusher-1': {
    title: 'Abdomen de Acero',
    description: 'Fortalece tu core con estos ejercicios intensos.',
    exercises: [
      { name: 'Crunches', sets: '4', reps: '20' },
      { name: 'Plancha lateral', sets: '3', reps: '30 seg por lado' },
      { name: 'Bicicleta en el aire', sets: '3', reps: '45 seg' },
      { name: 'Elevación de piernas', sets: '3', reps: '15' },
    ],
  },
  'lower-body-1': {
    title: 'Piernas de Hierro',
    description: 'Entrena tus piernas con ejercicios de alta intensidad.',
    exercises: [
      { name: 'Sentadilla búlgara', sets: '4', reps: '12 por pierna' },
      { name: 'Peso muerto rumano', sets: '4', reps: '10' },
      { name: 'Zancadas caminando', sets: '3', reps: '15 por pierna' },
      { name: 'Elevaciones de talones', sets: '4', reps: '20' },
    ],
  },
};

const RoutineDetailPage: React.FC = () => {
  const { routineId } = useParams<{ routineId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [routine, setRoutine] = useState<RoutineData | null>(null);

  useEffect(() => {
    // Simular carga de datos
    setIsLoading(true);
    setTimeout(() => {
      if (routineId && routinesData[routineId]) {
        setRoutine(routinesData[routineId]);
      }
      setIsLoading(false);
    }, 300);
  }, [routineId]);

  // Estado de error - rutina no encontrada
  if (!isLoading && !routine) {
    return (
      <div className="routine-detail-page routine-detail-page--error">
        <h1>Rutina no encontrada</h1>
        <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>
          Lo sentimos, no pudimos encontrar la rutina que buscas.
        </p>
        <button
          className="back-arrow-btn"
          onClick={() => navigate(-1)}
          aria-label="Volver a la página anterior"
        >
          <ArrowLeft size={20} className="back-arrow-icon" />
          <span className="back-arrow-label">Volver</span>
        </button>
      </div>
    );
  }

  // Estado de carga
  if (isLoading) {
    return (
      <div className="routine-detail-page routine-detail-page--loading">
        <button className="back-arrow-btn" disabled>
          <ArrowLeft size={20} className="back-arrow-icon" />
          <span className="back-arrow-label">Volver</span>
        </button>

        <header className="detail-header">
          <h1 className="detail-title">Cargando...</h1>
          <p className="detail-description">Preparando tu rutina...</p>
        </header>

        <div className="start-workout-container">
          <Button styleType="primary" disabled>
            ¡Empezar a Entrenar!
          </Button>
        </div>

        <div className="exercises-list">
          <h2 className="exercises-title">Ejercicios</h2>
          {[1, 2, 3].map((i) => (
            <div className="exercise-item" key={i}>
              <div className="exercise-number">-</div>
              <div className="exercise-details">
                <h3 className="exercise-name">Cargando ejercicio...</h3>
                <p className="exercise-sets-reps">- series x - repeticiones</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Estado normal con datos
  return (
    <div className="routine-detail-page">
      <button
        className="back-arrow-btn"
        onClick={() => navigate(-1)}
        aria-label="Volver a la lista de rutinas"
      >
        <ArrowLeft size={20} className="back-arrow-icon" />
        <span className="back-arrow-label">Regresar</span>
      </button>

      <header className="detail-header">
        <h1 className="detail-title">{routine!.title}</h1>
        <p className="detail-description">{routine!.description}</p>
      </header>

      <div className="start-workout-container">
        <Button
          styleType="primary"
          onClick={() => navigate(`/workout/${routineId}`)}
          aria-label={`Comenzar entrenamiento: ${routine!.title}`}
        >
          ¡Empezar a Entrenar!
        </Button>
      </div>

      <div className="exercises-list">
        <h2 className="exercises-title">Ejercicios ({routine!.exercises.length})</h2>
        {routine!.exercises.map((exercise, index) => (
          <div className="exercise-item" key={index}>
            <div className="exercise-number" aria-label={`Ejercicio número ${index + 1}`}>
              {index + 1}
            </div>
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