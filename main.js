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

    let reloadWindow = () => {
        location.reload();
    }


    let clearGame = () => {
        cpuScore = 0;
        playScore = 0;
        let clean = document.getElementById('container');
        clean.remove();
        let button = document.createElement("button");
        button.textContent = "Restart Game"; 
        let btn = document.getElementById("btn")
        btn.appendChild(button);
        button.addEventListener("click", reloadWindow);
    }


    if (playScore == 2 && cpuScore == 2) {
        //Not assigning varaible so text doesn't keep popping up.
        hype.textContent = `Oh Snap! We gotta close one here! NEXT POINT WINS!`

    } else if (playScore == 3) {
        let para = document.createElement("p");
        para.innerText = "You have won the game";
        let outcome = document.getElementById('score')
        outcome.appendChild(para);
        let clearHype = document.getElementById('hype');
        clearHype.remove();
        clearGame();        
        console.clear();


    } else if (cpuScore == 3) {
        let para = document.createElement("p");
        para.innerText = "Tough break, You lost";
        let outcome = document.getElementById('score')
        outcome.appendChild(para);
        let clearHype = document.getElementById('hype');
        clearHype.remove();
        clearGame();
        console.clear();



    }

};

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});