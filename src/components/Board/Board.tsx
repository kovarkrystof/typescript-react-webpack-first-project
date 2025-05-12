import React, { useState } from 'react';
import './Board.css';
import Square from '../square/Square';

const Board = () => {
    const [board, setBoard] = useState<string[][]>([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const [currentPlayer, setCurrentPlayer] = useState<'O'|'X'> ('O');

    const onClick = (row: number, col: number) => {
        setBoard((prevBoard) => {
            const newBoard = prevBoard.map((row) => [...row]);
            if (newBoard[row][col] === '') {
                newBoard[row][col] = currentPlayer;

            if (currentPlayer === 'O') {
                setCurrentPlayer('X');
                } else {
                setCurrentPlayer('O');
                }
            }

            return newBoard;
        });
    }


    return (
    <div className="board">
      <div className="board-row">
        <Square value={board[0][0]} onClick={() => onClick(0, 0)} />
        <Square value={board[0][1]} onClick={() => onClick(0, 1)} />
        <Square value={board[0][2]} onClick={() => onClick(0, 2)} />
      </div>
      <div className="board-row">
        <Square value={board[1][0]} onClick={() => onClick(1, 0)} />
        <Square value={board[1][1]} onClick={() => onClick(1, 1)} />
        <Square value={board[1][2]} onClick={() => onClick(1, 2)} />
      </div>
      <div className="board-row">
        <Square value={board[2][0]} onClick={() => onClick(2, 0)} />
        <Square value={board[2][1]} onClick={() => onClick(2, 1)} />
        <Square value={board[2][2]} onClick={() => onClick(2, 2)} />
      </div>
    </div>
    );
};

export default Board;