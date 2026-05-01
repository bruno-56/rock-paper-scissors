// Check if the js is linked correctly
console.log("Hello, world!");
let humanScore = 0;
let computerScore = 0; 
// Create a new function called getComputerChoice
function playGame() {function getComputerChoice() {
        let number = Math.floor(Math.random() * 3);
        if (number === 0) {
            number = "rock";
        } else if (number === 1) {
            number = "paper";
        } else {
            number = "scissors";
        }
        return number;
    }
    // Create a new function called getHumanChoice
    function getHumanChoice() {
    let choice = prompt('Rock, paper or scissors?');

    if (!choice) {
        alert("Invalid choice.");
        return getHumanChoice();
    }

    choice = choice.toLowerCase();

    if (!["rock", "paper", "scissors"].includes(choice)) {
        alert("Invalid choice.");
        return getHumanChoice();
    }

    return choice;
}
    // Assign the computer's choice and the human's choice to variables

    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();

    // Alert the computer's choice and the human's choice, then determine the winner

    alert(`Computer choice: ${computerChoice}`);
    alert(`Your choice: ${humanChoice}`);
    
    // Determine the winner and update the scores accordingly

    if (computerChoice === humanChoice) {
        alert("It's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;    
        alert("Computer wins!");
    } else {
        humanScore++;
        alert("You win!");
    }
}
// Play the game 5 times and keep track of the score

for (let i = 0; i < 5; i++) {
    playGame();
}

// After 5 rounds, alert the final score and declare the overall winner

alert(`Final Score:\nComputer: ${computerScore}\nYou: ${humanScore}`);
if (computerScore > humanScore) {
    alert("Computer wins the game!");
} else if (humanScore > computerScore) {
    alert("You win the game!");
} else {
    alert("The game is a tie!");
}

