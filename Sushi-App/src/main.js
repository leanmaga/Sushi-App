const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*=============== REMOVE MENU MOBILE ===============*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classNameList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classNameList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classNameList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ========*/
const scrollHeader = ()=>{
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header');                     
}
window.addEventListener('scroll', scrollHeader);
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

