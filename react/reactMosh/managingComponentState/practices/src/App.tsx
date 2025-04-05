import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import ShowHide from "./components/ShowHide";

function App() {
  const Wu = ["Cao Cao", "Liu Bei", "Sun Jian"];
  const [close,SetClose] = useState(false);


  return (
    <>
      <h1>Practices</h1>
      <ListGroup arr={Wu}></ListGroup>
      <ShowHide onClose={() => SetClose(!close)}>Click</ShowHide>
      {close && <button onClick={() => SetClose(false)}>Sup</button>}
    </>
  );
}

export default App;
