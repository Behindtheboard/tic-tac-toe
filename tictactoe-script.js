const Gameboard = (function () {
    const gameBoardArray = [['r1c1','r1c2','r1c3'], ['r2c1','r2c2','r2c3'], ['r3c1','r3c2','r3c3']];
    let [rowOne, rowTwo, rowThree] = gameBoardArray;
    const displayBoard = () => gameBoardArray;

    const resetBoard = function() {
        rowOne[0] = 'r1c1'
        rowOne[1] = 'r1c2'
        rowOne[2] = 'r1c3'
        rowTwo[0] = 'r2c1'
        rowTwo[1] = 'r2c2'
        rowTwo[2] = 'r2c3'
        rowThree[0] = 'r3c1'
        rowThree[1] = 'r3c2'
        rowThree[2] = 'r3c3'
    }
    
    const pickSquare = function(square, mark) {
        if (square.includes('r1') === true && rowOne.includes(square) === true) {
            rowOne[rowOne.indexOf(square)] = mark;
        } else if (square.includes('r2') === true && rowTwo.includes(square) === true) {
            rowTwo[rowTwo.indexOf(square)] =  mark;
        } else if (square.includes('r3') === true && rowThree.includes(square) === true) {
            rowThree[rowThree.indexOf(square)] =  mark;
        } else {
            return false;
        }
    }

    const winKey = () => {
        if ((rowOne[0] == 'x' && rowOne[1] == 'x' && rowOne[2] == 'x') || (rowOne[0] == 'o' && rowOne[1] == 'o' && rowOne[2] == 'o')) {
            return true
        } else if ((rowTwo[0] == 'x' && rowTwo[1] == 'x' && rowTwo[2] == 'x') || (rowTwo[0] == 'o' && rowTwo[1] == 'o' && rowTwo[2] == 'o')) {
            return true
        } else if ((rowThree[0] == 'x' && rowThree[1] == 'x' && rowThree[2] == 'x') || (rowThree[0] == 'o' && rowThree[1] == 'o' && rowThree[2] == 'o')) {
            return true
        } else if ((rowOne[0] == 'x' && rowTwo[0] == 'x' && rowThree[0] == 'x') || (rowOne[0] == 'o' && rowTwo[0] == 'o' && rowThree[0] == 'o')) {
            return true
        } else if ((rowOne[1] == 'x' && rowTwo[1] == 'x' && rowThree[1] == 'x') || (rowOne[1] == 'o' && rowTwo[1] == 'o' && rowThree[1] == 'o')) {
            return true
        } else if ((rowOne[2] == 'x' && rowTwo[2] == 'x' && rowThree[2] == 'x') || (rowOne[2] == 'o' && rowTwo[2] == 'o' && rowThree[2] == 'o')) {
            return true
        } else if ((rowOne[0] == 'x' && rowTwo[1] == 'x' && rowThree[2] == 'x') || (rowOne[0] == 'o' && rowTwo[1] == 'o' && rowThree[2] == 'o')) {
            return true
        } else if ((rowOne[2] == 'x' && rowTwo[1] == 'x' && rowThree[0] == 'x') || (rowOne[2] == 'o' && rowTwo[1] == 'o' && rowThree[0] == 'o')) {
            return true
        }
    }

    let tick = 'x';
    const markSwitch = function() {
        if (tick === 'x') {
            tick = 'o';
        } else if (tick === 'o') {
            tick = 'x';
        }
    }
    const getTick = () => tick;


    return {displayBoard, pickSquare, winKey, resetBoard, getTick, markSwitch, rowOne}
})();

const selectSquare = function (event) {
    const {pickSquare, getTick, markSwitch} = Gameboard;

    let xo;

    const createMark = (sq) => {
            getTick() === 'x' ? xo = 'X' : xo = 'O'
            sq.textContent = xo;
    }

    const displayText = (text) => {
        display.textContent = text;
    }

    switch(event.target.id) {       
        case 'r1c1':
            pickSquare('r1c1', getTick()) === false ? displayText('Already Selected') : (createMark(r1c1), markSwitch());
        break;
        case 'r1c2':
            pickSquare('r1c2', getTick()) === false ? displayText('Already Selected') : (createMark(r1c2), markSwitch());
        break;
        case 'r1c3':
            pickSquare('r1c3', getTick()) === false ? displayText('Already Selected') : (createMark(r1c3), markSwitch());
        break;
        case 'r2c1':
            pickSquare('r2c1', getTick()) === false ? displayText('Already Selected') : (createMark(r2c1), markSwitch());
        break;
        case 'r2c2':
            pickSquare('r2c2', getTick()) === false ? displayText('Already Selected') : (createMark(r2c2), markSwitch());
        break;
        case 'r2c3':
            pickSquare('r2c3', getTick()) === false ? displayText('Already Selected') : (createMark(r2c3), markSwitch());
        break;
        case 'r3c1':
            pickSquare('r3c1', getTick()) === false ? displayText('Already Selected') : (createMark(r3c1), markSwitch());
        break;
        case 'r3c2':
            pickSquare('r3c2', getTick()) === false ? displayText('Already Selected') : (createMark(r3c2), markSwitch());
        break;
        case 'r3c3':
            pickSquare('r3c3', getTick()) === false ? displayText('Already Selected') : (createMark(r3c3), markSwitch());
        break;
    }
}

const game = function() {
    const {displayBoard, winKey, markSwitch, getTick} = Gameboard;

    const boardDom = document.querySelector('#gameboard');
    const display = document.querySelector('#display');
    const resetGameSection = document.querySelector('#reset-game-section');
    const resetButton = document.createElement('button');

    const r1c1 = document.querySelector('#r1c1');
    const r1c2 = document.querySelector('#r1c2');
    const r1c3 = document.querySelector('#r1c3');
    const r2c1 = document.querySelector('#r2c1');
    const r2c2 = document.querySelector('#r2c2');
    const r2c3 = document.querySelector('#r2c3');
    const r3c1 = document.querySelector('#r3c1');
    const r3c2 = document.querySelector('#r3c2');
    const r3c3 = document.querySelector('#r3c3');

    display.textContent = "X goes first!";

    boardDom.addEventListener('click', (event) => {
        display.textContent = "";
        if (winKey() !== true) {

            selectSquare(event);

            if (winKey() === true) {
                markSwitch();
                display.textContent = `${getTick() === 'x' ? xo = 'X' : xo = 'O'} wins!`;

                resetButton.setAttribute('id', 'reset-button');
                resetButton.textContent = 'Reset Game?';
                resetGameSection.appendChild(resetButton);
            } else if (Gameboard.displayBoard().join().includes('r') === false) {
                display.textContent = "Tie...";

                resetButton.setAttribute('id', 'reset-button');
                resetButton.textContent = 'Reset Game?';
                resetGameSection.appendChild(resetButton);
            }
        }
    });

    resetButton.addEventListener('click', () => location.reload());        
}

const resetGame = () => {
    Gameboard.resetBoard()
    console.log(Gameboard.displayBoard())
    console.log(Gameboard.rowOne);
    const squareList = document.querySelectorAll('.square')
    squareList.forEach((square) => square.textContent = '');
    game();
};

game();