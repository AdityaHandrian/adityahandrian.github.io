/* ==========================================================================
   Portfolio – script.js  (production build)
   All features: icons, theme, language, navbar, tabs, sliders, gallery,
   lightbox, resume dropdowns, share modal, music player, scroll animations,
   smooth scroll, interactive glow.
   ========================================================================== */

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
    initShareModal();
    initProjectSliders();
    initSmoothScroll();
});

/* -----------------------------------------------------------------------
   1. THEME TOGGLE
   ----------------------------------------------------------------------- */
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const iconMoon = document.querySelector('.icon-moon');
    const iconSun = document.querySelector('.icon-sun');

    if (!themeToggle || !iconMoon || !iconSun) return;

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            iconMoon.style.display = 'block';
            iconSun.style.display = 'none';
        }
        localStorage.setItem('theme', theme);
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}

/* -----------------------------------------------------------------------
   2. LANGUAGE TOGGLE
   ----------------------------------------------------------------------- */
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        langToggle.textContent = lang.toUpperCase();

        document.querySelectorAll('[data-lang-en]').forEach(el => {
            const text = lang === 'en'
                ? el.getAttribute('data-lang-en')
                : el.getAttribute('data-lang-id');
            if (text !== null) el.innerHTML = text;
        });
    }

    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        updateLanguage(currentLang === 'en' ? 'id' : 'en');
    });
}

/* -----------------------------------------------------------------------
   3. NAVBAR – scroll class + active section highlighting
   ----------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                highlightActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.getElementById('navbar')
        ? document.getElementById('navbar').offsetHeight
        : 70;

    let currentId = '';
    sections.forEach(section => {
        const top = section.offsetTop - navbarHeight - 60;
        if (window.scrollY >= top) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
}

/* -----------------------------------------------------------------------
   4. MOBILE MENU
   ----------------------------------------------------------------------- */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });
}

/* -----------------------------------------------------------------------
   5. EXPERIENCE TABS
   ----------------------------------------------------------------------- */
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

/* -----------------------------------------------------------------------
   6. PROJECT SLIDERS
   ----------------------------------------------------------------------- */
function initProjectSliders() {
    document.querySelectorAll('.project-card__slider').forEach(slider => {
        const slidesContainer = slider.querySelector('.project-card__slides');
        const slides = slider.querySelectorAll('.project-card__slide');
        const prevBtn = slider.querySelector('.project-slider-btn--prev');
        const nextBtn = slider.querySelector('.project-slider-btn--next');
        const dots = slider.querySelectorAll('.project-slider-dot');

        if (!slidesContainer || slides.length <= 1) return;

        let currentIndex = 0;

        function goToSlide(index) {
            currentIndex = ((index % slides.length) + slides.length) % slides.length;
            slidesContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', e => {
                e.stopPropagation();
                goToSlide(currentIndex - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', e => {
                e.stopPropagation();
                goToSlide(currentIndex + 1);
            });
        }
        dots.forEach((dot, i) => {
            dot.addEventListener('click', e => {
                e.stopPropagation();
                goToSlide(i);
            });
        });
    });
}

/* -----------------------------------------------------------------------
   7. GALLERY + 8. LIGHTBOX
   ----------------------------------------------------------------------- */
