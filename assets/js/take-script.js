(function() {
    // Mapping of 'test' parameter values to their respective Form IDs, Descriptions, and Ref values
    const testToDetailsMap = {
    {
    "mental-tranquility": {
        "formId": "sh68g",
        "displayName": "فهرست آرامش روانی - 33",
        "description": "آزمون فهرست آرامش روانی - 33 برای ارزیابی میزان آرامش روانی و توانایی مدیریت استرس شما.",
        "ref": "2018"
    },
    "therapy": {
        "formId": "kzan7",
        "displayName": "شروع خدمات روانشناسی و مشاوره فردی",
        "description": "مشاوره فردی در هیجان اندیشه",
        "ref": "000"
    },
    "experimental-analysis-42": {
        "formId": "5sluk",
        "displayName": "فهرست تحلیلی تجربی «42»",
        "description": "این ارزیابی به تحلیل تجربی و شناسایی جنبه‌های مختلف تجربیات فردی شما می‌پردازد.",
        "ref": "2013"
    },
    "child-talents-72": {
        "formId": "csclb",
        "displayName": "فهرست استعداد کودک «72»",
        "description": "این ارزیابی به شناسایی و تحلیل استعدادهای مختلف کودک شما می‌پردازد.",
        "ref": "2024"
    },
    "personal-space": {
        "formId": "knuln",
        "displayName": "فهرست حریم فردی - 24",
        "description": "این ارزیابی به بررسی نیازها و احترام به حریم شخصی شما می‌پردازد.",
        "ref": "2010"
    },
    "restlessness": {
        "formId": "1vp1t",
        "displayName": "فهرست بیتابی - 24",
        "description": "این ارزیابی به سنجش میزان بیتابی و اضطراب شما می‌پردازد.",
        "ref": "1999"
    },
    "esteem": {
        "formId": "vljt1",
        "displayName": "فهرست ارجمندی - 17",
        "description": "آزمون فهرست ارجمندی - 17 برای ارزیابی سطح ارجمندی و خودارزیابی مثبت شما.",
        "ref": "2017"
    },
    "wrestlingfederation": {
        "formId": "sdnhd",
        "displayName": "فهرست جامع تشخیص فدراسیون کشتی",
        "description": "این فهرست جهت تعالی فردی قهرمانی کشتی گیران است",
        "ref": "000"
    },
    "fit": {
        "formId": "mt53x",
        "displayName": "fit",
        "description": "آزمون تصویری fit",
        "ref": "000"
    },
    "child-talent-48": {
        "formId": "npwsz",
        "displayName": "فهرست استعداد کودک - 48",
        "description": "آزمون فهرست استعداد کودک - 48 برای شناسایی استعدادهای بالقوه کودکان طراحی شده است.",
        "ref": "2023"
    },
    "persistence": {
        "formId": "40svj",
        "displayName": "فهرست استواری پویش - 32",
        "description": "آزمون فهرست استواری پویش - 32 برای ارزیابی میزان استواری و پویایی شما در مواجهه با چالش‌ها.",
        "ref": "2015"
    },
    "adolescent-mental-hygiene": {
        "formId": "nh7oc",
        "displayName": "فهرست بهداشت روان نوجوان - 46",
        "description": "آزمون فهرست بهداشت روان نوجوان - 46 برای ارزیابی سلامت روانی و بهداشت روانی نوجوانان.",
        "ref": "2020"
    },
    "purification": {
        "formId": "i09gx",
        "displayName": "فهرست پاکزیستی - 20",
        "description": "آزمون فهرست پاکزیستی - 20 برای ارزیابی میزان پاکیزگی و بهداشت شخصی شما.",
        "ref": "2031"
    },
    "stability": {
        "formId": "rfayj",
        "displayName": "فهرست پایایی - 29",
        "description": "آزمون فهرست پایایی - 29 برای ارزیابی میزان پایایی و ثبات احساسی شما.",
        "ref": "2014"
    },
    "empirical-analytical": {
        "formId": "5sluk",
        "displayName": "فهرست تحلیلی تجربی - 42",
        "description": "آزمون فهرست تحلیلی تجربی - 42 برای ارزیابی توانایی‌های تحلیلی و تجربی شما.",
        "ref": "2013"
    },
    "balance": {
        "formId": "pi6c6",
        "displayName": "فهرست تعادل - 38",
        "description": "آزمون فهرست تعادل - 38 برای ارزیابی تعادل میان زندگی شخصی و حرفه‌ای شما.",
        "ref": "000"
    },
    "mental-balance": {
        "formId": "eg75q",
        "displayName": "فهرست تعادل روان - 94",
        "description": "آزمون فهرست تعادل روان - 94 برای ارزیابی تعادل روانی و سلامت روان شما.",
        "ref": "000"
    },
    "personal-excellence": {
        "formId": "6rvrr",
        "displayName": "فهرست تعالی فردی - 37",
        "description": "آزمون فهرست تعالی فردی - 37 برای ارزیابی سطح تعالی و رشد شخصی شما.",
        "ref": "2035"
    },
    "personality-interaction": {
        "formId": "elgp3",
        "displayName": "فهرست تعاملی شخصیت - 62",
        "description": "آزمون فهرست تعاملی شخصیت - 62 برای ارزیابی تعامل شخصیت شما با دیگران.",
        "ref": "1995"
    },
    "personal-commitment": {
        "formId": "rdfzb",
        "displayName": "فهرست تعهد فردی - 12",
        "description": "آزمون فهرست تعهد فردی - 12 برای ارزیابی میزان تعهد شما به اهداف و مسئولیت‌ها.",
        "ref": "2011"
    },
    "spiritual-support": {
        "formId": "ieewp",
        "displayName": "فهرست حمایت معنوی - 28",
        "description": "آزمون فهرست حمایت معنوی - 28 برای ارزیابی میزان حمایت معنوی و روانی شما.",
        "ref": "2009"
    },
    "wisdom": {
        "formId": "wi5pw",
        "displayName": "فهرست خردمندی - 25",
        "description": "آزمون فهرست خردمندی - 25 برای ارزیابی میزان خردمندی و درک عمیق شما.",
        "ref": "2028"
    },
    "self-expansion": {
        "formId": "9ytw7",
        "displayName": "فهرست خود گستری - 62",
        "description": "آزمون فهرست خود گستری - 62 برای ارزیابی میزان خودگسترایی و توسعه شخصی شما.",
        "ref": "2019"
    },
    "accuracy": {
        "formId": "9xmbs",
        "displayName": "فهرست درستی - 17",
        "description": "آزمون فهرست درستی - 17 برای ارزیابی دقت و صحت در تفکر و عمل شما.",
        "ref": "2008"
    },
    "life-satisfaction": {
        "formId": "gz2qd",
        "displayName": "فهرست رضایت از زندگی - 24",
        "description": "آزمون فهرست رضایت از زندگی - 24 برای ارزیابی میزان رضایت شما از جنبه‌های مختلف زندگی.",
        "ref": "2007"
    },
    "marital-satisfaction": {
        "formId": "j5g8u",
        "displayName": "فهرست رضایت زناشویی - 38",
        "description": "آزمون فهرست رضایت زناشویی - 38 برای ارزیابی رضایت شما از زندگی زناشویی.",
        "ref": "2034"
    },
    "job-satisfaction": {
        "formId": "8aj1t",
        "displayName": "فهرست رضایت شغلی - 29",
        "description": "آزمون فهرست رضایت شغلی - 29 برای ارزیابی میزان رضایت شما از محیط و شرایط کاری.",
        "ref": "2022"
    },
    "vitality": {
        "formId": "88p7y",
        "displayName": "فهرست سر زندگی - 24",
        "description": "آزمون فهرست سر زندگی - 24 برای ارزیابی نقاط اوج و دستاوردهای زندگی شما.",
        "ref": "2006"
    },
    "personality": {
        "formId": "swa0t",
        "displayName": "فهرست شخصیت - 79",
        "description": "آزمون فهرست شخصیت - 79 برای ارزیابی ویژگی‌ها و ابعاد مختلف شخصیت شما.",
        "ref": "2032"
    },
    "childrens-personality": {
        "formId": "n60rv",
        "displayName": "فهرست شخصیت کودکان - 50",
        "description": "آزمون فهرست شخصیت کودکان - 50 برای ارزیابی ویژگی‌های شخصیتی کودکان.",
        "ref": "2005"
    },
    "cognitive-24": {
        "formId": "jwlit",
        "displayName": "فهرست شناختی - 24",
        "description": "آزمون فهرست شناختی - 24 برای ارزیابی توانایی‌های شناختی و ذهنی شما.",
        "ref": "2030"
    },
    "empirical-capacity": {
        "formId": "owvqj",
        "displayName": "فهرست ظرفیت تجربی - 63",
        "description": "آزمون فهرست ظرفیت تجربی - 63 برای ارزیابی ظرفیت‌های تجربی و عملی شما.",
        "ref": "2004"
    },
    "cognitive-capacities": {
        "formId": "tayf7",
        "displayName": "فهرست ظرفیتهای شناختی - 35",
        "description": "آزمون فهرست ظرفیتهای شناختی - 35 برای ارزیابی توانایی‌های شناختی پیشرفته شما.",
        "ref": "2003"
    },
    "corona": {
        "formId": "cnjhr",
        "displayName": "فهرست کرونا - 26",
        "description": "آزمون فهرست کرونا - 26 برای ارزیابی تأثیرات کروناویروس بر زندگی و روان شما.",
        "ref": "2021"
    },
    "needs": {
        "formId": "94buv",
        "displayName": "فهرست نیازها - 18",
        "description": "آزمون فهرست نیازها - 18 برای ارزیابی نیازهای اساسی و اولویت‌های شما.",
        "ref": "2002"
    },
    "duty": {
        "formId": "ncaeh",
        "displayName": "فهرست وظیفه مندی - 11",
        "description": "آزمون فهرست وظیفه مندی - 11 برای ارزیابی سطح وظیفه‌مندی و مسئولیت‌پذیری شما.",
        "ref": "2001"
    },
    "goal-oriented": {
        "formId": "jql20",
        "displayName": "فهرست هدفمندی - 25",
        "description": "آزمون فهرست هدفمندی - 25 برای ارزیابی تمرکز و هدفمندی شما در رسیدن به اهداف.",
        "ref": "2000"
    },
    "successful-intelligence": {
        "formId": "vock1",
        "displayName": "فهرست هوش موفق - 49",
        "description": "آزمون فهرست هوش موفق - 49 برای ارزیابی هوش موفق و توانایی‌های موفقیت‌آمیز شما.",
        "ref": "2027"
    },
    "thought-emotion": {
        "formId": "pb1bu",
        "displayName": "فهرست هیجان اندیشه - 69",
        "description": "آزمون فهرست هیجان اندیشه - 69 برای ارزیابی ارتباط میان افکار و احساسات شما.",
        "ref": "2029"
    },
    "cognitive-integration": {
        "formId": "fniq4",
        "displayName": "فهرست یکپارچگی شناختی - 14",
        "description": "آزمون فهرست یکپارچگی شناختی - 14 برای ارزیابی میزان یکپارچگی و انسجام در تفکر شما.",
        "ref": "2016"
    },
    "life-satisfaction-25": {
        "formId": "s88q3",
        "displayName": "فهرست رضایت از زندگی - 25",
        "description": "آزمون فهرست رضایت از زندگی - 25 برای ارزیابی سطح رضایت شما از جنبه‌های مختلف زندگی.",
        "ref": "2025"
    },
    "talent-interaction": {
        "formId": "0ekrq",
        "displayName": "فهرست تعاملی استعداد - 15",
        "description": "آزمون فهرست تعاملی استعداد - 15 برای ارزیابی نحوه تعامل استعدادهای شما با محیط اطراف.",
        "ref": "2026"
    },
    "marriage-satisfaction": {
        "formId": "h6a3s",
        "displayName": "فهرست جامع تشخیص تعاملی رضایت زناشویی",
        "description": "آزمون فهرست جامع تشخیص تعاملی رضایت زناشویی برای ارزیابی میزان رضایت شما از زندگی زناشویی.",
        "ref": "2034"
    },
    "individual": {
        "formId": "i5hv6",
        "displayName": "فهرست جامع تشخیص تعاملی فردی",
        "description": "آزمون فهرست جامع تشخیص تعاملی فردی برای ارزیابی میزان رضایت شما از جنبه‌های مختلف زندگی فردی.",
        "ref": "2033"
    },
    "marriage-readiness": {
        "formId": "4zowk",
        "displayName": "فهرست جامع تشخیص تعاملی آمادگی ازدواج",
        "description": "آزمون فهرست جامع تشخیص تعاملی آمادگی ازدواج برای ارزیابی میزان آمادگی شما برای ازدواج.",
        "ref": "2030"
    },
    "adolescent": {
        "formId": "cwllb",
        "displayName": "فهرست جامع تشخیص تعاملی نوجوان",
        "description": "آزمون فهرست جامع تشخیص تعاملی نوجوان برای ارزیابی جنبه‌های مختلف زندگی نوجوانان.",
        "ref": "2029"
    },
    "general-battery": {
        "formId": "191pa",
        "displayName": "فهرست جامع تشخیصی ج",
        "description": "آزمون فهرست جامع تشخیصی ج برای ارزیابی جنبه‌های مختلف زندگی شما.",
        "ref": "2000"
    },
    "talent": {
        "formId": "ifhf5",
        "displayName": "فهرست جامع تشخیص تعاملی استعداد",
        "description": "آزمون فهرست جامع تشخیص تعاملی استعداد برای ارزیابی استعدادهای شما.",
        "ref": "2000"
    },
    "child": {
        "formId": "vaxur",
        "displayName": "فهرست جامع تشخیص تعاملی کودک",
        "description": "آزمون فهرست جامع تشخیص تعاملی کودک برای ارزیابی جنبه‌های مختلف زندگی کودکان.",
        "ref": "2004"
    }
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
     * Constructs the iframe src URL based on Form ID and possibly adds the ref parameter.
     * @param {string} formId - The Form ID corresponding to the selected test.
     * @param {string} ref - The ref parameter to append (if provided).
     * @returns {string} - The complete URL to be set as the iframe's src.
     */
    function constructIframeSrc(formId, ref) {
        let src = `https://formafzar.com/form/${formId}`;
        if (ref) {
            src += `?ref=${ref}`;
        }
        return src;
    }

    /**
     * Main function to set the iframe src and update the page title and meta description.
     */
    function setIframeSrcAndPageDetails() {
        const testParam = getQueryParam('test');
        const trialParam = getQueryParam('trial');
        
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

        // Construct iframe src with 'ref' if trial is 'on'
        const iframeSrc = constructIframeSrc(testDetails.formId, trialParam === "on" ? testDetails.ref : null);

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
