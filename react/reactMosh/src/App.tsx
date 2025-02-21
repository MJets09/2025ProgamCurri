import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ListGroup from "./components/listGroup";


let Wu = ['Sun Ce', 'Sun Jian']

function App() {

  const [visible, SetVisible] = useState(false)


  return (
    // <div>
    //   { visible && <Alert onClose={() => SetVisible(false)}>Yo</Alert>}
    //   <Button onClick={(() => SetVisible(true))}>Clicka me issa Mario</Button>
    // </div>


    <>
    {visible && <Alert onClose={() => SetVisible(false)}>Yo</Alert>}
    <Button onClick={() => SetVisible(true)}>Yo</Button>


    <ListGroup items={Wu} heading="Wu"></ListGroup>

    </>


  )
}

export default App;
