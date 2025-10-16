import React from "react";
import "./About-Page.css";
import { Footer, Header } from "../../components/layout";
import { Heart, Lightbulb, Users, Award } from "lucide-react";

const values = [
  {
    icon: <Heart size={32} strokeWidth={2} />,
    title: "Pasión",
    desc: "Amamos el fitness y la tecnología. Ponemos el corazón en cada rutina, consejo y línea de código.",
  },
  {
    icon: <Lightbulb size={32} strokeWidth={2} />,
    title: "Innovación",
    desc: "Buscamos siempre nuevas formas de motivarte y de acercarte a tus metas con soluciones creativas y útiles.",
  },
  {
    icon: <Users size={32} strokeWidth={2} />,
    title: "Comunidad",
    desc: "Creemos que juntos llegamos más lejos. Nuestra comunidad es nuestro mayor orgullo y motor de cambio.",
  },
  {
    icon: <Award size={32} strokeWidth={2} />,
    title: "Resultados",
    desc: "Nos enfocamos en que logres tus objetivos, celebrando cada avance y apoyándote en cada reto.",
  },
];

const AboutUsPage: React.FC = () => (
  <div>
    <Header />
    <main className="about-root">
      {/* HERO/INTRO */}
      <section className="about-hero">
        <h1 className="about-title">Sobre FitLife</h1>
        <p className="about-desc">
          En <span className="about-highlight">FitLife</span> creemos que cualquier persona puede transformar su vida
          a través del fitness y la constancia. Nuestra misión es motivarte, guiarte y entregarte las mejores herramientas digitales para que llegues tan lejos como quieras.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="about-mission-vision">
        <div className="about-mv-card">
          <h2 className="about-section-title">Nuestra misión</h2>
          <p>
            Empoderar a las personas a través de la actividad física, facilitando el acceso a rutinas personalizadas, recursos de calidad y una comunidad de apoyo que impulse el bienestar integral.
          </p>
        </div>
        <div className="about-mv-card">
          <h2 className="about-section-title">Nuestra visión</h2>
          <p>
            Ser la plataforma líder en fitness digital en habla hispana, inspirando a millones a alcanzar su mejor versión, sin importar su punto de partida.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="about-history">
        <h2 className="about-section-title">Nuestra historia</h2>
        <p>
          FitLife nació en 2022, cuando un grupo de apasionados por la tecnología y el deporte notó la falta de plataformas que realmente acompañaran a las personas en su viaje hacia una vida más saludable. Comenzamos como un pequeño proyecto universitario, y gracias a la confianza de nuestra comunidad, hoy impactamos la vida de miles de usuarios. Cada función y cada rutina está pensada para que te motives, avances y celebres cada logro.
        </p>
      </section>

      {/* Valores */}
      <section className="about-values">
        <h2 className="about-section-title">Nuestros valores</h2>
        <div className="about-values__grid">
          {values.map((v) => (
            <div className="landing-feature-card" key={v.title}>
              <div className="landing-feature-card__icon">
                {React.cloneElement(v.icon, {
                  color: '#7C3AED',
                  style: { transition: 'all 0.25s ease-in-out' }
                })}
              </div>
              <div className="landing-feature-card__title">{v.title}</div>
              <div className="landing-feature-card__desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA/Contacto */}
      <section className="about-contact">
        <h2 className="about-contact__title">¿Quieres conocernos más o colaborar?</h2>
        <p className="about-contact__desc">
          Escríbenos a <a href="mailto:hola@fitlife.com" className="about-contact__mail">hola@fitlife.com</a> o síguenos en nuestras redes para ser parte de la comunidad FitLife.
        </p>
        <div className="about-contact__socials">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Síguenos en Instagram"
          >
            Instagram
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Síguenos en Facebook"
          >
            Facebook
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Síguenos en Twitter"
          >
            Twitter
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUsPage;