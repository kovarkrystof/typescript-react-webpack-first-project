import React, { useState } from "react";
import "./Catcher.css";

interface CatcherProps {
    x: number;
}

const Catcher: React.FC<CatcherProps> = ({position}) => {
    return (
        <div
            className="Catcher"
            style={{
                position: "absolute",
                left: `${position.x * 20}px`,
                bottom: '0px'
                width: "40px",
                height: "20px",
                backgroundColor: "blue",
            }}
        >
        </div>
    );

}

export default Catcher;


//    const KeyboardControl = (event: KeyboardEvent) => {
//     switch (event.key) {
//         case "ArrowLeft":
//             setPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
//             break;
//         case "ArrowRight":
//             setPosition((prev) => ({ ...prev, x: Math.min(19, prev.x + 1) }));
//             break;
//         default:
//             break;
//     }   
// Přidat to GameArea a sprovoznit ovlaádání šipkami