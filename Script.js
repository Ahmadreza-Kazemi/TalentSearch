// scripts.js

document.addEventListener('DOMContentLoaded', function() {

    /*** Smooth Scrolling for Anchor Links ***/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.setAttribute('aria-label', 'رفتن به بخش ' + (anchor.textContent.trim() || anchor.getAttribute('href').substring(1)));
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /*** Sticky Header ***/
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    /*** Form Validation ***/
    const form = document.getElementById('contact-form');
    const formConfirmation = document.querySelector('.form-confirmation');
    const inputs = form.querySelectorAll('input, textarea');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, 'این فیلد نمی‌تواند خالی باشد.');
                isValid = false;
            } else if (input.type === 'email' && !validateEmail(input.value.trim())) {
                showError(input, 'لطفاً یک ایمیل معتبر وارد کنید.');
                isValid = false;
            } else {
                hideError(input);
            }
        });

        if (isValid) {
            form.reset();
            formConfirmation.style.display = 'block';
            setTimeout(() => {
                formConfirmation.style.display = 'none';
            }, 5000);
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim()) {
                hideError(input);
            }
        });
    });

    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('span');
            errorElement.classList.add('error-message');
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
        input.classList.add('input-error');
    }

    function hideError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
            input.classList.remove('input-error');
        }
    }

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /*** Scroll Animations ***/
    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('in-view');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('in-view');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    /*** Back to Top Button ***/
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /*** Lazy Loading Images ***/
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = () => {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== 'none') {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    /*** ARIA Labels for Accessibility ***/
    document.querySelectorAll('button, .cta-button').forEach(button => {
        if (!button.hasAttribute('aria-label')) {
            const label = button.textContent.trim();
            button.setAttribute('aria-label', label);
        }
    });

    /*** Dynamic Page Title ***/
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = 'منتظر بازگشت شما هستیم!';
        } else {
            document.title = 'تلنت سرچ - کشف پتانسیل شما';
        }
    });

    /*** Update Meta Description Dynamically ***/
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const sections = document.querySelectorAll('section');

    const updateMetaDescription = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 300) {
                const description = section.getAttribute('data-meta-description');
                if (description) {
                    metaDescriptionTag.setAttribute('content', description);
                }
            }
        });
    };

    window.addEventListener('scroll', updateMetaDescription);

    /*** Initialize Scroll Animations and Lazy Loading ***/
    handleScrollAnimation();
    lazyLoad();

});
