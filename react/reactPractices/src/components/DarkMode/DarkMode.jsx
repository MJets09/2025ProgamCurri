import React, { useState } from "react";
import Styles from "../DarkMode/DarkMode.module.css";

const DarkMode = () => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <button
        className={theme && Styles.changeBtn}
        onClick={() => setTheme(!theme)}
      >
        Change
      </button>
    </>
  );
};

export default DarkMode;
