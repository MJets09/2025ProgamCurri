import { useState } from 'react'
import './App.css'
import ListGroup from './assets/components/ListGroup'
import Forms from './assets/components/Forms'

function App() {

  const [expenseDescription, setexpenseDescription] = useState<string[]>([])

  const addExpense = (expense: string) => {
    setexpenseDescription([...expenseDescription, expense]);
    
  }

  return (
    <>
    <Forms onAddExpense={addExpense}></Forms>
      <ListGroup array={expenseDescription}></ListGroup>
    </>
  )
}

export default App
