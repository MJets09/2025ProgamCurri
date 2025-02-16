import React, { useState } from "react";

export default function Counter() {
  const [count, CountSet] = useState(0);

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={() => CountSet(count + 1)}>Increment</button>
      <button onClick={() => CountSet(0)}>Reset</button>
      <button onClick={() => CountSet(count -1)}> Decrement </button>
    </>
  );
}
