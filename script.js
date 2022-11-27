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


const Player = function (marker, turn) {
    let playerScore = 0;
    let playerMarker = marker;
    let playerTurn = turn;

    let chooseSquare = function ()  {
        if(typeof marker === 'object') return;
        if(playerTurn){
            this.textContent = marker;
        }
        playerTurn = !playerTurn;
    }

    Querys.squares.forEach(element => {
        element.addEventListener('click', chooseSquare, {once : true});
    });

    return{
        playerScore,
        playerMarker,
        playerTurn,
    }
}


const GameFlow = function () {

    const firstPlayer  = Player("X", true);
    const secondPlayer  = Player("O", false);    
     
}();




