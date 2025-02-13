import { useState } from 'react'
import './App.css'
import Child from './child'
import Parent from './parent'


function App() {

  return (
    <>
      <div>
        <Child message='Yo'></Child>
        <Parent></Parent>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
