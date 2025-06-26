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

    const wolves = [{player: 'Ant',number: 5},{player: 'Jules', number: 1}]
    const rockets = {player: 'kd', team: {city: 'houston',franchise: 'rockets'}}
  

    const [team,addPlayer] = useState(wolves)
    const [kd,changeTeams] = useState(rockets)

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
      <button onClick={()=> {addPlayer(team.map((p,i)=> i === 1 ? {...p, player:'Jaden'}: p)); console.log(team)}}>Mapping array with objects and changing one prop</button>
      <button onClick={()=> {changeTeams({...kd, team: {...kd.team, city: 'texas'}})}}>Update nesting objects</button>
      <CopyText></CopyText>
    </>
  );
}

export default App;
