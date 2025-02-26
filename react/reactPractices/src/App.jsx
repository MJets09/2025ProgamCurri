import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleMessage from './components/toggleM'
import Counter from './components/counter'
import DarkMode from './components/DarkMode/DarkMode'
import ArrayList from './components/ArrayList';

function App() {


  const items = ['Blanket','Pillow']

  return (
    <>
      <Counter></Counter>
      <ToggleMessage></ToggleMessage>
      <DarkMode></DarkMode>
      <ArrayList array={items}></ArrayList>
    </>
  )
}

export default App
