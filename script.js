
// Returns the computer's choice for rock, paper, scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
   

    if (randomNumber == 0) {
        console.log("rock")
       return "rock";
    } else if (randomNumber == 1) {
        console.log("paper")
        return "paper";
    } else {
        console.log("scissors")
       return "scissors";
    }
   
    
}




function getHumanChoice(){
    let userChoice = prompt("Let's play rock, paper, scissors! Please make a choice.");
    console.log(userChoice);
    userChoice = userChoice.toLowerCase();
    return userChoice;
}





function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanFixedChoice, computerChoice){
        

        if (humanFixedChoice == "rock" && computerChoice == "paper"){
            console.log("Computer wins! Paper beats Rock!");
            computerScore++;
        } else if (humanFixedChoice == "rock" && computerChoice == "scissors"){
            console.log("Human wins! Rock beats Scissors!");
            humanScore++;
        } else if (humanFixedChoice == "paper" && computerChoice == "rock"){
            console.log("Human wins! Paper beats Rock!");
            humanScore++;
        } else if (humanFixedChoice == "paper" && computerChoice == "scissors"){
            console.log("Computer wins! Scissors beats Paper!");
            computerScore++;
        } else if (humanFixedChoice == "scissors" && computerChoice == "rock"){
            console.log("Computer wins! Rock beats Scissors!");
            computerScore++;
        } else if (humanFixedChoice == "scissors" && computerChoice == "paper"){
            console.log("Human wins! Scissors beats Paper!");
            humanScore++;
        } else {
            console.log("It's a draw! No one wins!");
        }
    }

    for (let i = 0; i < 5; i++) {
        
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore>computerScore){
        console.log("Human wins the game!")
    } else if (computerScore>humanScore){
        console.log("Computer wins the game!")
    } else {
        console.log("It's a tie! No one wins!")
    }
}

playGame()