import React, { useState } from "react";

const CopyText = () => {
  const [text, setText] = useState("!?");

  const texting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>{text}</p>
      <label htmlFor="textThis!"></label>
      <input type="text" id="textThis!" onChange={texting}></input>
    </div>
  );
};

export default CopyText;
