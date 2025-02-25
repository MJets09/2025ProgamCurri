import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleMessage from './components/toggleM'
import Counter from './components/counter'
import DarkMode from './components/DarkMode/DarkMode'

function App() {

  return (
    <>
      <Counter></Counter>
      <ToggleMessage></ToggleMessage>
      <DarkMode></DarkMode>
    </>
  )
}

export default App
