



// Below code stores score inside LocalStorage as an Obejct
let scoreRecords = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Loses: 0,
  Tie: 0
};



// Below code is function to reset the score
function resetScore() {
  scoreRecords = { Wins: 0, Loses: 0, Tie: 0 };
  localStorage.removeItem("score");

  document.querySelector('.js-scoreCard').innerHTML =
    `GAME RESULTS: Wins: 0 Loses: 0 Tie: 0`;

  document.querySelector('.js-movePlayed').innerHTML = '';
  document.querySelector('.js-result').innerHTML = '';
}



// This code provides a MOVE from computer

function computerChoice(){

    let randomNumber = Math.random(); 
    let computerMove = '';
  
  

  if(randomNumber  >= 0 && randomNumber  <= 1/3){
    computerMove = 'Rock';
  }else if(randomNumber > 1/3 && randomNumber <= 2/3) {
    computerMove = 'Paper';
    
  }else if(randomNumber > 2/3 && randomNumber <= 1) {
    computerMove = 'Scissor';
  }
  return computerMove
}




// This code helps player to Play game and provides result

playGame=(playerMove)=>{
  const computerMove = computerChoice();
    
      
      let result = '';

      if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie, Worse than Losing, Looser'
          }else if(computerMove === 'Paper') {
            result = 'You lose, Lossserrrrrr lollll'
          }else if(computerMove === 'Scissor'){
            result = 'YOu Win! , Must be mistake loser'

          }
      }
      else if(playerMove === 'Scissor') 
        {
        if(computerMove === 'Scissor'){
          result = 'Tie, Worse than Losing, Looser'
        }else if(computerMove === 'Rock') {
          result = 'You lose, Lossserrrrrr lollll'
        }else if(computerMove === 'Paper'){
          result = 'YOu Win! , Must be mistake loser'

        }
      }
      
      else if(playerMove === 'Paper') 
        {
        if(computerMove === 'Paper'){
          result = 'Tie, Worse than Losing, Looser'
        }else if(computerMove === 'Scissor') {
          result = 'You lose, Lossserrrrrr lollll'
        }else if(computerMove === 'Rock'){
          result = 'YOu Win! , Must be mistake loser'

        }
      }

      



      
      
      // This code Updates the Score 
      
      if(result === 'YOu Win! , Must be mistake loser'){
        scoreRecords.Wins = scoreRecords.Wins + 1;
      }else if(result === 'You lose, Lossserrrrrr lollll' ) {
        scoreRecords.Loses = scoreRecords.Loses + 1
      }else if(result === 'Tie, Worse than Losing, Looser') {
        scoreRecords.Tie = scoreRecords.Tie + 1
      }
      
      // This added a line inside HTML, That shows score after updation of points
      document.body.querySelector('.js-scoreCard').innerHTML = `GAME RESULTS: Wins: ${scoreRecords.Wins}  Loses: ${scoreRecords.Loses} Tie: ${scoreRecords.Tie}`
      document.body.querySelector('.js-movePlayed').innerHTML = `You choose ${playerMove} : Computer has choosen ${computerMove}`
      document.body.querySelector('.js-result').innerHTML = `So, ${result}`



     localStorage.setItem("score" , JSON.stringify(scoreRecords))



}






