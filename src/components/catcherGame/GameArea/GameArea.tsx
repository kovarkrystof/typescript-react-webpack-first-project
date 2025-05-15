import React, { useState, useEffect } from 'react';
import './GameArea.css';
import FallingObject from '../FallingObject/FallingObject';
import Catcher from '../Catcher/Catcher';

interface FallingObjectProps {
    id: number;
    x: number;
    y: number;
}

interface CatcherPosition {
    x: number;
}

const GameArea = () => {
    const [fallingObjects, setFallingObjects] = useState<FallingObjectProps[]>([]);
    const [catcherPosition, setCatcherPosition] = useState<CatcherPosition>({ x: 10 });
    const [score, setScore] = useState(0);

    // Efekt pro pohyb padajících objektů dolů každých
    useEffect(() => {
        const interval = setInterval(() => {
            setFallingObjects((prevObjects) =>
                prevObjects.map(object => ({ ...object, y: object.y + 1 }))
            );
        }, 200);
        return () => clearInterval(interval);
    }, []);

    // Efekt pro ovládání pohybu catcheru pomocí šipek
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
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
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Efekt pro kontrolu kolizí, aktualizaci skóre a odstranění chycených/minutých objektů
    useEffect(() => {
        let newScore = score;
        const nextFallingObjects: FallingObjectProps[] = [];

        for (const object of fallingObjects) {
            if (object.y === 19) {
                if (object.x >= catcherPosition.x && object.x < catcherPosition.x + 3) {
                    newScore++;
                } else {
                    newScore--;
                }
            } else {
                nextFallingObjects.push(object);
            }
        }

        setFallingObjects(nextFallingObjects);
        setScore(newScore);
    }, [fallingObjects, catcherPosition.x, score]);

    // Efekt pro generování nových padajících objektů
    useEffect(() => {
        const interval = setInterval(() => {
            const randomX = Math.floor(Math.random() * 20);
            const newFallingObject: FallingObjectProps = { id: Date.now(), x: randomX, y: 0 };
            setFallingObjects((prevObjects) => {
                const updatedObjectsWithNew = [...prevObjects, newFallingObject];
                return updatedObjectsWithNew.filter(obj => obj.y <= 19);
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <p className='Score'>SCORE: {score}</p>
            <div className='GameArea'>
                {fallingObjects.map((object) => (
                    <FallingObject key={object.id} x={object.x} y={object.y} />
                ))}
                <Catcher position={catcherPosition} />
            </div>
        </>
    );
};

export default GameArea;