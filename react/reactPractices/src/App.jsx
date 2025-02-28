import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleMessage from './components/toggleM'
import Counter from './components/counter'
import DarkMode from './components/DarkMode/DarkMode'
import ArrayList from './components/ArrayList';
import Greetings from './components/Greetings'
import Profile from './components/Profile'
import CustomText from './components/CustomText'
import NoBeuno from './components/NoBeunoZero'


function App() {


  const items = ['Blanket','Pillow']

  return (
    <>
      <Counter></Counter>
      <ToggleMessage></ToggleMessage>
      <DarkMode></DarkMode>
      <ArrayList array={items}></ArrayList>
      <Greetings name={'Joe'}></Greetings>
      <Profile name={'Amen'} age={20} location={'Houston'}></Profile>
      <CustomText customText={'Amen'}></CustomText>
      <NoBeuno></NoBeuno>
    </>
  )
}

export default App
