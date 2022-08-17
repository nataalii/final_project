const form = document.getElementById('form')
const modal = document.getElementById('myModal')
const btn = document.querySelector('.loginBtn')
const span = document.getElementById('close')

const email = document.getElementById('email')
const password = document.getElementById('password')
const login = document.getElementById('login')
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}



function validateForm(event){
    const emailValue = email.value;
    const passwordValue = password.value;
    if(emailValue.length < 8 ){
        emailError.textContent = "email is incorrect";
    } 
     if(passwordValue.length < 8){
        passwordError.textContent = "password is incorrect"
    } else {
        modal.style.display = 'none';
        this.form.reset()
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    emailError.textContent = "";
    passwordError.textContent = "";
    validateForm();

 
})

console.log(btn)