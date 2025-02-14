const outcomes = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return outcomes[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let userChoice;

    do {
        userChoice = prompt("Enter 'rock', 'paper, or 'scissors:").toLowerCase();
        if (userChoice == null) {
            console.log("You canceled the prompt.")
            break;
        }
    } while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors");

    console.log("You chose: " + userChoice)
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Player wins!");
        winner = "player";
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("Player wins!");
        winner = "player";
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Player wins!");
        winner = "player";
    } else if (humanChoice == computerChoice) {
        console.log("It's a draw!");
    } else {
        console.log("Computer wins!");
        winner = "computer"
    }
    return winner
}



function playGame() {
    // for (var i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundWinner = playRound(humanSelection, computerSelection)
        if (roundWinner == 'player') {
            humanScore += 1
        } else if (roundWinner == 'computer') {
            computerScore += 1
        }
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
// }

playGame()
