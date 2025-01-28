let addButton = document.getElementById('Add');
let ul = document.getElementById('ul');
let input = document.getElementById('answer');

addButton.addEventListener('click', function(){
    let newLi = document.createElement('li');
    newLi.textContent = input.value.trim()
    ul.appendChild(newLi);
    input.value = '';
    input.focus();
})