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

  stoneBtn.querySelector("img").src = "img/rsp-icon/dark-rock.svg";
  scissorsBtn.querySelector("img").src = "img/scissors-icon.svg";
  paperBtn.querySelector("img").src = "img/paper-icon.svg";

  userChoice = "rock"; // ОНОВЛЕННЯ ВИБОРУ ЮЗЕРА
});
scissorsBtn.addEventListener("click", () => {
  scissorsBtn.classList.add("user-choice-btn_selected");
  stoneBtn.classList.remove("user-choice-btn_selected");
  paperBtn.classList.remove("user-choice-btn_selected");

  stoneBtn.querySelector("img").src = "img/stone-icon.svg";
  scissorsBtn.querySelector("img").src = "img/rsp-icon/dark-scissors.svg";
  paperBtn.querySelector("img").src = "img/paper-icon.svg";

  userChoice = "scissors";
});
paperBtn.addEventListener("click", () => {
  paperBtn.classList.add("user-choice-btn_selected");
  scissorsBtn.classList.remove("user-choice-btn_selected");
  stoneBtn.classList.remove("user-choice-btn_selected");

  stoneBtn.querySelector("img").src = "img/stone-icon.svg";
  scissorsBtn.querySelector("img").src = "img/scissors-icon.svg";
  paperBtn.querySelector("img").src = "img/rsp-icon/dark-paper.svg";

  userChoice = "paper";
});

function getComputerChoice() {
  const choicesArr = ["rock", "scissors", "paper"];
  const randomChoice = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomChoice];
}

function findWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
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
    resultText.style.color = "green";
    let score = Number(userScore.textContent) || 0;
    userScore.textContent = score + 1;
  } else if (winner === "computer") {
    resultText.textContent = `Комп’ютер виграв раунд!`;
    resultText.style.color = "red";
    computerScore.textContent = Number(computerScore.textContent) || 0;
    computerScore.textContent = Number(computerScore.textContent) + 1;
  } else {
    resultText.textContent = `Нічия!`;
    resultText.style.color = "black";
  }
});
