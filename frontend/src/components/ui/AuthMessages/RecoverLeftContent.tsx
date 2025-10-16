//Es un mensaje de la parte de recupera tu cuenta
const RecoverLeftContent = () => (
  <div className="auth-split-layout__left-content">
    <h1>¿Olvidaste tu contraseña?</h1>
    <p>No te preocupes. Te ayudamos a recuperar el acceso a tu cuenta de manera sencilla y segura.</p>
    <div className="auth-split-layout__feature-list">
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🔒</span>
        <span className="auth-split-layout__feature-text">Tu seguridad es nuestra prioridad</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">✉️</span>
        <span className="auth-split-layout__feature-text">Recibe un codigo en tu correo</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">⏱️</span>
        <span className="auth-split-layout__feature-text">Rápido y sin complicaciones</span>
      </div>
    </div>
  </div>
);

export default RecoverLeftContent;