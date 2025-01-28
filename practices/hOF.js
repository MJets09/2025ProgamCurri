let user = [
    {name: 'Shohei', sport: 'baseball',},
    {name: 'Edwards', sport: 'basketball'},
    {name: 'Breece', sport: 'football'},
    {name: 'Bryce', sport: 'baseball'},
    {name: 'Mookie', sport: 'baseball'},
    {name: 'Kd', sport: 'basketball'},
    {name: 'Lamar', sport: 'football'}
]

let result = user.map((bball) => `The sport this guy plays is ${bball.sport} and his name is ${bball.name}`)

console.log(result)

let numbers = [2,5,1,8,6]


let newNums = numbers.map((numbers) => numbers + 10)

console.log(newNums)

const alice  = {
    name: "alice",
    ball: 'Kevin',
    greet: function() {
        console.log("Hey, " + this.ball);
    }
}


alice.greet();

