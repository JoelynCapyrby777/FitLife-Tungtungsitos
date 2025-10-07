import React from "react";
import styles from "./Formulario.css";
import type { Comida } from "../../pages/EatePage/EatePage";

interface Props {
  comidas: Comida[];
}

const ResumenNutrientes: React.FC<Props> = ({ comidas }) => {
  const total = comidas.reduce(
    (acc, c) => {
      acc.proteinas += c.nutrientes.proteinas;
      acc.carbohidratos += c.nutrientes.carbohidratos;
      acc.grasas += c.nutrientes.grasas;
      return acc;
    },
    { proteinas: 0, carbohidratos: 0, grasas: 0 }
  );

  return (
    <section className={styles.resumen}>
      <h2 className={styles.heading}>Resumen Diario de Nutrientes</h2>
      <div className={styles.row}>Proteínas: <b>{total.proteinas}g</b></div>
      <div className={styles.row}>Carbohidratos: <b>{total.carbohidratos}g</b></div>
      <div className={styles.row}>Grasas: <b>{total.grasas}g</b></div>
    </section>
  );
};

export default ResumenNutrientes;