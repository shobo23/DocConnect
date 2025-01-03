// Select elements
const burgerMenu = document.querySelector(".toggle-menu"); // Select toggle menu
const navMenu = document.getElementById("nav-bar"); // Navigation menu
const authButtons = document.getElementById("auth-btn"); // Auth buttons container

// Add click event listener to the burger menu
burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show"); // Toggle nav menu visibility
  authButtons.classList.toggle("show"); // Toggle auth buttons visibility
});

// Close the menu if you click outside of it
window.addEventListener("click", (event) => {
  if (
    event.target !== burgerMenu && // Ensure click isn't on the burger menu
    !navMenu.contains(event.target) && // Or within nav menu
    !authButtons.contains(event.target) // Or within auth buttons
  ) {
    navMenu.classList.remove("show"); // Hide nav menu
    authButtons.classList.remove("show"); // Hide auth buttons
  }
});
