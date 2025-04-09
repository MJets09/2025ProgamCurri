import { useState } from "react";
import Button from "./Button";

//Display rows of list based on children arrays
interface Prop {
  arr: string[];
  onDelete?: (item: string) => void;
}

export default function ListGroup({ arr, onDelete }: Prop) {
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {arr.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedIndex === index && "active"}`}
            onClick={() => setIndex(index)}
          >
            {/*Code means if an function exists && says to run the code to the right if not then its not running code */}
            {item}
            <button
              onClick={() => {
                onDelete && onDelete(item);
              }}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
