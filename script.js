let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const roundResult = document.getElementById("round-result");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function updateScore() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5) {
        roundResult.textContent = "🎉 You won the game!";
        disableButtons();
    }

    if (computerScore === 5) {
        roundResult.textContent = "💀 Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);
        roundResult.textContent = result;

        updateScore();
        checkWinner();
    });
});
