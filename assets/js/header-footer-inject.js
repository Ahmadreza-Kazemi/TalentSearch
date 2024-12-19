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
});
document.addEventListener("DOMContentLoaded", function() {
    let t = document.querySelector(".menu-toggle");
    let e = document.querySelector(".nav-links");
    let n = document.querySelector("body");
    let o = document.createElement("div");
    let c, i = document.title;

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

    function d() {
        const t = window.scrollY || document.documentElement.scrollTop;
        c.classList.toggle("show", t > window.innerHeight / 2);
    }

    function u() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        o.setAttribute("tabindex", "-1");
        o.focus();
    }

    function m() {
        document.hidden
            ? (document.title = "منتظر بازگشت شما هستیم!")
            : (document.title = i);
    }

    // Event listeners for scroll-to-top button
    c = document.createElement("button");
    c.classList.add("scroll-to-top");
    c.setAttribute("aria-label", "بازگشت به بالا");
    c.innerHTML = "↑";
    document.body.appendChild(c);
    window.addEventListener("scroll", d);
    c.addEventListener("click", u);
    document.addEventListener("visibilitychange", m);

    // Event listeners for the hamburger menu
    t.addEventListener("click", a);
    document.addEventListener("click", r);
    document.addEventListener("keydown", l);
});
    // Closes the menu if a click is detected outside of the menu and toggle button
    function r(n) {
        if (!e.contains(n.target) && !t.contains(n.target)) s();
    }

    // Closes the menu if the Escape key is pressed
    function l(t) {
        if (t.key === "Escape") s();
    }
