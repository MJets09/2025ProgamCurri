import React, { useState } from "react";

// export default function ToggleMessage() {
//     const [show, setShow] = useState(false);

//     return(
//         <>

//         <button onClick={() => setShow(!show)}>Show</button>

//         </>
//     )
// }

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>

        {show ? "Hide" : "Show"} Message

      </button>
      
      {show && <p className="mt-2 text-lg">Hello, React!</p>}
    </>
  );
}
