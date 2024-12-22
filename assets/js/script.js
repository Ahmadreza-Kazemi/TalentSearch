document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector(".menu-toggle");
    let navLinks = document.querySelector(".nav-links");
    let body = document.querySelector("body");

    function toggleMenu() {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
        const isActive = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isActive);
        body.style.overflow = isActive ? "hidden" : "";
    }

    function closeMenu() {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            body.style.overflow = "";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    }

    function handleClickOutside(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    }

    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    }

    menuToggle.addEventListener("click", toggleMenu);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
});
