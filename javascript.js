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

// Declare two variables that store choices
const playerSelection = prompt("Choose your fighter: ", '').toLowerCase();
const computerSelection = getComputerChoice();