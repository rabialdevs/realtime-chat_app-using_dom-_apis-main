
let userName = '';
document.getElementById('join-btn').addEventListener('click', (event) => {
    event.preventDefault();
    userName = document.getElementById('username-input').value;

    console.log(userName);
    if (userName.trim()!=''){
        document.querySelector('.form-username').style.display = 'block';


    }
})

