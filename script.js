const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')
menu.addEventListener('click',function(){
    navbar.classList.toggle('popup')
    menu.classList.toggle('fa-times')
})