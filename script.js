const Querys = function () {
    let container = document.querySelector('.container');
    let squareWrapper = document.querySelector('#square-wrapper');
    let squares = document.querySelectorAll('.squares');

    return {
        container,
        squareWrapper,
        squares,
    }
}();


const GameBoard = function () {
     
}();


const Player = function (marker) {
    let playerScore = 0;
    let playerMarker = marker;

    let chooseSquare = function ()  {
        if(typeof marker === 'object') return;
        this.textContent = marker;
    }

    Querys.squares.forEach(element => {
        element.addEventListener('click', chooseSquare);
    });

    return{
        playerScore,
        playerMarker,
    }
}

const newPlayer  = Player("X");

const GameFlow = function () {

     
}();




