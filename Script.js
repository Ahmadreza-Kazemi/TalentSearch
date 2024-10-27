// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.setAttribute('aria-label', 'Navigate to section ' + (anchor.textContent.trim() || anchor.getAttribute('href').substring(1)));
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and real-time validation feedback
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const fields = [
        { field: 'name', regex: /.+/, errorId: 'name-error' },
        { field: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorId: 'email-error' },
        { field: 'message', regex: /.+/, errorId: 'message-error' }
    ];

    fields.forEach(({ field, regex, errorId }) => {
        const input = document.getElementById(field);
        if (!regex.test(input.value.trim())) {
            document.getElementById(errorId).style.display = 'block';
            input.setAttribute('aria-invalid', 'true');
            input.setAttribute('aria-describedby', errorId);
            isValid = false;
        } else {
            document.getElementById(errorId).style.display = 'none';
            input.setAttribute('aria-invalid', 'false');
            input.removeAttribute('aria-describedby');
        }
    });

    if (!isValid) {
        return;
    }

    document.querySelector('.form-confirmation').style.display = 'block';
    document.querySelector('.form-confirmation').setAttribute('role', 'alert');
});

// Real-time validation feedback
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function() {
        const field = input.getAttribute('id');
        const regex = field === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ : /.+/;
        const errorId = `${field}-error`;
        const validFeedbackId = `${field}-valid-feedback`;

        if (!regex.test(input.value.trim())) {
            document.getElementById(errorId).style.display = 'block';
            input.setAttribute('aria-invalid', 'true');
            input.setAttribute('aria-describedby', errorId);
            if (document.getElementById(validFeedbackId)) {
                document.getElementById(validFeedbackId).style.display = 'none';
            }
        } else {
            document.getElementById(errorId).style.display = 'none';
            input.setAttribute('aria-invalid', 'false');
            input.removeAttribute('aria-describedby');
            if (!document.getElementById(validFeedbackId)) {
                const validFeedback = document.createElement('span');
                validFeedback.id = validFeedbackId;
                validFeedback.className = 'valid-feedback';
                validFeedback.textContent = '✓ Valid';
                input.parentNode.insertBefore(validFeedback, input.nextSibling);
            }
            document.getElementById(validFeedbackId).style.display = 'inline';
        }
    });
});

