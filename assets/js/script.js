document.addEventListener("DOMContentLoaded", function() {
    // Other JS functionality
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
        document.hidden ? document.title = "منتظر بازگشت شما هستیم!" : document.title = i;
    }

    // More functionality
    async function f() {
        const t = document.querySelector("#categories .category-list");
        const e = document.querySelector("#articles .article-list");
        const n = document.getElementById("loader");
        const o = document.getElementById("error-message");
        const c = document.getElementById("selected-category-title");

        if (t && e) {
            try {
                const response = await fetch("articles.json");
                if (!response.ok) throw new Error(`خطای HTTP! وضعیت: ${response.status} (${response.statusText})`);
                const articles = await response.json();
                if (!Array.isArray(articles)) throw new Error("ساختار نامعتبر JSON: آرایه مقالات یافت نشد.");
                const categories = function(t) {
                    const e = new Set();
                    t.forEach((item) => {
                        if (item.categories && item.categories.length > 0) {
                            item.categories.forEach((category) => e.add(JSON.stringify(category)));
                        } else {
                            e.add(JSON.stringify({ id: 0, title: "بدون دسته‌بندی", url: "#" }));
                        }
                    });
                    return Array.from(e).map((item) => JSON.parse(item)).sort((a, b) => a.title.localeCompare(b.title, "fa"));
                }(articles);

                categories.forEach((category) => {
                    const li = document.createElement("li");
                    li.className = "category-item";
                    const button = document.createElement("button");
                    button.className = "category-button";
                    button.textContent = category.title;
                    button.setAttribute("data-category-id", category.id);
                    button.addEventListener("click", () => {
                        e.innerHTML = "";
                        c.textContent = `دسته‌بندی: ${category.title}`;
                        const filteredArticles = articles.filter((article) => {
                            return category.id === 0 || (article.categories && article.categories.some((cat) => cat.id === category.id));
                        });
                        if (filteredArticles.length === 0) {
                            n.innerHTML = "<p>هیچ مقاله‌ای در این دسته‌بندی وجود ندارد.</p>";
                        } else {
                            filteredArticles.forEach((article) => {
                                const articleItem = document.createElement("li");
                                articleItem.className = "article-item";
                                const link = document.createElement("a");
                                link.href = article.url;
                                link.textContent = article.title;
                                link.classList.add("article-title-link");
                                link.setAttribute("aria-label", article.title);
                                const meta = document.createElement("div");
                                meta.classList.add("article-meta");
                                const author = document.createElement("span");
                                author.classList.add("article-author");
                                author.textContent = `نویسنده: ${article.author.name}`;
                                const date = document.createElement("span");
                                date.classList.add("article-date");
                                date.textContent = `تاریخ: ${function(t) {
                                    const [e, n, o] = t.split("/");
                                    return `${o} ${c = n, { "01": "فروردین", "02": "اردیبهشت", "03": "خرداد", "04": "تیر", "05": "مرداد", "06": "شهریور", "07": "مهر", "08": "آبان", "09": "آذر", 10: "دی", 11: "بهمن", 12: "اسفند" }[c.padStart(2, "0")] || c} ${e}`;
                                    var c;
                                }(article.published.date)}`;
                                meta.append(author, " | ", date);
                                articleItem.append(link, meta);
                                e.appendChild(articleItem);
                            });
                        }
                    });
                    li.appendChild(button);
                    t.appendChild(li);
                });

                n.style.display = "none";
            } catch (error) {
                console.error("خطا در دریافت یا پردازش JSON برای مقالات:", error);
                o.textContent = `یک خطا رخ داده است: ${error.message}`;
                n.style.display = "none";
            }
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

        // Inject articles dynamically
        f();

        // Load chatbot
        window.addEventListener("load", function() {
            if (typeof injectChatbot === "function") {
                injectChatbot();
            }
        });
    });
});
