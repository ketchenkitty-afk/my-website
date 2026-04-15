// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-glass', 'shadow-xl');
            navbar.classList.remove('lg:top-10');
            navbar.classList.add('top-0');
        } else {
            navbar.classList.remove('nav-glass', 'shadow-xl');
            navbar.classList.add('lg:top-10');
            navbar.classList.remove('top-0');
        }
    });
}

// Mobile Menu Logic
const mobileToggle = document.getElementById('mobile-toggle');
const mobileClose = document.getElementById('mobile-close');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileClose && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-menu-active');
    });

    mobileClose.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu-active');
    });
}

// Form Submission (if on contact page)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you shortly.");
        contactForm.reset();
    });
}
