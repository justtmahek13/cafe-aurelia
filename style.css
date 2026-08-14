* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #f8f3ed;
    color: #2b211b;
    line-height: 1.6;
}


/* =========================
   NAVIGATION
========================= */

header {
    background: #2b211b;
    padding: 18px 7%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.logo {
    color: #f5d6a6;
    font-size: 24px;
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #f5d6a6;
}

.menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 88vh;

    display: flex;
    align-items: center;

    padding: 80px 7%;

    background:
        linear-gradient(
            rgba(43, 33, 27, 0.72),
            rgba(43, 33, 27, 0.72)
        ),
        url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=85")
        center/cover;

    background-attachment: fixed;
}

.hero-content {
    max-width: 680px;
}

.tagline,
.section-label {
    color: #a66a3f;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.hero .tagline {
    color: #f5d6a6;
}

.hero h2 {
    color: white;
    font-size: clamp(45px, 8vw, 80px);
    line-height: 1.05;
    margin-bottom: 25px;
}

.hero-description {
    color: #eee;
    max-width: 520px;
    margin-bottom: 30px;
}

.button {
    display: inline-block;

    background: #a66a3f;
    color: white;

    padding: 13px 25px;

    text-decoration: none;

    border-radius: 30px;

    transition: 0.3s;
}

.button:hover {
    background: #7e4d2c;
    transform: translateY(-3px);
}


/* =========================
   GENERAL SECTIONS
========================= */

section {
    padding: 100px 7%;
}

section h2 {
    font-size: 42px;
    margin-bottom: 20px;
}


/* =========================
   ABOUT
========================= */

.about {
    max-width: 850px;
    margin: auto;
    text-align: center;
}

.about p:last-child {
    color: #6b5b50;
}


/* =========================
   MENU
========================= */

.menu {
    background: #efe5d8;
    text-align: center;
}

.menu-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 28px;

    margin-top: 45px;
}

.menu-card {
    background: white;

    border-radius: 18px;

    overflow: hidden;

    text-align: left;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.08);

    transition: 0.35s;
}

.menu-card:hover {
    transform: translateY(-8px);

    box-shadow:
        0 18px 35px rgba(0, 0, 0, 0.15);
}

.image-container {
    height: 230px;
    overflow: hidden;
}

.menu-card img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: 0.5s;
}

.menu-card:hover img {
    transform: scale(1.07);
}

.card-content {
    padding: 25px;
}

.card-content h3 {
    margin-bottom: 10px;
    font-size: 21px;
}

.card-content p {
    color: #76675e;
    margin-bottom: 15px;
}

.card-content strong {
    color: #a66a3f;
    font-size: 20px;
}

.popular {
    display: inline-block;

    background: #f5d6a6;
    color: #5b3825;

    font-size: 10px;
    font-weight: bold;

    padding: 5px 9px;

    border-radius: 20px;

    letter-spacing: 1px;

    margin-bottom: 10px;
}


/* =========================
   WHY US
========================= */

.why-us {
    text-align: center;
}

.features {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 30px;

    margin-top: 45px;
}

.feature {
    padding: 30px;

    transition: 0.3s;
}

.feature:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 38px;
    margin-bottom: 10px;
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #76675e;
}


/* =========================
   CONTACT
========================= */

.contact {
    background: #2b211b;

    color: white;

    text-align: center;
}

.contact .section-label {
    color: #f5d6a6;
}

.contact p {
    margin-bottom: 30px;
    color: #ddd;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #1d1612;

    color: #aaa;

    text-align: center;

    padding: 30px 7%;

    font-size: 13px;
}

.footer-content h3 {
    color: #f5d6a6;
    margin-bottom: 5px;
}

.footer-content p {
    margin-bottom: 5px;
}

.copyright {
    margin-top: 15px;
    color: #777;
}


/* =========================
   SCROLL ANIMATION
========================= */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal.show {
    opacity: 1;

    transform: translateY(0);
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

    .menu-container,
    .features {
        grid-template-columns: 1fr 1fr;
    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

    header {
        padding: 16px 7%;
    }

    nav {
        flex-direction: row;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;

        position: absolute;

        top: 50px;
        right: 0;

        width: 190px;

        background: #2b211b;

        padding: 20px;

        border-radius: 12px;

        flex-direction: column;

        gap: 15px;

        box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.25);
    }

    .nav-links.active {
        display: flex;
    }

    .hero {
        min-height: 78vh;

        padding: 60px 7%;

        background-attachment: scroll;
    }

    .hero h2 {
        font-size: 48px;
    }

    section {
        padding: 75px 7%;
    }

    section h2 {
        font-size: 34px;
    }

    .menu-container,
    .features {
        grid-template-columns: 1fr;
    }

    .image-container {
        height: 220px;
    }

}


/* =========================
   SMALL PHONES
========================= */

@media (max-width: 400px) {

    .logo {
        font-size: 20px;
    }

    .hero h2 {
        font-size: 40px;
    }

    .hero-description {
        font-size: 14px;
    }

}