function initGalleryModal() {
    const modal       = document.getElementById('galleryModal');
    const overlay     = document.getElementById('galleryModalOverlay');
    const closeBtn    = document.getElementById('galleryModalClose');
    const modalTitle  = document.getElementById('galleryModalTitle');
    const modalDesc   = document.getElementById('galleryModalDesc');
    const grid        = document.getElementById('galleryModalGrid');
    const cards       = document.querySelectorAll('.gallery-card');

    const lightbox        = document.getElementById('lightboxViewer');
    const lightboxOverlay = document.getElementById('lightboxViewerOverlay');
    const lightboxClose   = document.getElementById('lightboxViewerClose');
    const lightboxPrev    = document.getElementById('lightboxViewerPrev');
    const lightboxNext    = document.getElementById('lightboxViewerNext');
    const lightboxImg     = document.getElementById('lightboxViewerImage');
    const lightboxCounter = document.getElementById('lightboxViewerCounter');

    if (!modal || !lightbox || !lightboxImg) return;

    /* ---- Album data ---- */
    const galleryData = {
        'dot': {
            title: 'Business Analyst Internship',
            titleId: 'Magang Business Analyst',
            desc: 'Working as a Business Analyst Intern at DOT Indonesia.',
            descId: 'Bekerja sebagai Magang Business Analyst di DOT Indonesia.',
            folder: 'assets/gallery/BUSINESS ANALYST DOT',
            images: ['Business Analyst Intern DOT.jpg']
        },
        'bem-its': {
            title: 'BEM ITS',
            titleId: 'BEM ITS',
            desc: 'Student Executive Board activities.',
            descId: 'Kegiatan Badan Eksekutif Mahasiswa.',
            folder: 'assets/gallery/BEM ITS',
            images: [
                'IMG_0945.JPG', 'IMG_0969.JPG', 'IMG_0973.JPG',
                'MMJ06585.JPG', 'MMJ06730 (2).JPG', 'MMJ06734 (1)(1).jpg'
            ]
        },
        'hmtc': {
            title: 'HMTC Informatics',
            titleId: 'Himpunan HMTC',
            desc: 'Informatics student association.',
            descId: 'Himpunan mahasiswa informatika.',
            folder: 'assets/gallery/HMTC',
            images: [
                'IMG_4915.JPG', 'L1007672.JPG', 'L1007678.JPG', 'L1007679.JPG',
                'L1007760.JPG', 'Salinan IMG_4758.JPG', 'Salinan IMG_4791.JPG',
                'Salinan IMG_4871.JPG', 'Salinan IMG_4873.JPG', 'Salinan IMG_4914.JPG'
            ]
        },
        'hmtc-berbakti': {
            title: 'HMTC Berbakti',
            titleId: 'HMTC Berbakti',
            desc: 'Community outreach programs.',
            descId: 'Program pengabdian masyarakat.',
            folder: 'assets/gallery/HMTC Berbakti',
            images: ['DSCF3128.jpg', 'DSCF3131.jpg', 'DSCF9264.JPG']
        },
        'its-mengajar': {
            title: 'ITS Mengajar',
            titleId: 'ITS Mengajar',
            desc: 'Education volunteer program.',
            descId: 'Program relawan pendidikan.',
            folder: 'assets/gallery/ITS MENGAJAR',
            images: [
                'day 14 kamera devina (588).JPG', 'day 14 kamera devina (628).JPG',
                'DSC00215.JPG', 'DSC00541.JPG', 'DSC00544.JPG', 'DSC00940.JPG',
                'DSC01182.JPG', 'DSC01641.JPG', 'DSC04942.JPG', 'DSC08225.JPG',
                'DSC08227.JPG', 'DSC08249.JPG', 'DSC08790.JPG', 'DSC09290.JPG',
                'DSC09462.JPG', 'DSC09487(1).jpg', 'DSC09519.JPG', 'DSC09638.JPG',
                'DSC09642.JPG', 'DSC09679 (1).JPG'
            ]
        },
        'mahasiswa-berdampak': {
            title: 'Mahasiswa Berdampak',
            titleId: 'Mahasiswa Berdampak',
            desc: 'Youth impact initiatives.',
            descId: 'Inisiatif dampak kepemudaan.',
            folder: 'assets/gallery/Mahasiswa Berdampak',
            images: [
                'IMG_9730.JPG', 'IMG_9810.JPG', 'IMG_9858.JPG',
                'IMG_9907.JPG', 'IMG_9912.JPG'
            ]
        },
        'rumah-pengabdian': {
            title: 'Rumah Pengabdian',
            titleId: 'Rumah Pengabdian',
            desc: 'Community service.',
            descId: 'Pengabdian masyarakat.',
            folder: 'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC',
            images: ['IMG_3062.JPG', 'IMG_3063.JPG']
        },
        'socare': {
            title: 'SoCare',
            titleId: 'SoCare',
            desc: 'Social care programs.',
            descId: 'Program kepedulian sosial.',
            folder: 'assets/gallery/SOCARE',
            images: [
                '20250627_153141.jpg', 'DSC00020.JPG', 'DSC09439.JPG',
                'DSCF5035.JPG', 'DSCF5074.JPG', 'DSCF5078.JPG', 'DSCF5086.JPG',
                'DSCF8139.JPG', 'DSCF8175.JPG', 'DSCF8176.JPG', 'DSCF8406.JPG',
                'DSCF8523.JPG', 'DSCF8536.JPG', 'DSCF8640.JPG', 'DSCF8746.JPG',
                'DSCF8895.JPG', 'DSCF8970.JPG', 'DSCF9121.JPG', 'DSCF9138.JPG',
                'DSCF9163.JPG', 'DSCF9214.JPG', 'DSCF9328.JPG', 'DSCF9359.JPG',
                'DSCF9361.JPG', 'DSCF9640.JPG', 'SOCARE 1.jpg', 'SOCARE 2.jpg',
                'SOCARE 4.jpg', 'SOCARE 53.jpg'
            ]
        },
        'project-mona': {
            title: 'MONA (Money Assistant)',
            titleId: 'MONA (Money Assistant)',
            desc: 'MONA is an intelligent personal finance companion designed to help users take complete control of their financial future.',
            descId: 'MONA adalah asisten keuangan pribadi cerdas yang dirancang untuk membantu pengguna mengendalikan masa depan finansial mereka.',
            folder: 'assets/Project/Mona',
            images: ['image.png', 'image (1).png']
        },
        'project-pelita': {
            title: 'Pelita (Accessibility Superapp)',
            titleId: 'Pelita (Superapp Aksesibilitas)',
            desc: 'An accessibility superapp designed for visually impaired users.',
            descId: 'Superapp aksesibilitas yang dirancang untuk pengguna tunanetra.',
            folder: 'assets/Project/Pelita',
            images: [
                'd7e94b10-2734-49cf-8708-bcc07bcc9039.jpg',
                'b0dc643f-a807-4aff-bc85-608408d337e7.jpg',
                '8415ea43-351f-4734-b07c-0012fa416c3e.jpg'
            ]
        },
        'project-rec': {
            title: 'Product Recommendation System',
            titleId: 'Sistem Rekomendasi Produk',
            desc: 'A comparative web platform benchmarking four recommendation algorithms in real-time.',
            descId: 'Platform web komparatif yang membandingkan empat algoritma rekomendasi secara real-time.',
            folder: 'assets/Project/Product Recommendation System',
            images: ['0.png', '0 (1).png']
        }
    };

    let currentCategory = '';
    let currentImageIndex = 0;

    function resolveImages(data) {
        return data.images.map(img => data.folder + '/' + img);
    }

    function getLang() {
        return localStorage.getItem('lang') || 'en';
    }

    /* -- Gallery modal -- */
    function openModal(category) {
        const data = galleryData[category];
        if (!data) return;
        currentCategory = category;

        const lang = getLang();
        if (modalTitle) modalTitle.textContent = lang === 'en' ? data.title : data.titleId;
        if (modalDesc)  modalDesc.textContent  = lang === 'en' ? data.desc  : data.descId;

        if (grid) {
            grid.innerHTML = '';
            resolveImages(data).forEach((src, idx) => {
                const thumb = document.createElement('div');
                thumb.className = 'gallery-modal__thumbnail';
                thumb.innerHTML = '<img src="' + src + '" alt="Thumbnail ' + (idx + 1) + '" class="gallery-modal__thumbnail-img" loading="lazy">';
                thumb.addEventListener('click', () => openLightbox(idx));
                grid.appendChild(thumb);
            });
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        if (!lightbox.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }

    /* -- Lightbox -- */
    function openLightbox(index) {
        const data = galleryData[currentCategory];
        if (!data) return;
        currentImageIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        if (!modal.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }

    function updateLightboxContent() {
        const data = galleryData[currentCategory];
        if (!data) return;
        const imgs = resolveImages(data);

        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = imgs[currentImageIndex];
            lightboxImg.alt = 'Image ' + (currentImageIndex + 1);
            lightboxImg.style.opacity = '1';
        }, 120);

        if (lightboxCounter) {
            lightboxCounter.textContent = (currentImageIndex + 1) + ' / ' + imgs.length;
        }

        if (lightboxPrev) lightboxPrev.style.display = imgs.length <= 1 ? 'none' : 'flex';
        if (lightboxNext) lightboxNext.style.display = imgs.length <= 1 ? 'none' : 'flex';
    }

    function navigateLightbox(direction) {
        const data = galleryData[currentCategory];
        if (!data) return;
        const len = data.images.length;
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % len;
        } else {
            currentImageIndex = (currentImageIndex - 1 + len) % len;
        }
        updateLightboxContent();
    }

    /* -- Gallery card clicks -- */
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-gallery-category');
            if (cat) openModal(cat);
        });
    });

    /* -- Project slider image clicks → lightbox -- */
    document.addEventListener('click', e => {
        const trigger = e.target.closest('[data-gallery-category]:not(.gallery-card)');
        if (trigger) {
            e.preventDefault();
            e.stopPropagation();
            const cat = trigger.getAttribute('data-gallery-category');
            const idx = parseInt(trigger.getAttribute('data-image-index') || '0', 10);
            currentCategory = cat;
            openLightbox(idx);
        }
    });

    /* -- Close handlers -- */
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay)  overlay.addEventListener('click', closeModal);
    if (lightboxClose)   lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', e => { e.stopPropagation(); navigateLightbox('prev'); });
    }
    if (lightboxNext) {
        lightboxNext.addEventListener('click', e => { e.stopPropagation(); navigateLightbox('next'); });
    }

    /* -- Keyboard -- */
    document.addEventListener('keydown', e => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape')     closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox('next');
            if (e.key === 'ArrowLeft')  navigateLightbox('prev');
        } else if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
        }
    });

    /* -- Update modal text on language switch -- */
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (modal.classList.contains('active') && galleryData[currentCategory]) {
                const data = galleryData[currentCategory];
                const lang = getLang();
                if (modalTitle) modalTitle.textContent = lang === 'en' ? data.title : data.titleId;
                if (modalDesc)  modalDesc.textContent  = lang === 'en' ? data.desc  : data.descId;
            }
        });
    }
}

