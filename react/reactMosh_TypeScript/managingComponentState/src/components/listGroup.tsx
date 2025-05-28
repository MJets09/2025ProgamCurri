import React, { useState } from "react";

interface Props {
  array: string[];
}

const ListGroup = ({ array }: Props) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {array.length === 0 && <p>Nothing to see</p>}
      <div className="container d-flex justify-content-center mt-5">
        <ul className="list-group">
          {array.map((element, id) => (
            <li
              key={id}
              className={`list-group-item ${active === id ? "active" : ""}`}
              onClick={() => setActive(id)}
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
