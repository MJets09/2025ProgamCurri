import { useState } from "react";
import "./App.css";
import ListGroup from "./assets/Components/ListGroup";
import Header from "./assets/Components/Header";
import AdventureForm from "./assets/Components/AdventureForm";

function App() {
  const adventurers = [
    {
      name: "Sendoh",
      class: "Samurai",
      age: 20,
    },
    {
      name: "Maki",
      class: "Warrior",
      age: 20,
    },
  ];

  const [adventure, setAdventure] = useState(adventurers);

  function removeAdventurer(removeName: string) {
    setAdventure(adventure.filter((e) => e.name !== removeName));
  }

  return (
    <>
      <Header child={"Practices"}></Header>
      <ListGroup
        list={adventure}
        removeAdventurer={removeAdventurer}
      ></ListGroup>
      <AdventureForm></AdventureForm>
    </>
  );
}

export default App;
