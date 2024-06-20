const btnArray = document.querySelectorAll('button');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

const textGame = document.querySelector('.container-game-text');
const hChoiceText = document.querySelector('.choice-human');
const cChoiceText = document.querySelector('.choice-computer');
const gResult = document.querySelector('.result');

const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

const win = 'YOU WON !';
const lost = 'YOU LOST !';
const draw = 'THAT\'S A DRAW !';

const cChoice = getComputerChoice();
console.log('computer choice: ', cChoice);
cChoiceText.textContent = `Computer choice: ${cChoice}`

btnArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const hChoice = getHumanChoice(e);
        const gameResult = getGame(hChoice, cChoice);
        console.log('your choice: ', hChoice)
        console.log('results: ', gameResult);
        hChoiceText.textContent = `You\'re choice: ${hChoice}`;
        gResult.textContent = gameResult;
    })
})

function getHumanChoice(e) {
    let humanChoice;
    if (e.target === btnRock) {
        humanChoice = rock;
    } else if (e.target === btnPaper) {
        humanChoice = paper;
    } else if (e.target === btnScissors) {
        humanChoice = scissors
    }
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = ((Math.random()) * 100).toFixed(0);
    if (computerChoice <= 33) {
        computerChoice = rock;
    } else if (computerChoice > 33 && computerChoice <= 66) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }
    return computerChoice
}

function getGame(hChoice, cChoice) {
    let result = '';
    if (hChoice === rock && cChoice === scissors || hChoice === paper && cChoice === rock || hChoice === scissors && cChoice === rock) {
        result = win;
    } else if (hChoice === cChoice) {
        result = draw;
    } else {
        result = lost;
    }
    return result;
}
