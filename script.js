
const Querys = function () {
    let container = document.querySelector('.container');
    let squareWrapper = document.querySelector('#square-wrapper');
    let squares = document.querySelectorAll('.squares');
    let playerSelect = document.querySelector('#player-select');
    let pvPButton = document.querySelector('#pvp');
    let pvAButton = document.querySelector('#pva');
    let winScreen = document.querySelector('#win-screen');
    let replayButton = document.querySelector('#replay-button');

    return {
        container,
        squareWrapper,
        squares,
        playerSelect,
        pvPButton,
        pvAButton,
        winScreen,
        replayButton,
    }
}();

console.log(Querys.replayButton);

const GameBoard = function () {
    let allowMarker = true;
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
                Querys.winScreen.style.display = "block";
                GameBoard.allowMarker = false;

                Querys.squares.forEach(square => {
                    square.removeEventListener('click', checkIfWon);
                });


            }
            else if (squares.every((square) => square.textContent != '')) {
                Querys.winScreen.style.display = "block";
                Querys.winScreen.firstElementChild.textContent = "Its a tie!";
                GameBoard.allowMarker = false;
                Querys.squares.forEach(square => {
                    square.removeEventListener('click', checkIfWon);
                });
            }

        }

    }
    return {
        checkIfWon,
        allowMarker,
    }
}();


const Player = function (marker, turn) {
    let playerScore = 0;
    let playerMarker = marker;
    let playerTurn = turn;

    let chooseSquare = function () {
        if (typeof marker === 'object' || GameBoard.allowMarker == false) return;
        if (playerTurn) {
            this.textContent = marker;
            console.log("mark");
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
        chooseSquare,
    }
}




const GameFlow = function () {

    let generatePlayersShowBoard = function () {
        let firstPlayer = Player("X", true);
        let secondPlayer = Player("O", false);

        Querys.playerSelect.style.display = "none";
        Querys.squareWrapper.style.display = "grid";

        Querys.squares.forEach(element => {
            element.addEventListener('click', GameBoard.checkIfWon, { once: true });
        });
        return firstPlayer, secondPlayer;
    }

    Querys.pvPButton.addEventListener('click', generatePlayersShowBoard);




}();


const ResetGame = function () {

    let reloadPage = function () {
        window.location.reload();
    }
    
    Querys.replayButton.addEventListener('click', reloadPage);
}();



