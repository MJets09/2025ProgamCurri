import { useState } from "react";
import "./App.css";
import ExpenseList from "./assets/components/ExpenseList";
import PracticeExpense from "./assets/components/practiceExpense";

function App() {



  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      description: "Shoes",
      amount: 280,
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
      <PracticeExpense
        expense={expenseList}
        onDelete={(id) => setExpenseList(expenseList.filter( e => e.id !== id))}
      ></PracticeExpense>
    </>
  );
}

export default App;
