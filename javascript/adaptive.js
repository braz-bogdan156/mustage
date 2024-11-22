window.addEventListener('resize', () =>{
const button = document.querySelector('.header__contact-btn');
if(window.innerWidth <=1600 && window.innerWidth >1200 || window.innerWidth <=768 && window.innerWidth>480){
    button.textContent = 'Написати нам'
}
else{
    button.textContent = 'Твій успішний старт'
}
})

window.dispatchEvent(new Event('resize'));

document.querySelector('.button--mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.header__nav');
    const button = document.querySelector('.button--mobile-menu');
    
    if (!nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove('open');
    }
});
