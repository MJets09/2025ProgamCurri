import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import ShowHide from "./components/ShowHide";

function App() {
  const Wu = ["Cao Cao", "Liu Bei", "Sun Jian"];
  const [close,SetClose] = useState(false);

  //Set Active Class name

  return (
    <>
      <h1>Practices</h1>
      <ListGroup arr={Wu}></ListGroup>
      <ShowHide onClose={() => SetClose(!close)}></ShowHide>
    </>
  );
}

export default App;
