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

            // Re-attach event listeners after content is injected
            attachMenuToggleListener();
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p>خطا در بارگذاری محتوا!</p>`;
        }
    }

    // Function to attach menu toggle event listener
    function attachMenuToggleListener() {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
                menuToggle.setAttribute('aria-expanded', !expanded);
                document.querySelector('.nav-links').classList.toggle('open');
            });
        }
    }

    // Inject header and footer content
    injectContent('/header.html', headerContainer);
    injectContent('/footer.html', footerContainer);
});
