import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const updateName = () => {
    let user = prompt("Your name is?");
    if (user) {
      setGame({ ...game, player: { ...game.player, name: user } });
    } else {
      alert("Enter a name");
      updateName();
    }
  };

  const [pizza, addTopping] = useState(["Pepproni"]);

  const addTopp = () => {
    let user = prompt("What toppings would you like?");

    if (user) {
      addTopping([...pizza, user]);
    } else {
      alert("Enter a name");
      updateName();
    }
  };

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      {
        id: 1,
        title: "Product1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product2",
        quantity: 1,
      },
    ],
  });

  // const updateCart = () => {
  //   setCart({...cart,  items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity +1} : item)})
  // }

    const updateCart = () => {

      setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity+1} : item)})


    }


  return (
    <>
      <h1>Managing States exercise</h1>
      <p> Your name is {game.player.name}</p>
      <button onClick={updateName}>Change Name</button>
      <p>Here is what we have for a current toppings</p>
      <ul>
        {pizza.map((toppings) => (
          <li key={toppings}>{toppings}</li>
        ))}
      </ul>
      <button onClick={addTopp}>Add a topping</button>
      <button onClick={updateCart}>Button</button>
      {cart.items[0].quantity}
    </>
  );
}

export default App;
