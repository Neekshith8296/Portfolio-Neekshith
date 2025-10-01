import { initializeFAQ } from './components/faq.js';

// Load all JavaScript components
import './components/navigation.js';
import './components/form.js';
import './components/notifications.js';
import './components/animations.js';
import './components/ui.js';

// Initialize page
console.log('Neekshith Portfolio - JavaScript loaded successfully!');

// Initialize FAQ after DOM content is loaded and page content is inserted
document.addEventListener('DOMContentLoaded', () => {
    // Use a MutationObserver to detect when main-content is updated
    const mainContent = document.getElementById('main-content');
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Initialize FAQ if FAQ items are present
                if (mainContent.querySelector('.faq-item')) {
                    initializeFAQ();
                }
                // Don't disconnect observer so it works for all page changes
            }
        }
    });
    observer.observe(mainContent, { childList: true, subtree: true });
});
