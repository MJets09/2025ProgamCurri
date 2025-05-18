import { useState } from "react";
import "./App.css";
import ExpenseList from "./assets/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Shoes",
      amount: 180,
      category: "Bullshit",
    },
    {
      id: 2,
      description: "Food",
      amount: 200,
      category: "Food",
    },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
