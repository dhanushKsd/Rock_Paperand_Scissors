




playGame=(playerMove)=>{
  const computerMove = computerChoice();
    
      
      let resultRock = '';

      if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            resultRock = 'Tie, Worse than Losing, Looser'
          }else if(computerMove === 'Paper') {
            resultRock = 'You lose, Lossserrrrrr lollll'
          }else if(computerMove === 'Scissor'){
            resultRock = 'YOu Win! , Must be mistake loser'

          }
      console.log(resultRock)

      alert(`You chose ${playerMove} and computer chose ${computerMove}, So ${resultRock}`)
      }
      else if(playerMove === 'Scissor') {
          const computerMove = computerChoice();
  
   let resultScissor = '';


      if(computerMove === 'Scissor'){
        resultScissor = 'Tie, Worse than Losing, Looser'
      }else if(computerMove === 'Rock') {
        resultScissor = 'You lose, Lossserrrrrr lollll'
      }else if(computerMove === 'Paper'){
        resultScissor = 'YOu Win! , Must be mistake loser'

      }
      console.log(resultScissor)

  alert(`You chose ${playerMove} and computer chose ${computerMove}, So ${resultScissor}`)

  

        
      }
      
      else if(playerMove === 'Paper') {
        const computerMove = computerChoice();

        
        let result = '';
        if(computerMove === 'Paper'){
          result = 'Tie, Worse than Losing, Looser'
        }else if(computerMove === 'Scissor') {
          result = 'You lose, Lossserrrrrr lollll'
        }else if(computerMove === 'Rock'){
          result = 'YOu Win! , Must be mistake loser'

        }
        console.log(result)

        alert(`You chose ${playerMove} and computer chose ${computerMove}, So ${result}`)

      }
}





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
