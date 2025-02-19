import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {

  const [visible, SetVisible] = useState(!true)


  return (
    <div>
      { visible && <Alert onClose={() => SetVisible(false)}>Yo</Alert>}
      <Button onClick={(() => SetVisible(true))}>Clicka me issa Mario</Button>
    </div>
  );
}

export default App;
