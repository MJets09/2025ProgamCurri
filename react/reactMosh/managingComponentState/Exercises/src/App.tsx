import { useState } from 'react'
import './App.css'

function App() {
  const [game, setGame] = useState({
    id:1,
    player: {
      name: 'John'
    }
  })

  const updateName = () => {
      let user = prompt('Your name is?')
      if(user){
        setGame({...game, player: {...game.player, name: user}})
      }
      else {
        alert('Enter a name')
        updateName()
      }
      
  }


  const [pizza, addTopping] = useState(['Pepproni'])

  const addTopp = () => {
    let user = prompt('What toppings would you like?')

      if(user){
        addTopping([...pizza, user])
      }
      else {
        alert('Enter a name')
        updateName()
      }
  }

  return (
    <>
      <h1>Managing States exercise</h1>
      <p> Your name is {game.player.name}</p>
      <button onClick={updateName}>Change Name</button>
      <p>Here is what we have for a current toppings</p>
      <ul>
      {pizza.map(toppings => <li key={toppings}>{toppings}</li>)}
      </ul>
      <button onClick={addTopp}>Add a topping</button>
    </>
  )
}

export default App
