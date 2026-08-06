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

function getNingenChoice(){
    let choice=prompt("Enter your choice");
    choice=choice.toLowerCase();
    return choice;
}

function playGame(){
    let systemScore=0;
    let ningenScore=0;
    let roundNumber=0;

    while(roundNumber<5){
        let systemChoice=getSystemChoice();
        let ningenChoice=getNingenChoice();

        if(systemChoice=="rock"){
            if(ningenChoice=="rock"){
                console.log("Rock vs Rock. Draw!");
                roundNumber++;
            }
            else if(ningenChoice=="paper"){
                console.log("Rock vs Paper. You Win!");
                ningenScore++;
                roundNumber++;
            }else if(ningenChoice=="scissor" || ningenChoice=="scissors"){
                console.log("Rock vs Scissors. You Lose.");
                systemScore++;
                roundNumber++;
            }else{
                console.log("Wrong input, try again.");
            }
        }else if(systemChoice=="paper"){
            if(ningenChoice=="rock"){
                console.log("Paper vs Rock. You Lose.");
                systemScore++;
                roundNumber++;
            }
            else if(ningenChoice=="paper"){
                console.log("Paper vs Paper. Draw.");
                roundNumber++;
            }else if(ningenChoice=="scissor" || ningenChoice=="scissors"){
                console.log("Paper vs Scissors. You Win!");
                ningenScore++;
                roundNumber++;
            }else{
                console.log("Wrong input, try again.");
            }
        }else{
            if(ningenChoice=="rock"){
                console.log("Scissors vs Rock. You Win.");
                ningenScore++;
                roundNumber++;
            }
            else if(ningenChoice=="paper"){
                console.log("Scissors vs Paper. You Lose.");
                systemScore++;
                roundNumber++;
            }else if(ningenChoice=="scissor" || ningenChoice=="scissors"){
                console.log("Scissors vs Scissors. Draw.");
                roundNumber++;
            }else{
                console.log("Wrong input, try again.");
            }
        }
            
    }

    if(systemScore>ningenScore){
        console.log("System-",systemScore,"Ningen-",ningenScore,"You Lose");
    }else if(ningenScore>systemScore){
        console.log("System-",systemScore,"Ningen-",ningenScore,"You Win");
    }else{
        console.log("System-",systemScore,"Ningen-",ningenScore,"Draw");
    }
    
}

playGame();