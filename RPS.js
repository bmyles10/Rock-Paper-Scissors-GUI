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
        ++cpuScore;
        score.textContent = `CPU chose paper, you chose rock, you lose. 
        CPU - ${cpuScore}
        You - ${playScore}`;

    } else if (computerSelection === 'rock' && selection === 'scissors') {
        ++cpuScore;
        score.textContent = `CPU chose rock, you chose scissors. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else if (computerSelection === 'scissors' && selection === 'paper') {
        ++cpuScore;
        score.textContent = `CPU chose scissors, you chose paper. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else if (selection === 'paper' && computerSelection === 'rock') {
        ++playScore;
        score.textContent = `You chose paper, CPU chose rock. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else if (selection === 'rock' && computerSelection === 'scissors') {
        ++playScore;
        score.textContent = `You chose rock, CPU chose scissors. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else if (selection === 'scissors' && computerSelection === 'paper') {
        ++playScore;
        score.textContent = `You chose scissors, CPU chose paper. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else if (selection === computerSelection) {
        score.textContent = `Tie! Choose again. 
        CPU - ${cpuScore}
        You - ${playScore}`;
    } else {
        alert("Invalid response, please enter again.");
    }

    let clearGame = () => {
        cpuScore = 0;
        playScore = 0;
    }

    let removeElement

    if (playScore == 2 && cpuScore == 2) {
        hype.textContent = `Oh Shit! We gotta close one here! NEXT POINT WINS!`
    } else if (playScore == 3) {
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