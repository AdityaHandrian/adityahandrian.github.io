// ===== Albums & project screenshots =====
// Order matters: the first two albums are shown large.
const ALBUMS = {
    'socare': {
        titleEn: 'SoCare Community Service',
        titleId: 'Bakti Sosial SoCare',
        descEn: 'Participating in community service programs to foster social awareness and support.',
        descId: 'Berpartisipasi dalam program bakti sosial untuk menumbuhkan kepedulian sosial dan memberikan bantuan.',
        cover: 'assets/gallery/SOCARE/SOCARE 1.jpg',
        images: [
            'assets/gallery/SOCARE/SOCARE 1.jpg',
            'assets/gallery/SOCARE/SOCARE 2.jpg',
            'assets/gallery/SOCARE/SOCARE 4.jpg',
            'assets/gallery/SOCARE/SOCARE 53.jpg',
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
            'assets/gallery/SOCARE/DSCF9640.JPG'
        ]
    },
    'its-mengajar': {
        titleEn: 'ITS Mengajar Volunteer',
        titleId: 'Relawan ITS Mengajar',
        descEn: 'Volunteering to teach and mentor students in local communities to support education.',
        descId: 'Menjadi relawan untuk mengajar dan membimbing siswa di komunitas lokal guna mendukung pendidikan.',
        cover: 'assets/gallery/ITS MENGAJAR/DSC00940.JPG',
        images: [
            'assets/gallery/ITS MENGAJAR/DSC00940.JPG',
            'assets/gallery/ITS MENGAJAR/day 14 kamera devina (588).JPG',
            'assets/gallery/ITS MENGAJAR/day 14 kamera devina (628).JPG',
            'assets/gallery/ITS MENGAJAR/DSC00215.JPG',
            'assets/gallery/ITS MENGAJAR/DSC00541.JPG',
            'assets/gallery/ITS MENGAJAR/DSC00544.JPG',
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
        ]
    },
    'hmtc': {
        titleEn: 'HMTC Informatics Association',
        titleId: 'Himpunan Mahasiswa HMTC',
        descEn: 'Organizing student activities, academic workshops, and student development programs at ITS.',
        descId: 'Mengorganisir kegiatan mahasiswa, lokakarya akademis, dan program pengembangan di ITS.',
        cover: 'assets/gallery/HMTC/IMG_4915.JPG',
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
        ]
    },
    'bem-its': {
        titleEn: 'BEM ITS',
        titleId: 'BEM ITS',
        descEn: 'Active involvement in BEM ITS student organization projects and campus-wide events.',
        descId: 'Keterlibatan aktif dalam berbagai proyek organisasi mahasiswa BEM ITS dan acara tingkat kampus.',
        cover: 'assets/gallery/BEM ITS/IMG_0945.JPG',
        images: [
            'assets/gallery/BEM ITS/IMG_0945.JPG',
            'assets/gallery/BEM ITS/IMG_0969.JPG',
            'assets/gallery/BEM ITS/IMG_0973.JPG',
            'assets/gallery/BEM ITS/MMJ06585.JPG',
            'assets/gallery/BEM ITS/MMJ06730 (2).JPG',
            'assets/gallery/BEM ITS/MMJ06734 (1)(1).jpg'
        ]
    },
    'mahasiswa-berdampak': {
        titleEn: 'Mahasiswa Berdampak',
        titleId: 'Mahasiswa Berdampak',
        descEn: 'Participating in youth impact campaigns, social movements, and positive student initiatives.',
        descId: 'Berpartisipasi dalam kampanye dampak kepemudaan, gerakan sosial, dan inisiatif mahasiswa positif.',
        cover: 'assets/gallery/Mahasiswa Berdampak/IMG_9810.JPG',
        images: [
            'assets/gallery/Mahasiswa Berdampak/IMG_9810.JPG',
            'assets/gallery/Mahasiswa Berdampak/IMG_9730.JPG',
            'assets/gallery/Mahasiswa Berdampak/IMG_9858.JPG',
            'assets/gallery/Mahasiswa Berdampak/IMG_9907.JPG',
            'assets/gallery/Mahasiswa Berdampak/IMG_9912.JPG'
        ]
    },
    'hmtc-berbakti': {
        titleEn: 'HMTC Berbakti',
        titleId: 'HMTC Berbakti',
        descEn: "Engaging in community outreach and development initiatives under HMTC's social responsibility programs.",
        descId: 'Terlibat dalam pengabdian masyarakat dan program tanggung jawab sosial dari HMTC.',
        cover: 'assets/gallery/HMTC Berbakti/DSCF9264.JPG',
        images: [
            'assets/gallery/HMTC Berbakti/DSCF9264.JPG',
            'assets/gallery/HMTC Berbakti/DSCF3128.jpg',
            'assets/gallery/HMTC Berbakti/DSCF3131.jpg'
        ]
    },
    'rumah-pengabdian': {
        titleEn: 'Rumah Pengabdian 2 (FTEIC × HMTC)',
        titleId: 'Rumah Pengabdian 2 (FTEIC × HMTC)',
        descEn: 'Community service collaboration between BEM FTEIC and HMTC, developing local village facilities.',
        descId: 'Kolaborasi pengabdian masyarakat antara BEM FTEIC dan HMTC, membangun fasilitas desa setempat.',
        cover: 'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC/IMG_3062.JPG',
        images: [
            'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC/IMG_3062.JPG',
            'assets/gallery/Rumah Pengabdian 2 BEM FTEIC X HMTC/IMG_3063.JPG'
        ]
    },
    'dot': {
        titleEn: 'Business Analyst Internship, DOT',
        titleId: 'Magang Business Analyst, DOT',
        descEn: 'Interning as a Business Analyst at DOT Indonesia, analyzing requirements and designing digital solutions.',
        descId: 'Magang sebagai Business Analyst di DOT Indonesia, menganalisis kebutuhan dan merancang solusi digital.',
        cover: 'assets/gallery/BUSINESS ANALYST DOT/Business Analyst Intern DOT.jpg',
        images: [
            'assets/gallery/BUSINESS ANALYST DOT/Business Analyst Intern DOT.jpg'
        ]
    }
};

