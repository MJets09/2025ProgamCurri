// let addButton = document.getElementById('Add');
// let ul = document.getElementById('ul');
// let input = document.getElementById('answer');

// addButton.addEventListener('click', function(){
//     let newLi = document.createElement('li');
//     newLi.textContent = input.value.trim()
//     ul.appendChild(newLi);
//     input.value = '';
//     input.focus();
// })


document.getElementById('toDo').addEventListener('click', function() {
    let input = document.getElementById('answer');
    let answsers = input.value.trim();

    if(answsers !== '') {
        let ul = document.getElementById('ul');
        let li = document.createElement('li');

        li.innerHTML = `${answsers} <button class="delete">X</button>`

        ul.appendChild(li)

        input.value = ''

    }
})

document.getElementById('ul').addEventListener('click', function(event){
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
}
)