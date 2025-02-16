import { MouseEvent } from "react";


function ListGroup() {
  let items = ["Saint Paul", "Minneapolis", "Seattle"];
  // items = [];

  
  const handleClick = (event: MouseEvent) => console.log(event.target);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items list</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li className="list-group-item" key={items} onClick={handleClick}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//Ctrl + D to select multiple names and edit ever iteration
