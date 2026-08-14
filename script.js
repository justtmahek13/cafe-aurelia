// ==============================
// CAFÉ AURELIA NAVIGATION
// ==============================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


// ==============================
// OPEN / CLOSE MOBILE MENU
// ==============================

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const menuIsOpen =
        navLinks.classList.contains("active");


    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );


    if (menuIsOpen) {

        menuToggle.textContent = "✕";

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation"
        );

    } else {

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});


// ==============================
// CLOSE MENU AFTER CLICKING LINK
// ==============================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


// ==============================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==============================

document.addEventListener("click", function (event) {

    const clickedMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);


    if (
        !clickedMenu &&
        !clickedButton &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});


// ==============================
// CLOSE MOBILE MENU ON RESIZE
// ==============================

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
