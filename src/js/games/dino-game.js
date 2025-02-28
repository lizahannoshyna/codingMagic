const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
const reset = document.getElementById("reset");
const text = document.getElementById("textDino");

let scoreCount = 0;
// Важливі змінні
score.style.display = "none";
reset.style.display = "none";


function jump() {
    if (!dino.classList.contains("jump")) { // Спочатку перевіряє, чи динозавр в пригає. Якщо ні, то змушує його стрибати ( додає клас jump)
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump"); // Видаляє клас jump з динозавра після стрибка, щоб він міг стрибати знову (без цього він не зможе стрибати)
        }, 300);
    }
}
// Цей код відповідає за те, щоб динозавр стрибав, коли користувач натискає пробіл. Це відбувається за допомогою функції jump. Після 300 мілісекунд цей клас видаляється, щоб динозавр міг стрибати знову. ( Якщо цього не зробити, динозавр не зможе стрибати знову)
let checkAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

 // Якщо кактус знаходиться від 0 до 70 пікселів зліва! і динозавр знаходиться на висоті 143 пікселів, то гра закінчується (динозавр і кактус зіштовхуються і гра закінчується) - код перевіряється кожні 10 секунд, за бажанням можна зменшити
    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = "paused";  // Не змінювати
        cactus.style.animationPlayState = "paused"; // Не змінювати
        if(dino.style.animationPlayState === "paused" && cactus.style.animationPlayState === "paused") {
            text.style.display = "block";
            text.textContent = "Гра закінчена! Ваш кінцевий рахунок: " + scoreCount;
            dino.style.display = "none";
            cactus.style.display = "none";
            score.style.display = "none";
            reset.style.display = "block";

        }

            reset.addEventListener("click", function () {
                window.location.reload();

            });

    } else if(cactusLeft <= 0) { // Якщо Динозавр перепригнув через кактус, то рахунок збільшується на 1
        scoreCount++ ;
        score.textContent = 'Ваш поточний рахунок : ' + scoreCount;

    } if (scoreCount === 1) { // Відображує рахунок, якщо він більше 0
        score.style.display = "block";
    } else if(window.stop() === true) { // Якщо гра закінчилася, то рахунок не відображається ( відображається тільки текст про кінець гри та кінцевий рахунок)
        score.style.display = "none";
    }
}, 39);
// Цей код перевіряє, чи користувач нажав пробіл, і якщо так, то викликає функцію стрибка.
window.addEventListener("keydown", function (event) {
    if(event.code === "Space"){
        jump();
        preventDefault();
    }
});
