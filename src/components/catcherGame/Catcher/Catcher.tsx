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
                bottom: '0px',
                width: "60px",
                height: "20px",
                backgroundColor: "blue",
            }}
        >
        </div>
    );

}

export default Catcher;