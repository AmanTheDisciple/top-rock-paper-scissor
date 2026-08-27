function getSystemChoice(){
    let choice = Math.random()*10;
    if(choice<=3.33){
        return "rock";
    }else if(choice<=6.66){
        return "paper";
    }else{
        return "scissor";
    }
}

let roundNumber=0;

function playRound(choice){

    let systemScore=document.querySelector(".system");
    let ningenScore=document.querySelector(".human");

    let systemChoice=getSystemChoice();
    let ningenChoice=choice;

    let res=document.querySelector(".result");
    
    if(systemChoice=="rock"){
        if(ningenChoice=="rock"){
            res.textContent="Rock vs Rock. Draw!";
            roundNumber++;
        }
        else if(ningenChoice=="paper"){
            res.textContent="Rock vs Paper. You Win!";
            ningenScore.textContent= +ningenScore.textContent + 1;
            roundNumber++;
        }else if(ningenChoice=="scissors" || ningenChoice=="scissors"){
            res.textContent="Rock vs Scissors. You Lose.";
            systemScore.textContent=+systemScore.textContent + 1;
            roundNumber++;
        }else{
            res.textContent="Wrong input,try again";
        }
    }else if(systemChoice=="paper"){
            if(ningenChoice=="rock"){
                res.textContent="Paper vs Rock. You Lose.";
                systemScore.textContent = +systemScore.textContent + 1;
                roundNumber++;
            }
            else if(ningenChoice=="paper"){
                res.textContent="Paper vs Paper. Draw.";
                roundNumber++;
            }else if(ningenChoice=="scissors" || ningenChoice=="scissors"){
                res.textContent="Paper vs Scissors. You Win!";
                ningenScore.textContent= +ningenScore.textContent + 1;
                roundNumber++;
            }else{
                res.textContent="Wrong input, try again.";
            }
    }else{
            if(ningenChoice=="rock"){
                res.textContent="Scissors vs Rock. You Win.";
                ningenScore.textContent= +ningenScore.textContent + 1;
                roundNumber++;
            }
            else if(ningenChoice=="paper"){
                res.textContent="Scissors vs Paper. You Lose.";
                systemScore.textContent= +systemScore.textContent+1;
                roundNumber++;
            }else if(ningenChoice=="scissors" || ningenChoice=="scissors"){
                res.textContent="Scissors vs Scissors. Draw.";
                roundNumber++;
            }else{
                res.textContent="Wrong input, try again.";
            }
    }
    
    if(roundNumber>=5){
        systemScore=systemScore.textContent;
        ningenScore=ningenScore.textContent;

        document.querySelector(".rock").remove();
        document.querySelector(".paper").remove();
        document.querySelector(".scissors").remove();

        if(systemScore>ningenScore){
            res.textContent="System- "+systemScore+" Ningen- "+ningenScore+" You Lose";
            
        }else if(ningenScore>systemScore){
            res.textContent="System- "+systemScore+" Ningen- "+ningenScore+" You Win";
            
        }else{
            res.textContent="System- "+systemScore+" Ningen- "+ningenScore+" Draw";
            
        }

    }

}

let test=document.querySelector(".human");
console.log(test.textContent);

document.querySelector(".rock").addEventListener("click",()=> playRound("rock"));
document.querySelector(".paper").addEventListener("click",()=>playRound("paper"));
document.querySelector(".scissors").addEventListener("click",()=>playRound("scissors"));
