let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You Win! ' + playerSelection + ' beats ' + computerSelection + '.';
  } else if (playerChoice === computerChoice) {
    return 'It\'s a Tie! Computer also chose ' + computerSelection + '.';
  } else {
    computerScore++;
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '.';
  }
}

function updateScore() {
  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
}

function checkWinner() {
  if (playerScore === 5) {
    alert('You Won the Game!');
    resetGame();
  } else if (computerScore === 5) {
    alert('You Lost the Game.');
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  const resultDiv = document.getElementById('result');

  const roundResult = playRound(playerSelection, computerSelection);
  resultDiv.textContent = roundResult;

  updateScore();
  checkWinner();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rock').addEventListener('click', handleClick);
  document.getElementById('paper').addEventListener('click', handleClick);
  document.getElementById('scissors').addEventListener('click', handleClick);
  
  updateScore();
});