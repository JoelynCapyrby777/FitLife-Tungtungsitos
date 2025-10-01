import React, { useState } from 'react';
import { Input, Button } from '../../ui';
import { useToast } from '../../../context/ToastContext';
import { useAuth } from '../../../context/AuthContext';

// Esta prop es para que el formulario pueda "avisarle" al Modal que ya terminó.
interface AccountInfoFormProps {
  onSave?: () => void;
}

const AccountInfoForm: React.FC<AccountInfoFormProps> = ({ onSave }) => {
  const { showToast } = useToast();
  const { user } = useAuth(); // Para pre-rellenar el formulario

  const [formData, setFormData] = useState({
    name: 'Joelyn', // Nombre de ejemplo
    email: user?.email || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Información de cuenta actualizada:', formData);
    showToast('¡Tu información ha sido guardada!', 'success');
    
    // Si el Modal nos pasó la función onSave, la llamamos para que se cierre.
    if (onSave) {
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container__body">
      <Input label="Nombre" type="text" name="name" value={formData.name} onChange={handleChange} required />
      <Input label="Correo Electrónico" type="email" name="email" value={formData.email} onChange={handleChange} required />
      <Button type="submit">Guardar Cambios</Button>
    </form>
  );
};

export default AccountInfoForm;