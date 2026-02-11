
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const installBtn = document.getElementById('install-btn');
    const carousel = document.getElementById('carousel');
    const topNav = document.querySelector('.top-nav');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) toggleMenu();
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topNav.classList.add('scrolled');
        } else {
            topNav.classList.remove('scrolled');
        }
    });

    const nextBtn = document.querySelector('.btn-right');
    const prevBtn = document.querySelector('.btn-left');

    if (carousel && nextBtn && prevBtn) {
        const scrollAmount = 260; 

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        carousel.addEventListener('scroll', () => {
            const isAtStart = carousel.scrollLeft <= 0;
            const isAtEnd = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth;

            prevBtn.style.opacity = isAtStart ? "0.3" : "1";
            prevBtn.style.pointerEvents = isAtStart ? "none" : "auto";
            
            nextBtn.style.opacity = isAtEnd ? "0.3" : "1";
            nextBtn.style.pointerEvents = isAtEnd ? "none" : "auto";
        });
    }
});