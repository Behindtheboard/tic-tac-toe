
const createBoard = (n) => {
    return [...Array(n)].map((row) => Array(n).fill(null));
};

const isHorizontalWinner = (symbol, board) => {
    return board.some((moves) => moves.every((move) => move === symbol))
};

const transposeBoard = (board) => {
    return board.map((_,index) => board.map((row) => row[index]))
}

const isVerticalWinner = (symbol, board) => {
    return transposeBoard(board).some((moves) => moves.every((move) => move === symbol))
}

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

const isDiagonalWinner = (symbol, board) => {
    return getDiagonalMoves(board).some((moves) => moves.every((move) => move === symbol))
}

const isWinner = (symbol,board) => isHorizontalWinner(symbol, board) || isVerticalWinner(symbol, board) || isDiagonalWinner(symbol, board);
 
const isGameOver = (board) => board.every((row) => row.every((move) => !!move))

const play = ([row,col], symbol) => {

    if(isGameOver(board)) {
      console.log('Game over')
      return;
    }
  
    if(board[row][col]) {
        console.log(`Choose another position.`)
        return;
   } else {
      board[row][col] = player
    }
  
    if (isWinner(player,board)) {
      console.log(`Player with ${symbol} WON!`)
    } else{
      console.log('Go on')
    }
}

const player = function (name, symbol) {
    return {name, symbol}
}

const display = document.querySelector('#display');
const resetGameSection = document.querySelector('#reset-game-section');
const resetButton = document.createElement('button');
const squares = document.querySelectorAll('.square');
const gameboard = document.querySelector('#gameboard')

const drawGrid = (n) => {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.setAttribute('id',`${i}`);
        row.classList.add('row');
        row.textContent = '';
        gameboard.appendChild(row);

        for (let c = 0; c < n; c++) {
            let col = document.createElement('div');
            col.setAttribute('id',`${c}`);
            col.classList.add('col');
            col.textContent = '';
            row.appendChild(col)
        }
    }
    
};

const board  = createBoard(3);
const playerX = player('playerX', 'X');
const playerO = player('playerO', 'O');
drawGrid(3);



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

// const displayText = (text) => {
//     display.textContent = text;
// }

// const game = function() {
//     const {displayBoard, winKey, markSwitch} = Gameboard;

    
//     const r1c1 = document.querySelector('#r1c1');
//     const r1c2 = document.querySelector('#r1c2');
//     const r1c3 = document.querySelector('#r1c3');
//     const r2c1 = document.querySelector('#r2c1');
//     const r2c2 = document.querySelector('#r2c2');
//     const r2c3 = document.querySelector('#r2c3');
//     const r3c1 = document.querySelector('#r3c1');
//     const r3c2 = document.querySelector('#r3c2');
//     const r3c3 = document.querySelector('#r3c3');

//     const showResetButton = function() {
//         resetButton.setAttribute('id', 'reset-button');
//         resetButton.textContent = 'Reset Game?';
//         resetGameSection.appendChild(resetButton);
//     }

//     resetGameSection.innerHTML = '';

//     displayText("X goes first!");

//     boardDom.addEventListener('click', (event) => {
//         displayText("");

//         if (winKey() !== true) {

//             selectSquare(event);

//             if (winKey() === true) {
//                 markSwitch();
//                 displayText(`${playerDisplay()} wins!`);

//                 showResetButton();                
//             } else if (displayBoard().join().includes('r') === false) {
//                 displayText("Tie...");

//                 showResetButton();
//             }
//         }        
//     });

//     resetButton.addEventListener('click', () => resetGame()); 
// } 

// const resetGame = () => {
//     Gameboard.resetBoard()
//     displayText('');
//     const squareList = document.querySelectorAll('.square');
//     squareList.forEach((square) => square.textContent = '');
// };

// game();