// navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }
});

// menu
const toggleBtn = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const slider = document.getElementById("mustVisitSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function getScrollAmount() {
    const card = slider.querySelector(".mustvisit-card");
    const gap = parseInt(getComputedStyle(slider).gap) || 24;
    return card.offsetWidth + gap;
}

nextBtn.addEventListener("click", () => {

    const amount = getScrollAmount();

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: amount,
            behavior: "smooth"
        });
    }

});

prevBtn.addEventListener("click", () => {

    const amount = getScrollAmount();

    if (slider.scrollLeft <= 0) {
        slider.scrollTo({
            left: slider.scrollWidth,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: -amount,
            behavior: "smooth"
        });
    }

});