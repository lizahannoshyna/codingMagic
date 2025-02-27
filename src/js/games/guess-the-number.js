const guessInput = document.getElementById('guessInput')
const guessBtn = document.getElementById('guessBtn')
const text = document.getElementById('text')
let random = Math.floor(Math.random() * 10) + 1
guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
           text.textContent = 'Будь ласка введіть число в діапазоні від 1 до 10'
           text.style.color = 'orange'
           return
    }
if(userGuess === random) {
   
    text.textContent = `Вітаю, ви вгадали число! ${random}`
    text.style.color = '#039900'
}
else {
    text.textContent = `Ви не вгадали число ${random}`
    text.style.color = 'red'
}
setTimeout(resetGame, 2000);
})
function resetGame() {
   random = Math.floor(Math.random() * 10) + 1
    text.textContent = ''
    guessInput.value = ''
}