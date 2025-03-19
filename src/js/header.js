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

const gameSections = [...document.querySelectorAll('section')];
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownMenu = document.querySelector('.header-dropdown-menu');
dropdownMenu.addEventListener('change', function() {
    let selectCategory = this.value;

    gameSections.forEach((section) => {
        if (section.dataset.category  === selectCategory) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none'
        }
    });
});

dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
        const category = item.textContent;


        switch (category) {
            case 'Числовий':
            document.querySelectorAll('.numbers_sections').forEach(section => section.style.display = 'block');


            document.querySelectorAll('.games_sections').forEach(section => section.style.display = 'none');
            document.querySelector('.users_sections').forEach(section => section.style.display = 'none');
                break;
            case 'Ігровий':
                document.querySelectorAll('.numbers_sections').forEach(section => section.style.display = 'none');
                document.querySelectorAll('.games_sections').forEach(section => section.style.display = 'block');
                document.querySelectorAll('.users_sections').forEach(section => section.style.display = 'none');
                break;
            case 'Ознайомчий':
                document.querySelectorAll('.numbers_sections').forEach(section => section.style.display = 'none');
                document.querySelectorAll('.games_sections').forEach(section => section.style.display = 'none');
                document.querySelectorAll('.users_sections').forEach(section => section.style.display = 'block');
                break;
            case 'Усі секції':
                document.querySelectorAll('.numbers_sections').forEach(section => section.style.display = 'block');
                document.querySelectorAll('.games_sections').forEach(section => section.style.display = 'block');
                document.querySelectorAll('.users_sections').forEach(section => section.style.display = 'block');
            default:
                gameSections.forEach((section) => {
                    section.style.display = 'block';
                });
                break;
        }
    });
});


const checkbox = document.querySelector("#theme-switch");
const elements = [
    document.body, 
    document.querySelector("header"), 
    document.querySelector(".main__content"), 
    document.querySelector("footer"),
    ...document.querySelectorAll("hr"),
    document.querySelector('.sign-up__modal'),
    document.querySelector('.success__modal'),
    document.querySelector('.header-btn'),
    document.querySelector('.header-dropdown-menu'),
];
const headerLogo = document.querySelector('.header-logo'); 
const footerLogo = document.querySelector('.footer-logo');
const arrowNext = document.querySelector('.swiper-button-next');
const arrowPrev = document.querySelector('.swiper-button-prev');

const toggleTheme = () => {
    const isDark = checkbox.checked;
    
    elements.forEach(el => {
        el.classList.toggle("dark", isDark);
        el.classList.toggle("light", !isDark);
    });

    headerLogo.src= isDark ? 'img/logo-dark.svg' : 'img/header-logo.svg';
    footerLogo.src= isDark ? 'img/footer-logo-dark.svg' : 'img/footer-logo.svg';
    arrowNext.style.backgroundImage = 
    isDark ? "url(img/arrow-next-dark.svg)" : "url(img/arrow-next.svg)";
    arrowPrev.style.backgroundImage = 
    isDark ? "url(img/arrow-prew-dark.svg)" : "url(img/arrow-prew.svg)";

    localStorage.setItem("theme", isDark ? "dark" : "light");
};
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    checkbox.checked = savedTheme === "dark";
    toggleTheme();
});
checkbox.addEventListener("change", toggleTheme);