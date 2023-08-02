let optionsDiv = document.getElementsByClassName('options')[0];
let rockImg = document.getElementById('rock');
let paperImg = document.getElementById('paper');
let scissorsImg = document.getElementById('scissors');

let playerMove = document.getElementById('player').querySelector('p');
let computerMove = document.getElementById('computer').querySelector('p');

let scoreDisplay = document.getElementsByClassName('header')[0].querySelector('p');
let playerScore = 0;
let computerScore = 0;

optionsDiv.addEventListener("click", function(e) {
    let selectedID = e.target.id;
    if(selectedID === "rock" || selectedID === "paper" || selectedID === "scissors") {
        playerMove.textContent = selectedID[0].toUpperCase() + selectedID.slice(1);
        computerMove.textContent = getComputerChoice();
        calculateScore();
        scoreDisplay.textContent = playerScore.toString() + " - " + computerScore.toString();
    }
});

function getComputerChoice() {
    let output = Math.floor(Math.random() * 3);
    switch(output) {
            case 0:
                    return "Rock";
            case 1:
                    return "Paper";
            case 2:
                    return "Scissors";
    }
}

function calculateScore() {
    let playerAction = playerMove.textContent;
    let computerAction = computerMove.textContent;

    if(playerAction === computerAction) {
        computerScore += 1;
        playerScore += 1;
    }
    
    else if(playerAction === "Rock") {
        if(computerAction === "Paper")
            computerScore += 1;
        else
            playerScore += 1;
    }

    else if(playerAction === "Paper") {
        if(computerAction === "Scissors")
            computerScore += 1;
        else
            playerScore += 1;
    }

    else {
        if(computerAction === "Rock")
            computerScore += 1;
        else
            playerScore += 1;
    }
}