// assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // ============================
    // Modular Functions for Injection
    // ============================
    /**
     * Injects the header into the DOM
     */
    function injectHeader() {
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = `
            <div class="logo">استعدادیاب</div>
            <nav class="navbar" role="navigation" aria-label="Main Navigation">
                <button class="menu-toggle" aria-label="باز کردن منو" aria-expanded="false">
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                </button>
                <ul class="nav-links">
                    <li><a href="/">خانه</a></li>
                    <li><a href="/interactivemind">ذهن تعاملی</a></li>
                    <li><a href="index.html#services">ارزیابی‌ها</a></li>
                    <li><a href="/getting-started">استعدادیابی</a></li>
                    <li><a href="index.html#footer">درباره</a></li>
                </ul>
            </nav>
        `;
        document.body.insertBefore(header, document.body.firstChild);
    }

    /**
     * Injects the footer into the DOM
     */
    function injectFooter() {
        const footer = document.createElement('footer');
        footer.id = 'footer';
        footer.classList.add('footer');
        footer.innerHTML = `
            <div class="footer-content">
                <div class="about-info">
                    <h2>درباره ما</h2>
                    <p>
                        استعدادیاب با استفاده از بیش از چهل سال تجربه مؤسسه هیجان اندیشه در روان‌شناسی و ارزیابی‌های تخصصی، با بهره‌گیری از هوش مصنوعی به شما کمک می‌کند تا استعدادهای بالقوه خود را در مسیر دستیابی به تعالی فردی و رضایت از زندگی کشف کنید.
                    </p>
                    <div class="contact-info">
                        <p><strong>آدرس:</strong> تهران، سهروردی، خرمشهر، عربعلی، ششم، ۴۴</p>
                        <p><strong>تلفن:</strong> <a href="tel:+982188174100">۰۲۱۸۸۱۷۴۱۰۰</a></p>
                        <p><strong>ایمیل:</strong> <a href="mailto:info@talentsearch.ir">info@talentsearch.ir</a></p>
                    </div>
                </div>
            </div>
            <div class="powered-by">
                توسعه داده شده توسط <a href="https://eot.ir" target="_blank">مؤسسه تعاملی هیجان اندیشه</a>
            </div>
        `;
        document.body.appendChild(footer);
    }

    /**
     * Injects the scroll-to-top button into the DOM
     * @returns {HTMLElement} The scroll-to-top button element
     */
    function injectScrollToTopButton() {
        const scrollToTopButton = document.createElement('button');
        scrollToTopButton.classList.add('scroll-to-top');
        scrollToTopButton.setAttribute('aria-label', 'بازگشت به بالا');
        scrollToTopButton.innerHTML = 'بالا'; // You can replace this with an icon if desired
        document.body.appendChild(scrollToTopButton);
        return scrollToTopButton;
    }

    /**
     * Injects the chatbot into the DOM on the home page
     */
    function injectChatbot() {
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '/index.html') {
            // Insert the Zapier chatbot script
            const zapierScript = document.createElement('script');
            zapierScript.async = true;
            zapierScript.type = 'module';
            zapierScript.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
            document.head.appendChild(zapierScript);

            // Insert the chatbot embed into a designated section or default location
            const chatbotSection = document.querySelector('#chatbot-section');
            if (chatbotSection) {
                const chatbotEmbed = document.createElement('zapier-interfaces-chatbot-embed');
                chatbotEmbed.setAttribute('is-popup', 'true');
                chatbotEmbed.setAttribute('chatbot-id', 'cm2zz24k00005envoo5nvsoha');
                chatbotSection.appendChild(chatbotEmbed);
            } else {
                // Fallback: append to body if the specific section is not found
                const chatbotEmbed = document.createElement('zapier-interfaces-chatbot-embed');
                chatbotEmbed.setAttribute('is-popup', 'true');
                chatbotEmbed.setAttribute('chatbot-id', 'cm2zz24k00005envoo5nvsoha');
                document.body.appendChild(chatbotEmbed);
                console.warn('Chatbot section not found on home page. Chatbot appended to body.');
            }
        }
    }

    // ============================
    // Navbar Functionality
    // ============================
    let menuToggle, navLinks, body, headerElement, originalTitle, scrollToTopButton;

    /**
     * Toggle the navigation menu on mobile devices
     */
    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Update ARIA attribute for accessibility
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);

        // Prevent body from scrolling when menu is open
        if (isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    /**
     * Close the navigation menu
     */
    function closeMenu() {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            console.log('Menu closed');
        }
    }

    /**
     * Handle clicks outside the navigation menu to close it
     */
    function handleClickOutside(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    }

    // ============================
    // Scroll-to-Top Functionality
    // ============================

    /**
     * Show or hide the Back to Top button based on scroll position
     */
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > window.innerHeight / 2) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    /**
     * Smoothly scroll to the top of the page
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Set focus to the header for accessibility
        headerElement.setAttribute('tabindex', '-1'); // Make header focusable
        headerElement.focus();
        console.log('Scrolled to top');
    }

    // ============================
    // Page Visibility Functionality
    // ============================

    /**
     * Handle dynamic page title changes based on visibility
     */
    function handleVisibilityChange() {
        if (document.hidden) {
            document.title = 'منتظر بازگشت شما هستیم!';
            console.log('Page hidden: Title changed');
        } else {
            // Revert to original title only if it was changed
            if (document.title === 'منتظر بازگشت شما هستیم!') {
                document.title = originalTitle;
                console.log('Page visible: Title reverted');
            }
        }
    }

    // ============================
    // Accessibility Functionality
    // ============================

    /**
     * Handle keyboard navigation for accessibility (e.g., closing menu with 'Escape' key)
     */
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }

    // ============================
    // Initialization Function
    // ============================

    function init() {
        // Inject common elements
        injectHeader();
        injectFooter();
        scrollToTopButton = injectScrollToTopButton();
        injectChatbot();

        // Selecting DOM Elements After Injection
        headerElement = document.querySelector('.header');
        menuToggle = headerElement.querySelector('.menu-toggle');
        navLinks = headerElement.querySelector('.nav-links');
        body = document.body;

        // Variable to Store Original Title
        originalTitle = document.title;

        // Attach event listener for menu toggle button
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        } else {
            console.warn('Menu toggle button not found.');
        }

        // Attach event listener to close menu when clicking outside
        document.addEventListener('click', handleClickOutside);

        // Attach event listener for keyboard navigation (e.g., closing menu with 'Escape' key)
        document.addEventListener('keydown', handleKeyDown);

        // Attach event listener to show/hide scroll-to-top button on scroll
        if (scrollToTopButton) {
            window.addEventListener('scroll', handleScroll);
            scrollToTopButton.addEventListener('click', scrollToTop);
        } else {
            console.warn('Scroll-to-Top button not found.');
        }

        // Attach event listener to handle page visibility changes
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    // Initialize the script
    init();
});
