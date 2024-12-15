document.addEventListener("DOMContentLoaded", function() {
    let t, e, n, o, c, i;

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
});
