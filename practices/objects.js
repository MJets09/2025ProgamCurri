

function available(x) {
    x.isAvailable = true;
    document.getElementById("isIn").textContent = 'In'
    console.log(bookTwo)
}


function books(title, author, pages, isAvailable) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable
}

let bookOne = new books('Designs','Guy',320, false)
let bookTwo = new books('Mamba','Kobe',824, false)


function deletePage(x){
    delete x.pages;
    console.log(bookTwo)
}

let student = {
    name: 'Nasir Jones',
    age: 20,
    course: ['Illmatic','It was written', 'Nastrodomus'],
    address: {
        city: 'New York',
        State: 'New York'
    }
}

student.course.push('Stillmatic')
student.address.city = 'Queens'

console.log(student)