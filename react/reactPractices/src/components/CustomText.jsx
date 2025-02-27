import React, { useState } from 'react'

const CustomText = ({customText}) => {

    const [text, setText] = useState('You can change this word')

  return (
    <>
    
    <p>{text}</p>

    <button onClick={()=> setText(customText)}>

    Change the word

    </button>
    
    
    
    
    </>
  )
}

export default CustomText