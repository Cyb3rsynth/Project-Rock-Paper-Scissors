// Rock paper scissors project!

// Get a choice from the computer that's either 'rock', 'paper' or 'scissors'
//We’ll use this function in the game to make the computer’s play. Tip:console to make sure this is returning the expected output before moving to the next step!


// Get input from the user for either 'rock', 'paper' or 'scissors'

// Play a round of rock paper scissors with the playerSelection and computerSelection - 
// And then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Use a loop function to play the 5 rounds

let computerPick = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;



// Function to randomly generate computer choices for game

function getComputerChoice () {
    let result = computerPick[Math.floor(Math.random() * computerPick.length)];
    //return result;
    console.log (result);
  }

getComputerChoice();

// Function to generate and a prompt and pick for player choice

function getPlayerChoice () {
     
}
getPlayerChoice();


// Function to play a round of the game
function playRound(playerSelection, computerSelection) {

 }

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));
  






 



