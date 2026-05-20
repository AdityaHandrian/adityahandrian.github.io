// ===== Initialize Lucide Icons =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    lucide.createIcons();
    initNavbar();
    initMobileMenu();
    initExperienceTabs();
    initSPA();
    initScrollReveal();
    initInteractiveGlow();
    initBackgroundMusic();
    initGalleryModal();
    initResumeDropdowns();
    initCustomCursor();
    initShareModal();
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

// ===== Language Switcher =====
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        const flagSvg = lang === 'en' 
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-right: 6px; display: inline-block; flex-shrink: 0; position: relative; top: -1px;">
                <rect x="1" y="1" width="14" height="10" rx="1" />
                <line x1="1" y1="1" x2="15" y2="11" stroke-width="1" opacity="0.4" />
                <line x1="15" y1="1" x2="1" y2="11" stroke-width="1" opacity="0.4" />
                <line x1="8" y1="1" x2="8" y2="11" stroke-width="1.8" />
                <line x1="1" y1="6" x2="15" y2="6" stroke-width="1.8" />
               </svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-right: 6px; display: inline-block; flex-shrink: 0; position: relative; top: -1px;">
                <rect x="1" y="1" width="14" height="5" fill="currentColor" opacity="0.8" rx="0.5" />
                <rect x="1" y="1" width="14" height="10" rx="1" />
               </svg>`;
               
        langToggle.innerHTML = flagSvg + lang.toUpperCase();

        document.querySelectorAll('[data-lang-en]').forEach(el => {
            const enText = el.getAttribute('data-lang-en');
            const idText = el.getAttribute('data-lang-id');
            // Support raw HTML tag rendering (e.g. strong tag) inside translation strings
            el.innerHTML = lang === 'en' ? enText : idText;
        });
    }

    // Initialize with saved or default language
    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'id' : 'en';
        updateLanguage(nextLang);
    });
}

// ===== Interactive Mouse-Following Glow =====
function initInteractiveGlow() {
    const glow = document.getElementById('interactiveGlow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Use requestAnimationFrame to optimize rendering performance
        requestAnimationFrame(() => {
            glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            glow.style.opacity = '1';
        });
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

// ===== Background Music Player =====
function initBackgroundMusic() {
    const player = document.getElementById('musicPlayer');
    const audio = document.getElementById('bgAudio');
    const toggleBtn = document.getElementById('musicToggleBtn');
    const iconPlaying = document.getElementById('musicIconPlaying');
    const iconMuted = document.getElementById('musicIconMuted');
    const tooltip = document.getElementById('musicTooltip');

    if (!player || !audio || !toggleBtn || !iconPlaying || !iconMuted || !tooltip) return;

    // Set lower initial volume for pleasant background ambiance (20% volume)
    audio.volume = 0.20;

    let isMusicEnabled = localStorage.getItem('musicEnabled') === 'true';

    function playMusic() {
        audio.play().then(() => {
            player.classList.add('playing');
            iconPlaying.classList.remove('hidden');
            iconMuted.classList.add('hidden');
            toggleBtn.setAttribute('title', 'Mute Music');
            localStorage.setItem('musicEnabled', 'true');
        }).catch(err => {
            console.log('Autoplay blocked by browser. Awaiting user interaction.');
            // Autoplay blocked: set button state to not playing, but keep preference enabled
            pauseMusic();
            localStorage.setItem('musicEnabled', 'true'); // Keep preference true for next click
        });
    }

    function pauseMusic() {
        audio.pause();
        player.classList.remove('playing');
        iconPlaying.classList.add('hidden');
        iconMuted.classList.remove('hidden');
        toggleBtn.setAttribute('title', 'Play Music');
        localStorage.setItem('musicEnabled', 'false');
    }

    // Toggle click handler
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Remove introduction animations
        toggleBtn.classList.remove('pulse');
        tooltip.classList.remove('visible');

        if (audio.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    // Pulse prompt helper for first-time visitors
    if (localStorage.getItem('musicEnabled') === null) {
        toggleBtn.classList.add('pulse');
        tooltip.classList.add('visible');

        // Automatically hide tooltip prompt after 8 seconds
        setTimeout(() => {
            tooltip.classList.remove('visible');
        }, 8000);
    }

    // Set initial UI state
    if (isMusicEnabled) {
        playMusic();

        // Fallback for strict browser autoplay policies: trigger play on first user interaction
        const triggerAutoplay = () => {
            if (localStorage.getItem('musicEnabled') === 'true' && audio.paused) {
                playMusic();
            }
            document.removeEventListener('click', triggerAutoplay);
        };
        document.addEventListener('click', triggerAutoplay);
    } else {
        pauseMusic();
    }
}

// ===== Gallery Modal Lightbox =====
function initGalleryModal() {
    const modal = document.getElementById('galleryModal');
    const overlay = document.getElementById('galleryModalOverlay');
    const closeBtn = document.getElementById('galleryModalClose');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDesc = document.getElementById('galleryModalDesc');
    const gridContainer = document.getElementById('galleryModalGrid');
    const cards = document.querySelectorAll('.gallery-card');

    // Lightbox viewer elements
    const lightbox = document.getElementById('lightboxViewer');
    const lightboxOverlay = document.getElementById('lightboxViewerOverlay');
    const lightboxClose = document.getElementById('lightboxViewerClose');
    const lightboxPrev = document.getElementById('lightboxViewerPrev');
    const lightboxNext = document.getElementById('lightboxViewerNext');
    const lightboxImg = document.getElementById('lightboxViewerImage');
    const lightboxCounter = document.getElementById('lightboxViewerCounter');

    if (!modal || !closeBtn || !modalTitle || !modalDesc || !gridContainer || !cards ||
        !lightbox || !lightboxClose || !lightboxImg || !lightboxCounter) return;

    const galleryData = {
        'dot': {
            titleEn: 'Business Analyst Internship',
            titleId: 'Magang Business Analyst',
            images: [
                'assets/gallery/BUSINESS ANALYST DOT/Business Analyst Intern DOT.jpg'
            ],
            descEn: 'Interning as a Business Analyst at DOT Indonesia, analyzing requirements and designing digital solutions.',
            descId: 'Magang sebagai Business Analyst di DOT Indonesia, menganalisis kebutuhan dan merancang solusi digital.'
        },
        'bem-its': {
            titleEn: 'BEM ITS (Student Presidency)',
            titleId: 'BEM ITS (Badan Eksekutif Mahasiswa)',
            images: [
                'assets/gallery/BEM ITS/IMG_0945.JPG',
                'assets/gallery/BEM ITS/IMG_0969.JPG',
                'assets/gallery/BEM ITS/IMG_0973.JPG',
                'assets/gallery/BEM ITS/MMJ06585.JPG',
                'assets/gallery/BEM ITS/MMJ06730 (2).JPG',
                'assets/gallery/BEM ITS/MMJ06734 (1)(1).jpg'
            ],
            descEn: 'Active involvement and leadership in BEM ITS student organization projects and campus-wide events.',
            descId: 'Keterlibatan aktif dan kepemimpinan dalam berbagai proyek organisasi mahasiswa BEM ITS.'
        },
        'hmtc': {
            titleEn: 'HMTC Informatics Association',
            titleId: 'Himpunan Mahasiswa HMTC',
            images: [
                'assets/gallery/HMTC/IMG_4915.JPG',
                'assets/gallery/HMTC/L1007672.JPG',
                'assets/gallery/HMTC/L1007678.JPG',
                'assets/gallery/HMTC/L1007679.JPG',
                'assets/gallery/HMTC/L1007760.JPG',
                'assets/gallery/HMTC/Salinan IMG_4758.JPG',
                'assets/gallery/HMTC/Salinan IMG_4791.JPG',
                'assets/gallery/HMTC/Salinan IMG_4871.JPG',
                'assets/gallery/HMTC/Salinan IMG_4873.JPG',
                'assets/gallery/HMTC/Salinan IMG_4914.JPG'
            ],
            descEn: 'Organizing student activities, academic workshops, and student development programs at ITS.',
            descId: 'Mengorganisir kegiatan mahasiswa, lokakarya akademis, dan program pengembangan di ITS.'
        },
        'hmtc-berbakti': {
            titleEn: 'HMTC Berbakti',
            titleId: 'HMTC Berbakti',
            images: [
                'assets/gallery/HMTC Berbakti/DSCF3128.jpg',
                'assets/gallery/HMTC Berbakti/DSCF3131.jpg',
                'assets/gallery/HMTC Berbakti/DSCF9264.JPG'
            ],
            descEn: "Engaging in community outreach and development initiatives under HMTC's social responsibility programs.",
            descId: "Terlibat dalam pengabdian masyarakat dan program tanggung jawab sosial dari HMTC."
        },
        'its-mengajar': {
            titleEn: 'ITS Mengajar Volunteer',
            titleId: 'Relawan ITS Mengajar',
            images: [
                'assets/gallery/ITS MENGAJAR/day 14 kamera devina (588).JPG',
                'assets/gallery/ITS MENGAJAR/day 14 kamera devina (628).JPG',
                'assets/gallery/ITS MENGAJAR/DSC00215.JPG',
                'assets/gallery/ITS MENGAJAR/DSC00541.JPG',
                'assets/gallery/ITS MENGAJAR/DSC00544.JPG',
                'assets/gallery/ITS MENGAJAR/DSC00940.JPG',
                'assets/gallery/ITS MENGAJAR/DSC01182.JPG',
                'assets/gallery/ITS MENGAJAR/DSC01641.JPG',
                'assets/gallery/ITS MENGAJAR/DSC04942.JPG',
                'assets/gallery/ITS MENGAJAR/DSC08225.JPG',
                'assets/gallery/ITS MENGAJAR/DSC08227.JPG',
                'assets/gallery/ITS MENGAJAR/DSC08249.JPG',
                'assets/gallery/ITS MENGAJAR/DSC08790.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09290.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09462.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09487(1).jpg',
                'assets/gallery/ITS MENGAJAR/DSC09519.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09638.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09642.JPG',
                'assets/gallery/ITS MENGAJAR/DSC09679 (1).JPG'
            ],
            descEn: 'Volunteering to teach and mentor students in local communities to support education.',
            descId: 'Menjadi relawan untuk mengajar dan membimbing siswa di komunitas lokal guna mendukung pendidikan.'
        },
        'mahasiswa-berdampak': {
            titleEn: 'Mahasiswa Berdampak',
            titleId: 'Mahasiswa Berdampak',
            images: [
                'assets/gallery/Mahasiswa Berdampak/IMG_9730.JPG',
                'assets/gallery/Mahasiswa Berdampak/IMG_9810.JPG',
                'assets/gallery/Mahasiswa Berdampak/IMG_9858.JPG',
                'assets/gallery/Mahasiswa Berdampak/IMG_9907.JPG',
                'assets/gallery/Mahasiswa Berdampak/IMG_9912.JPG'
            ],
            descEn: 'Participating in youth impact campaigns, social movements, and positive student initiatives.',
            descId: 'Berpartisipasi dalam kampanye dampak kepemudaan, gerakan sosial, dan inisiatif mahasiswa positif.'
        },
        'rumah-pengabdian': {
            titleEn: 'Rumah Pengabdian 2 (FTEIC x HMTC)',
            titleId: 'Rumah Pengabdian 2 (FTEIC x HMTC)',
            images: [
                'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC/IMG_3062.JPG',
                'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC/IMG_3063.JPG'
            ],
            descEn: 'Community service collaboration between BEM FTEIC and HMTC, developing local village facilities.',
            descId: 'Kolaborasi pengabdian masyarakat antara BEM FTEIC dan HMTC, membangun fasilitas desa setempat.'
        },
        'socare': {
            titleEn: 'SoCare Community Service',
            titleId: 'Bakti Sosial SoCare',
            images: [
                'assets/gallery/SOCARE/20250627_153141.jpg',
                'assets/gallery/SOCARE/DSC00020.JPG',
                'assets/gallery/SOCARE/DSC09439.JPG',
                'assets/gallery/SOCARE/DSCF5035.JPG',
                'assets/gallery/SOCARE/DSCF5074.JPG',
                'assets/gallery/SOCARE/DSCF5078.JPG',
                'assets/gallery/SOCARE/DSCF5086.JPG',
                'assets/gallery/SOCARE/DSCF8139.JPG',
                'assets/gallery/SOCARE/DSCF8175.JPG',
                'assets/gallery/SOCARE/DSCF8176.JPG',
                'assets/gallery/SOCARE/DSCF8406.JPG',
                'assets/gallery/SOCARE/DSCF8523.JPG',
                'assets/gallery/SOCARE/DSCF8536.JPG',
                'assets/gallery/SOCARE/DSCF8640.JPG',
                'assets/gallery/SOCARE/DSCF8746.JPG',
                'assets/gallery/SOCARE/DSCF8895.JPG',
                'assets/gallery/SOCARE/DSCF8970.JPG',
                'assets/gallery/SOCARE/DSCF9121.JPG',
                'assets/gallery/SOCARE/DSCF9138.JPG',
                'assets/gallery/SOCARE/DSCF9163.JPG',
                'assets/gallery/SOCARE/DSCF9214.JPG',
                'assets/gallery/SOCARE/DSCF9328.JPG',
                'assets/gallery/SOCARE/DSCF9359.JPG',
                'assets/gallery/SOCARE/DSCF9361.JPG',
                'assets/gallery/SOCARE/DSCF9640.JPG',
                'assets/gallery/SOCARE/SOCARE 1.jpg',
                'assets/gallery/SOCARE/SOCARE 2.jpg',
                'assets/gallery/SOCARE/SOCARE 4.jpg',
                'assets/gallery/SOCARE/SOCARE 53.jpg'
            ],
            descEn: 'Participating in community service programs to foster social awareness and support.',
            descId: 'Berpartisipasi dalam program bakti sosial untuk menumbuhkan kepedulian sosial dan memberikan bantuan.'
        }
    };

    let currentCategory = '';
    let currentImageIndex = 0;

    function openModal(category) {
        if (!galleryData[category]) return;
        currentCategory = category;
        
        const categoryData = galleryData[currentCategory];
        const currentLang = localStorage.getItem('lang') || 'en';

        // Set text content
        modalTitle.textContent = currentLang === 'en' ? categoryData.titleEn : categoryData.titleId;
        modalDesc.textContent = currentLang === 'en' ? categoryData.descEn : categoryData.descId;

        // Build thumbnail grid
        gridContainer.innerHTML = '';
        const images = categoryData.images;
        images.forEach((imgUrl, idx) => {
            const thumb = document.createElement('div');
            thumb.className = 'gallery-modal__thumbnail';
            thumb.innerHTML = `<img src="${imgUrl}" alt="Thumbnail ${idx + 1}" class="gallery-modal__thumbnail-img" loading="lazy">`;
            
            thumb.addEventListener('click', () => {
                openLightbox(idx);
            });
            gridContainer.appendChild(thumb);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        if (!lightbox.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }

    function openLightbox(index) {
        const categoryData = galleryData[currentCategory];
        if (!categoryData) return;
        
        currentImageIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function updateLightboxContent() {
        const categoryData = galleryData[currentCategory];
        if (!categoryData) return;
        const images = categoryData.images;

        // Set image source with transition
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = images[currentImageIndex];
            lightboxImg.alt = `Image ${currentImageIndex + 1}`;
            lightboxImg.style.opacity = '1';
        }, 120);

        // Update counter
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;

        // Show/hide navigation arrows based on count
        if (images.length <= 1) {
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        } else {
            lightboxPrev.style.display = 'flex';
            lightboxNext.style.display = 'flex';
        }
    }

    function navigateLightbox(direction) {
        const categoryData = galleryData[currentCategory];
        if (!categoryData) return;
        const images = categoryData.images;

        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        updateLightboxContent();
    }

    // Attach click listeners to cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-gallery-category');
            if (category) openModal(category);
        });
    });

    // Close listeners
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    // Prev/Next buttons for lightbox
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox('prev');
        });
    }
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox('next');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            }
        } else if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Recheck language dynamically
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (modal.classList.contains('active')) {
                const categoryData = galleryData[currentCategory];
                if (categoryData) {
                    const currentLang = localStorage.getItem('lang') || 'en';
                    modalTitle.textContent = currentLang === 'en' ? categoryData.titleEn : categoryData.titleId;
                    modalDesc.textContent = currentLang === 'en' ? categoryData.descEn : categoryData.descId;
                }
            }
        });
    }
}

// ===== CV / Resume Dropdowns Handler =====
function initResumeDropdowns() {
    const heroBtn = document.getElementById('heroResumeBtnToggle');
    const heroMenu = document.getElementById('heroResumeMenu');
    const linktreeBtn = document.getElementById('linktreeResumeBtnToggle');
    const linktreeMenu = document.getElementById('linktreeResumeMenu');

    const heroWrapper = document.getElementById('heroResumeDropdown');
    const linktreeWrapper = document.getElementById('linktreeResumeDropdown');

    // Update "View Resume" links on mobile to use Google Docs Viewer to avoid download prompts
    const viewLinks = document.querySelectorAll('.resume-dropdown-item:not([download])');
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isLocalhost && isMobile) {
        const livePdfUrl = 'https://adityahandrian.github.io/assets/resume.pdf';
        const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(livePdfUrl)}&embedded=true`;
        
        viewLinks.forEach(link => {
            if (link.getAttribute('href') === 'assets/resume.pdf') {
                link.href = googleDocsViewerUrl;
            }
        });
    }

    function toggleMenu(btn, menu, wrapper) {
        if (!btn || !menu) return;
        const isActive = menu.classList.contains('active');
        
        // Close other dropdowns first
        closeAll();

        if (!isActive) {
            btn.classList.add('active');
            menu.classList.add('active');
            if (wrapper) wrapper.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
        }
    }

    function closeAll() {
        if (heroBtn) {
            heroBtn.classList.remove('active');
            heroBtn.setAttribute('aria-expanded', 'false');
        }
        if (heroMenu) heroMenu.classList.remove('active');
        if (heroWrapper) heroWrapper.classList.remove('active');
        
        if (linktreeBtn) {
            linktreeBtn.classList.remove('active');
            linktreeBtn.setAttribute('aria-expanded', 'false');
        }
        if (linktreeMenu) linktreeMenu.classList.remove('active');
        if (linktreeWrapper) linktreeWrapper.classList.remove('active');
    }

    if (heroBtn && heroMenu) {
        heroBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(heroBtn, heroMenu, heroWrapper);
        });
    }

    if (linktreeBtn && linktreeMenu) {
        linktreeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(linktreeBtn, linktreeMenu, linktreeWrapper);
        });
    }

    // Close on click outside
    document.addEventListener('click', () => {
        closeAll();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });
}

