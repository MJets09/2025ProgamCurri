import { useState } from "react";
import ListGroup from "./components/listGroup";


function App() {

  const thingsToMove = ['Shoes', 'Computer']


  return (
    <>
  <ListGroup array={thingsToMove}></ListGroup>
    </>
  );
}

export default App;