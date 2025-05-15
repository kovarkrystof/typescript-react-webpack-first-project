import React, { useState, useEffect, use } from 'react';
import './GameArea.css';
import FallingObject from '../FallingObject/FallingObject';
import Catcher from '../Catcher/Catcher'; 

interface FallingObjectProps {
    id: number;
    x: number;
    y: number;
}

interface CatcherProps {
    position: {
        x: number;
    };
}

const GameArea = () => {
    const [fallingObjects, setFallingObjects] = useState<FallingObjectProps[]>([]);
    const [catcherPosition, setCatcherPosition] = useState({ x: 10 });
    const [score, setScore] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            const randomX = Math.floor(Math.random() * 20);
            const newFallingObject = { x: randomX, y: 0 };

            setFallingObjects((prevObjects) => {
                const updatedObjects = prevObjects.map(object => ({ ...object, y: object.y + 1 }));
                const withNewObject = [...updatedObjects, newFallingObject];
                return withNewObject.filter(object => object.y < 20);
            });
        }, 500);
    }, []); // Prázdné pole závislostí zajistí, že se useEffect spustí pouze jednou po prvním renderu

    useEffect(() => {
    const KeyboardControl = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowLeft":
                setCatcherPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
                break;
            case "ArrowRight":
                setCatcherPosition((prev) => ({ ...prev, x: Math.min(17, prev.x + 1) }));
                break;
            default:
                break;
        }
    };
    window.addEventListener("keydown", KeyboardControl);
    return () => {
        window.removeEventListener("keydown", KeyboardControl);
    };
    }, []);

    // useState(() => {
        // Score calcualting logic
    // }

    return (
        <>
        <p className='Score'>SCORE: {score}</p>
        <div className='GameArea'>
            {fallingObjects.map((object, index) => (
                <FallingObject key={object.id} x={object.x} y={object.y} />
            ))}
            <Catcher position={catcherPosition} />
        </div>
        </>
    );

    
}

export default GameArea;