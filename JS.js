"use strict";
const number = 3;
const getComputerChoice = function (number) {
  let choice = "";
  let randomChoice = Math.ceil(Math.random() * number);
  if (randomChoice == 1) choice = "ROCK";
  else if (randomChoice == 2) choice = "PAPER";
  else choice = "SCISSORS";
  return choice;
};
const playerChoice = function () {
  const selection = window.prompt("Please enter your choice").toUpperCase();
  return selection;
};

const playRound = function (computer, human) {
  if (computer === human) console.log("match");
  else if (
    (computer == "ROCK" && human === "SCISSORS") ||
    (computer == "PAPER" && human === "ROCK") ||
    (computer == "SCISSORS" && human === "PAPER")
  )
    console.log(`You Lose! ${computer} beats ${human}`);
  else console.log(`You WIN! ${human} beats ${computer}`);
};
const game = function () {
  for (let i = 0; i < 5; i++) {
    const computer = getComputerChoice(3);
    const human = playerChoice();
    playRound(computer, human);
  }
};
// game();
let humanScore = 0,
  computerScore = 0;
// while (humanScore != 5 && computerScore != 5) {
window.addEventListener("click", function (e) {
  let choice;
  if (e.target.classList.contains("rock")) choice = "ROCK";
  else if (e.target.classList.contains("paper")) choice = "PAPER";
  else if (e.target.classList.contains("scissors")) choice = "SCISSORS";
  if (choice) console.log(choice);
});
// }
