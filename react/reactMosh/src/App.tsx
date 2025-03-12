import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ListGroup from "./components/listGroup";
import LikeButton from "./components/likeButton";
import Array from "./components/Array";

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
    city: 'Minneapolis',
    state: 'MN'
  })

  let updateCity = () => {
    setCity({...city, city: 'Saint Paul'})
  }

  return (
    <>
      {visible && <Alert onClose={() => SetVisible(false)}>Hi</Alert>}
      <Button onClick={() => SetVisible(true)}>Yo</Button>
      <Button onClick={() => setFirstName("Bogard")}>{firstName}</Button>
      <Button onClick={() => updateDrink()}>
        Your drink is {drink.drinkName}
      </Button>
      <Button onClick={()=> updateCity()}>You live in {city.city}</Button>
      <Array array={Shu}></Array>
      <ListGroup items={Wu} heading="Wu"></ListGroup>
      <LikeButton></LikeButton>
    </>
  );
}

export default App;

