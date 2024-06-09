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
console.log(compChoice)
}
getComputerChoice();