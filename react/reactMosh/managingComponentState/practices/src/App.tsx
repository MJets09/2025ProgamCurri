import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import ShowHide from "./components/ShowHide";
import Button from "./components/Button";

function App() {

  const Wu = ["Cao Cao", "Liu Bei", "Sun Jian"];
  const Movies = ['There\'s something about Mary'];
  const NBA = ['Wolves','Knicks','Rockets']

  const [close, SetClose] = useState(false);
  const [list, addList] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState('');
  const [inputValueWu, setInputValueWu] = useState('');

  const [wList, SetW] = useState<string[]>(Wu);
  const [movie, setMovie] = useState<string[]>(Movies);
  const [addedMovie, addMovie] = useState('');

  const [nbaTeam, setTeam] = useState('');
  const [nbaList, setNBA] = useState<string[]>(NBA)


  const handleClick = () => {
      addList((prevList) => [...prevList, inputValue]);
      setInputValue('')
  }

  const handleClickW = () => {
    SetW((prevList) => [...prevList, inputValueWu]);
    setInputValueWu('')
}
  const handleDelete = (item: string) => {
      console.log({item})
      addList((prevList) => prevList.filter((i) => i !== item));
  }

  const handleWu = (item:string) => {
    console.log({item});
    SetW((prevList) => prevList.filter((i) => i !== item))
  }


  const handleMovie = () => {
    console.log(addedMovie)
    setMovie((prevList) => [...prevList, addedMovie])
  }

  const deleteMovie = (item:string) => {
    setMovie((prevList) => prevList.filter((i) => i !== item))
  }


  const addNBA = () => {
    console.log(nbaTeam);
    setNBA((prevList) => [...prevList,nbaTeam]);

  }

  const deleteNBA = (item:string) => {

    setNBA((prevList) => prevList.filter((i) => i !== item))
    setTeam('')
  }

  return (
    <>
      <h1>Practices</h1>
      <div>
        <ListGroup arr={wList} onDelete={handleWu}></ListGroup>
        <ShowHide onClose={() => SetClose(!close)}>Show me</ShowHide>
        {close && <button onClick={() => SetClose(false)}>Sup</button>}
        <input type="text" value={inputValueWu} onChange={(e) => setInputValueWu(e.target.value)}></input>
        <Button onClick={handleClickW}>Add</Button>
      </div>

      <div>
        <h2>To Do list</h2>
        <ul>
          <ListGroup arr={list} onDelete={handleDelete}></ListGroup>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <Button onClick={handleClick}>Add</Button>
        </ul>
      </div>


      <div>

      <ListGroup arr={movie} onDelete={deleteMovie}></ListGroup>
      <input type="text" value={addedMovie} onChange={(e) => addMovie(e.target.value)}/>
      <button onClick={handleMovie}>Gimme</button>
      </div>

      <div>
        <ListGroup arr={nbaList} onDelete={deleteNBA}></ListGroup>
        <input type="text" value={nbaTeam} onChange={(e)=> {setTeam(e.target.value)}}/>
        <button onClick={addNBA}>Add team</button>
      </div>
    </>
  );
}

export default App;
