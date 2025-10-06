import React from "react";

const steps = [
  {
    number: "1",
    title: "Crea tu perfil",
    desc: "Regístrate gratis y completa tu perfil con información sobre tu nivel de fitness, objetivos y preferencias. Esto nos ayudará a personalizar tu experiencia."
  },
  {
    number: "2",
    title: "Elige tu plan",
    desc: "Selecciona entre nuestras rutinas prediseñadas o crea la tuya propia. Ajusta la intensidad, duración y tipo de ejercicios según tus necesidades."
  },
  {
    number: "3",
    title: "Entrena y registra",
    desc: "Sigue tus rutinas diarias, registra cada sesión y marca tus ejercicios completados. La aplicación te recordará tus entrenamientos para mantener la consistencia."
  },
  {
    number: "4",
    title: "Monitorea tu progreso",
    desc: "Visualiza tu evolución con estadísticas detalladas, gráficas de progreso y métricas personalizadas. Ajusta tu plan según tus resultados para optimizar tu rendimiento."
  }
];

const LandingHowItWorks: React.FC = () => (
  <section className="landing-how">
    <h2 className="landing-how__title">¿Cómo funciona?</h2>
    <div className="landing-how__steps">
      {steps.map((step, i) => (
        <div className="landing-step" key={i}>
          <div className="landing-step__number">{step.number}</div>
          <div className="landing-step__content">
            <h3 className="landing-step__title">{step.title}</h3>
            <p className="landing-step__desc">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LandingHowItWorks;