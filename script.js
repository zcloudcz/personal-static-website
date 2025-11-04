// ========================================
// Mobile Menu Toggle
// ========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// Header Scroll Effect
// ========================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow to header when scrolling
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// Smooth Scroll Enhancement
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip empty hash or just '#'
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }

        const targetElement = document.querySelector(href);

        if (targetElement) {
            e.preventDefault();

            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Language Switcher
// ========================================

const langSwitcher = document.getElementById('langSwitcher');
let currentLang = 'cs';

const translations = {
    cs: {
        heroTitle: '<span class="highlight">.NET</span> vývojář pro vás',
        heroSubtitle: 'Jmenuji se Martin Zahálka a jsem .NET vývojář s více než 10 lety zkušeností specializující se na .NET webové aplikace a backend systémy. Kladu důraz na čistý kód, spolehlivost a řešení šitých na míru potřebám klienta.',
        ctaStart: 'Napište mi',
        ctaPortfolio: 'Zobrazit projekty',
        servicesTitle: 'Co nabízím',
        service1Title: 'Vývoj webových aplikací na míru',
        service1Desc: 'Vývoj aplikací na míru podle vašich specifických požadavků. Od analýzy přes návrh až po implementaci a nasazení.',
        service2Title: 'Návrh architektury',
        service2Desc: 'Pomohu vám navrhnout škálovatelnou a udržitelnou architekturu nebo optimalizovat tu stávající.',
        service4Desc: 'Agilní přístup k vývoji s pravidelnými dodávkami funkčního software. Flexibilita a rychlá reakce na změny.',
        service3Title: 'Integrace systémů',
        service3Desc: 'Propojím vaše systémy a zajistím bezproblémovou komunikaci s databázemi SQL a cloudovými službami Azure.',
        skillsTitle: 'Zkušenosti',
        clientsTitle: 'Spolupráce',
        projectsTitle: 'Projekty',
		project1Title: 'ERP výrobní firmy',
		project2Title: 'Elektronický katalog',
		project3Title: 'FakturAI',
		project1Desc: 'Multitenantní ERP webový systém pro správu klientů, objednávek, faktur... Komplexní řešení pro řízení firemních procesů s vysokými nároky na detail procesů.',
		project2Desc: 'Systém pro sběr a automatického třídění dat z firemní sítě do přehledné webové aplikace.',
		project3Desc: 'Jednoduchý fakturační systém využívající AI pro větší komfort uživatelů',
		project1Note: 'SQL databází',
		project2Note: 'uživatelů',
		project3Note: 'mikroservisní aplikace',
		
		clientsSubtitle: '',
        contactTitle: 'Pojďme spolupracovat',
        contactDesc: 'Máte projekt nebo nápad? Rád si s vámi o něm popovídám a najdeme společně nejlepší řešení.',
        contactButton: 'Klikněte pro odeslání emailu',
        navAbout: 'O mně',
        navSkills: 'Dovednosti',
        navProjects: 'Projekty',
        navServices: 'Co nabízím',
        navRefs: 'Spolupráce',
        navContact: 'Kontakt'
    },
	en: {
        heroTitle: '<span class="highlight">.NET</span> developer for you',
        heroSubtitle: 'My name is Martin Zahálka and I am a .NET developer with over 10 years of experience specializing in .NET web applications and backend systems. I emphasize clean code, reliability, and solutions tailored to the client\'s needs.',
        ctaStart: 'Contact Me',
        ctaPortfolio: 'View projects',
        servicesTitle: 'What I offer',
        service1Title: 'Custom web application development',
        service1Desc: 'Custom application development according to your specific requirements. From analysis and design to implementation and deployment.',
        service2Title: 'Architecture design',
        service2Desc: 'I will help you design a scalable and sustainable architecture or optimize your existing one.',
        service4Desc: 'An agile approach to development with regular deliveries of functional software. Flexibility and quick response to changes.',
        service3Title: 'System integration',
        service3Desc: 'I will connect your systems and ensure seamless communication with SQL databases and Azure cloud services.',
        skillsTitle: 'Experience',
        clientsTitle: 'References',
        projectsTitle: 'Portfolio',

		project1Title: 'ERP for manufacturing company',
        project2Title: 'Electronic catalog',
        project3Title: 'FakturAI',
		project1Desc: 'Multitenant ERP web system for managing clients, orders, invoices... A comprehensive solution for managing business processes with high demands on process detail.',
        project2Desc: 'System for collecting and automatically grouping data from the company servers into a clear simple web application.',
		project3Desc: 'A simple invoicing system using AI for greater user comfort',
        project1Note: 'SQL databases',
        project2Note: 'users',
        project3Note: 'microservice application',
		
		clientsSubtitle: '',
        contactTitle: 'Let\'s work together',
        contactDesc: 'Do you have a project or idea? I would be happy to discuss it with you and find the best solution together.',
        contactButton: 'Click to send an email',
        navAbout: 'About me',
        navSkills: 'Experience',
		navProjects: 'Portfolio',
        navServices: 'Services',
        navRefs: 'References',
		navAbout: 'About me',
        navContact: 'Contact'
	}

};

if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'cs' ? 'en' : 'cs';

        // Update button text
        const langActive = langSwitcher.querySelector('.lang-active');
        const langInactive = langSwitcher.querySelector('.lang-inactive');

        if (currentLang === 'cs') {
            langActive.textContent = 'CS';
            langInactive.textContent = 'EN';
        } else {
            langActive.textContent = 'EN';
            langInactive.textContent = 'CS';
        }

        // Update page content
        updateContent(currentLang);
    });
}

