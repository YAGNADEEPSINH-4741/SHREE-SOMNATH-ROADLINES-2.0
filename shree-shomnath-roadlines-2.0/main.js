// GSAP Animations for Services Page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    // Truck animation for index.html
    gsap.to("img[src='truck.svg']", {
        x: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Animate service cards on scroll
    gsap.utils.toArray('.glass-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Hero section animation
    gsap.from(".hero-content h1, .hero-content p", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });

    // Services page animations
    gsap.from("section:nth-of-type(2) h1, section:nth-of-type(2) p", {
        scrollTrigger: {
            trigger: "section:nth-of-type(2)",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});