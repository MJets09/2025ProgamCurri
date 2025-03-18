import { useState } from "react";
import { BiAnchor } from "react-icons/bi";


const LikeButton = () => {

    const [status, setStatus] = useState(false)

    if(status === true){
        return <BiAnchor color="red" size='50' onClick={()=> setStatus(false)} ></BiAnchor>
    }
    else{
        return <BiAnchor color="black" size='50' onClick={()=> setStatus(true)}></BiAnchor>
    }
}

export default LikeButton