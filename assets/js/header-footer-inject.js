document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and inject content into the document
    async function injectContent(url, targetElement) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load content from ${url}`);
            }
            const html = await response.text();
            targetElement.insertAdjacentHTML('beforeend', html);
        } catch (error) {
            console.error(error);
            targetElement.innerHTML = "<p>خطا در بارگذاری محتوا!</p>";
        }
    }

    // Select elements where the header and footer will be injected directly
    let bodyElement = document.body;

    // Inject header and footer content into the body
    injectContent('/header.html', bodyElement);
    injectContent('/footer.html', bodyElement);
});
