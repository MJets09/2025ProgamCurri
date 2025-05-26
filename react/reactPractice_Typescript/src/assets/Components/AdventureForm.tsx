import React from "react";

const AdventureForm = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label id="name">Name: </label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label id="name">Class: </label>
          <input type="text" name="class" id="class" className="form-control" />
        </div>

        <div className="mb-3">
          <label id="name">Age: </label>
          <input type="number" name="age" id="age" className="form-control" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default AdventureForm;
