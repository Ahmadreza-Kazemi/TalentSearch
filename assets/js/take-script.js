(function() {
    // Mapping of 'test' parameter values to their respective Form IDs and Descriptions
    const testToDetailsMap = {
        "mental-tranquility": {
            formId: "sh68g",
            displayName: "فهرست آرامش روانی - 33",
            description: "آزمون فهرست آرامش روانی - 33 برای ارزیابی میزان آرامش روانی و توانایی مدیریت استرس شما."
        },
        "therapy": {
            formId: "kzan7",
            displayName: "شروع خدمات روانشناسی و مشاوره فردی",
            description: "مشاوره فردی در هیجان اندیشه"
        },
                "personal-space": {
            formId: "kzan7",
            displayName: "فهرست حریم فردی - 24",
            description: "این ارزیابی به بررسی نیازها و احترام به حریم شخصی شما می‌پردازد."
        },
                "restlessness": {
            formId: "1vp1t",
            displayName: "فهرست بیتابی - 24",
            description: "این ارزیابی به سنجش میزان بیتابی و اضطراب شما می‌پردازد."
        },
        "esteem": {
            formId: "vljt1",
            displayName: "فهرست ارجمندی - 17",
            description: "آزمون فهرست ارجمندی - 17 برای ارزیابی سطح ارجمندی و خودارزیابی مثبت شما."
        },
        "wrestlingfederation": {
            formId: "sdnhd",
            displayName: "فهرست جامع تشخیص فدراسیون کشتی",
            description: "این فهرست جهت تعالی فردی قهرمانی کشتی گیران است"
        },
        "fit": {
            formId: "mt53x",
            displayName: "fit",
            description: "آزمون تصویری fit"
        },
        "child-talent-48": {
            formId: "npwsz",
            displayName: "فهرست استعداد کودک - 48",
            description: "آزمون فهرست استعداد کودک - 48 برای شناسایی استعدادهای بالقوه کودکان طراحی شده است."
        },
        "child-talent-72": {
            formId: "csclb",
            displayName: "فهرست استعداد کودک - 72",
            description: "آزمون فهرست استعداد کودک - 72 برای بررسی و توسعه استعدادهای ویژه کودکان مورد استفاده قرار می‌گیرد."
        },
        "persistence": {
            formId: "40svj",
            displayName: "فهرست استواری پویش - 32",
            description: "آزمون فهرست استواری پویش - 32 برای ارزیابی میزان استواری و پویایی شما در مواجهه با چالش‌ها."
        },
        "adolescent-mental-hygiene": {
            formId: "nh7oc",
            displayName: "فهرست بهداشت روان نوجوان - 46",
            description: "آزمون فهرست بهداشت روان نوجوان - 46 برای ارزیابی سلامت روانی و بهداشت روانی نوجوانان."
        },
        "purification": {
            formId: "i09gx",
            displayName: "فهرست پاکزیستی - 20",
            description: "آزمون فهرست پاکزیستی - 20 برای ارزیابی میزان پاکیزگی و بهداشت شخصی شما."
        },
        "stability": {
            formId: "rfayj",
            displayName: "فهرست پایایی - 29",
            description: "آزمون فهرست پایایی - 29 برای ارزیابی میزان پایایی و ثبات احساسی شما."
        },
        "empirical-analytical": {
            formId: "5sluk",
            displayName: "فهرست تحلیلی تجربی - 42",
            description: "آزمون فهرست تحلیلی تجربی - 42 برای ارزیابی توانایی‌های تحلیلی و تجربی شما."
        },
        "balance": {
            formId: "pi6c6",
            displayName: "فهرست تعادل - 38",
            description: "آزمون فهرست تعادل - 38 برای ارزیابی تعادل میان زندگی شخصی و حرفه‌ای شما."
        },
        "mental-balance": {
            formId: "eg75q",
            displayName: "فهرست تعادل روان - 94",
            description: "آزمون فهرست تعادل روان - 94 برای ارزیابی تعادل روانی و سلامت روان شما."
        },
        "personal-excellence": {
            formId: "6rvrr",
            displayName: "فهرست تعالی فردی - 37",
            description: "آزمون فهرست تعالی فردی - 37 برای ارزیابی سطح تعالی و رشد شخصی شما."
        },
        "personality-interaction": {
            formId: "elgp3",
            displayName: "فهرست تعاملی شخصیت - 62",
            description: "آزمون فهرست تعاملی شخصیت - 62 برای ارزیابی تعامل شخصیت شما با دیگران."
        },
        "personal-commitment": {
            formId: "rdfzb",
            displayName: "فهرست تعهد فردی - 12",
            description: "آزمون فهرست تعهد فردی - 12 برای ارزیابی میزان تعهد شما به اهداف و مسئولیت‌ها."
        },
        "spiritual-support": {
            formId: "ieewp",
            displayName: "فهرست حمایت معنوی - 28",
            description: "آزمون فهرست حمایت معنوی - 28 برای ارزیابی میزان حمایت معنوی و روانی شما."
        },
        "wisdom": {
            formId: "wi5pw",
            displayName: "فهرست خردمندی - 25",
            description: "آزمون فهرست خردمندی - 25 برای ارزیابی میزان خردمندی و درک عمیق شما."
        },
        "self-expansion": {
            formId: "9ytw7",
            displayName: "فهرست خود گستری - 62",
            description: "آزمون فهرست خود گستری - 62 برای ارزیابی میزان خودگسترایی و توسعه شخصی شما."
        },
        "accuracy": {
            formId: "9xmbs",
            displayName: "فهرست درستی - 17",
            description: "آزمون فهرست درستی - 17 برای ارزیابی دقت و صحت در تفکر و عمل شما."
        },
        "life-satisfaction": {
            formId: "gz2qd",
            displayName: "فهرست رضایت از زندگی - 24",
            description: "آزمون فهرست رضایت از زندگی - 24 برای ارزیابی میزان رضایت شما از جنبه‌های مختلف زندگی."
        },
        "marital-satisfaction": {
            formId: "j5g8u",
            displayName: "فهرست رضایت زناشویی - 38",
            description: "آزمون فهرست رضایت زناشویی - 38 برای ارزیابی رضایت شما از زندگی زناشویی."
        },
        "job-satisfaction": {
            formId: "8aj1t",
            displayName: "فهرست رضایت شغلی - 29",
            description: "آزمون فهرست رضایت شغلی - 29 برای ارزیابی میزان رضایت شما از محیط و شرایط کاری."
        },
        "life-summit": {
            formId: "88p7y",
            displayName: "فهرست سر زندگی - 24",
            description: "آزمون فهرست سر زندگی - 24 برای ارزیابی نقاط اوج و دستاوردهای زندگی شما."
        },
        "personality": {
            formId: "swa0t",
            displayName: "فهرست شخصیت - 79",
            description: "آزمون فهرست شخصیت - 79 برای ارزیابی ویژگی‌ها و ابعاد مختلف شخصیت شما."
        },
        "childrens-personality": {
            formId: "n60rv",
            displayName: "فهرست شخصیت کودکان - 50",
            description: "آزمون فهرست شخصیت کودکان - 50 برای ارزیابی ویژگی‌های شخصیتی کودکان."
        },
        "cognitive-24": {
            formId: "jwlit",
            displayName: "فهرست شناختی - 24",
            description: "آزمون فهرست شناختی - 24 برای ارزیابی توانایی‌های شناختی و ذهنی شما."
        },
        "empirical-capacity": {
            formId: "owvqj",
            displayName: "فهرست ظرفیت تجربی - 63",
            description: "آزمون فهرست ظرفیت تجربی - 63 برای ارزیابی ظرفیت‌های تجربی و عملی شما."
        },
        "cognitive-capacities": {
            formId: "tayf7",
            displayName: "فهرست ظرفیتهای شناختی - 35",
            description: "آزمون فهرست ظرفیتهای شناختی - 35 برای ارزیابی توانایی‌های شناختی پیشرفته شما."
        },
        "corona": {
            formId: "cnjhr",
            displayName: "فهرست کرونا - 26",
            description: "آزمون فهرست کرونا - 26 برای ارزیابی تأثیرات کروناویروس بر زندگی و روان شما."
        },
        "needs": {
            formId: "94buv",
            displayName: "فهرست نیازها - 18",
            description: "آزمون فهرست نیازها - 18 برای ارزیابی نیازهای اساسی و اولویت‌های شما."
        },
        "duty": {
            formId: "ncaeh",
            displayName: "فهرست وظیفه مندی - 11",
            description: "آزمون فهرست وظیفه مندی - 11 برای ارزیابی سطح وظیفه‌مندی و مسئولیت‌پذیری شما."
        },
        "goal-oriented": {
            formId: "jql20",
            displayName: "فهرست هدفمندی - 25",
            description: "آزمون فهرست هدفمندی - 25 برای ارزیابی تمرکز و هدفمندی شما در رسیدن به اهداف."
        },
        "successful-intelligence": {
            formId: "vock1",
            displayName: "فهرست هوش موفق - 49",
            description: "آزمون فهرست هوش موفق - 49 برای ارزیابی هوش موفق و توانایی‌های موفقیت‌آمیز شما."
        },
        "thought-emotion": {
            formId: "pb1bu",
            displayName: "فهرست هیجان اندیشه - 69",
            description: "آزمون فهرست هیجان اندیشه - 69 برای ارزیابی ارتباط میان افکار و احساسات شما."
        },
        "cognitive-integration": {
            formId: "fniq4",
            displayName: "فهرست یکپارچگی شناختی - 14",
            description: "آزمون فهرست یکپارچگی شناختی - 14 برای ارزیابی میزان یکپارچگی و انسجام در تفکر شما."
        },
        "life-satisfaction-25": {
            formId: "s88q3",
            displayName: "فهرست رضایت از زندگی - 25",
            description: "آزمون فهرست رضایت از زندگی - 25 برای ارزیابی سطح رضایت شما از جنبه‌های مختلف زندگی."
        },
        "talent-interaction": {
            formId: "0ekrq",
            displayName: "فهرست تعاملی استعداد - 15",
            description: "آزمون فهرست تعاملی استعداد - 15 برای ارزیابی نحوه تعامل استعدادهای شما با محیط اطراف."
        },
        "job-satisfaction": {
            formId: "jyzyq",
            displayName: "فهرست جامع تشخیص تعاملی رضایت شغلی",
            description: "آزمون فهرست جامع تشخیص تعاملی رضایت شغلی برای ارزیابی میزان رضایت شما از شغل و محیط کاری."
        },
        "marriage-satisfaction": {
            formId: "h6a3s",
            displayName: "فهرست جامع تشخیص تعاملی رضایت زناشویی",
            description: "آزمون فهرست جامع تشخیص تعاملی رضایت زناشویی برای ارزیابی میزان رضایت شما از زندگی زناشویی."
        },
        "individual": {
            formId: "i5hv6",
            displayName: "فهرست جامع تشخیص تعاملی فردی",
            description: "آزمون فهرست جامع تشخیص تعاملی فردی برای ارزیابی میزان رضایت شما از جنبه‌های مختلف زندگی فردی."
        },
        "marriage-readiness": {
            formId: "4zowk",
            displayName: "فهرست جامع تشخیص تعاملی آمادگی ازدواج",
            description: "آزمون فهرست جامع تشخیص تعاملی آمادگی ازدواج برای ارزیابی میزان آمادگی شما برای ازدواج."
        },
        "adolescent": {
            formId: "cwllb",
            displayName: "فهرست جامع تشخیص تعاملی نوجوان",
            description: "آزمون فهرست جامع تشخیص تعاملی نوجوان برای ارزیابی جنبه‌های مختلف زندگی نوجوانان."
        },
        "general-battery": {
            formId: "191pa",
            displayName: "فهرست جامع تشخیصی ج",
            description: "آزمون فهرست جامع تشخیصی ج برای ارزیابی جنبه‌های مختلف زندگی شما."
        },
        "talent": {
            formId: "ifhf5",
            displayName: "فهرست جامع تشخیص تعاملی استعداد",
            description: "آزمون فهرست جامع تشخیص تعاملی استعداد برای ارزیابی استعدادهای شما."
        },
        "child": {
            formId: "vaxur",
            displayName: "فهرست جامع تشخیص تعاملی کودک",
            description: "آزمون فهرست جامع تشخیص تعاملی کودک برای ارزیابی جنبه‌های مختلف زندگی کودکان."
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
     * Constructs the iframe src URL based on Form ID.
     * @param {string} formId - The Form ID corresponding to the selected test.
     * @returns {string} - The complete URL to be set as the iframe's src.
     */
    function constructIframeSrc(formId) {
        return `https://formafzar.com/form/${formId}`;
    }

    /**
     * Main function to set the iframe src and update the page title and meta description.
     */
    function setIframeSrcAndPageDetails() {
        const testParam = getQueryParam('test');

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
        document.title = `استعدادیاب | ${testDetails.displayName}`;

        // Update the meta description dynamically
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", testDetails.description);
        }

        // Construct iframe src without 'list' parameter
        const iframeSrc = constructIframeSrc(testDetails.formId);

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
