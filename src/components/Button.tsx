import React, { useState } from 'react';



interface ButtonProps {
  text: string;
}

const Button = () => (props: ButtonProps) => {
    const [value, setValue] = useState("");
    const { text } = props;


  return (
    <div>
        <button onClick={() => setValue("xxxx")}>
            {text}
        </button>
        {value}
    </div>
  );
};

export default Button;