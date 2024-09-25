let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
let number = Math.floor(Math.random() * 3);
if(number == 0){
    return "rock";
} else if(number == 1){
    return "paper";
}
else {
    return "scissor";
}
}

function getHumanChoice() {
return prompt("What is your choise?");
}

function playRound(humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();
if(humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats rock!");
    computerScore++;
}
else if(humanChoice == "scissor" && computerChoice == "paper"){
    console.log("you win scissor beats paper");
    humanScore++;
}
else if(humanChoice == "rock" && computerChoice == "scissor"){
    console.log("you win rock beats scissor");
    humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "rock"){
    console.log("you win paper beats rock");
    humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "scissor"){
    console.log("you lose scissor beats paper");
    computerScore++;
}

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
