function getHumanChoice() {
  const humanPick = prompt('Pick either "rock" or "paper" or "scissor"');
  return humanPick;
}

function random(max) {
  const randomNum = Math.floor(Math.random() * max) + 1;
  return randomNum;
}

function getComputerChoice() {
  const num = random(3);
  switch (num) {
    case 1:
      return "rock";
      break;

    case 2:
      return "paper";
      break;

    case 3:
      return "scissor";
      break;
  }
}
let humanWin = 0;
let computerWin = 0;
let draw = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`Human : ${humanChoice}, Computer : ${computerChoice}.`);

  if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanWin++;
    console.log("human wins this round");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    computerWin++;
    console.log("computer wins this round");
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissor" && computerChoice === "scissor")
  ) {
    draw++;
    console.log("this round is tied");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanWin > computerWin) {
    console.log(`Human wins by score ${humanWin}-${computerWin}.`);
  }
  if (humanWin < computerWin) {
    console.log(`Computer wins by score ${computerWin}-${humanWin}.`);
  }
  if (humanWin === computerWin) {
    console.log(`Game tied. Score: ${humanWin}-${computerWin}.`);
  }
}
