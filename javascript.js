let playerScore = 0;
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

function updateScore() {
    document.getElementById('score-display').textContent =
    `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5){
            document.getElementById("winner-announcement").textContent
            = "YOU WON THE GAME!";
        } else {
            document.getElementById("winner-announcement").textContent
            = "YOU LOST THE GAME...";
        }
    }
}

function playRound(playerSelection) {
  let computerChoice = getComputerChoice();
  let humanChoice = playerSelection.toLowerCase();
  document.getElementById('round-result').textContent = `The computer chose ${computerChoice}`;
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          break;
        case "paper":
          computerScore++;
          break;
        case "scissors":
          playerScore++;
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          playerScore++;
          break;
        case "paper":
          break;
        case "scissors":
          computerScore++;
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
            computerScore++;
            break;
        case "paper":
            playerScore++;
            break;
        case "scissors":
            break;
      }
      break;
  }
  updateScore();
  checkWinner();
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('rock-btn').addEventListener('click', function() {
    playRound('rock');
  });

  document.getElementById('paper-btn').addEventListener('click', function() {
    playRound('paper');
  });

  document.getElementById('scissors-btn').addEventListener('click', function() {
    playRound('scissors');
  });
});