// Screenshot sets open in the same lightbox but aren't listed as albums.
const SCREENSHOTS = {
    'project-mona': {
        titleEn: 'MONA, Money Assistant',
        titleId: 'MONA, Money Assistant',
        descEn: '', descId: '',
        images: ['assets/Project/Mona/image.png', 'assets/Project/Mona/image (1).png']
    },
    'project-pelita': {
        titleEn: 'Pelita, Accessibility superapp',
        titleId: 'Pelita, Superapp aksesibilitas',
        descEn: '', descId: '',
        images: [
            'assets/Project/Pelita/d7e94b10-2734-49cf-8708-bcc07bcc9039.jpg',
            'assets/Project/Pelita/b0dc643f-a807-4aff-bc85-608408d337e7.jpg',
            'assets/Project/Pelita/8415ea43-351f-4734-b07c-0012fa416c3e.jpg'
        ]
    },
    'research': {
        titleEn: 'Thesis, preliminary results',
        titleId: 'Tugas Akhir, hasil awal',
        descEn: 'Figures from the thesis proposal (Oct 2026). Labels are in Indonesian.',
        descId: 'Gambar dari proposal Tugas Akhir (Okt 2026).',
        images: [
            'assets/research/style-clusters.jpg',
            'assets/research/cluster-trends.jpg',
            'assets/research/color-palettes.jpg',
            'assets/research/attribute-trends.jpg'
        ]
    },
    'project-rbsm': {
        titleEn: 'Chain Transfer RBSM',
        titleId: 'Chain Transfer RBSM',
        descEn: 'Slides from our Operations Research presentation (in Indonesian).',
        descId: 'Slide dari presentasi Riset Operasi kami.',
        images: [
            'assets/Project/RBSM/slide-20.jpg',
            'assets/Project/RBSM/slide-13.jpg',
            'assets/Project/RBSM/slide-17.jpg',
            'assets/Project/RBSM/slide-18.jpg'
        ]
    },
    'project-rec': {
        titleEn: 'Product Recommendation System',
        titleId: 'Sistem Rekomendasi Produk',
        descEn: '', descId: '',
        images: [
            'assets/Project/Product Recommendation System/0.png',
            'assets/Project/Product Recommendation System/0 (1).png'
        ]
    }
};

function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
}

function currentLang() {
    return document.documentElement.lang === 'id' ? 'id' : 'en';
}

function pick(obj, field) {
    return currentLang() === 'id' ? obj[field + 'Id'] : obj[field + 'En'];
}

