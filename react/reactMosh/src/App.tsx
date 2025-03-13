import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ListGroup from "./components/listGroup";
import LikeButton from "./components/likeButton";
import Array from "./components/Array";
import { produce } from "immer";

let Wu = ["Sun Ce", "Sun Jian"];
let Shu = ["Liu Bei", "Guan Yu", "Zhang Fei"];

function App() {
  const [visible, SetVisible] = useState(false);

  const [firstName, setFirstName] = useState("Terry");

  const [drink, setDrink] = useState({
    drinkName: "SoDoSoPa",
    price: 5,
  });

  let updateDrink = () => {
    //Use the spread operator which will copy the object and we'll just update the prop
    //Powerful tool the spread operator is, get comfortable with it

    setDrink({ ...drink, drinkName: "Shi Tpa Town" });
  };

  const [city, setCity] = useState({
    city: "Minneapolis",
    state: "MN",
  });

  let updateCity = () => {
    setCity({ ...city, city: "Saint Paul" });
  };

  const [shoe, setShoe] = useState([{
    model: 'Jordan 1',
    make: 'Nike',
    have: 'nope'
  },
  {
    model: '350',
    make: 'Yzy',
    have: 'nope'
  }])


  const updateShoe = () => {
    // setShoe(shoe.map(shoe => shoe.model == 'Jordan 1' ? {...shoe, have: true} : shoe))
    // console.log(shoe)

    //Using the library Immer to simplify our map method above


    //Think of the draft as a copy of the array you are using, mutating the object instead of creating a new array
    setShoe(produce((draft)=>{
      //variable of shoe is holding/referencing the object you had searched for
      const shoe = draft.find(shoe => shoe.model == 'Jordan 1');
      if(shoe){
        shoe.have = 'yep';
      }
    }))


  }

  return (
    <>
      {visible && <Alert onClose={() => SetVisible(false)}>Hi</Alert>}
      <Button onClick={() => SetVisible(true)}>Yo</Button>
      <Button onClick={() => setFirstName("Bogard")}>{firstName}</Button>
      <Button onClick={() => updateDrink()}>
        Your drink is {drink.drinkName}
      </Button>
      <Button onClick={()=> updateShoe()}>Jordan 1</Button>
      <Button onClick={() => updateCity()}>You live in {city.city}</Button>
      <Array array={Shu}></Array>
      <ListGroup items={Wu} heading="Wu"></ListGroup>
      <LikeButton></LikeButton>

      {shoe.map(shoe => <p>{shoe.model}: {shoe.have} </p>)}
    </>
  );
}

export default App;
