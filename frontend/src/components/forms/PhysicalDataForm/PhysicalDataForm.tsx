import React, { useState } from 'react';
import { Input, Button } from '../../ui';
import { useToast } from '../../../context/ToastContext';
import { useAuth } from '../../../context/AuthContext';
import { UpdateUserById } from '../../../api/auth';
import './physical-data-form.css';

interface PhysicalDataFormProps {
  onSave?: () => void;
}
const PhysicalDataForm: React.FC<PhysicalDataFormProps> = ({ onSave }) => {
  const { showToast } = useToast();
  const { user: authUser } = useAuth();
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    experience: 'beginner',
    goal: 'lose_weight',
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validaciones
    const ageNum = Number(formData.age);
    const heightNum = Number(formData.height); // cm in UI
    const weightNum = Number(formData.weight);

    if (!Number.isFinite(ageNum) || ageNum <= 0) {
      showToast('Ingresa una edad válida.', 'error');
      return;
    }
    if (!Number.isFinite(heightNum) || heightNum <= 0) {
      showToast('Ingresa una estatura válida en centímetros.', 'error');
      return;
    }
    if (!Number.isFinite(weightNum) || weightNum <= 0) {
      showToast('Ingresa un peso válido en kilogramos.', 'error');
      return;
    }

    // Preparar payload para la API
    const payload: Record<string, unknown> = {
      edad: Math.round(ageNum),
      pesoKg: Math.round(weightNum),
      // convertir cm -> metros con 2 decimales
      estaturaMetros: +(heightNum / 100).toFixed(2),
      // NOTA: este formulario no actualiza nombre/correo/contrasena.
      // Si quieres actualizar esos campos agrega inputs y envíalos aquí.
    };

    // Determinar id: usamos authUser.id si existe, sino 1 como fallback (como en tu app)
    const userId = (authUser && (authUser as any).id) ?? 1;

    try {
      setSaving(true);
      await UpdateUserById(userId, payload);
      showToast('¡Tus datos físicos se actualizaron correctamente!', 'success');

      if (onSave) onSave();
    } catch (err: any) {
      console.error('Error actualizando datos físicos:', err);
      const message = err?.message || 'No se pudieron actualizar los datos. Intenta de nuevo.';
      showToast(message, 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container__body">
      
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="age" className="form-label">Edad</label>
          <Input id="age" name="age" type="number" min={0} value={formData.age} onChange={handleChange} label={''} />
        </div>

        <div className="form-group">
          <label htmlFor="height" className="form-label">Altura (cm)</label>
          <Input id="height" name="height" type="number" min={0} value={formData.height} onChange={handleChange} label={''} />
        </div>

        <div className="form-group">
          <label htmlFor="weight" className="form-label">Peso (kg)</label>
          <Input id="weight" name="weight" type="number" min={0} value={formData.weight} onChange={handleChange} label={''} />
        </div>
      </div>

      <Button type="submit" disabled={saving}>
        {saving ? 'Guardando...' : 'Guardar Cambios'}
      </Button>
    </form>
  );
};

export default PhysicalDataForm;