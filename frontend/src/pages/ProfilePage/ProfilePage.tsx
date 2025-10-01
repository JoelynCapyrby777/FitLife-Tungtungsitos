import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useModal } from '../context/ModalContext';
import { Button } from '../components/ui';
import '../styles/profile-page.css';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { openModal } = useModal();

  const userProfile = {
    name: 'Joelyn',
    email: user?.email,
    memberSince: 'Septiembre 2025',
    age: 28,
    height: 175,
    weight: 75,
    goal: 'Ganar músculo'
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1 className="profile-main-title">Configuración de la Cuenta</h1>
        <p className="profile-main-subtitle">Gestiona tu información personal y tus datos de fitness.</p>
      </header>

      <div className="profile-grid">
        {/* Tarjeta de Información de Cuenta */}
        <div className="profile-section-card">
          <div className="card-header">
            <h2 className="card-title">Información de la Cuenta</h2>
            {/* 👇 Ahora este botón abre el modal correcto */}
            <Button styleType="secondary" onClick={() => openModal('accountInfo')}>Editar</Button>
          </div>
          <div className="card-body">
            <div className="info-item">
              <span className="info-label">Nombre</span>
              <span className="info-value">{userProfile.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Correo Electrónico</span>
              <span className="info-value">{userProfile.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Miembro desde</span>
              <span className="info-value">{userProfile.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Tarjeta de Datos Físicos (sin cambios) */}
        <div className="profile-section-card">
          <div className="card-header">
            <h2 className="card-title">Datos Físicos</h2>
            <Button styleType="secondary" onClick={() => openModal('physicalData')}>Editar</Button>
          </div>
          <div className="card-body">
            <div className="info-item">
              <span className="info-label">Edad</span>
              <span className="info-value">{userProfile.age} años</span>
            </div>
            <div className="info-item">
              <span className="info-label">Altura</span>
              <span className="info-value">{userProfile.height} cm</span>
            </div>
            <div className="info-item">
              <span className="info-label">Peso</span>
              <span className="info-value">{userProfile.weight} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">Objetivo</span>
              <span className="info-value">{userProfile.goal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