/* -----------------------------------------------------------------------
   9. RESUME DROPDOWNS
   ----------------------------------------------------------------------- */
function initResumeDropdowns() {
    const heroBtn       = document.getElementById('heroResumeBtnToggle');
    const heroMenu      = document.getElementById('heroResumeMenu');
    const heroWrapper   = document.getElementById('heroResumeDropdown');
    const ltBtn         = document.getElementById('linktreeResumeBtnToggle');
    const ltMenu        = document.getElementById('linktreeResumeMenu');
    const ltWrapper     = document.getElementById('linktreeResumeDropdown');

    function closeAll() {
        [heroBtn, ltBtn].forEach(b => {
            if (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); }
        });
        [heroMenu, ltMenu].forEach(m => { if (m) m.classList.remove('active'); });
        [heroWrapper, ltWrapper].forEach(w => { if (w) w.classList.remove('active'); });
    }

    function toggleMenu(btn, menu, wrapper) {
        if (!btn || !menu) return;
        const wasActive = menu.classList.contains('active');
        closeAll();
        if (!wasActive) {
            btn.classList.add('active');
            menu.classList.add('active');
            if (wrapper) wrapper.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
        }
    }

    if (heroBtn && heroMenu) {
        heroBtn.addEventListener('click', e => { e.stopPropagation(); toggleMenu(heroBtn, heroMenu, heroWrapper); });
    }
    if (ltBtn && ltMenu) {
        ltBtn.addEventListener('click', e => { e.stopPropagation(); toggleMenu(ltBtn, ltMenu, ltWrapper); });
    }

    document.addEventListener('click', closeAll);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
}

