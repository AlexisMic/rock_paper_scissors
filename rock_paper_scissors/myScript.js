
function playerPlay() {
    let playerSelection = prompt("What's your move? ");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return playerSelection;
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection == computerSelection) {
        message = "It's a tie, play again!";
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            message = "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            message = "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissor") {
            message = "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            message = "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else {
        if (computerSelection == "Rock") {
            message = "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            message = "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }
    return message;
}

function firstFunction() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        document.getElementById('demo').innerHTML = playRound(playerSelection, computerPlay());
    }
    
}
