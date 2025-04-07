import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import ShowHide from "./components/ShowHide";
import Button from "./components/Button";

function App() {

  const Wu = ["Cao Cao", "Liu Bei", "Sun Jian"];

  const [close, SetClose] = useState(false);
  const [list, addList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValueWu, setInputValueWu] = useState('');
  const [wList, SetW] = useState<string[]>(Wu);

  const handleClick = () => {
      addList((prevList) => [...prevList, inputValue]);
      setInputValue('')
  }

  const handleClickW = () => {
    SetW((prevList) => [...prevList, inputValueWu]);
    setInputValueWu('')
}


  return (
    <>
      <h1>Practices</h1>
      <div>
        <ListGroup arr={wList}></ListGroup>
        <ShowHide onClose={() => SetClose(!close)}>Click</ShowHide>
        {close && <button onClick={() => SetClose(false)}>Sup</button>}
        <input type="text" value={inputValueWu} onChange={(e) => setInputValueWu(e.target.value)}></input>
        <Button onClick={handleClickW}>Add</Button>
      </div>

      <div>
        <h2>To Do list</h2>
        <ul>
          <ListGroup arr={list}></ListGroup>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <Button onClick={() => handleClick()}>Click</Button>
        </ul>
      </div>
    </>
  );
}

export default App;

          {/* <Button onSub={() => addList((prevList) => [...prevList, 'Word'])}>Click</Button> */}