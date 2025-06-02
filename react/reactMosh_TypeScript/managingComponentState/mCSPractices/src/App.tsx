import { useState } from "react";
import "./App.css";
import OnandOff from "./components/OnandOff";
import FreeText from "./components/FreeText";
import Arrays from "./components/Arrays";
import Counter from "./components/Counter";
import TogglePara from "./components/TogglePara";

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
      <Counter></Counter>
      <TogglePara></TogglePara>
    </>
  );
}

export default App;
