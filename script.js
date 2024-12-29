  // Select elements
  const burgerMenu = document.getElementById("burger_menu");
  const navMenu = document.querySelector("nav ul");
  const authButtons = document.querySelector("#auth-btn");

  // Add click event listener to the burger menu
  burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Toggle the nav menu
    authButtons.classList.toggle("show"); // Toggle the auth buttons
  });

  // Close the menu if you click outside of it
  window.addEventListener("click", (event) => {
    if (
      event.target !== burgerMenu && // Ensure the click is not on the burger icon
      !navMenu.contains(event.target) && // Or within the nav menu
      !authButtons.contains(event.target) // Or within the auth buttons
    ) {
      navMenu.classList.remove("show"); // Hide nav menu
      authButtons.classList.remove("show"); // Hide auth buttons
    }
  })
