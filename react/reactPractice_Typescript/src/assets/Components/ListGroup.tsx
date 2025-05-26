import React from "react";

interface adventurers {
  name: string;
  class: string;
  age: number;
}

interface Props {
  list: adventurers[];
  removeAdventurer: (id: string) => void;
}

const ListGroup = ({ list, removeAdventurer }: Props) => {
  if (list.length === 0) return <p>No Adventurers have arrived</p>;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Class</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {list.map((hero, id) => (
            <tr key={id}>
              <td>{hero.name}</td>
              <td>{hero.class}</td>
              <td>{hero.age}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => removeAdventurer(hero.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListGroup;
