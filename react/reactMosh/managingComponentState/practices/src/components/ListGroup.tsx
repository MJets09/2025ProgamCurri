import { useState } from "react";

//Display rows of list based on children arrays
interface Prop {
  arr: string[];
}

export default function ListGroup({ arr }: Prop) {
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <ul className="list-group">
      {arr.map((item, index) => (
        <li
          key={index}
          className={`list-group-item ${selectedIndex === index && "active"}`}
          onClick={() => setIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
