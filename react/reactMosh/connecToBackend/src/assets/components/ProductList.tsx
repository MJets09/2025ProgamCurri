import React, { useEffect } from 'react'
import { useState } from 'react'


interface Props {
    category: string;
}

const ProductList = (category: Props) => {

    const [product, setProduct] = useState<string[]>([]);
    

    useEffect(()=>{
        console.log('Fetching product')
        setProduct(['Clothing', 'Household'])
    }, [])

  return (
    <div>
      <h1>ProductList</h1>
    </div>
  )
}

export default ProductList
