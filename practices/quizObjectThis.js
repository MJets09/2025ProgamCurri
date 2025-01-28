
// let isTurtle = {
//     text: "Which of the following is a species of turtle?",
//     options: ["African spurred","Red-footed","Painted","Indian Star"],
//     correctOption: options[2],
// }


function question(text,option,correctIndex){
    this.text = text;
    this.option = option;
    this.correctIndex = option[correctIndex]
}

let qOne = new question('Who is from Wu', ['Zhou Yu', "Zhou Yun", "Zhou Ji"], 0)

let newP = document.createElement('p');

let myArray = ['Erdrick','Loto','Solo'];


for(let i = 0; i < myArray.length; i++){

    let newText = document.createTextNode(myArray[i]);
        newP.appendChild(newText)
    
}

document.body.appendChild(newP)