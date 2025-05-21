import React, { useState } from 'react'

const Message = () => {

  const [show,setShow] = useState(false)


  return (
    <div>
      <button onClick={()=> setShow(!show)}>
        {show ? 'Hide' : 'Show'}Message</button>
        {show ? <p>Yo</p> : ''}
    </div>
  )
}

export default Message
