document.addEventListener("DOMContentLoaded", function() {
    // Select header and footer containers
    let headerContainer = document.querySelector(".header-container");
    let footerContainer = document.querySelector(".footer-container");

    // Function to fetch and inject content into a container
    async function injectContent(url, container) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load content from ${url}`);
            }
            const html = await response.text();
            container.innerHTML = html;
            return html;
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p>خطا در بارگذاری محتوا!</p>`;
        }
    }

    // Inject header and footer content
    injectContent('/header.html', headerContainer).then(() => {
        // Initialize header scripts after injecting header.html
        initializeHeaderScripts();
    });
    injectContent('/footer.html', footerContainer)
        .then(() => {
            // Initialize footer scripts if necessary
        });

    // Function to initialize header-related JavaScript
    function initializeHeaderScripts() {
        let menuToggle = document.querySelector(".menu-toggle");
        let navLinks = document.querySelector(".nav-links");
        let body = document.querySelector("body");

        if (!menuToggle || !navLinks) {
            console.error("Menu toggle button or navigation links not found.");
            return;
        }

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
    }
});
