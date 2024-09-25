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
let humanChoice = prompt("What is Your choice?");
humanChoice = humanChoice.toLowerCase();
return humanChoice;
}

function playRound(humanChoice, computerChoice) {

if(humanChoice == "rock" && computerChoice == "paper") {
    console.log("You Lose! Paper beats rock!");
    computerScore++;
}
else if(humanChoice == "scissor" && computerChoice == "paper"){
    console.log("You Win! Scissor beats Paper");
    humanScore++;
}
else if(humanChoice == "rock" && computerChoice == "scissor"){
    console.log("You Win! rock beats scissor");
    humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "rock"){
    console.log("You Win! paper beats rock");
    humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "scissor"){
    console.log("You Lose scissor beats paper");
    computerScore++;
}
else if(humanChoice == "sicssor" && computerChoice == "rock"){
    console.log("You Lose rock beats scissor");
    computerScore++;
} 
else if (humanChoice == computerChoice){
    console.log("TIE!");
}



}

  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);

