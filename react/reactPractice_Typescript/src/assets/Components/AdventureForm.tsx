import React, { useState } from "react";

interface adventurerProp {
  name: string;
  classType: string;
  age: number;
}

interface Props {
  onSubmit: (adventurer: adventurerProp) => void;
}

const AdventureForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [classType, setClassType] = useState("");
  const [age, setAge] = useState<number | "">("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !classType || !age) return;
    onSubmit({ name, classType, age: Number(age) });
    setName("");
    setClassType("");
    setAge("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-3">
          <label htmlFor="classType">Class: </label>
          <input
            type="text"
            name="classType"
            id="classType"
            className="form-control"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            className="form-control"
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default AdventureForm;
