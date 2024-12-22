document.addEventListener("DOMContentLoaded", function() {
    // Select header and footer containers
    let headerContainer = document.querySelector(".header");
    let footerContainer = document.querySelector(".footer");

    // Function to inject header content directly
    function injectHeaderContent(container) {
        const headerHTML = `
            <div id="header" class="header">
                <div class="logo">استعدادیاب</div>
                <nav class="navbar" role="navigation" aria-label="Main Navigation">
                    <ul class="nav-links">
                        <li><a href="/">خانه</a></li>
                        <li><a href="/psychological-assessments">آزمون‌ها</a></li>
                        <li><a href="/about-us">درباره‌ما</a></li>
                    </ul>
                    <button class="menu-toggle" aria-label="باز کردن منو" aria-expanded="false">
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                    </button>
                </nav>
            </div>
        `;
        container.innerHTML = headerHTML;
        attachEventListeners();
    }

    // Function to fetch and inject content into a container
    async function injectContent(url, container) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load content from ${url}`);
            }
            const html = await response.text();
            container.innerHTML = html;

            // Re-attach event listeners after content is injected
            console.log(`Content injected from ${url}`);
            attachEventListeners();
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p>خطا در بارگذاری محتوا!</p>`;
        }
    }

    // Function to attach event listeners for the hamburger menu
    function attachEventListeners() {
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

        if (menuToggle) {
            menuToggle.addEventListener("click", toggleMenu);
            console.log("Menu toggle event listener attached");
        }
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
    }

    // Ensure the header container is empty before injecting content
    headerContainer.innerHTML = '';
    // Inject header content directly
    injectHeaderContent(headerContainer);
    // Inject footer content
    injectContent('/footer.html', footerContainer);
});
