function getCompChoice(compChoice) {
    let random = (Math.random() * 100) + 1;
    if (random <= 33.333) {
        compChoice = 'ROCK';
        return (compChoice);
    } else if (random > 33.333 && random <= 66.666) {
        compChoice = 'SCISSORS';
        return (compChoice);
    } else if (random > 66.666 && random <= 100) {
        compChoice = 'PAPER';
        return (compChoice);
    }
}

function getHumanChoice(humanChoice) {
    let input = prompt('Choose wisely! Rock, paper or scissors...', 'Rock, Paper, Scissors (you can type: R, P or S)');
    if (input === 'rock' || input === 'Rock' || input === 'r' || input === 'R') {
        humanChoice = 'ROCK';
        // console.log(`Your choice is: ${humanChoice}`);
        return (humanChoice);
    } else if (input === 'paper' || input === 'Paper' || input === 'p' || input === 'P') {
        humanChoice = 'PAPER';
        // console.log(`Your choice is: ${humanChoice}`);
        return (humanChoice);
    } else if (input === 'scissors' || input === 'Scissors' || input === 's' || input === 'S') {
        humanChoice = 'SCISSORS';
        // console.log(`Your choice is: ${humanChoice}`);
        return (humanChoice);
    } else {
        console.log('You scared to loose? Put in the right text and let\'s do this!');
    }
}

const humanChoice = getHumanChoice();
console.log('Your choice: ', humanChoice);
const compChoice = getCompChoice();
console.log('Computer choice: ', compChoice);

let compScore = 0;
let humanScore = 0;

function playRound(humanChoice, compChoice) {
    let result = 'lost';
    if ((compChoice === 'ROCK' && humanChoice === 'SCISSORS') || (humanChoice === 'SCISSORS' && compChoice === 'ROCK')) {
        humanScore++;
        console.log('You won!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
    } else if ((compChoice === 'PAPER' && humanChoice === 'ROCK') || (humanChoice === 'ROCK' && compChoice === 'PAPER')) {
        humanScore++;
        console.log('You won!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
    } else if ((compChoice === 'SCISSORS' && humanChoice === 'PAPER') || (humanChoice === 'PAPER' && compChoice === 'SCISSORS')) {
        humanScore++;
        console.log('You won!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
    } else if ((compChoice === 'ROCK' && humanChoice === 'PAPER') || (humanChoice === 'PAPER' && compChoice === 'ROCK')) {
        compScore++;
        console.log('You lost!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
    } else if ((compChoice === 'PAPER' && humanChoice === 'SCISSORS') || (humanChoice === 'SCISSORS' && compChoice === 'PAPER')) {
        compScore++;
        console.log('You lost!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
    } else if ((compChoice === 'SCISSORS' && humanChoice === 'ROCK') || (humanChoice === 'ROCK' && compChoice === 'SCISSORS')) {
        compScore++;
        console.log('You lost!');
        console.log('Your score: ', humanScore)
        console.log('Computer score: ', compScore)
        } else if (compChoice === humanChoice) {
            humanScore++;
            compScore++;
            console.log('That\'s a draw! What are the chances of that huh?! 33.33% actually ;) ')
            console.log('Your score: ', humanScore)
            console.log('Computer score: ', compScore)
    }
}

playRound(compChoice, humanChoice);