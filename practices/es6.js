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

