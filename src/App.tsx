import React from 'react';
import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import GameArea from './components/catcherGame/GameArea/GameArea';

const App: React.FC<AppProps> = ({ name = 'main' }) => {
  return (
    <main>

        <GameArea />

    </main>
  );
};

export default App;