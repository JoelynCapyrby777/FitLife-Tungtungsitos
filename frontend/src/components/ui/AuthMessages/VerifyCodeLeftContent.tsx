const VerifyCodeLeftContent = () => (
  <div>
    <h1>Verifica tu identidad</h1>
    <p>Introduce el código de 6 dígitos que te enviamos a tu correo para continuar con la recuperación de tu cuenta.</p>
    <div className="auth-split-layout__feature-list">
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🛡️</span>
        <span className="auth-split-layout__feature-text">Protegemos tu cuenta</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">🔑</span>
        <span className="auth-split-layout__feature-text">Solo tú puedes acceder</span>
      </div>
      <div className="auth-split-layout__feature-item">
        <span className="auth-split-layout__feature-icon">⏳</span>
        <span className="auth-split-layout__feature-text">El código es temporal</span>
      </div>
    </div>
  </div>
);

export default VerifyCodeLeftContent;