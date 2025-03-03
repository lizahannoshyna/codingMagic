const stoneBtn = document.querySelector("[data-choice='rock']");
const scissorsBtn = document.querySelector("[data-choice='scissors']");
const paperBtn = document.querySelector("[data-choice='paper']");
const resultText = document.querySelector(".rps-message");

const computerChoiceBtn = document.querySelector(".computer-choice_btn");
const computerChoiceText = document.querySelector(
  ".rps-message-computer-choice"
);

const computerScore = document.querySelector("#rps-computer-score");
const userScore = document.querySelector("#rps-user-score");

let userChoice = null;

stoneBtn.addEventListener("click", () => {
  stoneBtn.classList.add("user-choice-btn_selected");
  scissorsBtn.classList.remove("user-choice-btn_selected");
  paperBtn.classList.remove("user-choice-btn_selected");

  stoneBtn.querySelector("img").src = "img/dark-rock.svg";
  scissorsBtn.querySelector("img").src = "img/scissors-icon.svg";
  paperBtn.querySelector("img").src = "img/paper-icon.svg";

  userChoice = "камінь";
});
scissorsBtn.addEventListener("click", () => {
  scissorsBtn.classList.add("user-choice-btn_selected");
  stoneBtn.classList.remove("user-choice-btn_selected");
  paperBtn.classList.remove("user-choice-btn_selected");

  stoneBtn.querySelector("img").src = "img/stone-icon.svg";
  scissorsBtn.querySelector("img").src = "img/dark-scissors.svg";
  paperBtn.querySelector("img").src = "img/paper-icon.svg";

  userChoice = "ножиці";
});
paperBtn.addEventListener("click", () => {
  paperBtn.classList.add("user-choice-btn_selected");
  scissorsBtn.classList.remove("user-choice-btn_selected");
  stoneBtn.classList.remove("user-choice-btn_selected");

  stoneBtn.querySelector("img").src = "img/stone-icon.svg";
  scissorsBtn.querySelector("img").src = "img/scissors-icon.svg";
  paperBtn.querySelector("img").src = "img/dark-paper.svg";

  userChoice = "папір";
});

function getComputerChoice() {
  const choicesArr = ["камінь", "ножиці", "папір"];
  const randomChoice = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomChoice];
}

function findWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  }

  if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

computerChoiceBtn.addEventListener("click", () => {
  if (userChoice === null) {
    alert("Будь ласка, оберіть варіант!");
    return;
  }

  const computerChoice = getComputerChoice();
  computerChoiceText.textContent = `Комп'ютер обрав: ${computerChoice}`;

  const winner = findWinner(userChoice, computerChoice);

  if (winner === "user") {
    resultText.textContent = `Ви виграли раунд!`;
    resultText.style.color = "#039900";
    let score = Number(userScore.textContent) || 0;
    userScore.textContent = score + 1;
  } else if (winner === "computer") {
    resultText.textContent = `Комп’ютер виграв раунд!`;
    resultText.style.color = "#990000";
    computerScore.textContent = Number(computerScore.textContent) || 0;
    computerScore.textContent = Number(computerScore.textContent) + 1;
  } else {
    resultText.textContent = `Нічия!`;
    resultText.style.color = "black";
  }
});
