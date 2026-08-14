const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
