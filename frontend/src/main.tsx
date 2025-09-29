import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error("No se encontró el elemento 'root' en el documento.");
}