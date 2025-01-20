// File: /assets/js/take-script.js

(function() {
    // Mapping of 'test' parameter values to Form IDs
    const testToFormIdMap = {
        "Job-Satisfaction": "jyzyq",
        "Marriage-Satisfaction": "h6a3s",
        "Individual-Satisfaction": "i5hv6",
        "Marriage-Readiness": "4zowk",
        "Adolescent": "cwllb",
        "General": "191pa",
        "Talent": "ifhf5",
        "Child": "vaxur",
        "mental-tranquility": "sh68g",
        "esteem": "vljt1",
        "child-talent-48": "npwsz",
        "child-talent-72": "csclb",
        "persistence": "40svj",
        "adolescent-mental-hygiene": "nh7oc",
        "purification": "i09gx",
        "stability": "rfayj",
        "empirical-analytical": "5sluk",
        "balance": "pi6c6",
        "mental-balance": "eg75q",
        "personal-excellence": "6rvrr",
        "personality-interaction": "elgp3",
        "personal-commitment": "rdfzb",
        "personal-space": "knuln",
        "spiritual-support": "ieewp",
        "wisdom": "wi5pw",
        "self-expansion": "9ytw7",
        "accuracy": "9xmbs",
        "life-satisfaction": "gz2qd",
        "marital-satisfaction": "j5g8u",
        "job-satisfaction": "8aj1t",
        "life-summit": "88p7y",
        "personality": "swa0t",
        "childrens-personality": "n60rv",
        "cognitive-24": "jwlit",
        "empirical-capacity": "owvqj",
        "cognitive-capacities": "tayf7",
        "corona": "cnjhr",
        "needs": "94buv",
        "duty": "ncaeh",
        "goal-oriented": "jql20",
        "successful-intelligence": "vock1",
        "thought-emotion": "pb1bu",
        "cognitive-integration": "fniq4",
        "life-satisfaction-25": "s88q3",
        "talent-interaction": "0ekrq"
    };

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
     * Constructs the iframe src URL based on Form ID and optional list parameter.
     * @param {string} formId - The Form ID corresponding to the selected test.
     * @param {string|null} listParam - The 'list' parameter value from the URL.
     * @returns {string} - The complete URL to be set as the iframe's src.
     */
    function constructIframeSrc(formId, listParam) {
        let src = `https://formafzar.com/form/${formId}`;
        if (listParam && listParam.trim() !== "") {
            src += `?list=${encodeURIComponent(listParam)}`;
        }
        return src;
    }

    /**
     * Main function to set the iframe src based on URL parameters.
     */
    function setIframeSrc() {
        const testParam = getQueryParam('test');
        const listParam = getQueryParam('list');

        const loadingSpinner = document.getElementById('loading-spinner');
        const errorMessage = document.getElementById('error-message');
        const iframe = document.getElementById('assessmentIframe');

        // Hide iframe initially
        if (iframe) {
            iframe.style.display = 'none';
        }

        // Show loading spinner
        if (loadingSpinner) {
            loadingSpinner.style.display = 'block';
        }

        // Hide error message initially
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }

        // Validate 'test' parameter
        if (!testParam) {
            console.error("The 'test' parameter is missing in the URL.");
            if (errorMessage) {
                errorMessage.textContent = "پارامتر 'test' در URL موجود نیست. لطفاً از صحت URL اطمینان حاصل کنید.";
                errorMessage.style.display = 'block';
            }
            // Hide loading spinner
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
            return;
        }

        const formId = testToFormIdMap[testParam];

        // Validate 'test' parameter value
        if (!formId) {
            console.error(`No Form ID mapping found for test: ${testParam}`);
            if (errorMessage) {
                errorMessage.textContent = "پارامتر 'test' نامعتبر است. لطفاً از صحت URL اطمینان حاصل کنید.";
                errorMessage.style.display = 'block';
            }
            // Hide loading spinner
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
            return;
        }

        // Construct iframe src
        const iframeSrc = constructIframeSrc(formId, listParam);

        if (iframe) {
            iframe.src = iframeSrc;

            // Show iframe once it's loaded
            iframe.onload = function() {
                if (loadingSpinner) {
                    loadingSpinner.style.display = 'none';
                }
                iframe.style.display = 'block';
            };

            // Handle iframe loading errors
            iframe.onerror = function() {
                console.error("Failed to load the iframe content.");
                if (errorMessage) {
                    errorMessage.textContent = "فرم بارگذاری نشد. لطفاً دوباره تلاش کنید.";
                    errorMessage.style.display = 'block';
                }
                if (loadingSpinner) {
                    loadingSpinner.style.display = 'none';
                }
            };
        } else {
            console.error("Iframe with ID 'assessmentIframe' not found.");
            if (errorMessage) {
                errorMessage.textContent = "فرم بارگذاری نشد. لطفاً دوباره تلاش کنید.";
                errorMessage.style.display = 'block';
            }
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
        }
    }

    // Execute the main function after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", setIframeSrc);
})();
