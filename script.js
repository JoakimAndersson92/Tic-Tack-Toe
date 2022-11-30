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




    let checkIfWon = function () {
        let squares = [...Querys.squares];
        let combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let comb of combos) {
            if (squares[comb[0]].textContent == squares[comb[1]].textContent &&
                squares[comb[1]].textContent == squares[comb[2]].textContent &&
                squares[comb[0]].textContent != '') {
                console.log("winner");
            }
           

        }

    }

   

    return {
        checkIfWon,
    }


}();


const Player = function (marker, turn) {
    let playerScore = 0;
    let playerMarker = marker;
    let playerTurn = turn;

    let chooseSquare = function () {
        if (typeof marker === 'object') return;
        if (playerTurn) {
            this.textContent = marker;
        }
        playerTurn = !playerTurn;

    }

    Querys.squares.forEach(element => {
        element.addEventListener('click', chooseSquare, { once: true });
    });

    return {
        playerScore,
        playerMarker,
        playerTurn,       
    }
}


const GameFlow = function () {
    const firstPlayer = Player("X", true);
    const secondPlayer = Player("O", false);

    Querys.squares.forEach(element => {
        element.addEventListener('click', GameBoard.checkIfWon);
    });



}();




