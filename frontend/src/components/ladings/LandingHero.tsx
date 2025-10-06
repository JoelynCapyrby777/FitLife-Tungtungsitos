import React from "react";
import { NavLink } from "react-router-dom";

const LandingHero: React.FC = () => (
  <section className="landing-hero">
    <div className="landing-hero__info">
      <h1 className="landing-hero__title">
        Alcanza tus metas con rutinas personalizadas
      </h1>
      <p className="landing-hero__desc">
        Transforma tu cuerpo y mente con planes de entrenamiento diseñados específicamente para ti.
        FitLife te ayuda a crear rutinas efectivas, hacer seguimiento de tu progreso y mantenerte motivado cada día.
      </p>
      <p className="landing-hero__desc landing-hero__desc--short">
        Únete a miles de personas que ya están alcanzando sus objetivos de fitness.
        Desde principiantes hasta atletas avanzados, tenemos el plan perfecto para ti.
      </p>
      <NavLink to="/login">
        <button className="landing-hero__cta">Comienza tu transformación</button>
      </NavLink>
    </div>
    <div className="landing-hero__image">
      <div className="landing-hero__image-placeholder">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/09/01/56/desi-gym-fitness-8050666_960_720.jpg"
          alt="Entrenamiento FitLife"
          className="landing-hero__img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </div>
    </div>
  </section>
);

export default LandingHero;