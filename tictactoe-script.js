const Gameboard = (function () {
    const gameBoardArray = [['r1c1','r1c2','r1c3'], ['r2c1','r2c2','r2c3'], ['r3c1','r3c2','r3c3']];
    let [rowOne, rowTwo, rowThree] = gameBoardArray;
    const displayBoard = () => gameBoardArray;

    const resetBoard = function() {
        rowOne = ['r1c1','r1c2','r1c3']
        rowTwo = ['r2c1','r2c2','r2c3']
        rowThree = ['r3c1','r3c2','r3c3'];
    }

    const pickSquare = function(square, mark) {
        if (square.includes('r1') === true && rowOne.includes(square) === true) {
            rowOne[rowOne.indexOf(square)] = mark;
            markSwitch()
        } else if (square.includes('r2') === true && rowTwo.includes(square) === true) {
            rowTwo[rowTwo.indexOf(square)] =  mark;
            markSwitch()
        } else if (square.includes('r3') === true && rowThree.includes(square) === true) {
            rowThree[rowThree.indexOf(square)] =  mark;
            markSwitch()
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

    let tick;
    const markSwitch = function() {
        if (tick === undefined) {
            tick = 'x';
        } else if (tick === 'x') {
            tick = 'o';
        } else if (tick === 'o') {
            tick = 'x';
        }
    }

    const getTick = () => tick;

    return {displayBoard, pickSquare, winKey, resetBoard, markSwitch, getTick}
})();

const player = function(name) {
    let mark = ' ';
    const chooseMark = (pick) => mark = `${pick}`;
    const getMark = () => mark;

    return {name, getMark, chooseMark};
};

const resetGame = () => {
    Gameboard.resetBoard()
    const yesNo = prompt("do you want to play again? y or n")
    yesNo === "y" ? game() : alert('bye')
};

const game = function(event) {

    if (Gameboard.winKey() === true) {
        alert(`${Gameboard.getTick()} wins!`)
    } else {
        selectSquare(event)
    }
}

const selectSquare = function (event) {
    const {pickSquare, markSwitch, getTick} = Gameboard;

    let xo;

    const createMark = (sq) => {
        // const mark = document.createElement('div');
        //     mark.setAttribute('class', 'mark')
            getTick() === 'x' ? xo = 'X' : xo = 'O'
            sq.textContent = xo;
            // sq.appendChild(mark);
    }

    switch(event.target.id) {
        
        case 'r1c1':
            pickSquare('r1c1', getTick()) === false ? alert('already used') : createMark(r1c1);
        break;
        case 'r1c2':
            pickSquare('r1c2', getTick())
            createMark(r1c2);
        break;
        case 'r1c3':
            pickSquare('r1c3', getTick())
            createMark(r1c3);
        break;
        case 'r2c1':
            pickSquare('r2c1', getTick())
            createMark(r2c1);
        break;
        case 'r2c2':
            pickSquare('r2c2', getTick())
            createMark(r2c2);
        break;
        case 'r2c3':
            pickSquare('r2c3', getTick())
            createMark(r2c3);
        break;
        case 'r3c1':
            pickSquare('r3c1', getTick())
            createMark(r3c1);
        break;
        case 'r3c2':
            pickSquare('r3c2', getTick())
            createMark(r3c2);
        break;
        case 'r3c3':
            pickSquare('r3c3', getTick())
            createMark(r3c3);
        break;
    }
}


const boardDom = document.querySelector('#gameboard');
const square = document.querySelector('.square')

const r1c1 = document.querySelector('#r1c1');
const r1c2 = document.querySelector('#r1c2');
const r1c3 = document.querySelector('#r1c3');
const r2c1 = document.querySelector('#r2c1');
const r2c2 = document.querySelector('#r2c2');
const r2c3 = document.querySelector('#r2c3');
const r3c1 = document.querySelector('#r3c1');
const r3c2 = document.querySelector('#r3c2');
const r3c3 = document.querySelector('#r3c3');

boardDom.addEventListener('click', (event) =>{
    if (Gameboard.displayBoard().join().includes('r') === true) {
        selectSquare(event);
    }
    if (Gameboard.winKey() === true) {
        alert(`${Gameboard.getTick()} wins!`)
    } 
});
