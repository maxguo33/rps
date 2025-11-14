let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  compChoice = Math.random();
  if (compChoice > 0.66) {
    return "rock";
  } else if (compChoice < 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper, or Scissors?");
  return humanChoice;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log("The computer chose " + computerChoice);
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return 2;
        case "paper":
          return 0;
        case "scissors":
          return 1;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          return 1;
        case "paper":
          return 2;
        case "scissors":
          return 0;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          return 0;
        case "paper":
          return 1;
        case "scissors":
          return 2;
      }
      break;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    winner = playRound();
    if (winner == 1) {
      playerScore++;
    } else if (winner == 0) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("YOU WON THE GAME!!!!!");
  } else if (computerScore > playerScore) {
    console.log("YOU LOST THE GAME...");
  } else {
    console.log("THE GAME WAS A TIE.");
  }
}

playGame();