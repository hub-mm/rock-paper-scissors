let compChoice;

function getComputerChoice(compChoice) {
    let random = (Math.random() * 100) + 1;
    if (random <= 33.333) {
        compChoice = 'rock';
    } else if (random > 33.333 && random <= 66.666) {
        compChoice = 'scissors';
    } else {
        compChoice = 'paper';
    }
}
getComputerChoice();



let humanChoice = 'rock';
function getHumanChoice(humanChoice) {
    let input = prompt('Choose wisely! Rock, paper or scissors...', 'Rock, Paper, Scissors (you can type: R, P or S)');
    if (input === 'rock' || input === 'Rock' || input === 'r' || input === 'R') {
        humanChoice = 'ROCK';
        console.log(`Your choice is: ${humanChoice}`);
    } else if (input === 'paper' || input === 'Paper' || input === 'p' || input === 'P') {
        humanChoice = 'PAPER';
        console.log(`Your choice is: ${humanChoice}`);
    } else if (input === 'scissors' || input === 'Scissors' || input === 's' || input === 'S') {
        humanChoice = 'SCISSORS';
        console.log(`Your choice is: ${humanChoice}`);
    } else {
        console.log('You scared to loose? Put in the right text and face me!');
    }
}
getHumanChoice();