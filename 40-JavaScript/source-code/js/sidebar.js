const closeMenu = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebarToggle");

function visibleMenu() {
    sideBar.classList.toggle("show");
}
function hideMenu() {
    sideBar.classList.remove("show");
}
toggleBtn.addEventListener("click", visibleMenu);
closeMenu.addEventListener("click", hideMenu);