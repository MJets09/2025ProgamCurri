import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  // const person = {
  //   name: "",
  //   age: 0,
  // };

  //TS doesnt know the type of parameter, refer to the onSubmit parameter
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) {
  //     person.name = nameRef.current.value;
  //   }
  //   if (ageRef.current !== null) {
  //     person.age = parseInt(ageRef.current.value);
  //   }
  //   console.log(person);
  // };

  //With react hook-forms we can use the register object from useForm() to do what we did with the handleSubmit function;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="userName">Username: </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            // ref={nameRef} Removed the useRef because of react hook forms
            type="text"
            id="userName"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">Name must be at least 3 characters</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="userAge">Age:</label>
          <input
            {...register("age", { required: true, minLength: 1 })}
            // ref={ageRef} Removed the useRef because of react hook forms
            type="number"
            id="userAge"
            className="form-control"
          />
          {errors.name?.type === "required" && <p>Field is required</p>}
          {errors.name?.type === "minLength" && <p>Mininum 1 number</p>}
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
