const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')
menu.addEventListener('click',function(){
    navbar.classList.toggle('popup')
    menu.classList.toggle('fa-times')
})

let registerBtn = document.querySelector('.account-form .register-btn')
let loginBtn = document.querySelector('.account-form .login-btn')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const formCloseBtn = document.querySelector('#close-form')
const acccountForm = document.querySelector('.account-form')
const accountBtn = document.querySelector('#account-btn')

accountBtn.onclick = ()=>{
    acccountForm.classList.toggle('popup')
}



formCloseBtn.onclick = () =>{
    acccountForm.classList.toggle('popup')
    
}



registerBtn.onclick = ()=>{
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    loginForm.classList.remove('active')
    registerForm.classList.add('active')
}

loginBtn.onclick = ()=>{
    registerBtn.classList.remove('active')
    loginBtn.classList.add('active')
    loginForm.classList.add('active')
    registerForm.classList.remove('active')
}