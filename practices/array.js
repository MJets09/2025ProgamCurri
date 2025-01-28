function sumArray(x,y){
    console.log(x+y);
}

sumArray(5,5);

let num = 0;


let numArr = [5,6,8,3,5,7,4,6,9,5,66,88,44,5,3,9,7,5,]


function filterBelowFive(x){
    let belowFive = x.filter(num => num >=5);
    console.log(belowFive)
}

filterBelowFive(numArr)

function findLargest(x){
    for(i = 0; i < x.length; i++){
        if(x[i] > num){
            num = x[i]
        }
    }
    console.log(num)
}

findLargest(numArr)

function findSmallest(x){
    for(let i = 0; i < x.length; i++){
        if(x[i] < num){
            num = x[i]
        }
    }
    console.log(num)
}


findSmallest(numArr)

function divEven(x) {

    for(i = 0; i < x.length; i++) {

        if(x[i] % 2 == 0) {
            console.log(x[i])
        }

    }
}

divEven(numArr)

function fizzBuzz(x) {

    for(let i = 0; i < x.length; i++) {
        if(x[i] % 3 == 0 || x[i] % 5 == 0) {
            console.log('fizz')
        }
        else {
            console.log(x[i])
        }
    }
}

function reverseArray(x) {

    console.log(x.reverse())

}


reverseArray(numArr)

let count = 0;

function counterValue(x){

    for(let i = 0; i < x.length; i++){
        if(x[i] == 7) {
            count++
        }
    }
    console.log(count)
}

counterValue(numArr)


function removeDupe(x){
    let newArr = [...new Set(x)];
    let neuxArr = new Set(x)
    console.log(Array.isArray(neuxArr))
    console.log(Array.isArray(newArr))
}

removeDupe(numArr)


let OneTwo = [1,2];

let fiveFo = [5,4];


console.log(...OneTwo, ...fiveFo);

let veggies = ['Carrots','Pumpkins','Daikons','Plums','Broccoli','Plum','Johnston'];

veggies.splice(2,1)

console.log(veggies)

