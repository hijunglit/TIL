const togglebtn = document.querySelector(".toggleMenu");
const nav = document.querySelector(".nav");
const navClasses = "closeMenu";


togglebtn.addEventListener("click", openMenu);

function openMenu() {
    nav.classList.toggle(navClasses);
    
}