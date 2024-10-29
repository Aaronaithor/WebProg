let color = "black";

function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i  = 0; i < size*size; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            if(color == 'black')
                square.style.backgroundColor = color;
            else if (color == 'random'){
                let r = Math.floor(Math.random()*256);
                let g = Math.floor(Math.random()*256);
                let b = Math.floor(Math.random()*256);
                square.style.backgroundColor = "rgb(" + r + "," + g + "," +b +")";
            }
        })
        square.style.backgroundColor = "white";
        square.style.borderColor = "black";
        square.style.borderWidth = '1px';
        board.insertAdjacentElement("beforeend",square);
    }
}

populateBoard(16);

function changeSize(input){
    if(input > 100)
        input = 100;
    if(input < 1)
        input = 16;
    populateBoard(input);
}

function changeColor(input){
    color = input;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}