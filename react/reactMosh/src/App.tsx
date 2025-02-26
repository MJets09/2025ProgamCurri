import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ListGroup from "./components/listGroup";
import LikeButton from "./components/likeButton";
import Array from "./components/Array";

let Wu = ['Sun Ce', 'Sun Jian']
let Shu = ['Liu Bei','Guan Yu','Zhang Fei']

function App() {

  const [visible, SetVisible] = useState(false)


  return (

    <>
    {visible && <Alert onClose={() => SetVisible(false)}>Hi</Alert>}
    <Button onClick={() => SetVisible(true)}>Yo</Button>
    <Array array={Shu}></Array>
    <ListGroup items={Wu} heading="Wu"></ListGroup>
    <LikeButton></LikeButton>
    </>


  )
}

export default App;
