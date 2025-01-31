
for(let i = 1; i <= 10; i++) {
    // console.log(i)
}

let myArr = ['Kobe','Nujabes','Goku'];


for(let i = 0; i < myArr.length; i++) {
    // console.log(myArr[i]);
}

for(let i = 2; i <= 20; i +=2) {
    // console.log(i)
}

let sum = 0;

for(let i = 1; i < 100; i++) {
    // console.log(sum += i)
}


//For loop reverse string
let str = "Nujabes";
let rev = ""

for(let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
    // console.log(rev)
}

//For loop high num
let numArr = [9,7,2,3,44,7,81];

let low = numArr[3];

for(let i = 0; i < numArr.length; i++) {
    if(numArr[i] > low) {
        low = numArr[i]
    }
    // console.log(low)
}

//For loop checking for letters
let sup = 'aeisq';

let vowel = 0;

for(let i = 0; i < sup.length; i++) {
    if('aeiou'.includes(sup[i])) {
        vowel++
    }
}

// console.log(vowel)


// for (let i = 1; i <= 5; i++) { // Outer loop for rows
//     let pattern = '';
//     for (let j = 1; j <= i; j++) { // Inner loop for stars
//       pattern += '*';
//     }
//     console.log(pattern); // Print the pattern for the current row
//   }




//Stars baby


// for(i = 1; i <=5; i++) {
//     let pattern = ""
//     for(let j = 0; j < i; j++) {
//         pattern += '*'
//     }
//     console.log(pattern)
// }



//Fizz

// for(let i = 0; i <= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(`${i} is FizzBuzz`)
//     }
//     else if (i % 3 == 0) {
//         console.log(`${i} is Fizz`)
//     }
//     else if (i % 5 == 0) {
//         console.log(`${i} is Buzz`)
//     }
//     else{
//         console.log(i)
//     }
// }

for(let i = 1; i <= 5; i++) {
    let stars = "";
    for(let j = 0; j < i; j++) {
        stars += '*'
    }
    console.log(stars)
}

