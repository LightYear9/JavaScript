const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors')
    {
      return userInput;
      }
      else
      {
        console.log('error');
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
    if(userChoice === computerChoice)
        {return 'It\'s a tie!';}
    else if(userChoice === 'rock' && computerChoice === 'paper')
        {return 'computer wins!';}
    else if(userChoice === 'paper' && computerChoice === 'scissors')
        {return 'computer wins!';}
    else if(userChoice === 'scissors' && computerChoice === 'rock')
        {return 'computer wins!';}
    else{
        {return 'Player wins!';}
     }
}

var userChoice = getUserChoice('scissors');
var computerChoice = getComputerChoice();
console.log('Computer chooses: ' + computerChoice);
console.log('Player chooses: '+ userChoice);
console.log(determineWinner(userChoice, computerChoice));

//console.log(getUserChoice('mock'));
