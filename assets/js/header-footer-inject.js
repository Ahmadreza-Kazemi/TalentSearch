document.addEventListener("DOMContentLoaded", function() {
    // Select header and footer containers
    let headerContainer = document.querySelector(".header");
    let footerContainer = document.querySelector(".footer");

    // Function to fetch and inject content into a container
    async function injectContent(url, container) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load content from ${url}`);
            }
            const html = await response.text();
            container.innerHTML = html;
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p>خطا در بارگذاری محتوا!</p>`;
        }
    }

    // Inject header and footer content
    injectContent('/header.html', headerContainer);
    injectContent('/footer.html', footerContainer);

    // Hamburger menu functionality
    let t = document.querySelector(".menu-toggle");
    let e = document.querySelector(".nav-links");
    let n = document.querySelector("body");

    function a() {
        e.classList.toggle("active");
        t.classList.toggle("active");
        const o = e.classList.contains("active");
        t.setAttribute("aria-expanded", o);
        n.style.overflow = o ? "hidden" : "";
    }

    function s() {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
            t.classList.remove("active");
            n.style.overflow = "";
            t.setAttribute("aria-expanded", "false");
        }
    }

    function r(n) {
        if (!e.contains(n.target) && !t.contains(n.target)) s();
    }

    function l(t) {
        if (t.key === "Escape") s();
    }

    t.addEventListener("click", a);
    document.addEventListener("click", r);
    document.addEventListener("keydown", l);
});
