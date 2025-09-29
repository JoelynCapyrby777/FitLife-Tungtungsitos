import AppRoutes from './routes/app-routes';
import { ToastProvider } from './context/ToastContext';
import './styles/app.css'

function App() {
  return (
    <ToastProvider> 
      <AppRoutes /> 
    </ToastProvider>
  );
}

export default App;
