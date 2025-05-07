import React from 'react';
import ReactDOM from 'react-dom/client'; // Novější API pro React 18+
import App from './App';
import './index.css'; // Volitelné globální CSS

// Vytvoříme root element a renderujeme aplikaci
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App name="React s TS a Webpackem" />
    </React.StrictMode>
  );
} else {
  console.error('Element with ID "root" not found.');
}