import React from 'react';
import './Square.css';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = (props: SquareProps) => {
    const { value, onClick } = props;

  return (
        <button
          type = "button"
          className='square'
          onClick={() => {
            onClick();
          }}
          style={{
            width: '50px',
            height: '50px',
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          {value}
        </button>
  );
};

export default Square;