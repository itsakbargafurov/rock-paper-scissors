function getComputerChoice () {
    let choice = "";

    // Randomly select a number between 1 and 3
    let num = Math.floor((Math.random() * 3) + 1);

    // Make a choice between three options
    if (num == 1) {
        choice = "rock";
    } else if (num == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    
    return choice;
}

function getPlayerChoice () {
    // Get player's choice
    let option = prompt("choose your fighter: ", '').toLowerCase();
    return option;
}

function playRound (player, computer) {
    // Play the game
    if (player == "rock") {
        if (computer == "paper") {
            console.log("you lose! Paper beats Rock.");
        } else if (computer == "scissors") {
            console.log("you win! Rock beats Scissors.");
        } else {
            console.log("it's a tie! Rock ties Rock.");
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            console.log("you win! Paper beats Rock.");
        } else if (computer == "scissors") {
            console.log("you lose. Scissors beat Paper.");
        } else {
            console.log("it's a tie! Paper ties Paper.");
        }
    } else {
        if (computer == "paper") {
            console.log("you win! Scissors beat Paper.");
        } else if (computer == "rock") {
            console.log("you lose! Rock beats Scissors.");
        } else {
            console.log("it's a tie. Scissors tie Scissors")
        }
    }
}

function game() {
    console.log(playRound(playerSelection, computerSelection));
}

// Declare two variables that store choices
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

game();