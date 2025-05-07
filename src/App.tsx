import React from 'react';
import './App.css'; // Můžeme přidat CSS

interface AppProps {
  name?: string; // Volitelná prop
}

const App: React.FC<AppProps> = ({ name = 'Svět' }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Hello World!</p>
    </div>
  );
};

export default App;