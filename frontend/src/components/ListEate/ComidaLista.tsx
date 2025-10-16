import React from "react";
import styles from "./Formulario.css";
import type { Comida } from "../../pages/EatePage/EatePage";

interface Props {
  comidas: Comida[];
}

const ComidaLista: React.FC<Props> = ({ comidas }) => (
  <section className={styles.lista}>
    <h2 className={styles.heading}>Comidas Guardadas</h2>
    {comidas.length === 0 && <p className={styles.empty}>No hay comidas registradas.</p>}
    <ul className={styles.ul}>
      {comidas.map(comida => (
        <li key={comida.id} className={styles.item}>
          <strong className={styles.nombre}>{comida.nombre}</strong>
          <span className={styles.ingredientes}> - {comida.ingredientes}</span>
          <div className={styles.nutrientes}>
            <span>Proteínas: {comida.nutrientes.proteinas}g</span>
            <span>Carbohidratos: {comida.nutrientes.carbohidratos}g</span>
            <span>Grasas: {comida.nutrientes.grasas}g</span>
            <span>Vitaminas: {comida.nutrientes.vitaminas}</span>
            <span>Minerales: {comida.nutrientes.minerales}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ComidaLista;