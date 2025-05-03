import React from "react";
import {useForm, FieldValues} from "react-hook-form"

const Forms = () => {


const {register, handleSubmit, formState: {errors}} = useForm();
const onSubmit = (data: FieldValues) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
        <label htmlFor="Description">Description: </label>
        <input
        {...register('Description')}
          type="text"
          name="Description"
          id="Description"
          className="form-control"
        />
      </div>
      
    <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Forms;
