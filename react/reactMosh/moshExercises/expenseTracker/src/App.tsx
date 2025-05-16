import { useState } from "react";
import "./App.css";
import ExpenseList from "./assets/components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 1,
      description: "Shoes",
      amount: 180,
      category: "Bullshit",
    },
  ];

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Working", id)}
      ></ExpenseList>
    </>
  );
}

export default App;
