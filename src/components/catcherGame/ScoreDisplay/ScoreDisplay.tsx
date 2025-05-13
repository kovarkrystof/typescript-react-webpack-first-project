import React, { useState } from 'react';
import './ScoreDisplay.css';
import '../GameArea/GameArea';

const [score, setScore] = useState(0);
    const increaseScore = () => {
        setScore(score + 1);
    }
    const decreaseScore = () => {
        setScore(score - 1);
    }








    
return (
    <div className="score-display">
        <h1>Score: {score}</h1>
    </div>
);

export default ScoreDisplay;