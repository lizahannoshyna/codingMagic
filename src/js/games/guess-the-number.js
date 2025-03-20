const input = document.getElementById('guess-the-number__input')
const guessBtn = document.getElementById('guess-the-number__submit')
const outputDisplay = document.querySelector('.guess-the-number__result')
const output = document.getElementById('guess-the-number__output')
let random = Math.floor(Math.random() * 10) + 1

document.addEventListener("DOMContentLoaded", () => {
    outputDisplay.style.display = "none"
});

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(input.value);
    outputDisplay.style.display = "block";
    document.querySelector(".guess-the-number__content").style.justifyContent = "space-between"


    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        output.textContent = 'Будь ласка введіть число в діапазоні від 1 до 10'
        output.style.color = 'orange'
        setTimeout(resetGame, 3000);
        return;
    }

    if(userGuess === random) {
        output.textContent = `Вітаю, ви вгадали число! ${random}`
        output.style.color = '#039900'
        setTimeout(resetGame, 3000);
    } else {
        output.textContent = `Ви програли, комп’ютер загадав ${random}`
        output.style.color = '#990000'
        setTimeout(resetGame, 3000);
    }

})

function resetGame() {
   random = Math.floor(Math.random() * 10) + 1
    output.textContent = ''
    input.value = ''
    outputDisplay.style.display = "none";
    document.querySelector(".guess-the-number__content").style.justifyContent = "center"
}