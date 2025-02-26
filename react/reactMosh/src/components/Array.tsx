


interface Props {
    array: string[]
}




export default function Array({array}:Props) {



    return(
        <>
        
        {array.map((item, index) => <p key={index}>{item}index of {index}</p>)}
        
        
        
        
        </>
    )

}