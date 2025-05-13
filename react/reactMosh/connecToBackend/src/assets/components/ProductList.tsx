import React, { useEffect } from 'react'
import { useState } from 'react'


interface Props {
    category: string;
}

const ProductList = ({category}: Props) => {

    const [product, setProduct] = useState<string[]>([]);
    

    useEffect(()=>{
        console.log('Fetching product in', category)
        setProduct([category])
    }, [category])

  return (
    <div>
      <h1>Product List</h1>
    </div>
  )
}

export default ProductList
