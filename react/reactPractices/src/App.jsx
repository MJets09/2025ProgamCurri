import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import ToggleMessage from './components/toggleM'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter></Counter>
    <ToggleMessage></ToggleMessage>
    </>
  )
}

export default App
