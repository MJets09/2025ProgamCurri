import React, { useState } from "react";

interface Prop {
  name: string;
}

const PracticeButton = ({ name }: Prop) => {
  const [counter, setCounter] = useState(0);
  const [empty, show] = useState(false);

  return (
    <div>
      <p>{name}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Minus</button>

      <button onClick={() => show((prev) => !prev)}>
        {empty ? "Hide text" : "Click me"}
      </button>
      {empty && <p>Success</p>}
    </div>
  );
};

export default PracticeButton;
