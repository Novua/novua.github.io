document.addEventListener('DOMContentLoaded', () => {
    const fadeOut = document.getElementById('fade-out');
    const storeLinks = document.querySelectorAll('[data-store-link]');
    const body = document.body;
    const yearElement = document.getElementById('year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (fadeOut) {
        window.setTimeout(() => {
            fadeOut.classList.add('hide');
        }, 1200);

        fadeOut.addEventListener('transitionend', () => {
            if (fadeOut.classList.contains('hide')) {
                body.classList.remove('no-scroll');
                fadeOut.setAttribute('aria-hidden', 'true');
            } else {
                fadeOut.setAttribute('aria-hidden', 'false');
            }
        });
    } else {
        body.classList.remove('no-scroll');
    }

    const handleStoreNavigation = (event) => {
        event.preventDefault();
        const target = event.currentTarget;
        const destination = target.getAttribute('href');

        if (!destination) {
            return;
        }

        if (!fadeOut) {
            window.location.href = destination;
            return;
        }

        fadeOut.setAttribute('aria-hidden', 'false');
        fadeOut.classList.remove('hide');
        body.classList.add('no-scroll');

        window.setTimeout(() => {
            window.location.href = destination;
        }, 650);
    };

    storeLinks.forEach((link) => {
        link.addEventListener('click', handleStoreNavigation);
    });
});
