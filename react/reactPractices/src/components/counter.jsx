// import React, { useState } from "react";

// export default function Counter() {
//   const [count, CountSet] = useState(0);

//   return (
//     <>
//       <p>Count is: {count}</p>
//       <button onClick={() => CountSet(count + 1)}>Increment</button>
//       <button onClick={() => CountSet(0)}>Reset</button>
//       <button onClick={() => CountSet(count -1)}> Decrement </button>
//     </>
//   );
// }




// import React from 'react'
// import { useState } from 'react'


// const Counter = () => {

//   const [count, setCount] = useState(0);

//   return (
//     <>
    
//     <p>Count: {count}</p>
//     <button onClick={() => setCount(count+1)}>Increase</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//     <button onClick={() => setCount(count-1)}>Decrease</button>
    
//     </>
//   )
// }

// export default Counter;

import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);


  return(

    <>
    <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=> setCount(count-1)}>Descrease</button>
    </>


  )

}