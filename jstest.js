
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//Global variables for the R/P/S Project
let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let playerChoice;
let computerSelection = getComputerChoice();

//Refresh the game
resetBtn.addEventListener('click',() => location.reload());


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

//Function to get the player choice from clicking on one of the buttons
document.querySelector("#rockBtn").onclick = () => {
  playRound("Rock"); 
}
document.querySelector("#paperBtn").onclick = () => {
   playRound("Paper"); 
}
document.querySelector("#scissorsBtn").onclick = () => {
   playRound("Scissors"); 
}


//Function to play one-round of R/P/S and declare a winner or loser of the round in the console log
function playRound(playerChoice, computerSelection) {

  computerSelection = getComputerChoice();
  //playerChoice = prompt("Choose Your Fighter!");

    if (
     (playerChoice === 'Rock' && computerSelection === 'Scissors') ||
     (playerChoice === 'Paper' && computerSelection === 'Rock') ||
     (playerChoice === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerPoints.textContent = playerScore+=1
    roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection}`;
    //console.log(`You Won! You chose ${playerChoice} and the Computer chose ${computerSelection}.`);
  }
   else if (
    (computerSelection === 'Rock' && playerChoice === 'Scissors') ||
    (computerSelection === 'Paper' && playerChoice  === 'Rock') ||
    (computerSelection === 'Scissors' && playerChoice  === 'Paper')
 ) {
  computerPoints.textContent = compScore+=1
  roundResults.textContent = `You lose! ${computerSelection} beats ${playerChoice}`;
  //console.log(`LOL, You lost! The Computer chose ${computerSelection} and you chose ${playerChoice}.`);
 }
  if (
  (computerSelection === 'Rock' && playerChoice === 'Rock') ||
  (computerSelection === 'Paper' && playerChoice  === 'Paper') ||
  (computerSelection === 'Scissors' && playerChoice  === 'Scissors')
 ) {
  playerPoints.textContent = playerScore+=1;
  computerPoints.textContent = compScore+=1;
  roundResults.textContent = "Tie!";
  //console.log(`It's a draw, please try again! ${playerChoice} matches with ${computerSelection}.`);
 }
 checkWinner();
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


function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  finalResults.textContent = winnerResults[winner][0];
  finalResults.style.color = winnerResults[winner][1];
}

const winnerResults ={
  computer: ["Uh Oh, the Computer Won!", 'black'],
  player: ["You Beat the Computer!", 'purple'],
  tie: ["It's a Tie!", 'black']
}