document.addEventListener('DOMContentLoaded', () => {
    renderAlbums();
    buildCertSet();
    buildDatasetSet();
    initLanguage();
    initTheme();
    initHeader();
    initSectionSpy();
    initLightbox();
    initCertPeek();
    initShare();
    initCopyEmail();
    initResumeLinks();
    initReveal();

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});

// ===== Reveal on scroll =====
function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js');

    const targets = document.querySelectorAll(
        '.section-head, .about-grid, .group-title, .entry, .thesis, .project, ' +
        '.skill-rows > div, .certs, .album, .posts li, .contact-email, .contact-list'
    );
    targets.forEach(el => el.classList.add('rv'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px' });

    targets.forEach(el => observer.observe(el));
}

// ===== Theme =====
// No saved choice means "follow the system"; the button pins an explicit choice.
function initTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = () => {
        const set = document.documentElement.getAttribute('data-theme');
        return set ? set === 'dark' : media.matches;
    };

    btn.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        storageSet('theme', next);
    });
}

// ===== Language =====
function initLanguage() {
    const buttons = document.querySelectorAll('[data-set-lang]');

    function apply(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-en]').forEach(el => {
            el.innerHTML = el.getAttribute(lang === 'id' ? 'data-lang-id' : 'data-lang-en');
        });
        buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)));
        document.dispatchEvent(new CustomEvent('langchange'));
    }

    apply(storageGet('lang') === 'id' ? 'id' : 'en');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.setLang;
            if (lang === currentLang()) return;
            storageSet('lang', lang);
            document.body.classList.add('is-swapping');
            setTimeout(() => {
                apply(lang);
                document.body.classList.remove('is-swapping');
            }, 150);
        });
    });
}

// ===== Header border once the page moves =====
function initHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

// ===== Highlight the nav link for the section in view =====
function initSectionSpy() {
    const nav = document.querySelector('.site-nav');
    const links = document.querySelectorAll('.site-nav a');
    const byId = {};
    links.forEach(a => { byId[a.getAttribute('href').slice(1)] = a; });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(a => a.classList.remove('is-current'));
            const link = byId[entry.target.id];
            if (!link) return;
            link.classList.add('is-current');

            // On narrow screens the nav is a horizontal strip; keep the current link in view.
            // Only scroll the strip itself — scrollIntoView would also move the page and
            // interrupt the user's own (smooth or momentum) scroll.
            if (nav.scrollWidth > nav.clientWidth) {
                const left = (link.offsetLeft - nav.offsetLeft) - (nav.clientWidth - link.offsetWidth) / 2;
                nav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(byId).forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

// ===== Albums =====
function renderAlbums() {
    const container = document.getElementById('albums');
    if (!container) return;

    Object.entries(ALBUMS).forEach(([key, album]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'album';
        btn.dataset.cursor = 'open';
        btn.dataset.album = key;
        btn.dataset.index = '0';

        const cover = document.createElement('span');
        cover.className = 'album-cover';
        const img = document.createElement('img');
        img.src = album.cover;
        img.alt = '';
        img.loading = 'lazy';
        cover.appendChild(img);

        const caption = document.createElement('span');
        caption.className = 'album-caption';
        const title = document.createElement('span');
        title.className = 'album-title';
        title.setAttribute('data-lang-en', album.titleEn);
        title.setAttribute('data-lang-id', album.titleId);
        title.textContent = album.titleEn;
        const count = document.createElement('span');
        count.className = 'album-count mono';
        const n = album.images.length;
        count.setAttribute('data-lang-en', n + (n === 1 ? ' photo' : ' photos'));
        count.setAttribute('data-lang-id', n + ' foto');
        count.textContent = count.getAttribute('data-lang-en');
        caption.append(title, count);

        btn.append(cover, caption);
        container.appendChild(btn);
    });
}

// ===== Lightbox (albums + project screenshots) =====
function initLightbox() {
    const box = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const desc = document.getElementById('lightboxDesc');
    const count = document.getElementById('lightboxCount');
    const prev = document.getElementById('lightboxPrev');
    const next = document.getElementById('lightboxNext');
    const close = document.getElementById('lightboxClose');
    if (!box || !img) return;

    let set = null;
    let index = 0;
    let opener = null;

    function render() {
        const src = set.images[index];
        // Sets may carry a caption per image (certificates); albums share one
        const item = set.items ? set.items[index] : null;
        const heading = item ? item.title : pick(set, 'title');
        img.classList.add('is-loading');
        img.onload = () => img.classList.remove('is-loading');
        img.src = src;
        img.alt = heading + ', ' + (index + 1);
        title.textContent = heading;
        desc.textContent = item ? item.desc : (pick(set, 'desc') || '');
        if (item && item.url) {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = currentLang() === 'id' ? 'Verifikasi' : 'Verify';
            desc.append(' · ', link);
        }
        count.textContent = (index + 1) + ' / ' + set.images.length;
        const multi = set.images.length > 1;
        prev.hidden = !multi;
        next.hidden = !multi;

        // Warm the next image so stepping through feels instant
        if (multi) new Image().src = set.images[(index + 1) % set.images.length];
    }

    function open(key, start, trigger) {
        set = ALBUMS[key] || SCREENSHOTS[key];
        if (!set) return;
        index = start || 0;
        opener = trigger;
        render();
        box.hidden = false;
        document.body.style.overflow = 'hidden';
        close.focus();
    }

    function shut() {
        box.hidden = true;
        img.removeAttribute('src');
        document.body.style.overflow = '';
        if (opener) opener.focus();
    }

    function step(dir) {
        index = (index + dir + set.images.length) % set.images.length;
        render();
    }

    document.addEventListener('click', e => {
        const trigger = e.target.closest('[data-album]');
        if (!trigger) return;
        open(trigger.dataset.album, parseInt(trigger.dataset.index || '0', 10), trigger);
    });

    prev.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    close.addEventListener('click', shut);

    // Clicking the dark area around the photo closes it
    box.querySelector('.lightbox-stage').addEventListener('click', e => {
        if (e.target.classList.contains('lightbox-stage')) shut();
    });

    document.addEventListener('keydown', e => {
        if (box.hidden) return;
        if (e.key === 'Escape') shut();
        else if (e.key === 'ArrowRight' && set.images.length > 1) step(1);
        else if (e.key === 'ArrowLeft' && set.images.length > 1) step(-1);
    });

    // Basic swipe on touch screens
    let touchX = null;
    box.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', e => {
        if (touchX === null || set.images.length < 2) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        touchX = null;
    });

    document.addEventListener('langchange', () => {
        if (!box.hidden && set) render();
    });
}

