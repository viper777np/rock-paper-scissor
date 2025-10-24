const container = document.querySelector("#container");

const h3 = document.querySelector("#h3");

const paraRound = document.querySelector("#round");

const paraGame = document.querySelector("#game");

const restartBtn = document.querySelector("#restart");

let computerWin = 0;
let humanWin = 0;
let draw = 0;
let gameOver = false;
let round = 0;

function random(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[random(3)];
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;
  round++;
  h3.textContent = `Round ${round}!!`;

  if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanWin++;
    paraRound.textContent = `HUMAN WINS Round ${round} ,
    Pick  | Human :${humanChoice}  Computer : ${computerChoice}`;
  } else if (humanChoice === computerChoice) {
    draw++;
    paraRound.textContent = `Round ${round} TIED ,
    Pick  | Human :${humanChoice}  Computer : ${computerChoice}`;
  } else {
    computerWin++;
    paraRound.textContent = `COMPUTER WINS Round ${round} ,
    Pick  | Human :${humanChoice}  Computer : ${computerChoice}`;
  }

  checkWinner();
}

function checkWinner() {
  paraGame.textContent = `Score : You ${humanWin} - ${computerWin} Computer | Draw ${draw}`;
  if (humanWin === 5 || computerWin === 5) {
    gameOver = true;

    if (humanWin === 5) {
      paraGame.textContent += `HUMAN WINS The GAME`;
    }
    if (computerWin === 5) {
      paraGame.textContent += `COMPUTER WINS The GAME`;
    }
    h3.textContent = "GAME OVER";
  }
}

container.addEventListener("click", (e) => {
  if (!e.target.value || gameOver) return;
  const humanPick = e.target.value.toLowerCase();

  playRound(humanPick, getComputerChoice());
});

restartBtn.addEventListener("click", () => {
  humanWin = 0;
  computerWin = 0;
  draw = 0;
  round = 0;
  gameOver = false;

  paraRound.textContent = "";
  paraGame.textContent = "";
  h3.textContent = "New Game Starts !!";
});
