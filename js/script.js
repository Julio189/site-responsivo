let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn-grad')

menuIcon.addEventListener('click',()=>{
    menu.classList.toggle('active')

    if(menu.classList.contains('active')) {
        document.querySelector('.menu-icon img').src = '/img/close.png';
        btn.style.fontSize='2rem'
        btn.style.padding='1.5rem 3rem'
    }else {
        document.querySelector('.menu-icon img').src = '/img/menu.png';
        btn.style.fontSize='1.4rem'
        btn.style.padding='1rem 2rem'
    }
})