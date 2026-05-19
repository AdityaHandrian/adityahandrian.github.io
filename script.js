// ===== Initialize Lucide Icons =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    lucide.createIcons();
    initNavbar();
    initMobileMenu();
    initExperienceTabs();
    initSPA();
    initScrollReveal();
});

// ===== Theme Toggle =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const iconMoon = document.querySelector('.icon-moon');
    const iconSun = document.querySelector('.icon-sun');
    
    if (!themeToggle || !iconMoon || !iconSun) return;
    
    const savedTheme = localStorage.getItem('theme');
    
    function setTheme(isDark) {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            iconMoon.style.display = 'block';
            iconSun.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Default to dark theme if no preference is saved
    setTheme(savedTheme ? savedTheme === 'dark' : true);
    
    themeToggle.addEventListener('click', () => {
        const isCurrentlyLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isCurrentlyLight);
    });
}

// ===== Navbar Scroll Effect =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
    });
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
        });
    });
}

// ===== Experience Tabs =====
function initExperienceTabs() {
    const tabs = document.querySelectorAll('.exp-tab');
    const contents = document.querySelectorAll('.exp-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById('tab-' + tab.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
}

// ===== Scroll Reveal =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.section-header, .about-text, .about-stats, .stat-card, ' +
        '.timeline-card, .project-card, .skill-category, .cert-card, ' +
        '.contact-card, .certs-section'
    );
    revealElements.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));
}

// ===== SPA Router (Tabbed Pages) =====
function initSPA() {
    const sections = document.querySelectorAll('section.page-section');
    const allLinks = document.querySelectorAll('.nav-link, .nav-logo, .footer-logo, .btn');

    function showPage(targetHash) {
        // Default to about if hash is empty or doesn't map to a section
        let activeId = targetHash.replace('#', '') || 'about';
        const targetSection = document.getElementById(activeId);
        
        if (!targetSection || !targetSection.classList.contains('page-section')) {
            activeId = 'about';
        }

        // Hide all sections, show active
        sections.forEach(sec => {
            sec.classList.remove('active-page');
        });
        document.getElementById(activeId).classList.add('active-page');
        
        // Update body active page attribute for dynamic theme colors
        document.body.setAttribute('data-active-page', activeId);

        // Update Nav Links active indicator
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top of viewport
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Attach click listeners to all router links
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState(null, null, href);
                showPage(href);
            });
        }
    });

    // Listen to browser navigation (back/forward buttons)
    window.addEventListener('popstate', () => {
        showPage(window.location.hash);
    });

    // Initial page load routing
    showPage(window.location.hash);
}
