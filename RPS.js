let score = document.createElement('p');

let cpuScore = 0;
let playScore = 0;

let computerPlay = () => {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
    return choice;
};

let playRound = (event) => {

    let computerSelection = computerPlay();
    let selection = event.target.id;

    if (computerSelection === 'paper' && selection === 'rock') {
        alert("You choose rock, the CPU choose paper, you LOSE!");
        ++cpuScore;
        console.log('CPU Won ' + cpuScore)
    } else if (computerSelection === 'rock' && selection === 'scissors') {
        alert("You choose scissors, the CPU choose rock, you LOSE!");
        ++cpuScore;
        console.log('CPU Won ' + cpuScore)
    } else if (computerSelection === 'scissors' && selection === 'paper') {
        alert("You choose paper, the CPU choose scissors, you LOSE!");
        ++cpuScore;
        console.log('CPU Won ' + cpuScore)
    } else if (selection === 'paper' && computerSelection === 'rock') {
        alert("You choose rock, the CPU choose paper, you WIN!");
        ++playScore;
        console.log('Player Won ' + playScore)
    } else if (selection === 'rock' && computerSelection === 'scissors') {
        alert("You choose rock, the CPU choose scissors, you WIN!");
        ++playScore;
        console.log('Player Won ' + playScore)
    } else if (selection === 'scissors' && computerSelection === 'paper') {
        alert("You choose scissors, the CPU choose paper, you WIN!");
        ++playScore;
        console.log('Player Won ' + playScore)
    } else if (selection === computerSelection) {
        alert("TIE! You both chose the same thing. Play again.");
        return 0;
    } else {
        alert("Invalid response, please enter again.");
        return 0;

    }

    let clearGame = () => {
        cpuScore = 0;
        playScore = 0;
    }

    if (playScore == 3) {
        alert("You have won the game!")
        clearGame();
        console.clear();
    } else if (cpuScore == 3) {
        alert("You Lost, try again ")
        clearGame();
        console.clear();
    }
};

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});