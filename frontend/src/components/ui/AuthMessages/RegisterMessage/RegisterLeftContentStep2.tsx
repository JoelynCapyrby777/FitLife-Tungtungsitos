//Segundo mensaje del registro el mensaje es a la izquierda 

const RegisterLeftContentStep2 = () => (
  <div className="auth-split-layout__left-content">
    <h1>¡Personaliza tu experiencia!</h1>
    <p>Cuéntanos más sobre ti para ofrecerte planes y recomendaciones a tu medida.</p>
    <div className="auth-split-layout__feature-list">
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">⚖️</span>
        <span className="auth-split-layout__feature-text">Seguimiento de peso en kilos</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">📏</span>
        <span className="auth-split-layout__feature-text">Estatura en metros</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🎂</span>
        <span className="auth-split-layout__feature-text">Edad para ajustar recomendaciones</span>
      </div>
    </div>
  </div>
);

export default RegisterLeftContentStep2;