document.addEventListener("DOMContentLoaded", function() {
    // Select header and footer containers
    let headerContainer = document.querySelector(".header");

    // Function to fetch and inject content into a container
    async function injectContent(url) {
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