// ===== Custom Cursor with Hover Blend =====
function initCustomCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');
    
    if (!dot || !outline) return;

    // Check if device supports hover (desktop with mouse)
    const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isHoverSupported) {
        dot.style.display = 'none';
        outline.style.display = 'none';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Mouse movement
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    // Animate outer circle trailing behind
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    requestAnimationFrame(animateOutline);

    // Hover effect on interactive elements
    const interactiveSelectors = 'a, button, select, input, textarea, [role="button"], .resume-dropdown-item, .linktree-btn, .tab-btn, .gallery-card, .gallery-modal__thumbnail, .lightbox-viewer__btn';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add('cursor-hovered');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest(interactiveSelectors)) {
            document.body.classList.remove('cursor-hovered');
        }
    });

    // Click effect
    window.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-clicked');
    });

    window.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-clicked');
    });
}

// ===== Share Profile Modal & QR Code =====
function initShareModal() {
    const modal = document.getElementById('shareModal');
    const overlay = document.getElementById('shareModalOverlay');
    const closeBtn = document.getElementById('shareModalClose');
    const shareBtnNav = document.getElementById('shareBtnNav');
    const linktreeShareBtn = document.getElementById('linktreeShareBtn');
    
    const qrImage = document.getElementById('shareModalQrCode');
    const linkInput = document.getElementById('shareLinkInput');
    const copyBtn = document.getElementById('shareCopyBtn');
    const copyIcon = document.getElementById('shareCopyIcon');
    const copyText = document.getElementById('shareCopyText');
    
    const waBtn = document.getElementById('shareWaBtn');
    const linkedinBtn = document.getElementById('shareLinkedinBtn');

    if (!modal) return;

    // Get live site URL: use current host or fall back to github.io URL
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const currentUrl = isLocalhost ? 'https://adityahandrian.github.io/' : window.location.href.split('#')[0];
    
    // Set copy input value
    if (linkInput) {
        linkInput.value = currentUrl;
    }

    // Generate QR Code URL using free & secure qrserver API
    if (qrImage) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
    }

    // Configure social sharing links
    if (waBtn) {
        waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out ' + document.title + ' portfolio: ' + currentUrl)}`;
    }
    if (linkedinBtn) {
        linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    }

    function openShare() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeShare() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset copy button
        if (copyBtn) {
            copyBtn.classList.remove('copied');
            copyBtn.style.backgroundColor = '';
            if (copyIcon) {
                copyIcon.setAttribute('data-lucide', 'copy');
                lucide.createIcons();
            }
            if (copyText) {
                copyText.textContent = currentLang === 'en' ? 'Copy' : 'Salin';
            }
        }
    }

    // Event listeners
    if (shareBtnNav) shareBtnNav.addEventListener('click', openShare);
    if (linktreeShareBtn) linktreeShareBtn.addEventListener('click', openShare);
    if (closeBtn) closeBtn.addEventListener('click', closeShare);
    if (overlay) overlay.addEventListener('click', closeShare);

    // Copy to clipboard
    if (copyBtn && linkInput) {
        copyBtn.addEventListener('click', () => {
            linkInput.select();
            linkInput.setSelectionRange(0, 99999); // For mobile devices
            
            navigator.clipboard.writeText(linkInput.value).then(() => {
                copyBtn.classList.add('copied');
                copyBtn.style.backgroundColor = '#10b981'; // Green color on success
                if (copyIcon) {
                    copyIcon.setAttribute('data-lucide', 'check');
                    lucide.createIcons();
                }
                if (copyText) {
                    copyText.textContent = currentLang === 'en' ? 'Copied!' : 'Disalin!';
                }
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.style.backgroundColor = '';
                    if (copyIcon) {
                        copyIcon.setAttribute('data-lucide', 'copy');
                        lucide.createIcons();
                    }
                    if (copyText) {
                        copyText.textContent = currentLang === 'en' ? 'Copy' : 'Salin';
                    }
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
}