// ===== Thesis dataset samples =====
function buildDatasetSet() {
    const buttons = document.querySelectorAll('.thesis-sample');
    if (!buttons.length) return;
    SCREENSHOTS.dataset = { images: [], items: [] };
    buttons.forEach(btn => {
        SCREENSHOTS.dataset.images.push(btn.dataset.sampleImg);
        SCREENSHOTS.dataset.items.push({
            title: btn.dataset.sampleBrand + ', ' + btn.dataset.sampleSeason,
            desc: 'Vogue Runway',
            url: ''
        });
    });
}

// ===== Certificates =====
// One lightbox set built from the table rows, so prev/next steps through every certificate.
function buildCertSet() {
    const buttons = document.querySelectorAll('.cert-name');
    if (!buttons.length) return;
    SCREENSHOTS.certs = {
        titleEn: 'Certifications',
        titleId: 'Sertifikasi',
        images: [],
        items: []
    };
    buttons.forEach(btn => {
        SCREENSHOTS.certs.images.push(btn.dataset.certImg);
        SCREENSHOTS.certs.items.push({
            title: btn.textContent.trim(),
            desc: btn.dataset.certIssuer + ' · ' + btn.dataset.certDate,
            url: btn.dataset.certUrl || ''
        });
    });
}

// Hovering a certificate name with a mouse or pen shows a small preview next to the pointer.
// Decided per event rather than per device: touch-screen laptops report themselves as
// touch devices, yet their users still hover with a trackpad. A tap opens the lightbox instead.
function initCertPeek() {
    const buttons = document.querySelectorAll('.cert-name');
    if (!buttons.length) return;

    const peek = document.createElement('div');
    peek.className = 'cert-peek';
    peek.setAttribute('aria-hidden', 'true');
    const peekImg = document.createElement('img');
    peekImg.alt = '';
    peek.appendChild(peekImg);
    document.body.appendChild(peek);

    const isHover = e => e.pointerType === 'mouse' || e.pointerType === 'pen';
    let lastX = 0;
    let lastY = 0;

    // Warm the cache once a pointer reaches the table, so previews appear instantly
    const table = document.querySelector('.cert-table');
    if (table) {
        table.addEventListener('pointerenter', e => {
            if (!isHover(e)) return;
            buttons.forEach(btn => { new Image().src = btn.dataset.certImg; });
        }, { once: true });
    }

    function place(x, y) {
        lastX = x;
        lastY = y;
        const w = peek.offsetWidth;
        const h = peek.offsetHeight;
        // Sit just left of the table, in the empty column, so no certificate names are covered.
        // On narrow layouts with no room there, fall back to beside the pointer.
        const tableLeft = table ? table.getBoundingClientRect().left : x;
        let left = tableLeft - w - 24;
        if (left < 12) left = Math.min(x + 24, window.innerWidth - w - 12);
        const top = Math.min(Math.max(12, y - h / 2), window.innerHeight - h - 12);
        peek.style.transform = `translate(${left}px, ${top}px)`;
    }

    // Height is only known once the image has loaded
    peekImg.addEventListener('load', () => place(lastX, lastY));

    const hide = () => peek.classList.remove('is-visible');
    let shownAtY = 0;

    buttons.forEach(btn => {
        btn.addEventListener('pointerenter', e => {
            if (!isHover(e)) return;
            peekImg.src = btn.dataset.certImg;
            peek.classList.add('is-visible');
            shownAtY = window.scrollY;
            place(e.clientX, e.clientY);
        });
        btn.addEventListener('pointermove', e => {
            if (isHover(e)) place(e.clientX, e.clientY);
        });
        btn.addEventListener('pointerleave', hide);
        btn.addEventListener('click', hide);
    });

    // Close once the page has really moved; trackpads emit tiny scrolls while hovering
    window.addEventListener('scroll', () => {
        if (Math.abs(window.scrollY - shownAtY) > 40) hide();
    }, { passive: true });
}

