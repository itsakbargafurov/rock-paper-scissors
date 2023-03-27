function getComputerChoice () {
    let choice = "";

    // randomly select a number between 1 and 3
    let num = Math.floor((Math.random() * 3) + 1);

    // make a choice between three options
    if (num == 1) {
        choice = "rock";
    } else if (num == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    
    return choice;
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

// Declare two variables that store choices
const playerSelection = prompt("choose your fighter: ", '').toLowerCase();
const computerSelection = getComputerChoice();