/* -----------------------------------------------------------------------
   10. SHARE MODAL
   ----------------------------------------------------------------------- */
function initShareModal() {
    const modal          = document.getElementById('shareModal');
    const overlay        = document.getElementById('shareModalOverlay');
    const closeBtn       = document.getElementById('shareModalClose');
    const shareBtnNav    = document.getElementById('shareBtnNav');
    const ltShareBtn     = document.getElementById('linktreeShareBtn');
    const qrImage        = document.getElementById('shareModalQrCode');
    const linkInput      = document.getElementById('shareLinkInput');
    const copyBtn        = document.getElementById('shareCopyBtn');
    const copyIcon       = document.getElementById('shareCopyIcon');
    const copyText       = document.getElementById('shareCopyText');
    const waBtn          = document.getElementById('shareWaBtn');
    const linkedinBtn    = document.getElementById('shareLinkedinBtn');

    if (!modal) return;

    const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const currentUrl = isLocal ? 'https://adityahandrian.github.io/' : window.location.href.split('#')[0];

    if (linkInput) linkInput.value = currentUrl;
    if (qrImage)   qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(currentUrl);
    if (waBtn)     waBtn.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent('Check out this portfolio: ' + currentUrl);
    if (linkedinBtn) linkedinBtn.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl);

    function openShare() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeShare() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        resetCopyBtn();
    }

    function resetCopyBtn() {
        if (!copyBtn) return;
        copyBtn.classList.remove('copied');
        copyBtn.style.backgroundColor = '';
        if (copyIcon) { copyIcon.setAttribute('data-lucide', 'copy'); lucide.createIcons(); }
        if (copyText) {
            const lang = localStorage.getItem('lang') || 'en';
            copyText.textContent = lang === 'en' ? 'Copy' : 'Salin';
        }
    }

    if (shareBtnNav) shareBtnNav.addEventListener('click', openShare);
    if (ltShareBtn)  ltShareBtn.addEventListener('click', openShare);
    if (closeBtn)    closeBtn.addEventListener('click', closeShare);
    if (overlay)     overlay.addEventListener('click', closeShare);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeShare();
    });

    if (copyBtn && linkInput) {
        copyBtn.addEventListener('click', () => {
            linkInput.select();
            linkInput.setSelectionRange(0, 99999);

            navigator.clipboard.writeText(linkInput.value).then(() => {
                copyBtn.classList.add('copied');
                copyBtn.style.backgroundColor = '#10b981';
                if (copyIcon) { copyIcon.setAttribute('data-lucide', 'check'); lucide.createIcons(); }
                if (copyText) {
                    const lang = localStorage.getItem('lang') || 'en';
                    copyText.textContent = lang === 'en' ? 'Copied!' : 'Disalin!';
                }
                setTimeout(resetCopyBtn, 2000);
            }).catch(err => {
                console.error('Clipboard write failed:', err);
            });
        });
    }
}

