import AppRoutes from './routes/app-routes';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import './styles/app.css'

function App() {
  return (
    <AuthProvider>
      <ToastProvider> 
        <ModalProvider> 
          <AppRoutes /> 
        </ModalProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
