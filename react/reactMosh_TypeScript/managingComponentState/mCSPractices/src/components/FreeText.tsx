import React, { useState } from "react";

const FreeText = () => {

    function playText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    const [text,setText] = useState('Yo')
  return (
    <>
      
    <p>Type: {text}</p>
    <input onChange={playText} placeholder="Type"></input>
    </>
  );
};

export default FreeText;
