import { useState } from 'react'
import './App.css'
import ListGroup from './assets/Components/ListGroup'

function App() {

  const adventurers = [{
    name: 'Sendoh',
    class: 'Samurai',
    age: 20
  }, {
    name: 'Maki',
    class: 'Warrior',
    age: 20
  }];

  const [adventure, setAdventure] = useState<typeof adventurers>(adventurers)

  function addAventurer(removeName: string) {
    setAdventure(adventure.filter((e)=> e.name !== removeName))
  }

  return (

    <>
     <ListGroup list={adventure} addAventurer={addAventurer}></ListGroup>
    </>
  )
}

export default App
