/* function printResult (playScore, compScore) {
    // Print the final result
    if (playScore > compScore) {
        return `you won! final result --> ${playScore} : ${compScore}`;   
    } else if (compScore > playScore) {
        return `computer won! final result --> ${playScore} : ${compScore}`;
    } else {
        return `unbelievable! it's a tie! --> ${playScore} : ${compScore}`;
    }
} */

/* function game() {
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

game(); */

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

function playRound (player, computer) {
    // Play the game
    if (player == "rock") {
        if (computer == "paper") {
            return "you lose!";
        } else if (computer == "scissors") {
            return "you win!";
        } else {
            return "it's a tie!";
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            return "you win!";
        } else if (computer == "scissors") {
            return "you lose!";
        } else {
            return "it's a tie!";
        }
    } else {
        if (computer == "paper") {
            return "you win!";
        } else if (computer == "rock") {
            return "you lose!";
        } else {
            return "it's a tie!";
        }
    }
}

function displayComputer (para, computer) {
    if (computer == "rock") {
        para.textContent = "🪨";
    } else if (computer == "paper") {
        para.textContent = "📜";
    } else if (computer == "scissors") {
        para.textContent = "✂️";
    }
}

function determineWinner (player, str) {
    if (str == "you win!") {
        return `${player} beats ${computerSelection}`
    } else if (str == "you lose!") {
        return `${computerSelection} beats ${player}`
    } else {
        return `${player} ties with ${computerSelection}`
    }
}

let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

// select paragraphs with player and computer scores
const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#computer-score");

// select paragraphs with player and computer choices
const para1 = document.querySelector("#player-choice");
const para2 = document.querySelector("#computer-choice");

// select scoreboard elements
const head3 = document.querySelector("#score-info");
const para5 = document.querySelector("#score-message");

// select score elements
const para3 = document.querySelector("#player-score");
const para4 = document.querySelector("#computer-score");

// select rock button
const rock = document.querySelector("#rock");

rock.addEventListener("click", () => {
   head3.textContent = playRound("rock", computerSelection);
   para1.textContent = "🪨";
   para5.textContent = determineWinner("rock", head3.textContent);
   displayComputer(para2, computerSelection);
});

// select paper button
const paper = document.querySelector("#paper");

paper.addEventListener("click", () => {
    head3.textContent = playRound("paper", computerSelection);
    para1.textContent = "📜";
    para5.textContent = determineWinner("paper", head3.textContent);
    displayComputer(para2, computerSelection);
});

// select scissors button
const scissors = document.querySelector("#scissors");

scissors.addEventListener("click", () => {
    head3.textContent = playRound("scissors", computerSelection);
    para1.textContent = "✂️";
    para5.textContent = determineWinner("scissors", head3.textContent);
    displayComputer(para2, computerSelection);
});


