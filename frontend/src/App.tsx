import AppRoutes from './routes/app-routes';
import { AppProviders } from './context/AppProviders';
import './styles/app.css'

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>

  );
}

export default App;
