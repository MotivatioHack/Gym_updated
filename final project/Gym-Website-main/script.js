let menu_icon = document.getElementById("menu-icon");
let menu = document.querySelector(".nav-list");

function showmenu() {
    menu.style.display = "flex";
}

// ----------------------------
// Navigation Active Link Script
// ----------------------------
const items = document.querySelectorAll('.list');

function activeLink() {
    items.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}

items.forEach((item) => {
    item.addEventListener('click', activeLink);
});
