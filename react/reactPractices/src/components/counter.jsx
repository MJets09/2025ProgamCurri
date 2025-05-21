import React, { useState } from "react";

export default function Counter() {
  // const [count, setCount] = useState(0);
  /* <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=> setCount(count-1)}>Decrease</button> */

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  return (
    <>
      <h1>Count: {count}</h1>
      <h2 style={theme ? { color: 'red' } : {}}>Theme</h2>
      <button onClick={() => setTheme(!theme)}>
        Set theme
      </button>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </>
  );
}
