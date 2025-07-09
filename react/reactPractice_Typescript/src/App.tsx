import { useState } from "react";
import "./App.css";
import ListGroup from "./assets/Components/ListGroup";
import Header from "./assets/Components/Header";
import AdventureForm from "./assets/Components/AdventureForm";
import PracticeButton from "./assets/Components/PracticeButton";

function App() {
  const adventurers = [
    {
      name: "Sendoh",
      classType: "Samurai",
      age: 20,
    },
    {
      name: "Maki",
      classType: "Warrior",
      age: 20,
    },
  ];

  const [adventure, setAdventure] = useState(adventurers);

  function removeAdventurer(removeName: string) {
    setAdventure(adventure.filter((e) => e.name !== removeName));
  }

  function addAdventurer(newAdventurer: {
    name: string;
    classType: string;
    age: number;
  }) {
    setAdventure([...adventure, newAdventurer]);
  }

  return (
    <>
      <Header child={"Practices"}></Header>
      <ListGroup
        list={adventure}
        removeAdventurer={removeAdventurer}
      ></ListGroup>
      <AdventureForm onSubmit={addAdventurer}></AdventureForm>

      <div>
        <PracticeButton name={"Ray"}></PracticeButton>
      </div>
    </>
  );
}

export default App;
