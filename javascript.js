// Rock paper scissors project!

// Get a choice from the computer that's either 'rock', 'paper' or 'scissors'
//We’ll use this function in the game to make the computer’s play. Tip:console to make sure this is returning the expected output before moving to the next step!


// Get input from the user for either 'rock', 'paper' or 'scissors'

// Play a round of rock paper scissors with the playerSelection and computerSelection - 
// And then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Use a loop function to play the 5 rounds

console.log("Rock-Paper-Scissors! Test your might against the Computer!");

let playerScore = 0;
let compScore = 0;
let playerChoice = getPlayerChoice();
const computerSelection = getComputerChoice();
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
//getComputerChoice();

//Player Selection

function getPlayerChoice() {
  result = prompt("Choose Your Fighter!");
  return result;
}


//Play Round of Game Logic works within game and grabs input from player Choice
function playRound(playerChoice, computerSelection) {

  if (playerChoice === computerSelection) {
    //return ('tie');
    console.log ("It's a Draw!")
  }
  if (
     (playerChoice === 'Rock' && computerSelection === 'Scissors') ||
     (playerChoice === 'Paper' && computerSelection === 'Rock') ||
     (playerChoice === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    //return ('player');
  console.log("You Win!")
  }
  if (
    (computerSelection === 'Rock' && playerChoice === 'Scissors') ||
    (computerSelection === 'Paper' && playerChoice  === 'Rock') ||
    (computerSelection === 'Scissors' && playerChoice  === 'Paper')
 ) {
  compScore++;
  //return ('computer');
 console.log("You Lose!")
 }


  }

console.log(playRound(playerChoice, computerSelection));

//Tested output from here and prior, codes works before game set up

//From here I want to loop the play round 5 times and then output the winner to the console log on each round and a final winner at the end.
function playGame() {

  //if(playerScore === 5 || computerScore === 5) {
// winner();

}


//function to show game winner and display final results to console log
function gameWinner() {


}

