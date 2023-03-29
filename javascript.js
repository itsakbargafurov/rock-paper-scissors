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

function printResult (playScore, compScore) {
    // Print the final result
    if (playScore > compScore) {
        return `you won! final result --> ${playScore} : ${compScore}`;   
    } else if (compScore > playScore) {
        return `computer won! final result --> ${playScore} : ${compScore}`;
    } else {
        return `unbelievable! it's a tie! --> ${playScore} : ${compScore}`;
    }
}

function game() {
    // Declare two variables that store the results
    let playerScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < 5; i++) {
        // Declare two variables that store choices
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        // Print the result of a single round
        console.log(`round ${i + 1}`);
        console.log(playRound(playerSelection, computerSelection));

        // Get a string for if-loop
        let string = playRound(playerSelection, computerSelection).slice(0, 8);
        
        // Evaluate the winner or loser
        if (string == "you win!") {
            playerScore++;
        } else if (string == "you lose") {
            computerScore++;
        }
        
    }

    // Print final results
    console.log(printResult(playerScore, computerScore));
}

game();