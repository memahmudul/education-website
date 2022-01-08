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

const loadMoreBtn = document.querySelector('.load-more .btn')
const box = document.querySelectorAll('.course .box-container .hide')



const accordion = document.querySelectorAll('.faq .accordion-container .accordion')
accordion.forEach(acco=>{
    acco.onclick =()=>{
        accordion.forEach(dion=>dion.classList.remove('active'))
        acco.classList.toggle('active')
    }
})
////accordion er code sobar niche rakhle kaj korena///////////////

loadMoreBtn.onclick = ()=>{
    
    box.forEach(show=>{
        show.style.display = 'block'
    });
    box.style.display='none'

}





var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop : true,
    grabCursor : true,
  });

  var swiper = new Swiper(".course-slider", {
   
    loop : true,
    grabCursor : true,
    spaceBetween : 20,
    breakpoints:{
        0: {
            slidesPerView : 1,
            
        },
        768: {
            slidesPerView : 2,
            
        },
        991: {
            slidesPerView : 3,
            
        },
    }
  });

  var swiper = new Swiper(".teacher-slider", {
   
    loop : true,
    grabCursor : true,
    spaceBetween : 20,
    breakpoints:{
        0: {
            slidesPerView : 1,
            
        },
        768: {
            slidesPerView : 2,
            
        },
        991: {
            slidesPerView : 3,
            
        },
    }
  });

  var swiper = new Swiper(".review-slider", {
      
   
    loop : true,
    grabCursor : true,
    spaceBetween : 20,
    breakpoints:{
        0: {
            slidesPerView : 2,
            
        },
        768: {
            slidesPerView : 3,
            
        },
        991: {
            slidesPerView : 4,
            
        },
    }
  });