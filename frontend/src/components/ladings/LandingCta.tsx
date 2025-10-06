import React from "react";
import { NavLink } from "react-router-dom";

const LandingCta: React.FC = () => (
  <section className="landing-cta">
    <div className="landing-cta__box">
      <h2 className="landing-cta__title">¿Listo para transformar tu vida?</h2>
      <p className="landing-cta__desc">
        Únete a FitLife hoy y comienza tu viaje hacia un estilo de vida más saludable y activo.
      </p>
      <NavLink to="/login">
        <button className="landing-cta__button">Crear cuenta gratis</button>
      </NavLink>
    </div>
  </section>
);

export default LandingCta;