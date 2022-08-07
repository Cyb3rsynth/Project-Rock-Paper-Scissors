
//Round win function
function roundWin() {
    console.log("You won this round!", "results");
    playerScore++;
  }
  
  //Round lose function
  function roundLose() {
    console.log("You lost this round", "results");
    compScore++;
  }
  
  //Round tie function
  function roundTie() {
    console.log("It's a Tie!", "results");
    tieScore++;
  }


 //return (playerScore);
 //This code should work for draw, revisit later
 //if (playerChoice === computerSelection) {
  //return ('tie');

  //From here I want to loop the play round 5 times and then output the winner to the console log on each round and a final winner at the end.
//function playGame() {
  //for (let i = 0; i < 10; i++){
  //console.log(playerScore);
  //let gameLoop = playRound(playerChoice, computerSelection);
  //if(playerScore === 5 || compScore === 5) {
 // if(playerScore >= 5);{
 //   return ("Player is the Winner");
 // }
  //if (compScore >= 5);{
 //   return ("Computer is the Winner");
 // }
 // }
//}
//console.log (playGame());
//playGame();


if (
  (compScore === 5) 
    )
  {
  console.log("You lost to a computer, please try again");
  }
  if (
    (playerScore === 5) 
      )
    {
    console.log("Congratulations, you beat a computer!");
    }
    if (
      (tieScore === 5) 
        )
      {
      console.log("You and the computer are equally matched, please try again!");
      } 