import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ListGroup from "./components/listGroup";
import LikeButton from "./components/likeButton";

let Wu = ['Sun Ce', 'Sun Jian']

function App() {

  const [visible, SetVisible] = useState(false)


  return (

    <>
    {visible && <Alert onClose={() => SetVisible(false)}>Hi</Alert>}
    <Button onClick={() => SetVisible(true)}>Yo</Button>

    <ListGroup items={Wu} heading="Wu"></ListGroup>
    <LikeButton></LikeButton>
    </>


  )
}

export default App;
