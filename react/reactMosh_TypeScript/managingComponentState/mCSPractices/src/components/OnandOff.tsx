import React, { useState } from "react";

const OnandOff = () => {
  const [off, on] = useState(false);

  return (
    <div>
      <button
        className={`btn ${off ? "btn-danger" : "btn-primary"}`}
        onClick={() => on(!off)}
      >
        {off ? "Off" : "On"}
      </button>
    </div>
  );
};

export default OnandOff;
