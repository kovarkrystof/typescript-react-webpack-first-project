import React from "react";
import "./Catcher.css";

interface CatcherProps {
    position: {
        x: number;
    };
}

const Catcher = ({ position }: CatcherProps) => {
    return (
        <div
            className="Catcher"
            style={{
                position: "absolute",
                left: `${position.x * 20}px`,
                bottom: '20px',
                width: "60px",
                height: "20px",
                backgroundColor: "blue",
            }}
        >
        </div>
    );
};

export default Catcher;