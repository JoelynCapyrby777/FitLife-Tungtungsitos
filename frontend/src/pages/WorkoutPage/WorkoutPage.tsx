import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { Button } from '../../components/ui';
import '../styles/workout-page.css';

// Usaremos los mismos datos que ya teníamos
const routinesData = {
  'full-body-1': { 
    title: 'Fuerza Total para Principiantes',
    exercises: [
      { name: 'Sentadillas (Squats)', sets: '3', reps: '10-12' },
      { name: 'Flexiones (Push-ups)', sets: '3', reps: 'Al fallo' },
      { name: 'Remo con mancuerna', sets: '3', reps: '10 por brazo' },
      { name: 'Plancha (Plank)', sets: '3', reps: '30-60 seg' },
    ]
  },
  'cardio-blast-1': { 
    title: 'Cardio Intenso',
    exercises: [
      { name: 'Saltos de tijera (Jumping Jacks)', sets: '1', reps: '3 min' },
      { name: 'Burpees', sets: '4', reps: '10' },
      { name: 'Rodillas altas (High Knees)', sets: '4', reps: '45 seg' },
      { name: 'Escaladores (Mountain Climbers)', sets: '4', reps: '45 seg' },
    ]
  },
};

const WorkoutPage: React.FC = () => {
  const { routineId } = useParams<{ routineId: string }>();
  const navigate = useNavigate();
  const routine = routineId ? routinesData[routineId as keyof typeof routinesData] : null;
  const { addWorkoutToHistory } = useProgress();
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  if (!routine) {
    return <div>Rutina no encontrada</div>;
  }

  const currentExercise = routine.exercises[currentExerciseIndex];
  const totalExercises = routine.exercises.length;
  const isFirstExercise = currentExerciseIndex === 0;
  const isLastExercise = currentExerciseIndex === totalExercises - 1;

  const goToNext = () => {
    if (!isLastExercise) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const goToPrev = () => {
    if (!isFirstExercise) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  // Esta es la única y correcta función para finalizar
  const finishWorkout = () => {
    if (routine) {
      addWorkoutToHistory({ title: routine.title });
    }
    alert('¡Felicidades! Has completado la rutina.');
    navigate('/progress'); // Te lleva a la página de progreso
  };

  return (
    <div className="workout-page">
      <div className="workout-card">
        <div className="workout-progress">
          Ejercicio {currentExerciseIndex + 1} de {totalExercises}
        </div>
        <div className="exercise-focus">
          <h1 className="exercise-name-large">{currentExercise.name}</h1>
          <p className="exercise-sets-reps-large">
            {currentExercise.sets} series x {currentExercise.reps}
          </p>
        </div>
        <div className="workout-navigation">
          <Button styleType="secondary" onClick={goToPrev} disabled={isFirstExercise}>
            Anterior
          </Button>
          {isLastExercise ? (
            <Button styleType="primary" onClick={finishWorkout}>
              Finalizar Rutina
            </Button>
          ) : (
            <Button styleType="primary" onClick={goToNext}>
              Siguiente Ejercicio
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;