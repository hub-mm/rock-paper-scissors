const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

const win = 'You won!';
const lost = 'You lost!';
const draw = 'That\'s a draw!';

const winAgain = 'You got lucky this time... Let\'s go again?';
const lostAgain = 'You gave it a good try... Let\'s go again?';


console.log('---------- Round 1 ----------')
const inputHuman = getHumanChoice();
const inputComputer = getComputerChoice();
const inputGameLogic = getGameLogic();
const inputScoreHuman = getScoreHuman();
const inputScoreComputer = getScoreComputer();

const newInputGame = newGame;
const newInputHuman = getHumanChoice;
const newInputComputer = getComputerChoice;
// const newInputGameLogic = getGameLogic;
const newInputScoreHuman = getScoreHuman;
const newInputScoreComputer = getScoreComputer;

let choiceComputer;
let choiceHuman;
let result;
let newScoreHuman;
let newScoreComputer;


function getComputerChoice(choiceComputer) {
    let value = (Math.random() * 100) + 1;
    if (value < 33.33) {
        choiceComputer = rock;
    } else if (value >= 33.33 && value < 66.66) {
        choiceComputer = paper;
    } else if (value >= 66.66) {
        choiceComputer = scissors;
    }
    console.groupCollapsed('Computer: ', choiceComputer);
    console.log('Computer choice value: ', value);
    console.log('Computer choice: ', choiceComputer);
    console.groupEnd();
    return (choiceComputer)
}

function getHumanChoice(choiceHuman) {
    let input = prompt('Rock, paper, scissors... shooot!', '');
    let inputNoCase = input.toLowerCase();

    if (inputNoCase === 'rock' || inputNoCase === 'r') {
        choiceHuman = rock;
    } else if (inputNoCase === 'paper' || inputNoCase === 'p') {
        choiceHuman = paper;
    } else if (inputNoCase === 'scissors' || inputNoCase === 's') {
        choiceHuman = scissors;
    } else {
        console.log('Till next time!');
        return;
    };
    console.groupCollapsed('You: ', choiceHuman);
    console.log('Your input: ', input);
    console.log('Your choice: ', choiceHuman);
    console.groupEnd();
    return (choiceHuman);
}

function getGameLogic(result) {
    if ((inputHuman === rock && inputComputer === scissors) || (inputComputer === scissors && inputHuman === rock)) {
        result = win;
        // setTimeout(getGameLogic, 1000);
    } else if ((inputHuman === paper && inputComputer === rock) || (inputComputer === rock && inputHuman === paper)) {
        result = win;
        // setTimeout(getGameLogic, 1000);
    } else if ((inputHuman === scissors && inputComputer === paper) || (inputComputer === paper && inputHuman === scissors)) {
        result = win;
        // setTimeout(getGameLogic, 1000);
    } else if ((inputHuman === inputComputer) || (inputComputer === inputHuman)) {
        result = draw;
        // setTimeout(getGameLogic, 1000);
    } else {
        result = lost;
        // setTimeout(getGameLogic, 1000);
    }

    console.groupCollapsed(result);
    console.log('Result: ', result);
    console.log('Human input: ', inputHuman);
    console.log('Computer input: ', inputComputer);
    console.groupEnd();
    // setTimeout(getGameLogic, 1000);
    // clearTimeout(getGameLogic);
    // setTimeout(getGameLogic, 10);
    // getGameLogic();
    return (result);
}


function getScoreHuman(newScoreHuman) {
    let scoreHuman = 0;

    if (inputGameLogic === win) {
        newScoreHuman = ++scoreHuman;
    } else if (inputGameLogic === draw) {
        newScoreHuman = ++scoreHuman;
    } else {
        scoreHuman;
    }

    console.groupCollapsed('Your score: ', scoreHuman);
    console.log('Your score: ', newScoreHuman);
    console.log('Result: ', inputGameLogic);
    console.groupEnd();
    return (newScoreHuman);
}

function getScoreComputer(newScoreComputer) {
    let scoreComputer = 0;

    if (inputGameLogic === lost) {
        newScoreComputer = ++scoreComputer;
    } else if (inputGameLogic === draw) {
        newScoreComputer = ++scoreComputer;
    } else {
        scoreComputer;
    }

    console.groupCollapsed('Comupter score: ', scoreComputer);
    console.log('Computer score: ', newScoreComputer);
    console.log('Result: ', inputGameLogic);
    console.groupEnd();
    return (newScoreComputer);
}

function newGame() {
    let restart = 'true';
    if (restart === 'true') {
        restart = confirm('Play another game?', '');
        if (restart) {
            console.log('---------- Round 2 ----------');
            getHumanChoice();
            getComputerChoice();
            getGameLogic();
            newInputScoreHuman();
            newInputScoreComputer();
        } else {
            console.log('Another time then.')

        }
        console.log(restart);
        return;
    }
}
setTimeout(newGame, 1500);