import { useState } from "react";
import styles from "./listGroup.module.css"



interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // items = [];
  //Each component has its own useState
  const [selectIndex, SetIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items list</p>}
      <ul className={`${styles.listGroup} active`}>
        {items.map((items, index) => (
          <li
            className={`list-group-item ${selectIndex === index ? 'active' : ''} listGroup`}
            key={index}
            onClick={() => {
              SetIndex(index);
              if (onSelectItem) {
                onSelectItem(items);
              }
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//Ctrl + D to select multiple names and edit ever iteration
