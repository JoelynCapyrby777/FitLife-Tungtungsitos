import AppRoutes from './routes/app-routes';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import './styles/app.css'

function App() {
  return (
    <AuthProvider>
      <ToastProvider> 
        <AppRoutes /> 
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
