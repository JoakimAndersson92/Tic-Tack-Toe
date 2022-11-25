const GameBoard = function () {

    //create wrapper and append to container with id.
    let container = document.querySelector('.container');
    let createDiv = document.createElement('div');
    createDiv.id = "square-wrapper";
    container.appendChild(createDiv);
    let squareWrapper = document.querySelector('#square-wrapper');

    // generate squares and add class.
    for (let i = 0; i < 9; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add("squares");
        squareWrapper.appendChild(createDiv);
    }

    // add squares to boardArray
    let containerChilds = document.querySelectorAll('.container>div');
    let boardArray = Array.from(containerChilds);

    

    //Listen for click on each square
    let listenForCLick = () => {
        console.log("click");
    }
    let squares = document.querySelectorAll('.squares');

    squares.forEach(element => {
        element.addEventListener('click', listenForCLick);
    });
        
    

    return {
        boardSquares: boardArray,
        containerChilds,
    }

}();


const Player = function (score, isHuman) {
    let playerScore = score;
    let Human = isHuman;

    let chooseSquare = (choice) => {
        console.log("ds");
    }

    return{
        score : playerScore,
        isHuman : isHuman,
    }
}

const GameFlow = function () {

}();




