import React, { createContext, useState, useContext, type ReactNode } from 'react';

// Definimos cómo se verá un entrenamiento completado
export interface CompletedWorkout {
  id: string;
  title: string;
  date: string; // Guardamos la fecha como un string simple
}

interface ProgressContextType {
  history: CompletedWorkout[];
  addWorkoutToHistory: (workout: Omit<CompletedWorkout, 'id' | 'date'>) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<CompletedWorkout[]>([]);

  const addWorkoutToHistory = (workout: Omit<CompletedWorkout, 'id' | 'date'>) => {
    const newWorkout: CompletedWorkout = {
      ...workout,
      id: `workout-${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    };
    setHistory(prevHistory => [newWorkout, ...prevHistory]); // Añade el nuevo al principio
  };

  return (
    <ProgressContext.Provider value={{ history, addWorkoutToHistory }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress debe ser usado dentro de un ProgressProvider');
  }
  return context;
};
