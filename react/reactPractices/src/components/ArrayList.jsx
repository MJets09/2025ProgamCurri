// interface Props {
//     array: string[];
// }


export default function ArrayList({array}) {


    return(

        <>
        {array.map((item, index) => <p key={index}>{item}</p>)}
        
        </>
    )
}