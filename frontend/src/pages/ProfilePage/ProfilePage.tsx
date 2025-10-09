import React, { useEffect, useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { Button, Input } from '../../components/ui';
import './profile-page.css';
import { getUserById } from '../../api/auth';
import { UpdateUserById } from '../../api/auth';

const ProfilePage: React.FC = () => {
  const { openModal } = useModal();
  const [firstUser, setFirstUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const [form, setForm] = useState({
    nombre: '',
    // correo no editable según tu petición (se muestra solo)
    edad: '',
    pesoKg: '',
    estaturaCm: '', // UI en centímetros; convertimos a metros al enviar
  });

  // Carga inicial del "primer usuario" (id 1)
  const loadFirstUser = async () => {
    setLoading(true);
    try {
      const res: any = await getUserById(1);
      const payload = res && res.data ? res.data : res;
      setFirstUser(payload);

      // Inicializar formulario con los datos recibidos (convertir metros -> cm)
      setForm({
        nombre: payload?.nombre ?? '',
        edad: payload?.edad != null ? String(payload.edad) : '',
        pesoKg: payload?.pesoKg != null ? String(payload.pesoKg) : '',
        estaturaCm:
          payload?.estaturaMetros != null ? String(Math.round(payload.estaturaMetros * 100)) : '',
      });
    } catch (err: any) {
      console.error('Error al obtener el usuario:', err);
      alert(err?.message || 'Error al cargar usuario.');
      setFirstUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFirstUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    // Restaurar form a los datos más recientes
    if (firstUser) {
      setForm({
        nombre: firstUser?.nombre ?? '',
        edad: firstUser?.edad != null ? String(firstUser.edad) : '',
        pesoKg: firstUser?.pesoKg != null ? String(firstUser.pesoKg) : '',
        estaturaCm:
          firstUser?.estaturaMetros != null ? String(Math.round(firstUser.estaturaMetros * 100)) : '',
      });
    }
    setEditing(false);
  };

  const handleSave = async () => {
    if (!firstUser) return;

    // Validaciones simples
    const edadNum = Number(form.edad);
    const pesoNum = Number(form.pesoKg);
    const estCm = Number(form.estaturaCm);

    if (!Number.isFinite(edadNum) || edadNum <= 0) {
      alert('Ingresa una edad válida.');
      return;
    }
    if (!Number.isFinite(pesoNum) || pesoNum <= 0) {
      alert('Ingresa un peso válido.');
      return;
    }
    if (!Number.isFinite(estCm) || estCm <= 0) {
      alert('Ingresa una estatura válida en centímetros.');
      return;
    }

    // Construimos el payload EXACTO que tu PUT acepta (sin correo ni contrasena)
    const payload: Record<string, unknown> = {
      nombre: form.nombre?.trim(),
      edad: Math.round(edadNum),
      pesoKg: Math.round(pesoNum),
      estaturaMetros: +(estCm / 100).toFixed(2),
    };

    try {
      setSaving(true);
      const idToUpdate = firstUser.id ?? 1; // usa el id real devuelto por GET
      const updated = await UpdateUserById(idToUpdate, payload);
      // recargar para mostrar valores actualizados
      await loadFirstUser();
      setEditing(false);
      alert('Datos actualizados correctamente.');
      console.debug('PUT response (parsed):', updated);
    } catch (err: any) {
      console.error('Error actualizando usuario:', err);
      alert(err?.message || 'No se pudo actualizar el usuario (revisa Network).');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">Cargando perfil...</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1 className="profile-main-title">Configuración de la Cuenta</h1>
        <p className="profile-main-subtitle">Gestiona tu información personal y tus datos de fitness.</p>
      </header>

      <div className="profile-grid">
        {/* Información de la cuenta: correo se muestra solo (no editable) */}
        <section className="profile-section-card" aria-labelledby="account-info-title">
          <div className="card-header">
            <h2 id="account-info-title" className="card-title">Información de la Cuenta</h2>
            
          </div>

          <div className="card-body">
            <div className="info-item">
              <span className="info-label">Nombre</span>
              {!editing ? (
                <span className="info-value">{firstUser?.nombre ?? '-'}</span>
              ) : (
                <Input name="nombre" value={form.nombre} onChange={handleChange} />
              )}
            </div>

            <div className="info-item">
              <span className="info-label">Correo Electrónico</span>
              {/* Correo en modo solo lectura (no editable ni enviado al PUT) */}
              <span className="info-value">{firstUser?.correo ?? '-'}</span>
            </div>
          </div>
        </section>

        {/* Datos físicos */}
        <section className="profile-section-card" aria-labelledby="physical-data-title">
          <div className="card-header">
            <h2 id="physical-data-title" className="card-title">Datos Físicos</h2>
            
          </div>

          <div className="card-body">
            <div className="info-item">
              <span className="info-label">Edad</span>
              {!editing ? (
                <span className="info-value">{firstUser?.edad ?? '-'} años</span>
              ) : (
                <Input name="edad" type="number" value={form.edad} onChange={handleChange} />
              )}
            </div>

            <div className="info-item">
              <span className="info-label">Altura</span>
              {!editing ? (
                <span className="info-value">
                  {firstUser?.estaturaMetros != null ? `${Math.round(firstUser.estaturaMetros * 100)} cm` : '-'}
                </span>
              ) : (
                <Input name="estaturaCm" type="number" value={form.estaturaCm} onChange={handleChange} />
              )}
            </div>

            <div className="info-item">
              <span className="info-label">Peso</span>
              {!editing ? (
                <span className="info-value">{firstUser?.pesoKg ?? '-'} kg</span>
              ) : (
                <Input name="pesoKg" type="number" value={form.pesoKg} onChange={handleChange} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;