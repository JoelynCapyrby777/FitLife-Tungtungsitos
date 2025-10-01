import React, { useState } from 'react';
import { Input, Button } from '../../ui';
import { useToast } from '../../../context/ToastContext';
import './physical-data-form.css';

interface PhysicalDataFormProps {
  onSave?: () => void;
}

const PhysicalDataForm: React.FC<PhysicalDataFormProps> = ({ onSave }) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    age: '', height: '', weight: '', gender: 'male',
    experience: 'beginner', goal: 'lose_weight',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 👇 ¡NUEVA LÓGICA DE VALIDACIÓN! 👇
    // Convertimos los valores a números para poder compararlos
    const age = Number(formData.age);
    const height = Number(formData.height);
    const weight = Number(formData.weight);

    if (age <= 1 || height <= 1 || weight <= 1) {
      showToast('La edad, altura y peso deben ser números positivos.', 'error');
      return; // Detenemos el envío del formulario
    }
    // --- Fin de la validación ---

    console.log('Datos físicos enviados:', formData);
    showToast('¡Tus datos han sido guardados con éxito!', 'success');
    
    if (onSave) {
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container__body">
      <Input
        label="Edad"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        min="1" // No permite números negativos o cero
        required
      />
      <Input
        label="Altura (en cm)"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
        min="1" // No permite números negativos o cero
        required
      />
      <Input
        label="Peso (en kg)"
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        min="1" // No permite números negativos o cero
        required
      />
      
      <div className="form-group">
        <label htmlFor="gender" className="form-label">Género</label>
        <select id="gender" name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="experience" className="form-label">Nivel de experiencia</label>
        <select id="experience" name="experience" className="form-select" value={formData.experience} onChange={handleChange}>
          <option value="beginner">Principiante</option>
          <option value="intermediate">Intermedio</option>
          <option value="advanced">Avanzado</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="goal" className="form-label">Mi objetivo principal</label>
        <select id="goal" name="goal" className="form-select" value={formData.goal} onChange={handleChange}>
          <option value="lose_weight">Bajar de peso</option>
          <option value="gain_muscle">Ganar músculo</option>
          <option value="maintain">Mantenerme en forma</option>
        </select>
      </div>

      <Button type="submit">Guardar Cambios</Button>
    </form>
  );
};

export default PhysicalDataForm;