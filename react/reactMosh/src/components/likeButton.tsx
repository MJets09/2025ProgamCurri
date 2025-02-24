import { useState } from "react";
import { AiFillMoon } from "react-icons/ai";

const LikeButton = () => {

    const [status, setStatus] = useState(false)

    if(status === true){
        return <AiFillMoon color="red" size='50' onClick={()=> setStatus(false)} ></AiFillMoon>
    }
    else{
        return <AiFillMoon color="black" size='50' onClick={()=> setStatus(true)}></AiFillMoon>
    }
}

export default LikeButton