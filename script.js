// Navigation aktive Seite setzen
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('show');
    element.classList.toggle('open');
}
