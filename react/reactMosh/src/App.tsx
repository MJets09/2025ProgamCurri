import ListGroup from "./components/listGroup";
let cities = ["Saint Paul", "Minneapolis", "Seattle"];
const onSelectItem = (item: string) => {
  console.log(item)
}

function App() {
  
  return (
    
    <div>
      <ListGroup items={cities} heading="Cities" onSelectItem={onSelectItem}></ListGroup>
    </div>
  );
}

export default App;
