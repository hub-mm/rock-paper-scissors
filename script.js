const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

const win = 'You won!';
const lost = 'You lost!';
const draw = 'That\'s a draw!';

const setRound = 3;

console.warn('|------------ ROUND 1 ------------|')

let humanScore = 0;
let computerScore = 0;
let roundAmount = 1;

function getComputerChoice() {
    let value = (Math.random() * 100) + 1;
    let computerChoice;

    if (value < 33.33) {
        computerChoice = rock;
    } else if (value >= 33.33 && value < 66.66) {
        computerChoice = paper;
    } else if (value > 66.66) {
        computerChoice = scissors;
    }

    console.groupCollapsed('Computer choice: ', computerChoice);
    console.log('Computer choice value: ', value);
    console.groupEnd();
    return (computerChoice);
}

function getHumanChoice() {
    let input = prompt('Rock, paper, scissors... SHOOT!', '');
    let inputNoCase;
    let humanChoice;

    if (input === null) {
        inputNoCase = input;
    } else {
        inputNoCase = input.toLowerCase();
    }

    if (inputNoCase === 'rock' || inputNoCase === 'r') {
        humanChoice = rock;
        console.groupCollapsed('Your choice: ', humanChoice);
        console.log('Your choice input: ', input);
        console.groupEnd();
        return (humanChoice);
    } else if (inputNoCase === 'paper' || inputNoCase === 'p') {
        humanChoice = paper;
        console.groupCollapsed('Your choice: ', humanChoice);
        console.log('Your choice input: ', input);
        console.groupEnd();
        return (humanChoice);
    } else if (inputNoCase === 'scissors' || inputNoCase === 's') {
        humanChoice = scissors;
        console.groupCollapsed('Your choice: ', humanChoice);
        console.log('Your choice input: ', input);
        console.groupEnd();
        return (humanChoice);
    } else {
        if (confirm('Are you sure you want to leave?')) {
            console.log('Till next time.');
            return null;
        } else {
            playGame();
        }
    }
}

function playRound(humanChoice, computerChoice) {
    let gameResult;

    if ((humanChoice === rock && computerChoice === scissors) || (humanChoice === paper && computerChoice === rock) || (humanChoice === scissors && computerChoice === paper)) {
        gameResult = win;
    } else if (humanChoice === computerChoice) {
        gameResult = draw;
    } else {
        gameResult = lost;
    }

    console.groupCollapsed(gameResult);
    console.log('Your choice: ', humanChoice);
    console.log('Computer choice: ', computerChoice);
    if (gameResult === win) {
        console.log(`${humanChoice} beats ${computerChoice}`);
    } else if (gameResult === draw) {
        console.log(`${computerChoice} draw ${humanChoice}`)
    } else {
        console.log(`${computerChoice} beats ${humanChoice}`)
    }
    console.groupEnd();
    return (gameResult);
}

function keepScore(gameResult) {
    let whoInLead;

    if (gameResult === win) {
        ++humanScore;
        ++roundAmount;
    } else if (gameResult === lost) {
        ++computerScore;
        ++roundAmount;
    } else if (gameResult === draw) {
        ++roundAmount;
    }

    if (humanScore === setRound) {
        whoInLead = 'Well done, you WON';
    } else if (computerScore === setRound) {
        whoInLead = 'You LOST, better luck next time';
    } else if (humanScore > computerScore) {
        whoInLead = 'You\'re winning';
    } else if (humanScore < computerScore) {
        whoInLead = 'You\'re loosing';
    } else if (humanScore === computerScore) {
        whoInLead = 'You\'re neck and neck';
    }

    console.groupCollapsed(`Your score: ${humanScore} vs Computer score: ${computerScore}. ${whoInLead}!`);
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
    console.log('Result: ', gameResult);
    console.groupEnd();
}

function playGame() {
    const humanChoice = getHumanChoice();

    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) {
        const computerChoice = getComputerChoice();
        const gameResult = playRound(humanChoice, computerChoice);
        keepScore(gameResult);

        if (humanScore === setRound || computerScore === setRound) {
            restartGame();
        } else if (humanScore < setRound && computerScore < setRound) {
            console.warn(`|------------ ROUND ${roundAmount} ------------|`)
            playGame();
        }
    }
}

function startGame() {
    if (confirm(`Rock, Paper, Scissors? Best of ${setRound}?`)) {
        playGame();
    } else {
        console.clear();
        console.log('Till next time.');
    }
}

function restartGame() {
    if (confirm('Another game?')) {
        humanScore = humanScore * 0;
        computerScore = computerScore * 0;
        roundAmount = (roundAmount * 0) + 1;
        console.warn('|------------ END GAME ------------|');
        console.warn('|------------ ROUND 1 ------------|')
        playGame();
    } else if (active = 'true') {
        console.log('Till next Time.');
    }
}

startGame();

console.warn('|------------ END GAME ------------|')