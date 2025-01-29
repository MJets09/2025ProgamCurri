//Exercises 1.27.25

const add = (a,b) => a+b;

console.log(add(5,5))

const square = (x) => x*x;

console.log(square(8));

const theWorld = () => console.log("The World is Yours")

theWorld()

const checkEven = (num) => {
    if(num % 2 === 0) {
        console.log('That number is even')
    }
    else {
        console.log('That number is not even')
    }
}

checkEven(9)

const doubleMyNums = (arr) => {
    dubbs = arr.map((a) => a*2)
    console.log(dubbs)

}

let myNums = [5,9,8,10,94,33,55];

doubleMyNums(myNums)

const divis5 = (arr) => {
    let isFive = arr.filter((a) => a % 5 === 0)
    console.log(isFive);
}

divis5(myNums)

const addOne = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i];
        console.log(arr[i])
    }
}

addOne(myNums)

//Template Literals
// let urName = prompt('What is your name?')
// let urAge = prompt('What is your Age?')

let myName = (a,b) => {
    console.log(`Your name is ${a} and your age is ${b}`);
}

// myName(urName, urAge)


//Object Destructuring
const w1 = {
    name: 'SunJian',
    kingdom: 'Wu'

}

let w2 = {
    name2: 'CaoCao',
    kingdom2: 'Wei'
}


const {name, kingdom} = w1;

const {name2, kingdom2} = w2;


console.log(name2)

console.log(`In 221 AD, ${name}'s army fought ${name2}'s army.`)

//Array destructuring
let nArray = [5,6,9,7];

let [a,b ,...rest] = nArray;

console.log(b)

//SpreadOperator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(...arr1, ...arr2)

//DefaultParameters

let greetMe = (a,b = 'Yo') => {
    console.log(`Yo hows it going ${a}, ${a} you gotta say something back like ${b}`)
}

greetMe('Joey')