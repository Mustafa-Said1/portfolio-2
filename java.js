let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
// Typing text 
const typed = new Typed('.multiple-text', { 
    strings: ['Junior Front-End Developer', 'Postgraduate Researcher', 'Database Specialist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});