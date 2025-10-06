    import React from "react";
import { Dumbbell, Calendar, TrendingUp, Target, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Dumbbell size={32} color="#7C3AED" />,
    title: "Rutinas Personalizadas",
    desc: "Crea planes de entrenamiento adaptados a tu nivel, objetivos y disponibilidad de tiempo. Cada rutina está diseñada para maximizar tus resultados.",
  },
  {
    icon: <Calendar size={32} color="#7C3AED" />,
    title: "Seguimiento Diario",
    desc: "Registra tus entrenamientos, monitorea tu progreso y mantén un calendario organizado. Visualiza tu evolución con estadísticas detalladas.",
  },
  {
    icon: <TrendingUp size={32} color="#7C3AED" />,
    title: "Progreso Medible",
    desc: "Analiza tu evolución con gráficas y métricas precisas. Observa cómo mejoras semana a semana y celebra cada logro alcanzado.",
  },
  {
    icon: <Target size={32} color="#7C3AED" />,
    title: "Metas Claras",
    desc: "Define objetivos específicos y alcanzables. Nuestro sistema te guiará paso a paso hacia tu transformación física.",
  },
  {
    icon: <Users size={32} color="#7C3AED" />,
    title: "Comunidad Activa",
    desc: "Conéctate con otros usuarios, comparte tu progreso y encuentra motivación. Juntos llegamos más lejos.",
  },
  {
    icon: <Award size={32} color="#7C3AED" />,
    title: "Logros y Recompensas",
    desc: "Gana insignias y desbloquea recompensas mientras completas tus objetivos. Cada esfuerzo cuenta y se reconoce.",
  },
];

const LandingFeatures: React.FC = () => (
  <section className="landing-features">
    <h2 className="landing-features__title">¿Por qué elegir FitLife?</h2>
    <div className="landing-features__grid">
      {features.map((f, i) => (
        <div className="landing-feature-card" key={i}>
          <div className="landing-feature-card__icon">{f.icon}</div>
          <h3 className="landing-feature-card__title">{f.title}</h3>
          <p className="landing-feature-card__desc">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LandingFeatures;