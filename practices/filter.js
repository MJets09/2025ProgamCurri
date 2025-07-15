const nums = [1,2,3,4,5,6];
const mixed = [0, 1, '', 'hello', null, undefined, 'world', false];
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];

function fProp(element) {
    const prop = element.filter(element => element.age <= 18)
    return prop
}

console.log(fProp(users))


function fil(element) {
    const filterd = element.filter(element => element % 2)
    return filterd
}


console.log(fil(nums))

function over5(element) {
    lessThan = element.filter(element => element < 5)
    return lessThan
}

console.log(over5(nums))

function noFalse(element) {
    return element.filter(element => Boolean(element))
}

console.log(noFalse(mixed))