// ===== Share =====
// Phones get the native share sheet; elsewhere the button opens a small menu.
const SITE_URL = 'https://adityahandrian.github.io/';

function initShare() {
    const btn = document.getElementById('shareBtn');
    const menu = document.getElementById('shareMenu');

    // "Copy link" buttons live both in the menu and in the contact list
    document.querySelectorAll('.js-copy-link').forEach(copy => {
        if (!navigator.clipboard) {
            copy.hidden = true;
            return;
        }
        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(SITE_URL).then(() => {
                copy.textContent = currentLang() === 'id' ? 'Tautan disalin' : 'Link copied';
                setTimeout(() => {
                    copy.textContent = copy.getAttribute(currentLang() === 'id' ? 'data-lang-id' : 'data-lang-en');
                }, 1800);
            });
        });
    });

    if (!btn || !menu) return;

    const setOpen = open => {
        menu.hidden = !open;
        btn.setAttribute('aria-expanded', String(open));
    };

    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    btn.addEventListener('click', e => {
        e.stopPropagation();
        if (navigator.share && isTouch) {
            navigator.share({
                title: 'Muhammad Aditya Handrian',
                text: currentLang() === 'id' ? 'Portofolio Muhammad Aditya Handrian' : 'Portfolio of Muhammad Aditya Handrian',
                url: SITE_URL
            }).catch(() => { /* dismissed */ });
            return;
        }
        setOpen(menu.hidden);
    });

    menu.addEventListener('click', e => {
        // Let the copy confirmation show before closing; links close right away
        if (e.target.closest('a')) setOpen(false);
        e.stopPropagation();
    });
    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !menu.hidden) {
            setOpen(false);
            btn.focus();
        }
    });
}

// ===== Copy email =====
function initCopyEmail() {
    const btn = document.getElementById('copyEmail');
    if (!btn || !navigator.clipboard) {
        if (btn) btn.hidden = true;
        return;
    }

    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
            btn.classList.add('is-done');
            btn.textContent = currentLang() === 'id' ? 'Disalin' : 'Copied';
            setTimeout(() => {
                btn.classList.remove('is-done');
                btn.textContent = btn.getAttribute(currentLang() === 'id' ? 'data-lang-id' : 'data-lang-en');
            }, 1800);
        });
    });
}

// ===== Resume "view" links =====
// Mobile browsers often download PDFs instead of showing them; route through Google's viewer there.
function initResumeLinks() {
    const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isLocal || !isMobile) return;

    const viewer = 'https://docs.google.com/viewer?url=' +
        encodeURIComponent('https://adityahandrian.github.io/assets/resume.pdf') + '&embedded=true';
    document.querySelectorAll('.js-resume-view').forEach(a => { a.href = viewer; });
}
