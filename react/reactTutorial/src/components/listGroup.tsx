function ListGroup() {
  let items = ["Saint Paul", "Minneapolis", "Seattle"];
  // items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items list</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//Ctrl + D to select multiple names and edit ever iteration