function updateContent(lang) {
    const t = translations[lang];

    // Update all text content
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

    const featureItems = document.querySelectorAll('.feature-item span');
    if (featureItems[0]) featureItems[0].textContent = t.feature1;
    if (featureItems[1]) featureItems[1].textContent = t.feature2;
    if (featureItems[2]) featureItems[2].textContent = t.feature3;

    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    if (ctaButtons[0]) ctaButtons[0].textContent = t.ctaStart;
    if (ctaButtons[1]) ctaButtons[1].textContent = t.ctaPortfolio;

    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.servicesTitle;
    if (sectionTitles[1]) sectionTitles[1].textContent = t.projectsTitle;
    if (sectionTitles[2]) sectionTitles[2].textContent = t.skillsTitle;
    if (sectionTitles[3]) sectionTitles[3].textContent = t.clientsTitle;
    if (sectionTitles[4]) sectionTitles[4].textContent = t.contactTitle;

    const sectionSubtitle = document.querySelector('.section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = t.clientsSubtitle;

    const serviceTitles = document.querySelectorAll('.service-title');
    if (serviceTitles[0]) serviceTitles[0].textContent = t.service1Title;
    if (serviceTitles[1]) serviceTitles[1].textContent = t.service2Title;
    if (serviceTitles[2]) serviceTitles[2].textContent = t.service3Title;

    const serviceDescs = document.querySelectorAll('.service-description');
    if (serviceDescs[0]) serviceDescs[0].textContent = t.service1Desc;
    if (serviceDescs[1]) serviceDescs[1].textContent = t.service2Desc;
    if (serviceDescs[2]) serviceDescs[2].textContent = t.service3Desc;

	const projectTitles = document.querySelectorAll('.project-title');
    if (projectTitles[0]) projectTitles[0].textContent = t.project1Title;
    if (projectTitles[1]) projectTitles[1].textContent = t.project2Title;
    if (projectTitles[2]) projectTitles[2].textContent = t.project3Title;

	const projectDescs = document.querySelectorAll('.project-description');
    if (projectDescs[0]) projectDescs[0].textContent = t.project1Desc;
    if (projectDescs[1]) projectDescs[1].textContent = t.project2Desc;
    if (projectDescs[2]) projectDescs[2].textContent = t.project3Desc;

	const projectNotes = document.querySelectorAll('.stat-label');
    if (projectNotes[0]) projectNotes[0].textContent = t.project1Note;
    if (projectNotes[1]) projectNotes[1].textContent = t.project2Note;
    if (projectNotes[2]) projectNotes[2].textContent = t.project3Note;


    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;

    const contactDesc = document.querySelector('.contact-description');
    if (contactDesc) contactDesc.textContent = t.contactDesc;

    const contactText = document.querySelector('.contact-text');
    if (contactText && !contactText.textContent.includes('@')) {
        contactText.textContent = t.contactButton;
    }

    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = t.navAbout;
    if (navLinks[1]) navLinks[1].textContent = t.navServices;
    if (navLinks[2]) navLinks[2].textContent = t.navProjects;
    if (navLinks[3]) navLinks[3].textContent = t.navSkills;
    if (navLinks[4]) navLinks[4].textContent = t.navRefs;
    if (navLinks[5]) navLinks[5].textContent = t.navContact;
	
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.service-card, .skill-category, .client-card');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinksForActive = document.querySelectorAll('.nav-link[href^="#"]');

function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksForActive.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// Performance: Debounce Scroll Events
// ========================================

function debounce(func, wait = 10) {
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

// Apply debounce to scroll handler
const debouncedUpdateActiveNavLink = debounce(updateActiveNavLink, 10);
window.addEventListener('scroll', debouncedUpdateActiveNavLink);

// ========================================
// Email Protection (Anti-Spam)
// ========================================

function setupEmailProtection() {
    // Email rozdělen do částí - není vidět v HTML
    const e1 = 'martin';
    const e2 = 'zahalka';
    const e3 = 'dev';

    const contactBtn = document.querySelector('.contact-link');
    const contactText = document.querySelector('.contact-text');
    const contactBtnHero = document.querySelector('.contact-link-hero');

    // Funkce pro zobrazení notifikace
    function showCopyNotification(success = true) {
        // Vytvořit notifikaci
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = success
            ? (currentLang === 'cs' ? '✓ Email zkopírován do schránky' : '✓ Email copied to clipboard')
            : (currentLang === 'cs' ? '✗ Chyba při kopírování' : '✗ Copy failed');

        document.body.appendChild(notification);

        // Zobrazit notifikaci
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Skrýt a odstranit notifikaci po 3 sekundách
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Funkce pro zkopírování do schránky
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('✅ Email zkopírován do schránky');
                showCopyNotification(true);
            }).catch(err => {
                console.error('❌ Chyba při kopírování:', err);
                showCopyNotification(false);
            });
        } else {
            // Fallback pro starší prohlížeče
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                console.log('✅ Email zkopírován do schránky (fallback)');
                showCopyNotification(true);
            } catch (err) {
                console.error('❌ Chyba při kopírování:', err);
                showCopyNotification(false);
            }
            document.body.removeChild(textarea);
        }
    }

    if (contactBtn) {
        const email = e1 + '@' + e2 + '.' + e3;

        // Nastavit title/tooltip s emailovou adresou
        contactBtn.setAttribute('title', email);

        // Přidat event listener pro kliknutí - zkopíruje email do schránky
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            copyToClipboard(email);
        });

        // Při najetí myší ukázat email (volitelně) - pouze pokud existuje contactText
        if (contactText) {
            contactBtn.addEventListener('mouseenter', function() {
                contactText.textContent = email;
            });

            contactBtn.addEventListener('mouseleave', function() {
                // Použít aktuální jazyk pro text
                contactText.textContent = translations[currentLang].contactButton;
            });
        }
    }

    // Stejná funkcionalita pro hero sekci
    if (contactBtnHero) {
        const email = e1 + '@' + e2 + '.' + e3;

        // Nastavit title/tooltip s emailovou adresou
        contactBtnHero.setAttribute('title', email);

        contactBtnHero.addEventListener('click', function(e) {
            e.preventDefault();
            copyToClipboard(email);
        });
    }
}

