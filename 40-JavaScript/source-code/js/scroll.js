const menuButton = document.querySelector(".mobile-menu-icon");
const headerTop = document.querySelector(".top-wrapper");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuList = document.querySelectorAll(".menu-list");
const toursButton = document.querySelector(".move-button");

menuButton.addEventListener("click", spreadMenu);
function spreadMenu() {
    let checker = nav.clientHeight === 0;
    (checker) ? nav.style.height = `${nav.scrollHeight}px` : nav.style.height = 0;
}

document.addEventListener("scroll", function() {
    let y = window.scrollY;
    (y>0)? headerTop.classList.add("scrolled"): headerTop.classList.remove("scrolled");
});

menuList.forEach((item) => {
    item.addEventListener("click", function (){
        const about = document.querySelector(".about-us");
        const services = document.querySelector(".service");
        const tours = document.querySelector(".featured");
        let menuHeight = headerTop.clientHeight;
        if(item.innerHTML === 'home') {
            window.scrollTo({
                top: 0, 
                left:0,
                behavior: 'smooth'
            });
        } else if (item.innerHTML === 'about') {
            window.scrollTo({
                top:about.offsetTop - menuHeight,
                left:0,
                behavior:'smooth'
            });
        } else if (item.innerHTML === 'services') {
            window.scrollTo({
                top:services.offsetTop - menuHeight,
                left:0,
                behavior:'smooth'
            });
        } else if(item.innerHTML === 'tours') {
            window.scrollTo({
                top:tours.offsetTop - menuHeight,
                left:0,
                behavior:'smooth'
            });
        }
    });
})

toursButton.addEventListener("click", exploreTours);
function exploreTours() {
    let menuHeight = headerTop.clientHeight;
    const tours = document.querySelector(".featured");
    window.scrollTo({
        top:tours.offsetTop - menuHeight,
        left:0,
        behavior:'smooth'
    })
}