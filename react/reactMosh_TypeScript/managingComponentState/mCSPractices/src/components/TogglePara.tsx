import React, { useState } from "react";

const TogglePara = () => {
  const [off, SetOn] = useState(false);

  return (
    <div>
      <button onClick={() => SetOn(!off)}>Turn me on</button>
      {off && <p>On</p>}
    </div>
  );
};

export default TogglePara;
