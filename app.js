let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const gameDraw = () =>{
    msg.innerText="Game was Draw";
    msg.style.backgroundColor = "#081b31"
    
};

const showWinner = (userWin) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText="You loose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        //Draw
        gameDraw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin=compChoice ==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice === "scissors" ? false:true;
        }else{
            //rock,paper
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});