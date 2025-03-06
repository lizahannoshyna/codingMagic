const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];


const buttons = document.querySelectorAll(".scientists-selection__btn");
let renderScientistsArr = [...scientists];

const renderScientistsCards = () => {
    const items = document.querySelectorAll('.scientists-selection__item')
    items.forEach(el => el.innerHTML = '')
    renderScientistsArr.forEach((el, index) => {
        items[index].innerHTML = `
            <p>
                <span>${el.name} ${el.surname}</span>
                <span>${el.born} - ${el.dead}</span>
            </p>
        `;
    })
}

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        console.log(action)

        switch(action) {
            case 'born-in-19-century':
                getScientistsFrom19Century();
                break;
            case 'sort-by-alphabet':
                sortScientistsByAlphabet();
                break;
            case 'sort-by-lifespan':
                sortScientistsByLifespan();
                break;
            case 'find-latest-born':
                findLatestBornScientist();
                break;
            case 'find-einstein-year':
                getEinsteinBirthYear();
                break;
            case 'find-lastname-c':
                findScientistsByLastNameC();
                break;
            case 'delete-name-a':
                removeScientistsWithFirstNameA();
                break;
            case 'find-oldest-youngest':
                findOldestAndYoungestScientist();
                break;

            case 'find-match-initials':
                findScientistsWithMatchingInitials();
                break;

        }
        console.table(renderScientistsArr);
        renderScientistsCards();
    });
});


// Отримати масив вчених, що народилися в 19 столітті
const getScientistsFrom19Century = () => {
    renderScientistsArr = [...scientists].filter(scientist => scientist.born >= 1801 && scientist.born <= 1900)
};

// Відсортувати вчених за алфавітом
const sortScientistsByAlphabet = () => {
    renderScientistsArr = renderScientistsArr.slice().sort((a, b) => a.name > b.name ? 1 : -1);

};

// Відсортувати вчених за кількістю прожитих років
const sortScientistsByLifespan = () => {
    renderScientistsArr = renderScientistsArr.slice().sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
};

// Знайти вченого, який народився найпізніше
const findLatestBornScientist = () => {
    let latestBorn = scientists[0];
    scientists.forEach(el =>{
        if(el.born > latestBorn.born) latestBorn = el
    })
    renderScientistsArr = [latestBorn]
};

// Знайти рік народження Albert Einstein
const getEinsteinBirthYear = () => {
    renderScientistsArr = [...scientists].filter((el) =>
        el.name === 'Albert' && el.surname === 'Einstein'
    )

};

// Знайти вчених, прізвище яких починається на літеру "С"
const findScientistsByLastNameC = () => {
    renderScientistsArr = [...scientists].filter(el => el.name.startsWith('S') )
};

// Видалити з масива всіх вчених, ім'я яких починається на "A"
const removeScientistsWithFirstNameA = () => {
    renderScientistsArr = [...scientists].filter(el => !el.name.startsWith('A'))
};

// Знайти вченого, який прожив найбільше, і вченого, який прожив найменше
const findOldestAndYoungestScientist = () => {
    let youngest = scientists[0]
    let oldest = scientists[0]
    scientists.forEach(el => {
        const lifeSpan = el.dead - el.born
        let oldestLifeSpan = oldest.dead - oldest.born
        let youngestLifeSpan = youngest.dead - youngest.born
        if(oldestLifeSpan < lifeSpan) oldest = el;
        if(youngestLifeSpan > youngest) youngest = el;
    })
    renderScientistsArr = [youngest, oldest]
};


// Знайти вчених, у яких збігаються перші літери імені та прізвища
const findScientistsWithMatchingInitials = () => {
    renderScientistsArr = [...scientists].filter(el => {
        let firstName = el.name[0].toLowerCase()
        let lastName = el.surname[0].toLowerCase()
        return firstName === lastName
    })
};
