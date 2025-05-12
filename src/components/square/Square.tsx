import React from 'react';
import { useState } from 'react';
import './Square.css';

interface SquareProps {
  value?: string;
}

const Square: React.FC = (props: SquareProps) => {
    const [value, setValue] = useState(' ');

  return (
        <button
          type = "button"
          className='square'
          onClick={() => setValue('O')}
          onDoubleClick={() => setValue('X')}
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