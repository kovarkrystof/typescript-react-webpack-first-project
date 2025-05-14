import React, { useState, useEffect } from 'react';
import './GameArea.css';
import FallingObject from '../FallingObject/FallingObject';

interface FallingObjectProps {
    id: number;
    x: number;
    y: number;
}

const GameArea = () => {
    const [fallingObjects, setFallingObjects] = useState<FallingObjectProps[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomX = Math.floor(Math.random() * 20);
            const newFallingObject = { x: randomX, y: 0 };

            setFallingObjects((prevObjects) => {
                const updatedObjects = prevObjects.map(object => ({ ...object, y: object.y + 1 }));
                const withNewObject = [...updatedObjects, newFallingObject];
                return withNewObject.filter(object => object.y < 20);
            });
        }, 500);
    }, []); // Prázdné pole závislostí zajistí, že se useEffect spustí pouze jednou po prvním renderu

    return (
        <div className='GameArea'>
            {fallingObjects.map((object, index) => (
                <FallingObject key={object.id} x={object.x} y={object.y} />
            ))}
        </div>
    );

    
}

export default GameArea;