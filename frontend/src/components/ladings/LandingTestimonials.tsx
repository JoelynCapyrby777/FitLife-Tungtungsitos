import React from "react";

const testimonials = [
    {
        quote: `"FitLife cambió completamente mi forma de entrenar. Las rutinas personalizadas me ayudaron a alcanzar mis objetivos en solo 3 meses. ¡Increíble plataforma!"`,
        name: "María González",
        role: "Entusiasta del fitness",
    },
    {
        quote: `"Como principiante estaba perdido, pero FitLife me guió paso a paso. Ahora entreno con confianza y veo resultados reales. Lo recomiendo al 100%."`,
        name: "Carlos Ramírez",
        role: "Nuevo en el fitness",
    },
    {
        quote: `"El seguimiento de progreso es espectacular. Ver mis avances semana a semana me mantiene motivada y enfocada en mis metas. ¡Gracias FitLife!"`,
        name: "Ana Torres",
        role: "Atleta amateur",
    },
    {
        quote: `"Perfecto para mi estilo de vida ocupado. Puedo entrenar cuando tengo tiempo y la app se adapta a mi horario. Resultados garantizados."`,
        name: "Jorge Mendoza",
        role: "Profesional ocupado",
    }
];


const AVATAR_URL = "https://pixie.haus/static/uploads/man__e9ac996d.webp";

const LandingTestimonials: React.FC = () => (
    <section className="landing-testimonials">
        <h2 className="landing-testimonials__title">Lo que dicen nuestros usuarios</h2>
        <div className="landing-testimonials__grid">
            {testimonials.map((t, i) => (
                <div className="landing-testimonial" key={i}>
                    <div className="landing-testimonial__header">
                        <img
                            src={AVATAR_URL}
                            alt={`Avatar de ${t.name}`}
                            className="landing-testimonial__avatar"
                        />
                        <div className="landing-testimonial__info">
                            <div className="landing-testimonial__name">{t.name}</div>
                            <div className="landing-testimonial__role">{t.role}</div>
                        </div>
                    </div>
                    <p className="landing-testimonial__quote">{t.quote}</p>
                </div>
            ))}
        </div>
    </section>
);

export default LandingTestimonials;