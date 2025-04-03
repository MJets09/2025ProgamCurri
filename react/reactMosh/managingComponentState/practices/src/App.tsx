import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const Wu = ["Cao Cao", "Liu Bei", "Sun Jian"];

  //Set Active Class name

  return (
    <>
      <h1>Practices</h1>
      <ListGroup arr={Wu}></ListGroup>
    </>
  );
}

export default App;
