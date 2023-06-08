// define a variable userName
let userName = 'Raman';
// define a default userName
const defaultUserName = 'User';
// ternary expression - take a value for userName
userName ? userName : userName = defaultUserName;
// ternary expression - checks userName to welcome
userName ? console.log(`Hello, ${userName}`) : console.log('Error');
// define variable with users question
let userQuestion = 'Do you like books?';
// write the users question
console.log(`${userQuestion} - question by ${userName}`);
// define random number variable for answers
let randomNumber = Math.floor(Math.random() * 8);
// define the answer variable
let eightBall = '';
// creating the control flow for answers
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Signs point to yes';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    default:
        eightBall = 'Error';
        break;
}
//log the answer
console.log(`${userName}, here is the answer - ${eightBall}`);