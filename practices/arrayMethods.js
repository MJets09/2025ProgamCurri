let myArray = ['Shohei','Mookie','Freddie'];

let newArray = myArray.map(player => `This is your player ${player}`)

console.log(newArray[1])


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterEven = (arr) => {
    let even = arr.filter(num => num % 2 === 0)
    return even
}



console.log(numbers)
console.log(filterEven(numbers))

const words = ['apple', 'banana', 'grape', 'orange', 'kiwi'];

const filterLongerWords = (arr) => {
    return arr.filter(word => word.length >= 5 )
}

console.log(filterLongerWords(words))


const negNumbers = [-1, 2, -3, 4, -5, 6];
const filterNegative = (arr) => {
  return arr.filter(num => num < 0)
};


console.log(filterNegative(negNumbers))

const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 }
  ];
  const filterAdults = (arr) => {
    arr.filter(age => age > 18)
  };

  const nUsers = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 31, active: false },
    { name: "Charlie", age: 22, active: true }
  ];

  const overThirty = (arr) => {
    return arr.filter(age => age.age > 30)
  }


  console.log(overThirty(nUsers))


  