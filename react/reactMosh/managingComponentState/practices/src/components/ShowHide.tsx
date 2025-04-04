//Click button to alert

interface Props {
    onClose: () => void
}

export default function ShowHide({onClose}: Props) {



    return(

        <>
        
        <button onClick={onClose}>Click to Hide</button>
        </>

    )
}