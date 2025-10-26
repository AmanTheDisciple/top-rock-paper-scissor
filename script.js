function playGame(){
    
    let rock=document.getElementById("rock");
    let paper=document.getElementById('paper');
    let scissors=document.getElementById("scissors");

    let humanScoreNode = document.querySelector("#human-score").querySelector('.player-score');
    let computerScoreNode = document.querySelector("#computer-score").querySelector('.player-score');

    let outcomeMessageNode = document.querySelector(".outcome");

    // FIVE ROUND LOOP
    
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
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                break;
        }
    })

    paper.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();
        let humanChoice="paper";

        console.log('Human choice is '+humanChoice);
        console.log("Computer choice is "+computerChoice);

        let outcome = playRound(humanChoice,computerChoice);

        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                break;
        }
    })

    scissors.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();
        let humanChoice="scissors";

        console.log('Human choice is '+humanChoice);
        console.log("Computer choice is "+computerChoice);

        let outcome = playRound(humanChoice,computerChoice);

        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                break;
        }
    })

    function getComputerChoice(){
        let randomNumber=Math.random()*10;
        if(randomNumber<=3){
            return "rock";
        }else if(randomNumber<=6){
            return "paper";
        }else{
            return "scissors";
        }
    }

    function playRound(humanChoice,computerChoice){
        switch(humanChoice){
            case "scissors":
                switch(computerChoice){
                    case "paper":
                    return 1;
                case "scissors":
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
                    case "scissors":
                        return 1;
                }
            case "paper":
                switch(computerChoice){
                    case "rock":
                        return 1;
                    case "paper":
                        return 0;
                    case "scissors":
                        return -1;
                }
            }       
    }


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

