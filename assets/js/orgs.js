// File: /assets/js/list-script.js

(function() {
    /**
     * Retrieves the value of a specified query parameter from the current URL.
     * @param {string} param - The name of the query parameter to retrieve.
     * @returns {string|null} - The value of the parameter or null if not found.
     */
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    /**
     * Appends the 'list' parameter to the iframe's src URL if it exists.
     */
    function appendListParamToIframe() {
        const listParam = getQueryParam('list');
        const iframe = document.getElementById('assessmentIframe');

        if (listParam && iframe) {
            // Parse the current iframe src
            const iframeSrc = new URL(iframe.src, window.location.origin);

            // Check if 'list' is already present to avoid duplication
            if (!iframeSrc.searchParams.has('list')) {
                iframeSrc.searchParams.append('list', listParam);
                iframe.src = iframeSrc.toString();
            }
        }
    }

    /**
     * Main function to execute after the iframe has been set by take-script.js.
     */
    function initializeListParameter() {
        // Wait for the iframe src to be set by take-script.js
        const iframe = document.getElementById('assessmentIframe');

        if (iframe) {
            // Listen for the iframe to load
            iframe.addEventListener('load', function() {
                appendListParamToIframe();
            });
        }
    }

    // Execute the main function after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", initializeListParameter);
})();
