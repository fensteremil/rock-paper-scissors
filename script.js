function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber == 0 ? 'rock' : randomNumber == 1 ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        return 'tie';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
            playerSelection === 'paper' && computerSelection === 'rock' || 
            playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }
    else {
        return 'lose';
    }
}

function playGame() {
    let wins = 0;

    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt('Input either "Rock", "Paper" or "Scissors to play this Game!"');
        playerSelection = playerSelection.toLowerCase();
        
        // show warning and redo if the user input is wrong
        if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            alert(`Your input "${playerSelection}" does not match the available input options. please try again.`);
            index--;
            continue;
        }

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            wins++;
        } else if (result === 'tie') {
            wins += 0.5;
        }
    }
    return wins;
}

console.log(playGame());