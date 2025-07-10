import { useState } from "react";
import ListGroup from "./components/listGroup";
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

  const wolves = [
    { player: "Ant", number: 5 },
    { player: "Jules", number: 1 },
    { player: "Mikeee", number: 11 },
  ];
  const rockets = {
    player: "kd",
    team: { city: "houston", franchise: "rockets" },
  };

  const dodgers = ["Shohei", "Betts"];

  const [team, updatePlayer] = useState(wolves);
  const [kd, changeTeams] = useState(rockets);
  const [dodger, addDodger] = useState(dodgers);

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

      <div>
        <button
          onClick={() => {
            updatePlayer([...team, { player: "Rudy", number: 12 }]);
            console.log(team);
          }}
        >
          Add a Player, check console log
        </button>
        <button
          onClick={() => {
            updatePlayer(
              team.map((p, i) =>
                i === 1 ? { ...p, player: "Jaden", number: 3 } : p
              )
            );
            console.log(team);
          }}
        >
          Mapping array with objects and changing one prop
        </button>
        <button
          onClick={() => {
            changeTeams({ ...kd, team: { ...kd.team, city: "texas" } });
          }}
        >
          Update nesting objects
        </button>
        <button
          onClick={() => {
            addDodger([...dodger, "Freeman"]);
            console.log(dodger);
          }}
        >
          Add Dodger, check console log
        </button>
        <button
          onClick={() => {
            addDodger(dodger.filter((player) => player !== "Freeman"));
            console.log(dodger);
          }}
        >
          FREDDIEEE
        </button>
      </div>

      <CopyText></CopyText>
    </>
  );
}

export default App;
