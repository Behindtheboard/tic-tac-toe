const createBoard = (n) => {
    return [...Array(n)].map((row) => Array(n).fill(null));
};

const isHorizontalWinner = (symbol, board) => {
    return board.some((moves) => moves.every((move) => move === symbol))
};

const isVerticalWinner = (symbol, board) => {
    const transposeBoard = (board) => {
        return board.map((_,index) => board.map((row) => row[index]))
    }
    return transposeBoard(board).some((moves) => moves.every((move) => move === symbol))
}

const isDiagonalWinner = (symbol, board) => {
    const getDiagonalMoves = (board) => {
        const diagonalMoves = [];
        const equalBasedDiagonal = [];
        const sumBasedDiagonal = [];
    
        for(let row = 0; row < board.length; row++){
            for (col = 0; col < board.length; col++) {
            if (row === col) {
                equalBasedDiagonal.push(board[row][col])
            }
            }
        }
    
        for(let row = 0; row < board.length; row++){
            for (col = 0; col < board.length; col++) {
            if (row + col === board.length -1 ) {
                sumBasedDiagonal.push(board[row][col])
            }
            }
        }
    
        diagonalMoves.push(equalBasedDiagonal,sumBasedDiagonal);
        return diagonalMoves;
    }
    return getDiagonalMoves(board).some((moves) => moves.every((move) => move === symbol))
}

const isWinner = (symbol,board) => isHorizontalWinner(symbol, board) || isVerticalWinner(symbol, board) || isDiagonalWinner(symbol, board);
 
const isGameOver = (board) => board.every((row) => row.every((move) => !!move))

const play = ([row,col], symbol) => {

    if(isGameOver(board)) {
      displayText('Game over')
      return;
    }
  
    if(board[row][col]) {
        displayText(`Choose another position.`)
        return;
    } else {
        board[row][col] = symbol
    }
  
    if (isWinner(symbol, board)) {
      displayText(`Player with ${symbol} WON!`)
    } else{
      displayText('Go on')
    }
}

const player = (name, symbol) => {
    return {name, symbol}
}

const currentPlayer = (() => {
    let tick = 'X'
    const switchPlayer = () => tick === 'X' ? tick = 'O' : tick = 'X';
    const getSymbol = () => tick;
    return {switchPlayer, getSymbol};
})();

const display = document.querySelector('#display');
const resetGameSection = document.querySelector('#reset-game-section');
const resetButton = document.createElement('button');
const gameboard = document.querySelector('#gameboard')

const displayText = (text) => {
    display.textContent = text;
}

const drawGrid = (board) => {
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('id',`${i}`);
        row.classList.add('row');
        row.textContent = ``;
        gameboard.appendChild(row);

        for (let c = 0; c < board[i].length; c++) {
            let col = document.createElement('div');
            col.setAttribute('id',`${i}${c}`);
            col.classList.add('col');
            col.textContent = ``;
            col.addEventListener('click', () => {
                col.textContent = `${currentPlayer.getSymbol()}`
            })
            row.appendChild(col)
        }
    };
}

const board = createBoard(3);
drawGrid(board);

const playerX = player('playerX', 'X');
const playerO = player('playerO', 'O');

displayText("X goes first!");

gameboard.addEventListener('click', (event) => {
    let row = (event.target.id).at(0);
    let col = (event.target.id).at(1);

    let symbol = currentPlayer.getSymbol()
    
    currentPlayer.switchPlayer()

    play([row,col], symbol); 
});





// const Gameboard = (function () {

//     const pickSquare = function(square, mark) {
//         if (square.includes('r1') === true && rowOne.includes(square) === true) {
//             rowOne[rowOne.indexOf(square)] = mark;
//         } else if (square.includes('r2') === true && rowTwo.includes(square) === true) {
//             rowTwo[rowTwo.indexOf(square)] =  mark;
//         } else if (square.includes('r3') === true && rowThree.includes(square) === true) {
//             rowThree[rowThree.indexOf(square)] =  mark;
//         }
//     }

