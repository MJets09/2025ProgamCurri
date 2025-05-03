import { useState } from 'react'
import './App.css'
import ListGroup from './assets/components/listGroup'
import Forms from './assets/components/Forms'

function App() {

  const [expenseList, setExpenseList] = useState<string[]>([])

  return (
    <>
    <Forms></Forms>
      <ListGroup array={expenseList}></ListGroup>
    </>
  )
}

export default App
