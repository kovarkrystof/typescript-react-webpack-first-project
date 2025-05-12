import React from 'react';
import { useState } from 'react';
import './Board.css';
import Square from '../square/Square';

const Board: React.FC = () => {

    return (
        <div className="board">
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};
export default Board;