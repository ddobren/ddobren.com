document.addEventListener('DOMContentLoaded', () => {
    const soonLinks = document.querySelectorAll('.js-soon');
    soonLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            showToast('Publishing soon. Want early access? Email dobren.dragojevic@gmail.com');
        });
    });
});

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('toast--visible'));
    setTimeout(() => toast.classList.remove('toast--visible'), 3200);
    setTimeout(() => toast.remove(), 3600);
}
