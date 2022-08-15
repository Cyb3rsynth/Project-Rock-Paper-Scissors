// Rock paper scissors project - Calling to the console log.
console.log("Rock-Paper-Scissors! Test your might against the Computer! Best out of 5 games wins!");

//Global variables for the R/P/S Project
let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let playerChoice;
let computerSelection = getComputerChoice();

//Function to get a random R/P/S choice from the computer. Using RNG formula
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return ("Rock");
  } else if (randomNum === 1) {
    return ("Paper");
  } else {
    return ("Scissors");
  }  
}


//Function to play one-round of R/P/S and declare a winner or loser of the round in the console log
function playRound(playerChoice, computerSelection) {

  //playerChoice = prompt("Choose Your Fighter!");
  computerSelection = getComputerChoice();
  
    if (
     (playerChoice === 'Rock' && computerSelection === 'Scissors') ||
     (playerChoice === 'Paper' && computerSelection === 'Rock') ||
     (playerChoice === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore+=1;
    console.log(`You Won! You chose ${playerChoice} and the Computer chose ${computerSelection}.`);
  }
   else if (
    (computerSelection === 'Rock' && playerChoice === 'Scissors') ||
    (computerSelection === 'Paper' && playerChoice  === 'Rock') ||
    (computerSelection === 'Scissors' && playerChoice  === 'Paper')
 ) {
  compScore+=1;
  console.log(`LOL, You lost! The Computer chose ${computerSelection} and you chose ${playerChoice}.`);
 }
  if (
  (computerSelection === 'Rock' && playerChoice === 'Rock') ||
  (computerSelection === 'Paper' && playerChoice  === 'Paper') ||
  (computerSelection === 'Scissors' && playerChoice  === 'Scissors')
 ) {
 tieScore+=1;
 console.log(`It's a draw, please try again! ${playerChoice} matches with ${computerSelection}.`);
 }
}

//Function to show game winner and display final results to console log
function gameWinner(playerScore, compScore) {
  if(playerScore === compScore){
    console.log ("It's a draw - Play Again");
  } 
  if(playerScore > compScore){
    console.log ("Player is the Winner");
  }
  if(compScore > playerScore){
    console.log ("Computer is the Winner");
  }
  }

//Function to play the 5 rounds of the game using for loop and declaring a final winner at the end, based on best / 5.
function playGame() {
  for (let i = 0; i < 5; i++) {
  playRound(playerChoice, computerSelection);
 }
  gameWinner(playerScore, compScore); 
}
playGame();
