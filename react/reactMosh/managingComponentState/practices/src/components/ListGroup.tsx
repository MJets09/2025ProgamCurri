//Display rows of list based on children arrays
import { useState } from "react";



interface Props {
  items: string[];
}


export default function ListGroup({ items }: Props) {

const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h3>Listed groups</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={`list-group-item ${selectedIndex === index ? 'active': ''}`} key={index} onClick={() => setSelectedIndex(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}
