import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h3>{counter}</h3>
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>And 1</button>
        <button onClick={() => setCounter(0)}>Resetto</button>
        <button onClick={() => setCounter(counter - 1)}>Minus 1</button>
      </div>
    </>
  );
};

export default Counter;
