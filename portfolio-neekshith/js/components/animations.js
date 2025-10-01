// Skills animation on scroll
const observeElements = document.querySelectorAll('.skill-item, .card, .interest-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out';
        }
    });
}, { threshold: 0.1 });

observeElements.forEach(el => observer.observe(el));
