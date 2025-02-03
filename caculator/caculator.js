let input = document.getElementById('display');
let add = document.getElementById('+');
let equals = document.getElementById('=');

document.getElementById('tableDiv').addEventListener('click', function(event) {
    if(event.target.tagName === 'BUTTON' && event.target.id !== '=') {
        input.value += event.target.value;
    }
})


document.getElementById('clear').addEventListener('click', function() {
    input.value = ''
})

equals.addEventListener('click', function(){
    input.value = eval(input.value);
})