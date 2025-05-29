import { useState } from "react";
import "./App.css";
import OnandOff from "./components/OnandOff";
import FreeText from "./components/FreeText";
import Arrays from "./components/Arrays";

function App() {
  let myShoes = [
    {
      model: "Yeezy",
      brand: "Adidas",
      yr: 2018,
    },
    { model: "Jordan 1", brand: "Nike", yr: 1995 },
  ];

  return (
    <>
      <OnandOff></OnandOff>
      <FreeText></FreeText>
      <Arrays shoes={myShoes}></Arrays>
    </>
  );
}

export default App;
