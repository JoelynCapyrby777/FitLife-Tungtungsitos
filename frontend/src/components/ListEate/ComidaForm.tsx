import React, { useState } from "react";
import styles from "./Formulario.css";
import type { Comida } from "../../pages/EatePage/EatePage";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";


interface Props {
  onAddComida: (comida: Comida) => void;
}

const ComidaForm: React.FC<Props> = ({ onAddComida }) => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [proteinas, setProteinas] = useState(0);
  const [carbohidratos, setCarbohidratos] = useState(0);
  const [grasas, setGrasas] = useState(0);
  const [vitaminas, setVitaminas] = useState("");
  const [minerales, setMinerales] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAddComida({
      id: crypto.randomUUID(),
      nombre,
      ingredientes,
      nutrientes: {
        proteinas,
        carbohidratos,
        grasas,
        vitaminas,
        minerales
      }
    });
    setNombre("");
    setIngredientes("");
    setProteinas(0);
    setCarbohidratos(0);
    setGrasas(0);
    setVitaminas("");
    setMinerales("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Agregar Comida</h2>
      <Input
        label="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <Input
        label="Ingredientes"
        value={ingredientes}
        onChange={e => setIngredientes(e.target.value)}
        placeholder="Ingredientes"
        required
        as="textarea"
        rows={3}
      />
      <Input
        label="Proteínas (g)"
        type="number"
        value={proteinas}
        onChange={e => setProteinas(Number(e.target.value))}
        placeholder="Proteínas (g)"
        min={0}
        required
      />
      <Input
        label="Carbohidratos (g)"
        type="number"
        value={carbohidratos}
        onChange={e => setCarbohidratos(Number(e.target.value))}
        placeholder="Carbohidratos (g)"
        min={0}
        required
      />
      <Input
        label="Grasas (g)"
        type="number"
        value={grasas}
        onChange={e => setGrasas(Number(e.target.value))}
        placeholder="Grasas (g)"
        min={0}
        required
      />
      <Input
        label="Vitaminas"
        value={vitaminas}
        onChange={e => setVitaminas(e.target.value)}
        placeholder="Vitaminas"
      />
      <Input
        label="Minerales"
        value={minerales}
        onChange={e => setMinerales(e.target.value)}
        placeholder="Minerales"
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
};

export default ComidaForm;