const dino = document.getElementById("dinoGamePlayer");
const cactus = document.getElementById("dinoGameCactus");
const score = document.getElementById("dinoGameScore");
const reset = document.getElementById("dinoGameReset");
const dinoGameContainer = document.querySelector(".dino-game__container");

let scoreCount = 0;
let gameStarted = false;
let cactusCounted = false;

function hideElements(...elements) {
    elements.forEach(el => {
        if (el) el.style.display = "none";
    });
}

function jump() {
    if (gameStarted && !dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 400);
    }
}

function startGame() {
    gameStarted = true;
    cactusCounted = false;
    score.style.marginTop = "0";
    dino.style.display = cactus.style.display = "block";
    dino.style.animationPlayState = cactus.style.animationPlayState = "running";
    hideElements(score, reset);
    scoreCount = 0;
}

function endGame() {
    gameStarted = false;
    score.textContent = `Гра закінчена! Ваш кінцевий рахунок: ${scoreCount}`;
    score.style.marginTop = "36px";
    hideElements(dino, cactus, score);
    score.style.display = reset.style.display = "block";
    reset.textContent = "Грати знову";
}

reset.addEventListener("click", startGame);

const gameLoop = setInterval(() => {
    if (!gameStarted) return;

    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = cactus.style.animationPlayState = "paused";
        endGame();
    } else if (cactusLeft <= 0 && !cactusCounted) {
        scoreCount++;
        cactusCounted = true;
        score.textContent = `Ваш поточний рахунок : ${scoreCount}`;
        score.style.display = "block";
    } else if (cactusLeft > 400) {
        cactusCounted = false;
    }
}, 39);

window.addEventListener("keydown", e => {
    if (e.code === "Space") {
        e.preventDefault();
        jump();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    hideElements(dino, cactus, score);
    reset.textContent = "Грати";
})
dinoGameContainer.addEventListener("click", e => {
    e.preventDefault();
    jump()
})
