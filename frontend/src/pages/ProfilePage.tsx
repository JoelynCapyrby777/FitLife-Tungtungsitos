import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useModal } from '../context/ModalContext';
import { Button } from '../components/ui';
import '../styles/profile-page.css';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { openModal } = useModal();

  // En un futuro, aquí obtendrías los datos completos del usuario desde una API.
  // Por ahora, usamos datos de ejemplo.
  const userProfile = {
    email: user?.email,
    age: '28',
    height: '175 cm',
    weight: '75 kg',
    goal: 'Ganar músculo'
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Mi Perfil</h1>
      <div className="profile-card">
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Correo Electrónico</span>
            <span className="info-value">{userProfile.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Edad</span>
            <span className="info-value">{userProfile.age}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Altura</span>
            <span className="info-value">{userProfile.height}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Peso</span>
            <span className="info-value">{userProfile.weight}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Objetivo Principal</span>
            <span className="info-value">{userProfile.goal}</span>
          </div>
        </div>
        <Button onClick={() => openModal('physicalData')} styleType="primary">
          Editar mis datos
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;