// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    // Function to update active nav
    function updateActiveNav() {
        console.log('updateActiveNav called');
        // Get current page from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const currentPage = urlParams.get('page') || 'home';

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        console.log('navLinks found:', navLinks.length);
        if (navLinks.length === 0) {
            console.log('No nav links found, retrying in 100ms');
            setTimeout(updateActiveNav, 100);
            return;
        }
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const linkParams = new URLSearchParams(href.split('?')[1] || '');
            const linkPage = linkParams.get('page') || 'home';
            link.classList.remove('active');
            if (linkPage === currentPage) {
                link.classList.add('active');
                console.log('Active link set:', href);
            }
        });

        // Highlight the "Download CV" button if on home page
        // Fixed invalid selector by using a different approach
        const downloadCVButton = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === 'Download CV');
        if (currentPage === 'home' && downloadCVButton) {
            downloadCVButton.classList.add('active');
        } else if (downloadCVButton) {
            downloadCVButton.classList.remove('active');
        }
    }

    // Expose updateActiveNav globally for other scripts to call
    window.updateActiveNav = updateActiveNav;

    // Call immediately in case header is already loaded
    updateActiveNav();
});
