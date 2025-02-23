

function getComputerChoice() {
    const outcomes = ["rock", "paper", "scissors"];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

const rock = document.querySelector("#rock")
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const score = document.getElementById('score')
const resultDiv = document.querySelector('#result')
const overallWinnerDiv = document.querySelector('#overall-winner')

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


rock.addEventListener("click", handleClick)
paper.addEventListener("click", handleClick)
scissors.addEventListener("click", handleClick)

function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == 'rock' && computerChoice == 'scissors' || 
        humanChoice == 'paper' && computerChoice == 'rock' ||
        humanChoice == 'scissors' && computerChoice == 'paper') {
        winner = "player";
        humanScore++;
    } else if (humanChoice == computerChoice) {
        winner = "It's a draw!";
    } else {
        winner = "Computer wins!";
        computerScore++;
    }
    return winner

}

function checkOverallWinner() {
    if (roundsPlayed === 5) {
        let finalMessage = "";
        if (humanScore === 5) {
            finalMessage= "Human is the overall winner!";
        } else {
            finalMessage = "Computer is the overall winner!";
        }
        
        overallWinnerDiv.textContent = finalMessage;
        
        humanScore = 0;
        computerScore = 0;
    }
}

function handleClick(event) {
    if (humanScore < 5 && computerScore < 5) {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice)
        roundsPlayed++;

        resultDiv.textContent = `Player chose: ${humanChoice} | Computer chose: ${computerChoice} | ${winner}`;
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

        checkOverallWinner();
    }
    

}



