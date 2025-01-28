const changeText = document.getElementById("changeText");

changeText.addEventListener('click', function() {
    document.getElementById('changeText').textContent = 'KOBEEE'
})

document.getElementById('toggleStyle').addEventListener('click', function() {
    document.getElementById('toggleStyle').classList.add('base')
    document.getElementById('toggleStyle').classList.remove('highlight')
})

document.getElementById('hideElement').addEventListener('click', function(){
    document.getElementById('hideElement').style.display = 'none';
})

document.getElementById("toggleStyle").setAttribute('class', 'highlight')


const liList = document.getElementsByTagName('li')

console.log(liList[3].textContent)

const listColor = document.getElementsByTagName('li');



document.getElementById('changeBlue').addEventListener('click', function() {

    for(i = 0; i < listColor.length; i++) {

        listColor[i].classList.add('highlight')
        listColor[i].classList.remove('base')
    }

})

document.getElementById('changeRed').addEventListener('click', function() {

    for(i = 0; i < listColor.length; i++) {
        listColor[i].classList.add('base')
        listColor[i].classList.remove('highlight')
    }

})


document.getElementById('add').addEventListener('click', function(){
    createLi = document.createElement('li')
    textNode = document.createTextNode("Water")

    createLi.appendChild(textNode);

    document.getElementById('sList').appendChild(createLi)
})

console.log(document.getElementById('stars').lastElementChild)

function addtoList() {
    newLi = document.createElement('li')
    addedItem = document.getElementById('items').value;
    newLi.textContent = addedItem;

    ulList = document.getElementById('sList');
    ulList.appendChild(newLi)
}


document.getElementById("remove").addEventListener("click", function(){
    ulList = document.getElementById('sList');
    lastChildren = ulList.lastElementChild

    lastChildren.remove()
})


document.getElementById("oneB").addEventListener('click', function(){
    document.getElementById('oneB').remove()
})

document.getElementById("twoB").addEventListener('click', function(){
    document.getElementById('twoB').textContent = "Button One can dissapear bro"
})

document.getElementById('threeB').addEventListener('click', function(){
    document.getElementById('twoB').classList.add('highlight')
    document.getElementById('threeB').classList.add('base')
})

document.getElementById('four').addEventListener('click', function(){

    let numValue = document.getElementById('four').value;

    document.getElementById('displayNum').innerHTML = numValue;

})


document.getElementById('four').onmouseover = function() {

    document.getElementById('four').classList.add('green');


}


document.getElementById('myForm').addEventListener('submit', function(){
    event.preventDefault();
    let userI = document.getElementById('userName').value
    let userP = document.getElementById('userPassword').value
    let para = document.getElementById('result');

    para.innerHTML = `Your username is ${userI} and your password is ${userP}`;

})

document.getElementById("select").addEventListener('click', function(){
    alert('Works')
})

document.querySelector('p').addEventListener('click', function(){
    document.getElementById('pSelect').classList.add('green')
})

let myList = document.querySelectorAll('li');

myList.forEach(li => {
    console.log(li.textContent)
})

const numbers = [3, 8, 6];

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});

console.log(numbers); // Output: [2, 4, 6]

document.getElementById('clickMe').addEventListener('click', function(){
    document.getElementById('hClick').textContent = 'The world is Yours'
})