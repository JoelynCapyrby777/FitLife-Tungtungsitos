import './AuthTabs.css';

interface AuthTabsProps {
  activeTab: 'login' | 'register';
  onTabClick: (tab: 'login' | 'register') => void;
}


const AuthTabs: React.FC<AuthTabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="auth-tabs">
      <button
        className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
        onClick={() => onTabClick('login')}
      >
        Iniciar Sesión
      </button>
      <button
        className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
        onClick={() => onTabClick('register')}
      >
        Regístrate
      </button>
    </div>
  );
};


export default AuthTabs;