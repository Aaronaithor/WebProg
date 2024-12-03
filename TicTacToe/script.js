const displayController = (message) => {
    let result = document.createElement("div");
    result.classList.add("result");
    result.style.backgroundColor = `rgba(153,153,153,0.75)`;
    let board = document.querySelector(".gameboard");
    result.innerHTML = message;
    board.insertAdjacentElement("beforeend",result);
}

const Gameboard = (() => {

    const render = () => {
        let board = document.querySelector(".gameboard");
        let boardthings = board.querySelectorAll("div");boardthings.forEach((div) => div.remove());

       for(let i  = 0; i < 9; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = "square-"+i.toString();
            square.addEventListener("click", Game.handleClick);
            board.insertAdjacentElement("beforeend",square);
        }
    }

    const update = (id, mark) => {
        const currentSquare = document.getElementById(id);
        if(currentSquare.innerHTML === ""){
            currentSquare.innerHTML = mark;
            return true;
        }
        return false;
    }

    return{
        render,
        update
    }
})();

const CreatePlayer = (name,mark) => {
    return{
        name,
        mark
    }
}

const Game = (() =>{
    let players = [];
    let currentPlayerIdx;
    let gameOver;

    const start = () => {
        players = [
            CreatePlayer(document.getElementById("player1").value,"X"),
            CreatePlayer(document.getElementById("player2").value,"O")
        ];
        currentPlayerIdx = 0;
        gameOver = false;
        Gameboard.render();
    }

    const handleClick = (event) =>{
        if(gameOver){
            return;
        }

        const id = event.target.id;

        if(!Gameboard.update(id, players[currentPlayerIdx].mark)){
            return;
        }
        
        if(isGameOver()){
            gameOver = true;    
            displayController(`${players[currentPlayerIdx].name} won!`);
        }else if(isTie()){
            gameOver = true;
            displayController("It's a tie!");
        }

        currentPlayerIdx = currentPlayerIdx === 0 ? 1 : 0;
    }

    return{
        start,
        handleClick
    }
})();

function isGameOver(){
    const s0 = document.getElementById("square-0").innerHTML;
    const s1 = document.getElementById("square-1").innerHTML;
    const s2 = document.getElementById("square-2").innerHTML;
    const s3 = document.getElementById("square-3").innerHTML;
    const s4 = document.getElementById("square-4").innerHTML;
    const s5 = document.getElementById("square-5").innerHTML;
    const s6 = document.getElementById("square-6").innerHTML;
    const s7 = document.getElementById("square-7").innerHTML;
    const s8 = document.getElementById("square-8").innerHTML;
    
    if(
        s0 && (s0 == s1 && s0 == s2) ||
        s3 && (s3 == s4 && s3 == s5) ||
        s6 && (s6 == s7 && s6 == s8) ||
        s0 && (s0 == s3 && s0 == s6) ||
        s1 && (s1 == s4 && s1 == s7) ||
        s2 && (s2 == s5 && s2 == s8) ||
        s0 && (s0 == s4 && s0 == s8) ||
        s2 && (s2 == s4 && s2 == s6)
    ){
        return true;
    }

    return false;

}

function isTie(){
    const s0 = document.getElementById("square-0").innerHTML;
    const s1 = document.getElementById("square-1").innerHTML;
    const s2 = document.getElementById("square-2").innerHTML;
    const s3 = document.getElementById("square-3").innerHTML;
    const s4 = document.getElementById("square-4").innerHTML;
    const s5 = document.getElementById("square-5").innerHTML;
    const s6 = document.getElementById("square-6").innerHTML;
    const s7 = document.getElementById("square-7").innerHTML;
    const s8 = document.getElementById("square-8").innerHTML;

    if(s0 && s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8)
        return true;

    return false;
}

const startButton = document.getElementById("startbtn");
startButton.addEventListener("click",()=>{Game.start()});

const restartButton = document.getElementById("restartbtn");
restartButton.addEventListener("click", () =>{Game.start()});

