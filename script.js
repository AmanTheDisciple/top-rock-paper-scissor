function playGame(){
    
    let rock=document.getElementById("rock");
    let paper=document.getElementById('paper');
    let scissors=document.getElementById("scissors");

    let humanScoreNode = document.querySelector("#human-score").querySelector('.player-score');
    let computerScoreNode = document.querySelector("#computer-score").querySelector('.player-score');

    let outcomeMessageNode = document.getElementsByClassName("outcome");

    rock.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();
        let humanChoice="rock";

        console.log('Human choice is '+humanChoice);
        console.log("Computer choice is "+computerChoice);

        let outcome = playRound(humanChoice,computerChoice);

        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                outcomeMessageNode.textContent = "You Win!";
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
            case 0:
                outcomeMessageNode.textContent = "Tie!";
        }

    })

    paper.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();
        let humanChoice="rock";

        console.log("Computer choice is "+computerChoice);

        let outcome = playRound(humanChoice,computerChoice);

        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                outcomeMessageNode.textContent = "You Win!";
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
            case 0:
                outcomeMessageNode.textContent = "Tie!";
        }

    })
    
    scissors.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();
        let humanChoice="rock";

        console.log("Computer choice is "+computerChoice);

        let outcome = playRound(humanChoice,computerChoice);

        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                outcomeMessageNode.textContent = "You Win!";
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
            case 0:
                outcomeMessageNode.textContent = "Tie!";
        }

    })



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

    

    function playRound(humanChoice,computerChoice){
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

    // --->FIVE ROUNDS<---

    // for(let i=0;i<5;i++){
    //     console.log(`Round ${i}`);
    //     console.log(`Score
    //                  You - Computer
    //                  ${humanScore} | ${computerScore}`);
    //     computerChoice=getComputerChoice();
    //     humanChoice=getHumanChoice();
    //     let outcome=playRound(humanChoice,computerChoice);
    //     if(outcome==1){
    //         console.log("You Win!");
    //         humanScore++;
    //     }else if(outcome==0){
    //         console.log("Tie!");
    //     }else{
    //         console.log('You Lose!');
    //         computerScore++;
    //     }
    // }

    // --------------------------------------

    // --->OVERALL WINNER<---
    
    // if(humanScore>computerScore){
    //     console.log(`You are the ultimate winner!
    //                  Score
    //                  You - Computer
    //                  ${humanScore} | ${computerScore}`);
    // }else if(humanScore<computerScore){
    //     console.log(`You have lost this game
    //                  Score
    //                  You - Computer
    //                  ${humanScore} | ${computerScore}`);
    // }else{
    //     console.log(`It was a tie
    //                  Score
    //                  You - Computer
    //                  ${humanScore} | ${computerScore}`);
    // }


}

playGame();

