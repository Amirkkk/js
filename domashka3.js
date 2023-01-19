function getPlayRound(playerSelection, computerSelection) {
  let computerScore = 0;
  let playerScore = 0;
  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    // computerScore = computerScore + 1;
    return ("Computer Wins");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    // computerScore = computerScore + 1;
    return ("Computer Wins");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore = computerScore + 1;
    return ("Computer Wins");
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    // playerScore = playerScore + 1;
    return("Player Wins");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    // playerScore = playerScore + 1;
    return("Player Wins");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    // playerScore = playerScore + 1;
    return("Player Wins");
  }

  if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return("Tie");
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return("Tie");
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return("Tie");
  }
}

function getComputerChoice(randomPick, randomNumber) {
  randomPick = ["Rock","Paper","Scissors"];
  randomNumber = Math.floor(Math.random() * 3);
  return(randomPick[randomNumber])
}

function getPlayerChoice(playerPick, playerPickItems) {
  playerPickItems = ["Rock","Paper","Scissors"];
  playerPick = prompt("Make your choice:");

    if (playerPick === playerPickItems[0]) {
      return(playerPickItems[0])
    } else if (playerPick === playerPickItems[1]) {
      return(playerPickItems[1])
    }else if (playerPick === playerPickItems[2]) {
      return(playerPickItems[2])
    }
}

function game() {
  for (var i = 0; i < 5; i++) {
    console.log('Round ' + (i + 1));
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const round = getPlayRound(playerSelection, computerSelection);
    console.log(round);
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log("\n");
  }
}
game();


//сделать счетчик раундов
//сделать итогового победителя

// function counter(computerScore, playerScore) {
//   if (computerScore > playerScore) {
//     return("Total win : Computer!");
//   } else if (computerScore < playerScore) {
//     return("Total win: Player!");
//   } else if (computerScore === playerScore) {
//     return("TIE");
//   }
// }
// counter();
