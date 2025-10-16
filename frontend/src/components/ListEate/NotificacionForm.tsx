import React, { useState } from "react";
import styles from "./Formulario.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

interface Props {
  onProgramar: (notif: { comentario: string; hora: string }) => void;
}

const NotificacionForm: React.FC<Props> = ({ onProgramar }) => {
  const [comentario, setComentario] = useState("");
  const [hora, setHora] = useState("");

  function programarNotificacion(e: React.FormEvent) {
    e.preventDefault();
    if (!hora) return;

    const ahora = new Date();
    const [h, m] = hora.split(":").map(Number);
    const target = new Date(ahora);
    target.setHours(h, m, 0, 0);
    let ms = target.getTime() - ahora.getTime();
    if (ms < 0) ms += 24 * 60 * 60 * 1000;

    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          setTimeout(() => {
            new Notification("Recordatorio de comida", { body: comentario });
          }, ms);
        }
      });
    }

    onProgramar({ comentario, hora });
    setComentario("");
    setHora("");
  }

  return (
    <form className={styles.form} onSubmit={programarNotificacion}>
      <h2 className={styles.heading}>Programar Notificación</h2>
      <Input
        label="Comentario"
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        placeholder="Comentario"
        required
      />
      <Input
        label="Hora"
        type="time"
        value={hora}
        onChange={e => setHora(e.target.value)}
        required
      />
      <Button type="submit">Programar</Button>
    </form>
  );
};

export default NotificacionForm;