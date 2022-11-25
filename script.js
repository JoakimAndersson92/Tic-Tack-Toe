const GameBoard = function () {
    let container = document.querySelector('.container');
    let createDiv = document.createElement('div');
    createDiv.id = "square-wrapper";
    container.appendChild(createDiv);
    let squareWrapper = document.querySelector('#square-wrapper');


    for (let i = 0; i < 9; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add("squares");
        squareWrapper.appendChild(createDiv);
    }


    let containerChilds = document.querySelectorAll('.container>div');
    let boardArray = Array.from(containerChilds);
    return {
        boardSquares: boardArray,

    }

}();

const Player = function (score, isHuman) {
    let playerScore = score;
    let Human = isHuman;

    let chooseSquare = (choice) => {

    }

    return{
        score : playerScore,
        isHuman : isHuman,
    }
}

const GameFlow = function () {

}();




