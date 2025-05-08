import React from "react";
import {useForm, FieldValues} from "react-hook-form"


interface FormsProps {
  onAddExpense: (expense:string) => void;
}

const Forms = ({onAddExpense}: FormsProps) => {


const {register, handleSubmit, formState: {errors}} = useForm();
const onSubmit = (data: FieldValues) => onAddExpense(data.Description);


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
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default Forms;
