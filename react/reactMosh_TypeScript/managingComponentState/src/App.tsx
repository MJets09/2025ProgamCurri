import { useState } from "react";
import ListGroup from "./components/ListGroup";
import CopyText from "./components/CopyText";

function App() {
  const thingsToMove = ["Shoes", "Computer"];
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const loggedElement = (element: string) => {
    element == "Tuesday" && alert("Its Tuesday");
    console.log(element);
  };

  const [user, SetUser] = useState({
    name: "Joey",
    age: 21,
    occupation: "Duelist",
  });

  return (
    <>
      <ListGroup
        array={thingsToMove}
        heading={"Things to move out"}
        selectedItem={loggedElement}
      ></ListGroup>
      <ListGroup
        array={weekDays}
        heading={"Weekdays"}
        selectedItem={loggedElement}
      ></ListGroup>
      {user.name}
      <button
        onClick={() => {
          SetUser({ ...user, name: "Yugi" });
        }}
      >
        YUGI!?
      </button>
      {user.name === "Yugi" && <p>"I summon Dark Magician"</p>}
      <CopyText></CopyText>
    </>
  );
}

export default App;
