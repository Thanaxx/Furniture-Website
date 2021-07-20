const open = document.querySelector(".menuBar");
const closeMenu = document.querySelector(".closeSideBar");
const sidebar = document.querySelector(".sidebar");

open.addEventListener('click', () => {
    sidebar.style.width = "100%"
});

closeMenu.addEventListener('click', () => {
    sidebar.style.width = "0"
});