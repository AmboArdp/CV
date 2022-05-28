/*==================== MENU TOGGLE ====================*/
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navList = document.querySelector('.nav__list');
const stopScroll = document.querySelector('body')
const blurEffect = document.querySelector('.main')


navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    navMenu.classList.toggle('active')
    navList.classList.toggle('active')
    stopScroll.classList.toggle('stop-scrolling')
    blurEffect.classList.toggle('blur')
})

/*==================== REMOVE MENU MOBILE ====================*/
document.querySelectorAll('.nav__item').forEach(n=> n.addEventListener('click', ()=> {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
    navList.classList.remove('active')
    stopScroll.classList.remove('stop-scrolling')
    blurEffect.classList.remove('blur')
}))   


/*==================== NAV SROLL HIDE ====================*/

const nav = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', ()=> {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('hidenavonscroll');
    } else {
        nav.classList.remove('hidenavonscroll');
    }

    lastScrollY = window.scrollY;
});


/*==================== SKILLS ====================*/