//     const squareCheck = function(square) {
//         if (square.includes('r1') === true && rowOne.includes(square) === true) {
//             return true;
//         } else if (square.includes('r2') === true && rowTwo.includes(square) === true) {
//             return true;
//         } else if (square.includes('r3') === true && rowThree.includes(square) === true) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     let tick = 'x';
//     const markSwitch = function() {
//         if (tick === 'x') {
//             tick = 'o';
//         } else if (tick === 'o') {
//             tick = 'x';
//         }
//     }
//     const getTick = () => tick;

//     return {displayBoard, pickSquare, winKey, resetBoard, getTick, 
//         markSwitch, squareCheck}
// })();


// const selectSquare = function (event) {
//     const {pickSquare, getTick, markSwitch, squareCheck} = Gameboard;

//     let xo;

//     const createMark = (sq) => {
//             getTick() === 'x' ? xo = 'X' : xo = 'O';
//             sq.textContent = xo;
//     }

//     let target = event.target.id;

//     switch(target) {       
//         case 'r1c1':
//             squareCheck('r1c1') === false ? displayText('Already Selected') : (pickSquare('r1c1', getTick()), createMark(r1c1), markSwitch());
//         break;
//         case 'r1c2':
//             squareCheck('r1c2') === false ? displayText('Already Selected') : (pickSquare('r1c2', getTick()), createMark(r1c2), markSwitch());
//         break;
//         case 'r1c3':
//             squareCheck('r1c3') === false ? displayText('Already Selected') : (pickSquare('r1c3', getTick()), createMark(r1c3), markSwitch());
//         break;
//         case 'r2c1':
//             squareCheck('r2c1') === false ? displayText('Already Selected') : (pickSquare('r2c1', getTick()), createMark(r2c1), markSwitch());
//         break;
//         case 'r2c2':
//             squareCheck('r2c2') === false ? displayText('Already Selected') : (pickSquare('r2c2', getTick()), createMark(r2c2), markSwitch());
//         break;
//         case 'r2c3':
//             squareCheck('r2c3') === false ? displayText('Already Selected') : (pickSquare('r2c3', getTick()), createMark(r2c3), markSwitch());
//         break;
//         case 'r3c1':
//             squareCheck('r3c1') === false ? displayText('Already Selected') : (pickSquare('r3c1', getTick()), createMark(r3c1), markSwitch());
//         break;
//         case 'r3c2':
//             squareCheck('r3c2') === false ? displayText('Already Selected') : (pickSquare('r3c2', getTick()), createMark(r3c2), markSwitch());
//         break;
//         case 'r3c3':
//             squareCheck('r3c3') === false ? displayText('Already Selected') : (pickSquare('r3c3', getTick()), createMark(r3c3), markSwitch());
//         break;
//     }
// }

// const playerDisplay = function() {
//     const playerXname = document.querySelector('#playerXname')
//     const playerOname = document.querySelector('#playerOname')
//     if (Gameboard.getTick() === 'x') {
//         if (playerXname.value !== '') {
//             return `${playerXname.value}`;
//         } else {
//             return  'X';
//         }
//     } else {
//         if (playerOname.value !== '') {
//             return `${playerOname.value}`;
//         } else {
//             return  'O';
//         }
//     }
// }


// const game = function() {
//     const {displayBoard, winKey, markSwitch} = Gameboard;

//     const showResetButton = function() {
//         resetButton.setAttribute('id', 'reset-button');
//         resetButton.textContent = 'Reset Game?';
//         resetGameSection.appendChild(resetButton);
//     }
//     
// resetButton.addEventListener('click', () => resetGame()); 
// } 
// const resetGame = () => {
//     Gameboard.resetBoard()
//     displayText('');
//     gameboard.innerHTML = '';
//     resetGameSection.innerHTML = '';
//     const board  = createBoard(3);
//     drawGrid(3);
// };

// game();