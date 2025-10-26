
function playGame(){

    let humanScore=0;
    let computerScore=0;
    
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

    function playRound(humanChoice,computerChoice){
        humanChoice=humanChoice.toLowerCase();
        console.log(`Computer: ${computerChoice}!
You: ${humanChoice}!`);
        switch(humanChoice){
            case "scissor":
                switch(computerChoice){
                    case "paper":
                    return 1;
                case "scissor":
                    return 0;
                case "rock":
                    return -1;
                }
            case "rock":
                switch(computerChoice){
                    case "paper":                
                        return -1;
                    case "rock":
                        return 0;
                    case "scissor":
                        return 1;
                }
            case "paper":
                switch(computerChoice){
                    case "rock":
                        return 1;
                    case "paper":
                        return 0;
                    case "scissor":
                        return -1;
                }
            }       
    }

    let computerChoice;
    let humanChoice;

    for(let i=0;i<5;i++){
        console.log(`Round ${i}`);
        console.log(`Score
                     You - Computer
                     ${humanScore} | ${computerScore}`);
        computerChoice=getComputerChoice();
        humanChoice=getHumanChoice();
        let outcome=playRound(humanChoice,computerChoice);
        if(outcome==1){
            console.log("You Win!");
            humanScore++;
        }else if(outcome==0){
            console.log("Tie!");
        }else{
            console.log('You Lose!');
            computerScore++;
        }
    }

    if(humanScore>computerScore){
        console.log(`You are the ultimate winner!
                     Score
                     You - Computer
                     ${humanScore} | ${computerScore}`);
    }else if(humanScore<computerScore){
        console.log(`You have lost this game
                     Score
                     You - Computer
                     ${humanScore} | ${computerScore}`);
    }else{
        console.log(`It was a tie
                     Score
                     You - Computer
                     ${humanScore} | ${computerScore}`);
    }
}

playGame();

