const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


const navItems = navLinks.querySelectorAll("a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


document.addEventListener("click", function (event) {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
