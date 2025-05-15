import React from 'react';
import './FallingObject.css';

interface FallingObjectProps {
    x: number;
    y: number;
}

const FallingObject =  ({x, y}: FallingObjectProps) => {
    return (
        <div
            style={{
                position: "absolute",
                left: `${x * 20}px`,
                top: `${y * 20}px`,
                width: "20px",
                height: "20px",
                backgroundColor: "black",
            }}
        >
        </div>
    );
}

export default FallingObject;