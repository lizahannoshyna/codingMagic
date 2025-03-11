const gameSections = [...document.querySelectorAll('section')];
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownMenu = document.querySelector('.header-dropdown-menu');

dropdownMenu.addEventListener('change', function() {
    let selectCategory = this.value;

    gameSections.forEach((section) => {
        if (selectCategory === 'games' || section.dataset.category === selectCategory) {
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
                document.querySelector('[src="partials/games/leap-year-check.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/guess-the-number.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/simple-calculator.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/time-converter.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/max-of-three.html"]').style.display = 'block';
                break;
            case 'Ігровий':
                document.querySelector('[src="partials/games/rock-paper-scissors.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/dino-game.html"]').style.display = 'block';
                document.querySelector('[src="partials/games/ball-move.html"]').style.display = 'block';
                break;
            case 'Ознайомчий':
                document.querySelector('[src="partials/games/scientists-data.html"]').style.display = 'block';
                break;
            default:
                gameSections.forEach((section) => {
                    section.style.display = 'block';
                });
                break;
        }
    });
});
