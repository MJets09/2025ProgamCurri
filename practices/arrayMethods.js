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


  //Map method
  

  //Convert USD to Yen

  const convert2Yen = (x) => {
      yen = x * 149.33

      return yen
  }


  let myAccount = [500,333,653,15435];

  let myYen = myAccount.map(convert2Yen);


  console.log(myYen)


  //Imagine you're building an e-commerce site. Given an array of products, return only the ones that are in stock.

  const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 800, inStock: false },
    { name: "Tablet", price: 600, inStock: true }
  ];
  
  const availableProducts = (x) => {
    const newArr = x.filter(ele => ele.inStock === true)
    return newArr
  }
  
  console.log(availableProducts(products));

  const userS = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
    { name: "David", age: 35, isActive: false }
  ];
  
  // Write a function to filter only active users
  const activeUsers = (x) => {
    const newAr = x.filter(valid => valid.isActive).map(user => user.name)
    return newAr
  }
  
  console.log(userS[2].name)


  //You have a list of users, and you need to return an array of their names in uppercase.
  const userCap = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  const upperCaseNames = (x) => {
    
    return allCaps = x.map(arr => arr.name.toUpperCase())

  }
  
  console.log(upperCaseNames(userCap));
  
  //

  const cart = [
    { item: "Keyboard", price: 50 },
    { item: "Monitor", price: 200 },
    { item: "Mouse", price: 30 }
  ];
  
  const totalCost = (x) => {

    return x.reduce((acc,num) => acc + num, 0)

  }
  
  console.log(totalCost(cart));


  const numbeR = [1, 2, 3, 4, 5,6,7,8,9];

  const nums = numbeR.map(data => data *2)

  console.log(nums)


  const fahrenheitTemps = [32, 68, 100, 212]

  const temps = fahrenheitTemps.map(data => (data - 30) / 2)

  console.log(temps)