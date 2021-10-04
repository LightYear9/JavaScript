const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'||
    userInput === 'bomb'
    )
    {
      return userInput;
      }
      else
      {
        console.log('error');
        return false;
      }

}

const getComputerChoice = () => {
   switch( Math.floor(Math.random()*3)){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  default:
    return 'error';
}
}

const determineWinner = (userChoice, computerChoice) => {

    //bomb is secret cheat code
    if(userChoice==='bomb')
        return 'Player wins!';
    else if(userChoice === computerChoice)
        return 'It\'s a tie!';
    else if(userChoice === 'rock' && computerChoice === 'paper')
        return 'computer wins!';
    else if(userChoice === 'paper' && computerChoice === 'scissors')
        return 'computer wins!';
    else if(userChoice === 'scissors' && computerChoice === 'rock')
        return 'computer wins!';
    else{
        return 'Player wins!';
     }
}


var userChoice = getUserChoice('bomb');
var computerChoice = getComputerChoice();

//if(userChoice === true){
console.log('Computer chooses: ' + computerChoice);
console.log('Player chooses: '+ userChoice);
console.log(determineWinner(userChoice, computerChoice));
//}
//else{ console.log('No Winner!');}
