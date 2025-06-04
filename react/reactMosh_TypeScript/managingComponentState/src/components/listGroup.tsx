import React, { useState } from "react";

interface Props {
  array: string[];
  heading: string;
  selectedItem?: (element: string) => void;
}

const ListGroup = ({ array, heading, selectedItem}: Props) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {array.length === 0 && <p>Nothing to see</p>}
      <h1 className="container d-flex justify-content-center mt-5">
        {heading}
      </h1>
      <div className="container d-flex justify-content-center mt-5">
        <ul className="list-group">
          {array.map((element, index) => (
            <li
              key={index}
              className={`list-group-item ${active === index ? 'active' : ''}`}
              onClick={() => {
                setActive(index);
                if(selectedItem) selectedItem(element)
              }}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListGroup;
