const field = document.querySelector(".football-field");
const ball = document.querySelector(".ball");
const scoreDisplay = document.querySelector("#ball-move_score");
const goal = document.querySelector("#goal");

let score = 0;
let isGoalScored = false;

field.addEventListener("click", (event) => {
  let fieldCoords = field.getBoundingClientRect();

  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";

  checkGoal();
});

function checkGoal() {
  const goalRect = goal.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  if (
    ballRect.right > goalRect.left &&
    ballRect.left < goalRect.right &&
    ballRect.bottom > goalRect.top &&
    ballRect.top < goalRect.bottom
  ) {
    score++;
    scoreDisplay.textContent = score;

    resetBall();
  }
}

function resetBall() {
  ball.style.transform = "translate(0%, 0%)";
  ball.style.left = `${field.clientWidth / 2 - ball.clientWidth / 2}px`;
  ball.style.top = `${field.clientHeight / 2 - ball.clientHeight / 2}px`;
}
