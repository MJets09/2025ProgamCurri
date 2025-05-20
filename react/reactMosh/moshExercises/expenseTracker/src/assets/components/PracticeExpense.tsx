import React from "react";

interface expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expense: expenses[];
  onDelete?: (id: number) => void;
}

// {expense, onDelete}: Props

const PracticeExpense = ({ expense, onDelete }: Props) => {
  if (expense.length === 0) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description: </th>
            <th>Amount: </th>
            <th>Category: </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expense.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete && onDelete(expense.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: </td>
            <td>{expense.reduce((acc, expense) => acc + expense.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PracticeExpense;
