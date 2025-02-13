
//Creating a new function component
//Always PascalCasing
function Message() {
    //JSX: Javascript XML
    //Allows to creat dynamic reactions
    const name = 'Meng';
    //Expression a piece of code that returns a vaule
   return <h1>{name ? `The World is Yours ${name}` : 'Sup'}</h1>
}

export default Message;
