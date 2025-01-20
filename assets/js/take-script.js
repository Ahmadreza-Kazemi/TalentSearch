// File: /assets/js/take-script.js

(function() {
    // Mapping of 'test' parameter values to their respective Form IDs and Display Names
    const testToDetailsMap = {
        "mental-tranquility": {
            formId: "sh68g",
            displayName: "فهرست آرامش روانی - 33",
            description: "این ارزیابی به سنجش میزان آرامش روانی و توانایی مدیریت استرس شما می‌پردازد."
        },
        "esteem": {
            formId: "vljt1",
            displayName: "فهرست ارجمندی - 17",
            description: "این ارزیابی به بررسی سطح ارجمندی و خودارزیابی مثبت شما می‌پردازد."
        },
        "child-talent-48": {
            formId: "npwsz",
            displayName: "فهرست استعداد کودک - 48",
            description: "این ارزیابی برای شناسایی استعدادهای بالقوه کودکان طراحی شده است."
        },
        "child-talent-72": {
            formId: "csclb",
            displayName: "فهرست استعداد کودک - 72",
            description: "این ارزیابی برای بررسی و توسعه استعدادهای ویژه کودکان مورد استفاده قرار می‌گیرد."
        },
        "persistence": {
            formId: "40svj",
            displayName: "فهرست استواری پویش - 32",
            description: "این ارزیابی میزان استواری و پویایی شما در مواجهه با چالش‌ها را سنجش می‌کند."
        },
        "adolescent-mental-hygiene": {
            formId: "nh7oc",
            displayName: "فهرست بهداشت روان نوجوان - 46",
            description: "این ارزیابی به بررسی سلامت روانی و بهداشت روانی نوجوانان می‌پردازد."
        },
        "purification": {
            formId: "i09gx",
            displayName: "فهرست پاکزیستی - 20",
            description: "این ارزیابی به بررسی میزان پاکیزگی و بهداشت شخصی شما می‌پردازد."
        },
        "stability": {
            formId: "rfayj",
            displayName: "فهرست پایایی - 29",
            description: "این ارزیابی به سنجش میزان پایایی و ثبات احساسی شما می‌پردازد."
        },
        "empirical-analytical": {
            formId: "5sluk",
            displayName: "فهرست تحلیلی تجربی - 42",
            description: "این ارزیابی توانایی‌های تحلیلی و تجربی شما را بررسی می‌کند."
        },
        "balance": {
            formId: "pi6c6",
            displayName: "فهرست تعادل - 38",
            description: "این ارزیابی به بررسی تعادل میان زندگی شخصی و حرفه‌ای شما می‌پردازد."
        },
        "mental-balance": {
            formId: "eg75q",
            displayName: "فهرست تعادل روان - 94",
            description: "این ارزیابی به سنجش تعادل روانی و سلامت روان شما می‌پردازد."
        },
        "personal-excellence": {
            formId: "6rvrr",
            displayName: "فهرست تعالی فردی - 37",
            description: "این ارزیابی به بررسی سطح تعالی و رشد شخصی شما می‌پردازد."
        },
        "personality-interaction": {
            formId: "elgp3",
            displayName: "فهرست تعاملی شخصیت - 62",
            description: "این ارزیابی به بررسی تعامل شخصیت شما با دیگران می‌پردازد."
        },
        "personal-commitment": {
            formId: "rdfzb",
            displayName: "فهرست تعهد فردی - 12",
            description: "این ارزیابی میزان تعهد شما به اهداف و مسئولیت‌ها را سنجش می‌کند."
        },
        "spiritual-support": {
            formId: "ieewp",
            displayName: "فهرست حمایت معنوی - 28",
            description: "این ارزیابی میزان حمایت معنوی و روانی شما را بررسی می‌کند."
        },
        "wisdom": {
            formId: "wi5pw",
            displayName: "فهرست خردمندی - 25",
            description: "این ارزیابی به سنجش میزان خردمندی و درک عمیق شما می‌پردازد."
        },
        "self-expansion": {
            formId: "9ytw7",
            displayName: "فهرست خود گستری - 62",
            description: "این ارزیابی به بررسی میزان خودگسترایی و توسعه شخصی شما می‌پردازد."
        },
        "accuracy": {
            formId: "9xmbs",
            displayName: "فهرست درستی - 17",
            description: "این ارزیابی به سنجش دقت و صحت در تفکر و عمل شما می‌پردازد."
        },
        "life-satisfaction": {
            formId: "gz2qd",
            displayName: "فهرست رضایت از زندگی - 24",
            description: "این ارزیابی میزان رضایت شما از جنبه‌های مختلف زندگی را بررسی می‌کند."
        },
        "marital-satisfaction": {
            formId: "j5g8u",
            displayName: "فهرست رضایت زناشویی - 38",
            description: "این ارزیابی به بررسی رضایت شما از زندگی زناشویی می‌پردازد."
        },
        "job-satisfaction": {
            formId: "8aj1t",
            displayName: "فهرست رضایت شغلی - 29",
            description: "این ارزیابی میزان رضایت شما از محیط و شرایط کاری را سنجش می‌کند."
        },
        "life-summit": {
            formId: "88p7y",
            displayName: "فهرست سر زندگی - 24",
            description: "این ارزیابی به بررسی نقاط اوج و دستاوردهای زندگی شما می‌پردازد."
        },
        "personality": {
            formId: "swa0t",
            displayName: "فهرست شخصیت - 79",
            description: "این ارزیابی به بررسی ویژگی‌ها و ابعاد مختلف شخصیت شما می‌پردازد."
        },
        "childrens-personality": {
            formId: "n60rv",
            displayName: "فهرست شخصیت کودکان - 50",
            description: "این ارزیابی به بررسی ویژگی‌های شخصیتی کودکان می‌پردازد."
        },
        "cognitive-24": {
            formId: "jwlit",
            displayName: "فهرست شناختی - 24",
            description: "این ارزیابی به سنجش توانایی‌های شناختی و ذهنی شما می‌پردازد."
        },
        "empirical-capacity": {
            formId: "owvqj",
            displayName: "فهرست ظرفیت تجربی - 63",
            description: "این ارزیابی به بررسی ظرفیت‌های تجربی و عملی شما می‌پردازد."
        },
        "cognitive-capacities": {
            formId: "tayf7",
            displayName: "فهرست ظرفیتهای شناختی - 35",
            description: "این ارزیابی به بررسی توانایی‌های شناختی پیشرفته شما می‌پردازد."
        },
        "corona": {
            formId: "cnjhr",
            displayName: "فهرست کرونا - 26",
            description: "این ارزیابی به بررسی تأثیرات کروناویروس بر زندگی و روان شما می‌پردازد."
        },
        "needs": {
            formId: "94buv",
            displayName: "فهرست نیازها - 18",
            description: "این ارزیابی به بررسی نیازهای اساسی و اولویت‌های شما می‌پردازد."
        },
        "duty": {
            formId: "ncaeh",
            displayName: "فهرست وظیفه مندی - 11",
            description: "این ارزیابی به بررسی سطح وظیفه‌مندی و مسئولیت‌پذیری شما می‌پردازد."
        },
        "goal-oriented": {
            formId: "jql20",
            displayName: "فهرست هدفمندی - 25",
            description: "این ارزیابی به بررسی تمرکز و هدفمندی شما در رسیدن به اهداف می‌پردازد."
        },
        "successful-intelligence": {
            formId: "vock1",
            displayName: "فهرست هوش موفق - 49",
            description: "این ارزیابی به بررسی هوش موفق و توانایی‌های موفقیت‌آمیز شما می‌پردازد."
        },
        "thought-emotion": {
            formId: "pb1bu",
            displayName: "فهرست هیجان اندیشه - 69",
            description: "این ارزیابی به بررسی ارتباط میان افکار و احساسات شما می‌پردازد."
        },
        "cognitive-integration": {
            formId: "fniq4",
            displayName: "فهرست یکپارچگی شناختی - 14",
            description: "این ارزیابی به بررسی میزان یکپارچگی و انسجام در تفکر شما می‌پردازد."
        },
        "life-satisfaction-25": {
            formId: "s88q3",
            displayName: "فهرست رضایت از زندگی - 25",
            description: "این ارزیابی به بررسی سطح رضایت شما از جنبه‌های مختلف زندگی می‌پردازد."
        },
        "talent-interaction": {
            formId: "0ekrq",
            displayName: "فهرست تعاملی استعداد - 15",
            description: "این ارزیابی به بررسی نحوه تعامل استعدادهای شما با محیط اطراف می‌پردازد."
        }
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
     * Main function to set the iframe src and update the page title and description.
     */
    function setIframeSrcAndPageDetails() {
        const testParam = getQueryParam('test');
        const listParam = getQueryParam('list');

        const loadingSpinner = document.getElementById('loading-spinner');
        const errorMessage = document.getElementById('error-message');
        const iframe = document.getElementById('assessmentIframe');
        const pageTitle = document.getElementById('page-title');
        const pageDescription = document.getElementById('page-description');

        // Hide iframe initially
        if (iframe) {
            iframe.style.display = 'none';
        }

        // Show loading spinner
        if (loadingSpinner) {
            loadingSpinner.style.display = 'block';
        }

        // Hide error message and page details initially
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
        if (pageTitle) {
            pageTitle.style.display = 'none';
        }
        if (pageDescription) {
            pageDescription.style.display = 'none';
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

        const testDetails = testToDetailsMap[testParam];

        // Validate 'test' parameter value
        if (!testDetails) {
            console.error(`No details found for test: ${testParam}`);
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

        // Set the page title dynamically
        if (pageTitle) {
            pageTitle.textContent = testDetails.displayName;
            pageTitle.style.display = 'block';
            // Update the document title
            document.title = `استعدادیاب | ${testDetails.displayName}`;
        }

        // Set the page description dynamically
        if (pageDescription) {
            pageDescription.textContent = testDetails.description;
            pageDescription.style.display = 'block';
        }

        // Construct iframe src
        const iframeSrc = constructIframeSrc(testDetails.formId, listParam);

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
    document.addEventListener("DOMContentLoaded", setIframeSrcAndPageDetails);
})();
