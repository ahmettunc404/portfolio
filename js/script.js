// ====================================================
// SCROLL FADE-IN ANIMATION
// ====================================================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Trigger hero fade-in on load
window.addEventListener('load', () => {
    document.querySelector('.hero-content')?.classList.add('visible');
});

// ====================================================
// MOBILE NAVIGATION MENU TOGGLE
// ====================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile menu when a nav link is clicked
navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ====================================================
// HIGHLIGHT ACTIVE NAV ITEM WHILE SCROLLING
// ====================================================
const sections = document.querySelectorAll('section, footer');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ====================================================
// CONTACT FORM SUBMISSION HANDLER
// ====================================================
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
    const action = form.getAttribute('action') || '';
    if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        alert('Thank you for reaching out! (Note: Replace YOUR_FORM_ID with your free Formspree ID to receive emails)');
        form.reset();
    }
});
