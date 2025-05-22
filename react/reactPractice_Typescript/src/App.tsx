import { useState } from 'react'
import './App.css'
import ListGroup from './assets/Components/ListGroup'

function App() {

  let adventurers = [{
    name: 'Sendoh',
    class: 'Samurai',
    age:20
  }, {
    name: 'Maki',
    class: 'Warrior',
    age: 20
  }]

  function addAventurer(): void {
    console.log(adventurers.map(a => a.name))
  }

  return (

    <>
     <ListGroup list={adventurers} addAventurer={addAventurer}></ListGroup>
    </>
  )
}

export default App