// Spustit při načtení stránky
document.addEventListener('DOMContentLoaded', setupEmailProtection);

// ========================================
// Console Welcome Message
// ========================================

console.log('%c👋 Ahoj!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cDěkuji za návštěvu mého portfolia!', 'font-size: 14px; color: #cbd5e1;');
console.log('%cPokud hledáte vývojáře, neváhejte mě kontaktovat.', 'font-size: 14px; color: #cbd5e1;');

// ========================================
// Cookie Consent (GDPR)
// ========================================

function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');

    // Název pro localStorage
    const COOKIE_CONSENT_KEY = 'cookieConsent';

    // Zkontrolovat, jestli už uživatel souhlasil
    function checkConsent() {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Pokud není uložený souhlas, zobrazit banner po 1 sekundě
            setTimeout(() => {
                cookieConsent.classList.add('show');
            }, 1000);
        }
    }

    // Uložit souhlas a skrýt banner
    function saveConsent(accepted) {
        const consentData = {
            accepted: accepted,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
        hideBanner();

        // Log pro debugging
        if (accepted) {
            console.log('✅ Cookies přijaty');
        } else {
            console.log('❌ Cookies odmítnuty');
        }
    }

    // Skrýt banner s animací
    function hideBanner() {
        cookieConsent.classList.remove('show');
    }

    // Event listeners pro tlačítka
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            saveConsent(true);
        });
    }

    if (cookieDecline) {
        cookieDecline.addEventListener('click', () => {
            saveConsent(false);
        });
    }

    // Zkontrolovat souhlas při načtení
    checkConsent();
}