/* -----------------------------------------------------------------------
   11. MUSIC PLAYER
   ----------------------------------------------------------------------- */
function initBackgroundMusic() {
    const player    = document.getElementById('musicPlayer');
    const audio     = document.getElementById('bgAudio');
    const toggleBtn = document.getElementById('musicToggleBtn');
    const iconPlay  = document.getElementById('musicIconPlaying');
    const iconMute  = document.getElementById('musicIconMuted');
    const tooltip   = document.getElementById('musicTooltip');
    const waves     = document.getElementById('musicWaves');

    if (!audio || !toggleBtn || !iconPlay || !iconMute) return;

    audio.volume = 0.20;

    function setPlaying() {
        if (player) player.classList.add('playing');
        if (waves)  waves.classList.add('playing');
        iconPlay.classList.remove('hidden');
        iconMute.classList.add('hidden');
        toggleBtn.setAttribute('title', 'Mute Music');
        localStorage.setItem('musicEnabled', 'true');
    }

    function setStopped() {
        if (player) player.classList.remove('playing');
        if (waves)  waves.classList.remove('playing');
        iconPlay.classList.add('hidden');
        iconMute.classList.remove('hidden');
        toggleBtn.setAttribute('title', 'Play Music');
        localStorage.setItem('musicEnabled', 'false');
    }

    function playMusic() {
        audio.play().then(setPlaying).catch(() => {
            setStopped();
            localStorage.setItem('musicEnabled', 'true');
        });
    }

    function pauseMusic() {
        audio.pause();
        setStopped();
    }

    toggleBtn.addEventListener('click', e => {
        e.stopPropagation();
        toggleBtn.classList.remove('pulse');
        if (tooltip) tooltip.classList.remove('visible');
        audio.paused ? playMusic() : pauseMusic();
    });

    if (localStorage.getItem('musicEnabled') === null) {
        toggleBtn.classList.add('pulse');
        if (tooltip) { tooltip.classList.add('visible'); setTimeout(() => tooltip.classList.remove('visible'), 8000); }
    }

    if (localStorage.getItem('musicEnabled') === 'true') {
        playMusic();
        const fallback = () => {
            if (localStorage.getItem('musicEnabled') === 'true' && audio.paused) playMusic();
            document.removeEventListener('click', fallback);
        };
        document.addEventListener('click', fallback);
    } else {
        setStopped();
    }
}

