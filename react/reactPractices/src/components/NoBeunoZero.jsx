import { useState } from "react"



export default function NoBeuno() {



    const [count,setCount] = useState(0)

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(0)}>Resetto</button>
        <button onClick={()=> count > 0 ? setCount(count-1) : alert('No Beuno below Zero')}>Decrease</button>
        </>
    )
}