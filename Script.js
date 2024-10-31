// assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const body = document.body;
    const header = document.querySelector('.header');

    /**
     * Function to toggle the navigation menu on mobile
     */
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Update ARIA attribute
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);

        // When the menu is open, prevent body from scrolling
        if (isExpanded) {
            body.style.overflow = 'hidden';
            console.log('Menu opened');
        } else {
            body.style.overflow = '';
            console.log('Menu closed');
        }
    };

    /**
     * Function to close the navigation menu
     */
    const closeMenu = () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            console.log('Menu closed');
        }
    };

    /**
     * Function to handle clicks outside the navigation menu
     */
    const handleClickOutside = (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    };

    /**
     * Function to show or hide the Back to Top button based on scroll position
     */
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollToTopButton.classList.toggle('show', scrollTop > window.innerHeight / 2);
    };

    /**
     * Function to smoothly scroll to the top of the page
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Set focus to the header for accessibility
        header.setAttribute('tabindex', '-1'); // Make header focusable
        header.focus();
        console.log('Scrolled to top');
    };

    /**
     * Function to handle dynamic page title changes based on visibility
     */
    const handleVisibilityChange = () => {
        if (document.hidden) {
            document.title = 'منتظر بازگشت شما هستیم!';
            console.log('Page hidden: Title changed');
        } else {
            document.title = 'استعدادیاب | ارزیابی‌های روان‌شناختی برای تعالی فردی شما';
            console.log('Page visible: Title reverted');
        }
    };

    /**
     * Function to handle window resize and adjust any responsive features if necessary
     */
    const handleResize = () => {
        // Placeholder for any future responsive adjustments
        console.log('Window resized');
    };

    /**
     * Function to handle keyboard navigation for accessibility
     */
    const handleKeyDown = (event) => {
        // Close menu on 'Escape' key press
        if (event.key === 'Escape') {
            closeMenu();
        }
    };

    /**
     * Initialize all event listeners and functionalities
     */
    const init = () => {
        // Toggle navigation menu on hamburger click (only mobile)
        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking outside
        document.addEventListener('click', handleClickOutside);

        // Close menu on 'Escape' key press
        document.addEventListener('keydown', handleKeyDown);

        // Show or hide Back to Top button on scroll
        window.addEventListener('scroll', handleScroll);

        // Scroll to top when Back to Top button is clicked
        scrollToTopButton.addEventListener('click', scrollToTop);

        // Handle dynamic page title changes
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Handle window resize
        window.addEventListener('resize', handleResize);
    };

    // Set the initial document title
    document.title = 'استعدادیاب | ارزیابی‌های روان‌شناختی برای تعالی فردی شما';

    // Call the init function to set everything up
    init();
});