/* -----------------------------------------------------------------------
   12. SCROLL ANIMATIONS  (IntersectionObserver on .page-section)
   ----------------------------------------------------------------------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.page-section, .section-header, .about-text, .about-stats, .stat-card, ' +
        '.timeline-card, .project-card, .skill-category, .cert-card, ' +
        '.contact-card, .certs-section'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

/* -----------------------------------------------------------------------
   13. SMOOTH SCROLL  (all anchor links, accounts for navbar height)
   ----------------------------------------------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const navbar = document.getElementById('navbar');
            const offset = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });

            history.pushState(null, null, href);
        });
    });
}

/* -----------------------------------------------------------------------
   14. INTERACTIVE GLOW  (hidden for minimalist style)
   ----------------------------------------------------------------------- */
function initInteractiveGlow() {
    const glow = document.getElementById('interactiveGlow');
    if (glow) glow.style.display = 'none';
}

/* -----------------------------------------------------------------------
   SPA ROUTER  (hash-based page switching preserved from original)
   ----------------------------------------------------------------------- */
function initSPA() {
    const sections = document.querySelectorAll('section.page-section');
    const allLinks = document.querySelectorAll('.nav-link, .nav-logo, .footer-logo, .btn');

    function showPage(targetHash) {
        let activeId = (targetHash || '').replace('#', '') || 'about';
        const targetSection = document.getElementById(activeId);
        if (!targetSection || !targetSection.classList.contains('page-section')) {
            activeId = 'about';
        }

        sections.forEach(s => s.classList.remove('active-page'));
        document.getElementById(activeId).classList.add('active-page');
        document.body.setAttribute('data-active-page', activeId);

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
        });

        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                history.pushState(null, null, href);
                showPage(href);
            });
        }
    });

    window.addEventListener('popstate', () => showPage(window.location.hash));
    showPage(window.location.hash);
}
