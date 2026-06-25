// ========================================
// MODERN PREMIUM PORTFOLIO - JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // === MOBILE MENU TOGGLE ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === NAVBAR SCROLL EFFECT ===
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background effect
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === ACTIVE NAVIGATION HIGHLIGHT ===
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-links a:not(.nav-cta)');

    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Remove active class when at top of page
        if (window.pageYOffset < 100) {
            navLinksArray.forEach(link => link.classList.remove('active'));
        }
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call

    // === SCROLL REVEAL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once revealed for better performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to reveal on scroll
    const revealElements = document.querySelectorAll(
        '.project-card, .skill-card, .timeline-item, .cert-card, .info-card'
    );

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        revealObserver.observe(el);
    });

    // === SKILL BAR ANIMATIONS ===
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.level-fill, .bar-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .info-card').forEach(card => {
        skillObserver.observe(card);
    });

    // === PARALLAX EFFECT FOR HERO BACKGROUND ===
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');

    if (heroSection && heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // === TYPING EFFECT FOR HERO TITLE (Optional) ===
    // Uncomment if you want a typing animation effect
    /*
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';

        let index = 0;
        function type() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }

        setTimeout(type, 500);
    }
    */

    // === CARD TILT EFFECT (SUBTLE 3D HOVER) ===
    const cards = document.querySelectorAll('.project-card, .skill-card, .cert-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // === LAZY LOADING FOR IMAGES ===
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // === COPY EMAIL ON CLICK ===
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');

            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            }
        });
    });

    // === NOTIFICATION SYSTEM ===
    function showNotification(message, duration = 3000) {
        // Remove existing notification if any
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            background: var(--accent-primary);
            color: white;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Remove notification after duration
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    // Add notification animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // === READING PROGRESS BAR ===
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-light));
        z-index: 10000;
        transition: width 0.1s ease-out;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // === BACK TO TOP BUTTON ===
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--accent-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        box-shadow: var(--shadow-lg);
        z-index: 999;
    `;
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1)';
        this.style.boxShadow = 'var(--shadow-glow)';
    });

    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = 'var(--shadow-lg)';
    });

    // === PERFORMANCE: DEBOUNCE SCROLL EVENTS ===
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.removeEventListener('scroll', highlightNavigation);
    window.addEventListener('scroll', debouncedHighlight);

    // === CONSOLE MESSAGE ===
    console.log('%c👋 Hello! Thanks for checking out my portfolio.', 'font-size: 16px; color: #3b82f6; font-weight: bold;');
    console.log('%cLooking for a Junior Cybersecurity Engineer? Let\'s connect!', 'font-size: 14px; color: #60a5fa;');
    console.log('%cLinkedIn: https://www.linkedin.com/in/muneer-jamali/', 'font-size: 12px; color: #94a3b8;');

    // === EASTER EGG: KONAMI CODE ===
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showNotification('🎮 Konami Code Activated! You found the easter egg!', 5000);
                document.body.style.animation = 'rainbow 2s linear infinite';
                konamiIndex = 0;

                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            konamiIndex = 0;
        }
    });

    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);

    // === INITIALIZE ===
    console.log('✅ Portfolio initialized successfully!');
});

// === PRELOADER (Optional - Uncomment if needed) ===
/*
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        inset: 0;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        transition: opacity 0.5s ease-out;
    `;
    preloader.innerHTML = '<div style="width: 50px; height: 50px; border: 4px solid var(--border-light); border-top-color: var(--accent-primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>';

    const spinStyle = document.createElement('style');
    spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(spinStyle);

    document.body.appendChild(preloader);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }, 500);
});
*/
