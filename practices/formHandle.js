document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    console.log(userName)
    console.log(email)
})


document.getElementById('form2').addEventListener('submit', function(event){
    event.preventDefault()
    username2 = document.getElementById('user2').value;

    console.log(username2)
})