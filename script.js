function getComputerChoice(){
    let randomNumber=Math.random()*10;
    if(randomNumber<=3){
        return "rock";
    }else if(randomNumber<=6){
        return "paper";
    }else{
        return "scissor";
    }
}

function getHumanChoice(){
    return prompt('Enter rock, paper or scissor');
    
}

let humanScore=0;
let computerScore=0;

let computerChoice=getComputerChoice();
let humanChoice=getHumanChoice();
function playRound(humanChoice,computerChoice,humanScore,computerScore){
    humanChoice=humanChoice.toLowerCase();
    console.log(`Computer: ${computerChoice}!
                 You: ${humanChoice}!);
    if(humanChoice=="scissor"){
        switch(computerChoice){
            case "paper":
                console.log(`Computer: ${computerChoice}!
                             You: ${humanChoice}!
                             You Win!`);
                humanScore++;
                return;
            case "scissor":
                console.log(`Computer: ${computerChoice}!
                             You: ${humanChoice}!
                             Tie!`);
        }
    }
}