// Přidat cookie consent texty do translations
if (typeof translations !== 'undefined') {
    translations.cs.cookieTitle = 'Soubory cookies';
    translations.cs.cookieDescription = 'Tento web používá pouze nezbytné cookies pro správnou funkčnost. Nesbírám žádné osobní údaje ani nepoužívám analytické nástroje.';
    translations.cs.cookieAccept = 'Přijmout';
    translations.cs.cookieDecline = 'Odmítnout';

    translations.en.cookieTitle = 'Cookies';
    translations.en.cookieDescription = 'This website uses only essential cookies for proper functionality. I do not collect any personal data or use analytics tools.';
    translations.en.cookieAccept = 'Accept';
    translations.en.cookieDecline = 'Decline';
}

// Přidat cookie texty do updateContent funkce
const originalUpdateContent = updateContent;
if (typeof updateContent !== 'undefined') {
    updateContent = function(lang) {
        originalUpdateContent(lang);

        const t = translations[lang];

        // Update cookie banner texts
        const cookieTitle = document.querySelector('.cookie-title');
        if (cookieTitle) cookieTitle.textContent = t.cookieTitle;

        const cookieDescription = document.querySelector('.cookie-description');
        if (cookieDescription) cookieDescription.textContent = t.cookieDescription;

        const cookieAcceptBtn = document.getElementById('cookieAccept');
        if (cookieAcceptBtn) cookieAcceptBtn.textContent = t.cookieAccept;

        const cookieDeclineBtn = document.getElementById('cookieDecline');
        if (cookieDeclineBtn) cookieDeclineBtn.textContent = t.cookieDecline;
    };
}

// Spustit při načtení stránky
document.addEventListener('DOMContentLoaded', initCookieConsent);

// ========================================
// Theme Switcher
// ========================================

function initThemeSwitcher() {
    const THEME_KEY = 'selectedTheme';
    const AVAILABLE_THEMES = ['orange', 'blue', 'green', 'purple', 'red', 'cyan', 'teal'];

    // Funkce pro výběr náhodného tématu
    function getRandomTheme() {
        const randomIndex = Math.floor(Math.random() * AVAILABLE_THEMES.length);
        return AVAILABLE_THEMES[randomIndex];
    }

    // Získat téma v pořadí: URL > LocalStorage > Náhodné
    let selectedTheme = getThemeFromUrl();

    if (!selectedTheme) {
        selectedTheme = localStorage.getItem(THEME_KEY);
    }

    if (!selectedTheme) {
        // Pokud není uložené téma, vybrat náhodné
        selectedTheme = getRandomTheme();
        console.log(`🎲 Náhodně vybráno téma: ${selectedTheme}`);
    }

    // Načíst téma při startu
    loadTheme(selectedTheme);

    // Nastavit event listeners pro všechny theme options
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            loadTheme(theme);
            saveTheme(theme);
            updateUrl(theme);
        });
    });
}

function getThemeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('theme');
}

function loadTheme(themeName) {
    // Najít nebo vytvořit theme link element
    let themeLink = document.getElementById('theme-stylesheet');

    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-stylesheet';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
    }

    // Nastavit cestu k CSS souboru tématu
    themeLink.href = `themes/theme-${themeName}.css`;

    // Aktualizovat aktivní tlačítko
    updateActiveThemeButton(themeName);

    console.log(`🎨 Téma změněno na: ${themeName}`);
}

function saveTheme(themeName) {
    localStorage.setItem('selectedTheme', themeName);
}

function updateUrl(themeName) {
    // Aktualizovat URL s query stringem bez reload stránky
    const url = new URL(window.location);
    url.searchParams.set('theme', themeName);
    window.history.pushState({}, '', url);
}

function updateActiveThemeButton(themeName) {
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        if (option.getAttribute('data-theme') === themeName) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Spustit při načtení stránky
document.addEventListener('DOMContentLoaded', initThemeSwitcher);
