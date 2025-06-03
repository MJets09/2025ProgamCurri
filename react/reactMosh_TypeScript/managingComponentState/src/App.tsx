import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {

  const thingsToMove = ['Shoes', 'Computer']
  const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday']

  const loggedElement = (element: string) => {
    element == 'Tuesday' && alert('Its Tuesday')
    console.log(element)
  }


  return (
    <>
  <ListGroup array={thingsToMove} heading={'Moving Out'} selectedItem={loggedElement}></ListGroup>
  <ListGroup array={weekDays} heading={'Weekdays'} selectedItem={loggedElement}></ListGroup>
    </>
  );
}

export default App;