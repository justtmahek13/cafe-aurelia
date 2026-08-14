// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / close menu
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==============================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==============================

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {

        navLinks.classList.remove("active");

    }

});


// ==============================
// SIMPLE SCROLL EFFECT
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(44, 33, 28, 0.96)";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});