// Lazy loading images with low-quality image placeholder (LQIP)
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => {
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', ''); // Ensure all lazy-loaded images have an alt attribute
        }
        // Set a low-quality placeholder as the initial source
        img.src = 'path/to/low-quality-placeholder.jpg';
        // Add enhanced loading spinner/placeholder
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div class="spinner-container">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        `;
        img.parentNode.insertBefore(spinner, img);
        img.onload = () => {
            spinner.remove();
        };
    });

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.setAttribute('aria-live', 'polite');
});

// Scroll animation for sections with debouncing
const scrollElements = document.querySelectorAll('.scroll-element');
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};
const displayScrollElement = (element) => {
    element.classList.add('scrolled');
    element.setAttribute('aria-hidden', 'false');
};
const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
    element.setAttribute('aria-hidden', 'true');
};
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

const debounce = (func, delay = 200) => {
    let timerId;
    return () => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func();
        }, delay);
    };
};

window.addEventListener('scroll', debounce(handleScrollAnimation));

// Back to top button visibility
const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.setAttribute('aria-label', 'Scroll back to top');
scrollToTopButton.setAttribute('role', 'button');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
        scrollToTopButton.setAttribute('aria-hidden', 'false');
    } else {
        scrollToTopButton.style.display = 'none';
        scrollToTopButton.setAttribute('aria-hidden', 'true');
    }
});

// SEO - Dynamic Title and Meta Description
document.addEventListener('visibilitychange', function() {
    document.title = document.hidden ? 'تلنت سرچ - ما منتظر بازگشت شما هستیم' : 'تلنت سرچ - کشف پتانسیل شما';
});

// Dynamic Meta Description Update
document.querySelectorAll('section').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionDescription = section.getAttribute('data-meta-description');
                if (sectionDescription) {
                    const metaDescriptionTag = document.querySelector('meta[name="description"]');
                    if (metaDescriptionTag) {
                        metaDescriptionTag.setAttribute('content', sectionDescription);
                    }
                }
            }
        });
    }, { threshold: 0.5 });
    observer.observe(section);
});

// Structured Data for FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "چگونه می‌توانم از خدمات تلنت سرچ استفاده کنم؟",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "برای استفاده از خدمات تلنت سرچ، می‌توانید از طریق فرم تماس با ما یا شماره‌های موجود با ما در ارتباط باشید و راهنمایی‌های لازم را دریافت کنید."
            }
        },
        {
            "@type": "Question",
            "name": "آیا خدمات شما شامل مشاوره فردی هم می‌شود؟",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "بله، ما خدمات مشاوره فردی نیز ارائه می‌دهیم که به شما در رشد و توسعه شخصی کمک می‌کند."
            }
        }
    ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(faqSchema);
document.head.appendChild(script);

// Structured Data for Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "تلنت سرچ",
    "url": "https://example.com",
    "logo": "https://example.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+98-123-456-7890",
        "contactType": "customer service",
        "areaServed": "IR",
        "availableLanguage": "Persian"
    },
    "sameAs": [
        "https://www.linkedin.com/company/talent-search",
        "https://www.instagram.com/talent_search",
        "https://twitter.com/talent_search"
    ]
};

const orgScript = document.createElement('script');
orgScript.type = 'application/ld+json';
orgScript.text = JSON.stringify(organizationSchema);
document.head.appendChild(orgScript);

// Structured Data for Event Schema
const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "کارگاه کشف استعداد",
    "startDate": "2024-11-25T10:00:00+03:30",
    "endDate": "2024-11-25T14:00:00+03:30",
    "location": {
        "@type": "Place",
        "name": "تهران - مرکز نوآوری",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "خیابان آزادی، پلاک 123",
            "addressLocality": "تهران",
            "addressCountry": "IR"
        }
    },
    "organizer": {
        "@type": "Organization",
        "name": "تلنت سرچ",
        "url": "https://example.com"
    },
    "description": "کارگاه عملی برای کشف و توسعه استعدادهای فردی با استفاده از هوش مصنوعی و مشاوره روان‌شناختی.",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "offers": {
        "@type": "Offer",
        "url": "https://example.com/ticket",
        "price": "500000",
        "priceCurrency": "IRR",
        "availability": "https://schema.org/InStock"
    }
};

const eventScript = document.createElement('script');
eventScript.type = 'application/ld+json';
eventScript.text = JSON.stringify(eventSchema);
document.head.appendChild(eventScript);

// Structured Data for Product Reviews Schema
const productReviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "خدمات مشاوره فردی تلنت سرچ",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "87"
    },
    "review": [
        {
            "@type": "Review",
            "author": "کاربر 1",
            "datePublished": "2024-01-15",
            "reviewBody": "بسیار مفید و حرفه‌ای بود!",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            }
        }
    ]
};

const productReviewScript = document.createElement('script');
productReviewScript.type = 'application/ld+json';
productReviewScript.text = JSON.stringify(productReviewSchema);
document.head.appendChild(productReviewScript);

// Adding ARIA labels to buttons and interactive elements
document.querySelectorAll('button, [role="button"]').forEach(button => {
    if (!button.hasAttribute('aria-label')) {
        const descriptiveLabel = button.textContent.trim() || 'Interactive button';
        button.setAttribute('aria-label', descriptiveLabel + ' button');
    }
});

document.querySelectorAll('input, textarea, select').forEach(element => {
    if (!element.hasAttribute('aria-label') && element.hasAttribute('placeholder')) {
        element.setAttribute('aria-label', element.getAttribute('placeholder'));
    }
});
