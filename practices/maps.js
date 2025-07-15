const dates = ['25-7-11', '25-8-9','25-2-23'];
const formatted = dates.map(formatD)

function formatD(element) {
    const parts = element.split("-")
    return console.log(`The date is ${parts[1]}-${parts[2]}-${parts[0]}`)
}




const names = ['shohei','ichiro','mookie'];

const upper = names.map(cap)

function cap(element){
    return console.log(element.toUpperCase())
}
