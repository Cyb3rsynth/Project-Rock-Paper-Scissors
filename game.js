
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

    if (
     (playerChoice === 'Rock' && computerSelection === 'Scissors') ||
     (playerChoice === 'Paper' && computerSelection === 'Rock') ||
     (playerChoice === 'Scissors' && computerSelection === 'Paper')
  ) {
    
    playerPoints.textContent = playerScore+=1
    roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection}`;

    if (playerScore == 5) {
      finalResults.textContent = ["You Beat the Computer!"];
  }

  }
   else if (
    (computerSelection === 'Rock' && playerChoice === 'Scissors') ||
    (computerSelection === 'Paper' && playerChoice  === 'Rock') ||
    (computerSelection === 'Scissors' && playerChoice  === 'Paper')
 ) {
  computerPoints.textContent = compScore+=1
  roundResults.textContent = `You lose! ${computerSelection} beats ${playerChoice}`;

  if (compScore == 5) {
    finalResults.textContent = ["Uh Oh, the Computer Won!"];
}

 }
  if (
  (computerSelection === 'Rock' && playerChoice === 'Rock') ||
  (computerSelection === 'Paper' && playerChoice  === 'Paper') ||
  (computerSelection === 'Scissors' && playerChoice  === 'Scissors')
 ) {
  playerPoints.textContent = playerScore+=0;
  computerPoints.textContent = compScore+=0;
  tieScore++;
  roundResults.textContent = "Tie!";

  if (compScore == 5 || playerScore == 5) {
    finalResults.textContent = ["It's a Tie!"];
}
 
 }
 isGameOver();
}

const winnerResults = {
  computer: ["Uh Oh, the Computer Won!"],
  player: ["You Beat the Computer!"],
  tie: ["It's a Tie!"]
}

function isGameOver() {
  if (playerScore == 5 || compScore == 5) {
  playerPoints.textContent = playerScore;
  computerPoints.textContent = compScore;
  winnerResults.textContent = '';
  rockBtn.disabled = true;
  scissorsBtn.disabled = true;
  paperBtn.disabled = true;
  }
}
