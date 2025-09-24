import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      {/* Tu layout general, como el header y footer */}
      <header>
        <h1>Mi Proyecto</h1>
      </header>
      <main>
        <AppRoutes /> 
      </main>
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  );
}

export default App;