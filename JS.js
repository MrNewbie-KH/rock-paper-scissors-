"use strict";
// =========================================
const humanScoreParent = document.querySelector(".player");
const computerScoreParent = document.querySelector(".computer");
const number = 3;
let humanScore = 0,
  computerScore = 0;
const score1 = document.createElement("p");
const score2 = document.createElement("p");
const statusOfCurrentMove = document.getElementById("status-message");
const whoWinsWhoLoses = document.getElementById("who");
const bigOne = document.querySelector(".big-one");
const buttonStart = document.createElement("button");
const buttonreset = document.createElement("button");
// ==========================================
score1.classList.add("added-human-score");
score2.classList.add("added-computer-score");
humanScoreParent.appendChild(score1);
computerScoreParent.appendChild(score2);
// function to random computer choice
const getComputerChoice = function (number) {
  let choice = "";
  let randomChoice = Math.ceil(Math.random() * number);
  if (randomChoice == 1) choice = "ROCK";
  else if (randomChoice == 2) choice = "PAPER";
  else choice = "SCISSORS";
  return choice;
};
// the main function that compares values
const playRound = function (computer, human) {
  const array = statusOfCurrentMove.className.split(" ");
  for (let i = 0; i < array.length; i++) {
    statusOfCurrentMove.classList.remove(array[0]);
    whoWinsWhoLoses.classList.remove(array[0]);
    array.pop();
  }
  if (computer === human) {
    statusOfCurrentMove.textContent = "It's a tie";
    whoWinsWhoLoses.textContent = `Player choice ${human} matches Computer Choice ${computer}`;
    array.push("added-white");
    statusOfCurrentMove.classList.add(array[0]);
    whoWinsWhoLoses.classList.add(array[0]);
  } else if (
    (computer == "ROCK" && human === "SCISSORS") ||
    (computer == "PAPER" && human === "ROCK") ||
    (computer == "SCISSORS" && human === "PAPER")
  ) {
    computerScore++;
    statusOfCurrentMove.textContent = "Lose";
    whoWinsWhoLoses.textContent = ` ${computer} Beats ${human}`;
    array.push("added-red");
    statusOfCurrentMove.classList.add(array[0]);
    whoWinsWhoLoses.classList.add(array[0]);
  } else {
    humanScore++;
    statusOfCurrentMove.textContent = "Win";
    whoWinsWhoLoses.textContent = `${human} Beats ${computer}`;
    array.push("added-green");
    statusOfCurrentMove.classList.add(array[0]);
    whoWinsWhoLoses.classList.add(array[0]);
  }
};
// =========================================================
window.addEventListener("click", function (e) {
  let choice;
  if (e.target.classList.contains("rock")) choice = "ROCK";
  else if (e.target.classList.contains("paper")) choice = "PAPER";
  else if (e.target.classList.contains("scissors")) choice = "SCISSORS";
  if (!choice) return;
  else {
    console.log(choice);
    const computer = getComputerChoice(3);
    playRound(computer, choice);
    score1.textContent = humanScore;
    score2.textContent = computerScore;
    if (computerScore == 5) {
      console.log("YOU LOSE ASS_HOLE");
      computerScore = humanScore = 0;
    } else if (humanScore === 5) {
      console.log("YOU win ass hole");
      computerScore = humanScore = 0;
    }
  }
});
// ============================================================
// adding start and restart button
