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
            return "you lose! Paper beats Rock.";
        } else if (computer == "scissors") {
            return "you win! Rock beats Scissors.";
        } else {
            return "it's a tie! Rock ties Rock.";
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            return "you win! Paper beats Rock.";
        } else if (computer == "scissors") {
            return "you lose! Scissors beat Paper.";
        } else {
            return "it's a tie! Paper ties Paper.";
        }
    } else {
        if (computer == "paper") {
            return "you win! Scissors beat Paper.";
        } else if (computer == "rock") {
            return "you lose! Rock beats Scissors.";
        } else {
            return "it's a tie. Scissors tie Scissors";
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        // Declare two variables that store choices
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        // Print the result of the game
        console.log(playRound(playerSelection, computerSelection));
    }   
}

game();