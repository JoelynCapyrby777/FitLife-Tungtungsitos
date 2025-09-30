import React, { useState, useRef } from 'react';
import './PasswordInput.css';
import Input from '../Input/Input';
import Eye from '../Eye/Eye';

interface PasswordInputProps {
  label: string;
  name: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Puedes agregar otros props si lo necesitas
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  error,
  value,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="password-input-wrapper" style={{ position: 'relative' }}>
      <Input
        label={label}
        name={name}
        type={showPassword ? 'text' : 'password'}
        error={error}
        value={value}
        onChange={onChange}
        ref={inputRef}
        {...rest}
      />
      <Eye
        open={showPassword}
        onClick={() => {
          setShowPassword((show) => !show);
          inputRef.current?.focus();
        }}
      />
    </div>
  );
};

export default PasswordInput;