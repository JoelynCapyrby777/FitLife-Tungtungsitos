import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, PasswordInput, Button } from "../../components/ui";
import { useToast } from "../../context/ToastContext";
import { registerUser } from "../../api/auth";
import AuthTabs from "../../components/ui/AuthTabs/AuthTabs";
import AuthSplitLayout from "../../components/ui/AuthSplitContainer/AuthSplitLayout";
import RegisterLeftContentStep1 from "../../components/ui/AuthMessages/RegisterMessage/RegisterLeftContentStep1";
import RegisterLeftContentStep2 from "../../components/ui/AuthMessages/RegisterMessage/RegisterLeftContentStep2";
import '../LoginPage/login-page.css';
import './register-page.css';
import '../../components/ui/AuthMessages/Animation.css'

const RegisterPage: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Step 2
  const [nombre, setNombre] = useState<string>("");
  // inputs pueden ser vacío (""), pero al enviar deben convertirse a número.
  const [pesoKg, setPesoKg] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [estaturaMetros, setEstaturaMetros] = useState<string>("");

  const [errorForInput, setErrorForInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTabClick = (tab: 'login' | 'register') => {
    if (tab === 'login') navigate('/login');
  };

  // Validación y paso de Step 1
  const handleStep1Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Por favor, ingresa un correo válido.", "error");
      setErrorForInput("email");
      return;
    }
    if (password.length < 6) {
      showToast("La contraseña debe tener mínimo 6 caracteres.", "error");
      setErrorForInput("password");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Las contraseñas no coinciden.", "error");
      setErrorForInput("confirmPassword");
      return;
    }
    setStep(2);
  };

  // Validación y registro final
  const handleStep2Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorForInput("");

    // Convertir a número antes de validar y enviar
    const pesoNumber = Number(pesoKg);
    const edadNumber = Number(edad);
    const estaturaNumber = Number(estaturaMetros);

    if (!nombre.trim() || nombre.length < 2 || nombre.length > 40 || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre)) {
      showToast("Ingresa un nombre válido (solo letras, 2-40 caracteres).", "error");
      setErrorForInput("nombre");
      return;
    }
    if (!pesoKg || isNaN(pesoNumber) || pesoNumber < 20 || pesoNumber > 300) {
      showToast("El peso debe estar entre 20 y 300 kg.", "error");
      setErrorForInput("pesoKg");
      return;
    }
    if (!edad || isNaN(edadNumber) || edadNumber < 5 || edadNumber > 120) {
      showToast("La edad debe estar entre 5 y 120 años.", "error");
      setErrorForInput("edad");
      return;
    }
    if (!estaturaMetros || isNaN(estaturaNumber) || estaturaNumber < 1.0 || estaturaNumber > 2.5) {
      showToast("La estatura debe estar entre 1.0 y 2.5 metros.", "error");
      setErrorForInput("estaturaMetros");
      return;
    }

    setIsLoading(true);

    try {
      const userData = {
        correo: email,
        contrasena: password,
        nombre,
        pesoKg: pesoNumber,
        edad: edadNumber,
        estaturaMetros: estaturaNumber,
      };

      await registerUser(userData);
      showToast("¡Registro exitoso! Ahora inicia sesión.", "success");
      navigate("/");
    } catch (error: any) {
      showToast(error.message || "No se pudo completar el registro.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-background">
      <AuthSplitLayout leftContent={
        <div key={step} className="animated-left-content">
          {step === 1
            ? <RegisterLeftContentStep1 />
            : <RegisterLeftContentStep2 />}
        </div>
      }>
        <div className="form-container">
          <div className="form-header__brand">
            <img src="/src/assets/logotipo.svg" alt="Logo de FitLife" className="form-header__logo" />
            <span className="form-header__brand-name">FitLife</span>
          </div>
          <h3 className="form-header__title">Crear Cuenta</h3>
          <p className="form-header__subtitle">{step === 1 ? "¡Es rápido y fácil!" : "Cuéntanos más sobre ti"}</p>
          {step === 1 && (
            <AuthTabs activeTab={activeTab} onTabClick={handleTabClick} />
          )}
          {step === 1 ? (
            <form onSubmit={handleStep1Submit} noValidate className="form-container__body">
              <Input
                label="Correo electrónico"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errorForInput === 'email' ? 'Error' : ''}
              />
              <PasswordInput
                label="Contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errorForInput === 'password' ? 'Error' : ''}
              />
              <PasswordInput
                label="Confirmar contraseña"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errorForInput === 'confirmPassword' ? 'Error' : ''}
              />
              <Button type="submit">
                Siguiente
              </Button>
            </form>
          ) : (
            <form onSubmit={handleStep2Submit} noValidate className="form-container__body form-container__body--short-inputs step-2-animate">
              <Input
                label="Nombre"
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                error={errorForInput === 'nombre' ? 'Error' : ''}
                maxLength={40}
              />
              <div className="register-data-row">
                <Input
                  label="Peso (kg)"
                  type="number"
                  name="pesoKg"
                  value={pesoKg}
                  onChange={(e) => setPesoKg(e.target.value)}
                  error={errorForInput === 'pesoKg' ? 'Error' : ''}
                  min={20}
                  max={300}
                  step={1}
                />

                <Input
                  label="Edad"
                  type="number"
                  name="edad"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  error={errorForInput === 'edad' ? 'Error' : ''}
                  min={5}
                  max={120}
                  step={1}
                />

                <Input
                  label="Estatura (m)"
                  type="number"
                  name="estaturaMetros"
                  value={estaturaMetros}
                  onChange={(e) => setEstaturaMetros(e.target.value)}
                  error={errorForInput === 'estaturaMetros' ? 'Error' : ''}
                  min={1.0}
                  max={2.5}
                  step={0.01}
                />
              </div>
              <Button type="submit" isLoading={isLoading}>
                Crear cuenta
              </Button>
            </form>
          )}
        </div>
      </AuthSplitLayout>
    </div>
  );
};

export default RegisterPage;