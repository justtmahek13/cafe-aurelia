const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Open / close mobile navigation

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close navigation after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
