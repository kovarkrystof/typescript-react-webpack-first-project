import React from 'react';
import { useState } from 'react';
import './App.css'; // Můžeme přidat CSS
import Board from './components/Board/Board';

interface AppProps {
  name?: string; // Volitelná prop
}

const App: React.FC<AppProps> = ({ name = 'main' }) => {
  return (
    <main>

        <Board />

    </main>
  );
};

export default App;