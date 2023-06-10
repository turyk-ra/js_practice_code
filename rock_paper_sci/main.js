//create a func that takes user choice
const getUserChoice = userInput => {
    //the user can write variable in different capitalization
    userInput = userInput.toLowerCase();
    //validation check for user input
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('invalid value');
    }
};
//create a func that takes computer choice
const getComputerChoice = () => {
    let computerChoice = '';
    let computerRandomChoice = Math.floor(Math.random() * 3);
    switch (computerRandomChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log('invalid value');
    }
    return computerChoice;
};
//create a func to determine who's a winner
const determineWinner = (userInput, computerChoice) => {
    if (userInput === computerChoice) {
        return 'tie';
    }
    if (userInput === 'bomb') {
        return 'You absolutely won this game';
    }
    if (userInput === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
    if (userInput === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
    if (userInput === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
}
// create a func where the game will start
function playGame() {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
//start the game
playGame();