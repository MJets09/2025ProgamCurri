import React from 'react'

interface Props {
  array: string[],
  deleteEntry?: (item:string) => void;
}

const ListGroup = ({array}: Props) => {
  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroup
