import  { useEffect, useState } from "react";
import styles from "./EatePage.css";
import ComidaForm from "../../components/ListEate/ComidaForm";
import ResumenNutrientes from "../../components/ListEate/ResumenNutrientes";
import ComidaLista from "../../components/ListEate/ComidaLista";
import NotificacionForm from "../../components/ListEate/NotificacionForm";

export interface Comida {
  id: string;
  nombre: string;
  ingredientes: string;
  nutrientes: {
    proteinas: number;
    carbohidratos: number;
    grasas: number;
    vitaminas: string;
    minerales: string;
  };
}

export interface Notificacion {
  comentario: string;
  hora: string;
}

function EatePage() {
  const [comidas, setComidas] = useState<Comida[]>(() => {
    const guardadas = localStorage.getItem("comidas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("comidas", JSON.stringify(comidas));
  }, [comidas]);

  // Notificaciones sólo en ejecución (no persistente)
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Libreta de Comidas y Nutrientes</h1>
      <section className={styles.section}>
        <ComidaForm onAddComida={comida => setComidas([comida, ...comidas])} />
      </section>
      <section className={styles.section}>
        <ResumenNutrientes comidas={comidas} />
      </section>
      <section className={styles.section}>
        <ComidaLista comidas={comidas} />
      </section>
      <section className={styles.section}>
        <NotificacionForm onProgramar={notif => setNotificaciones([...notificaciones, notif])} />
      </section>
    </div>
  );
}

export default EatePage;