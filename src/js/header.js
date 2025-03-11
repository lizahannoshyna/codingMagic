const sectionLinks = document.querySelectorAll('[data-section]');

sectionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const sectionId = link.dataset.section;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});