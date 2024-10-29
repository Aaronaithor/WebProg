const piedra = document.querySelector(".Roca")
const papel = document.querySelector(".Papiro")
const tijera = document.querySelector(".Cizallas")

function getComputerChoice(){
    let choice = Math.random()

    if(choice >= 0 && choice < 0.3)
        return "rock"
    if(choice >= 0.3 && choice < 0.6)
        return "paper"
    if(choice >= 0.6 && choice <= 1)
        return "scissors"
}

function winner(string){
    console.log(string + " wins!")
    if(string == "Human")
        humanScore++
    else
        computerScore++
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            winner("Computer")
            return
        }

        if(computerChoice == "scissors"){
            winner("Human")
            return
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            winner("Computer")
            return
        }

        if(computerChoice == "rock"){
            winner("Human")
            return
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            winner("Computer")
            return
        }
        
        if(computerChoice == "paper"){
            winner("Human")
            return
        }
    }
    
    console.log("It's a tie! Try Again!")
    return
}

function displayScores(){
    console.log("Human: " + humanScore + "\nComputer: " + computerScore)
}

let humanScore = 0
let computerScore = 0

function playGame(){
    let rounds = 0

    while(rounds < 5){
        piedra.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
                humanSelection = "rock";
            }
        }
        )
        
        papel.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
                humanSelection = "paper";
            }
        }
        )
        
        tijera.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
                humanSelection = "scissors";
            }
        }
        )
        

        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        displayScores()
        rounds++
    }

    if(humanScore > computerScore)
        console.log("THE HUMAN WINS!!!!")
    else if (computerScore > humanScore)
        console.log("THE COMPUTER BEATS THE HUMAN!!!")
    else
        console.log("It's a tie!!!!")

}

playGame()
