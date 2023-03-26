function getComputerChoice () {
    let choice = "";

    // randomly select a number between 1 and 3
    let num = Math.floor((Math.random() * 3) + 1);

    // make a choice between three options
    if (num == 1) {
        choice = "Rock";
    } else if (num == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    
    return choice;
}