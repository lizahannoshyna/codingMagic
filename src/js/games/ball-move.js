const field = document.querySelector(".football-field");
const ball = document.querySelector(".ball");
const goal = document.querySelector(".goal");
const scoreSpan = document.querySelector("#ball-move_score");

let score = 0;
let isMove = false;
let offsetX = 0;
let offsetY = 0;



ball.addEventListener("mousedown", (event) => {
    isMove = true;
    ball.classList.add('active');

    const ballRect = ball.getBoundingClientRect();
    offsetX = event.clientX - ballRect.left;
    offsetY = event.clientY - ballRect.top;

    document.addEventListener("mousemove", moveBall);
});

function moveBall(event) {
    if (!isMove) return;

    let newX = event.clientX - offsetX;
    let newY = event.clientY - offsetY;

    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    // Обмеження м'яча в межах поля
    if (newX < fieldRect.left) newX = fieldRect.left;
    if (newX + ballRect.width > fieldRect.right) newX = fieldRect.right - ballRect.width;
    if (newX + ballRect.width > fieldRect.right) newX = fieldRect.right - ballRect.width;
    if (newY < fieldRect.top) newY = fieldRect.top;
    if (newY + ballRect.height > fieldRect.bottom) newY = fieldRect.bottom - ballRect.height;

    ball.style.left = `${newX - fieldRect.left}px`;
    ball.style.top = `${newY - fieldRect.top}px`;
}

document.addEventListener("mouseup", () => {
    isMove = false;
    ball.classList.remove('active');
    document.removeEventListener("mousemove", moveBall);
});
