const buttonContainer = document.querySelector('.container-buttons');
const btnArray = document.querySelectorAll('button');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

const gameText = document.querySelector('.container-game-text')

const choice = document.querySelector('.choice');
const hChoiceText = document.querySelector('.choice-human');
const cChoiceText = document.querySelector('.choice-computer');

const resultContainer = document.querySelector('.container-result');
const gResult = document.querySelector('.game-result');
const hPoint = document.querySelector('.point-human');
const cPoint = document.querySelector('.point-computer');

const endText = document.querySelector('.end-game');
const div = document.createElement('div');
const btnReplay = document.createElement('button');

const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

const win = 'YOU WON !';
const lost = 'YOU LOST !';
const draw = 'THAT\'S A DRAW !';

let humanPoint = 0;
let computerPoint = 0;

btnArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const hChoice = getHumanChoice(e);
        const playGame = startGame(hChoice);
        const active = endGame(playGame);
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
    if (hChoice === rock && cChoice === scissors || hChoice === paper && cChoice === rock || hChoice === scissors && cChoice === paper) {
        result = win;
    } else if (hChoice === cChoice) {
        result = draw;
    } else {
        result = lost;
    }
    return result;
}

function getPointArray(gameResult) {
    if (gameResult === win) {
        humanPoint++;
    } else if (gameResult === lost) {
        computerPoint++;
    }
    arrayPoint = [humanPoint, computerPoint];
    return arrayPoint;
}

function startGame(hChoice) {
    if (hChoice === rock || hChoice === paper || hChoice === scissors) {
        const cChoice = getComputerChoice();
        const gameResult = getGame(hChoice, cChoice);
        const arrayScore = getPointArray(gameResult);
        const hScore = arrayScore[0];
        const cScore = arrayScore[1];

        console.log('your choice: ', hChoice)
        console.log('computer choice: ', cChoice);
        console.log('results: ', gameResult);
        console.log(arrayScore);

        hChoiceText.textContent = `Your choice: ${hChoice}`;
        cChoiceText.textContent = `Computer choice: ${cChoice}`
        gResult.textContent = gameResult;
        hPoint.textContent = `Your score: ${hScore}`;
        cPoint.textContent = `Computer score: ${cScore}`;

        choice.appendChild(hChoiceText);
        choice.appendChild(cChoiceText);
        resultContainer.appendChild(gResult);
        resultContainer.appendChild(hPoint);
        resultContainer.appendChild(cPoint);
        return arrayScore;
    }
}

function endGame(playGame) {
    btnReplay.textContent = 'REPLAY';
    let gameActive;
    if (playGame[0] === 5) {
        gameActive = false;
        endText.textContent = 'YOU\'VE WON 5 ROUNDS CONGRATS!';
        gameText.appendChild(endText);
        endText.appendChild(div);
        div.appendChild(btnReplay);
        btnReplay.addEventListener('click', resetGame);
        btnRock.remove();
        btnPaper.remove();
        btnScissors.remove();
    } else if (playGame[1] === 5) {
        gameActive = false;
        endText.textContent = 'YOU\'VE LOST, BETTER LUCK NEXT TIME!';
        gameText.appendChild(endText);
        endText.appendChild(div);
        div.appendChild(btnReplay);
        btnReplay.addEventListener('click', resetGame);
        btnRock.remove();
        btnPaper.remove();
        btnScissors.remove();
    } else if (playGame[0] >= 0 && playGame[1] >= 0) {
        gameActive = true;
    }
    return gameActive;
}

function resetGame() {
    humanPoint = 0;
    computerPoint = 0;

    hChoiceText.remove();
    cChoiceText.remove();
    gResult.remove();
    hPoint.remove();
    cPoint.remove();
    endText.remove();
    btnReplay.remove();

    buttonContainer.appendChild(btnRock);
    buttonContainer.appendChild(btnPaper);
    buttonContainer.appendChild(btnScissors);
}