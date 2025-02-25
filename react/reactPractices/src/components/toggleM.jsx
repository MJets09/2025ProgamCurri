import React, { useState } from "react";

export default function ToggleMessage() {
  const [on, Switch] = useState(false);

  return (
    <>
      <button onClick={() => Switch(!on)}>
        {on ? "Hide" : "Show"} Message
      </button>

      {on && <p>Yo</p>}
    </>
  );
}
