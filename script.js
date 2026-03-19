// Navigation aktive Seite setzen
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    initI18n();
});

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('show');
    element.classList.toggle('open');
}

// --- i18n ---

function t(key) {
    const lang = localStorage.getItem('lang') || 'de';
    return (translations[lang] && translations[lang][key]) ||
           (translations.de && translations.de[key]) ||
           key;
}

function initI18n() {
    const lang = localStorage.getItem('lang') || 'de';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        if (text !== key) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const text = t(key);
        if (text !== key) el.innerHTML = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = t(key);
        if (text !== key) el.placeholder = text;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function setLang(lang) {
    localStorage.setItem('lang', lang);
    initI18n();
}
