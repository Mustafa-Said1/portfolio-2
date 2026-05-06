let menu = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');


menu.onclick = ()=> {
    menu.classlist.toggle('bx-x');
    navber.classList.toggle('active');

}
window.onscroll =()=> {
    menu.classlist.remove('bx-x');
    navber.classList.remove('active');
}
// Tyoing text/////////////////
const typad =new typad('.multipe-text',{
    Strings: ['<i>First</i> sentence.','&amp; a second sentence'],
    typespeed:50,
});