function playGame(){
    
    let rock=document.getElementById("rock");
    let paper=document.getElementById('paper');
    let scissors=document.getElementById("scissors");
    let rematch=document.getElementById('rematch');
    let buttonsActive=true;

    let humanScoreNode = document.querySelector("#human-score").querySelector('.player-score');
    let computerScoreNode = document.querySelector("#computer-score").querySelector('.player-score');

    let outcomeMessageNode = document.querySelector(".outcome");
    let roundNumber=document.querySelector('.round-number');
    
    rock.addEventListener('click',()=>{
        if(buttonsActive===false){
            return;
        }
        let computerChoice=getComputerChoice();
        let humanChoice="rock";

        // OUTCOME
        let outcome = resolveRound(humanChoice,computerChoice);
        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                roundNumber.textContent= +roundNumber.textContent + 1;        
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
        }

        if(roundNumber.textContent==6){
            roundNumber.textContent=5;
            document.querySelector('.prompt').textContent=matchResult();
            buttonsActive=false;
            let rematchButton=document.querySelector('#rematch');
            rematchButton.style['display']="block";
        }
    })

    paper.addEventListener('click',()=>{
        if(buttonsActive===false){
            return;
        }
        let computerChoice=getComputerChoice();
        let humanChoice="paper";

        // OUTCOME
        let outcome = resolveRound(humanChoice,computerChoice);
        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                roundNumber.textContent= +roundNumber.textContent + 1;        
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
        }

        if(roundNumber.textContent==6){
            roundNumber.textContent=5;
            document.querySelector('.prompt').textContent=matchResult();
            buttonsActive=false;
            let rematchButton=document.querySelector('#rematch');
            rematchButton.style['display']="block";
        }
    })

    scissors.addEventListener('click',()=>{
        if(buttonsActive===false){
            return;
        }
        let computerChoice=getComputerChoice();
        let humanChoice="scissors";

        // OUTCOME
        let outcome = resolveRound(humanChoice,computerChoice);
        switch(outcome){
            case 1:
                let humanScore = humanScoreNode.textContent;
                humanScore = +humanScore + 1;
                humanScoreNode.textContent=humanScore;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "You Win!";
                roundNumber.textContent= +roundNumber.textContent + 1;        
                break;
            case -1:
                let computerScore = computerScoreNode.textContent;
                computerScore = +computerScore + 1;
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                computerScoreNode.textContent=computerScore;
                outcomeMessageNode.textContent = "You Lose";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
            case 0:
                document.querySelector('#human-score').querySelector('.player-choice').textContent=humanChoice;
                document.querySelector('#computer-score').querySelector('.player-choice').textContent=computerChoice;
                outcomeMessageNode.textContent = "Tie!";
                roundNumber.textContent= +roundNumber.textContent + 1;
                break;
        }

        if(roundNumber.textContent==6){
            roundNumber.textContent=5;
            document.querySelector('.prompt').textContent=matchResult();
            buttonsActive=false;
            let rematchButton=document.querySelector('#rematch');
            rematchButton.style['display']="block";
        }
    })

    rematch.addEventListener('click',()=>{
        buttonsActive=true;
        humanScoreNode.textContent=0;
        computerScoreNode.textContent=0;
        outcomeMessageNode.textContent="-";
        document.querySelector('.prompt').textContent="Make your choice:";
        roundNumber.textContent=1;
        document.querySelector('#rematch').style['display']="none";
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

    function resolveRound(humanChoice,computerChoice){
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

    function matchResult(){
        let humanScore = humanScoreNode.textContent;
        let computerScore = computerScoreNode.textContent;

        if(humanScore>computerScore){
            return "Congrats, You have won this match!";
        }else if(computerScore>humanScore){
            return "Sorry, but you lost this one.";
        }else
            return "It was a tie!";
    }

}

playGame();

