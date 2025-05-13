import React from 'react';
import { useState } from 'react';
import './App.css'; // Můžeme přidat CSS
import GameArea from './components/catcherGame/GameArea/GameArea';

interface AppProps {
  name?: string; // Volitelná prop
}

const App: React.FC<AppProps> = ({ name = 'main' }) => {
  return (
    <main>

        <GameArea />

    </main>
  );
};

export default App;