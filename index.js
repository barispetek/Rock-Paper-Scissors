function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
  
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return 'You Win! ' + playerSelection + ' beats ' + computerSelection + '.';
    } else if (playerSelection === computerSelection) {
      return 'It\'s a Tie! Computer also chose ' + computerSelection + '.';
    } else {
      return 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }
  }
  
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Rock, Paper, or Scissors?');
      const computerSelection = getComputerChoice();
  
      console.log(playRound(playerSelection, computerSelection));
  
      const roundResult = playRound(playerSelection, computerSelection);
      if (roundResult.includes('You Win!')) {
        playerScore++;
      } else if (roundResult.includes('You Lose!')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You Won the Game! Score: ' + playerScore + '-' + computerScore);
    } else if (playerScore < computerScore) {
      console.log('You Lost the Game. Score: ' + playerScore + '-' + computerScore);
    } else {
      console.log('The Game is a Tie. Score: ' + playerScore + '-' + computerScore);
    }
  }
  
  playGame();