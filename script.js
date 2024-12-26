const navBar = document.getElementById("nav-bar");
const authButton = document.getElementById("auth-btn");
const burgerMenu = document.getElementById("burger_menu");

burgerMenu.addEventListener("click", ()=>
    navBar.classList.toggle("show"),
    authButton.classList.toggle("show")
)