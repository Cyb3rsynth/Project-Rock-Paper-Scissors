// Rock paper scissors project!

// Get a choice from the computer that's either 'rock', 'paper' or 'scissors'
//We’ll use this function in the game to make the computer’s play. Tip:console to make sure this is returning the expected output before moving to the next step!


// Get input from the user for either 'rock', 'paper' or 'scissors'

// Play a round of rock paper scissors with the playerSelection and computerSelection - 
// And then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Use a loop function to play the 5 rounds

console.log("Rock-Paper-Scissors! Test your might against the Computer! Best out of 5 games wins!");

let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let playerChoice;
//const playerChoice = getPlayerChoice();
let computerSelection = getComputerChoice();
const gameInputs = ["Rock", "Paper", "Scissors"];


//Computer Play - This one is working and finalized now.
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

//Player Selection

//function getPlayerChoice(playerChoice) {
//result = prompt("Choose Your Fighter!");
//return result;
//}
//Function works for player play

//Play Round of Game Logic works within game and grabs input from player Choice
function playRound(PlayerChoice, computerSelection) {

  playerChoice = prompt("Choose Your Fighter!");
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

//playRound(playerChoice,computerSelection);

//Tested output from here and prior, codes works before game set up

//function to show game winner and display final results to console log
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

function playGame() {
  for (let i = 0; i < 5; i++) {
  playRound(playerChoice, computerSelection);
 }
 gameWinner(playerScore, compScore); 
}
playGame();








