import React from 'react';
import { Eye as EyeOpen, EyeOff } from 'lucide-react'; 
import './Eye.css';

interface EyeProps {
  open: boolean;
  onClick: () => void;
}

const Eye: React.FC<EyeProps> = ({ open, onClick }) => (
  <span
    className="eye-icon"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    {open ? (
      <EyeOpen size={22} strokeWidth={2} color="#212121" />  /* ojo abierto */
    ) : (
      <EyeOff size={21} strokeWidth={2} color="#212121" />   /* ojo cerrado */
    )}
  </span>
);

export default Eye;
