// Sticky navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }
});

// Mobile menu
const toggleBtn = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});