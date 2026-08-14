document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");


    /* =========================
       MOBILE MENU
    ========================= */

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    /* =========================
       CLOSE MENU AFTER CLICK
    ========================= */

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });


    /* =========================
       CLOSE MENU OUTSIDE
    ========================= */

    document.addEventListener("click", function (event) {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        }

    });


});
