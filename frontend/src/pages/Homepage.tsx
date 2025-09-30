import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui';
import './HomePage.css';

// Definimos la forma del 'contexto' que el Layout le pasará a esta página
interface HomePageContext {
  openPhysicalDataModal: () => void;
}

const HomePage: React.FC = () => {
  // Obtenemos la función para abrir el modal desde el Layout a través del Outlet.
  // Añadimos un fallback `|| {}` para prevenir un crash si el contexto no está disponible.
  const { openPhysicalDataModal } = useOutletContext<HomePageContext>() || {};
  const { user } = useAuth();

  const handleRegisterClick = () => {
    if (openPhysicalDataModal) {
      openPhysicalDataModal();
    } else {
      // Este mensaje es útil para depurar si el contexto no se está pasando correctamente.
      console.error("La función openPhysicalDataModal no fue encontrada en el contexto del Outlet.");
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-welcome">
        <h1 className="homepage-title">¡Bienvenido, {user?.email}!</h1>
        <p className="homepage-subtitle">
          Estás un paso más cerca de alcanzar tus metas. Para empezar, registra tus datos físicos.
        </p>
        <Button 
          styleType="primary" 
          onClick={handleRegisterClick}
        >
          Registrar mis datos físicos
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
