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

const isWinner = (symbol, board) => isHorizontalWinner(symbol, board) || isVerticalWinner(symbol, board) || isDiagonalWinner(symbol, board);
 
const isGameOver = (board) => board.every((row) => row.every((move) => !!move))

const playerXname = document.querySelector('#playerXname');
const playerOname = document.querySelector('#playerOname');
const player = (name, symbol) => {
    return {name, symbol}
}
const getPlayerX = () => playerXname.value === '' ? 'Player X' : `${playerXname.value}`;
const getPlayerO = () => playerOname.value === '' ? 'Player O' : `${playerOname.value}`;
const playerX = player(`${getPlayerX()}`, 'X');
const playerO = player(`${getPlayerO()}`, 'O');

const currentPlayer = (() => {
    let player = playerX;
    const switchPlayer = () => player === playerX ? player = playerO : player = playerX;
    const symbol = () => player.symbol;
    const name = () => player === playerX ? getPlayerX() : getPlayerO();
    const otherName = () => player === playerX ? getPlayerO() : getPlayerX();
    return {switchPlayer, symbol, name, otherName}
})();

const winCache = (() => {
    let winState;
    const getWinState = () => winState;
    const setWinState = () => winState = true;
    const resetWinState = () => winState = undefined;
    return {getWinState, resetWinState, setWinState}
})();

const display = document.querySelector('#display');
const displayText = (text) => {
    display.textContent = text;
}
    
const resetGameSection = document.querySelector('#reset-game-section');
const resetButton = document.createElement('button');
const showResetButton = function() {
    resetButton.setAttribute('id', 'reset-button');
    resetButton.textContent = 'Reset Game?';
    resetGameSection.appendChild(resetButton);
}

const gameboard = document.querySelector('#gameboard')
let board = createBoard(3);

const drawGrid = (board) => {
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('id',`${i}`);
        row.classList.add('row');
        row.textContent = ``;
        gameboard.appendChild(row);

        for (let c = 0; c < board[i].length; c++) {
            let square = document.createElement('div');
            square.setAttribute('id',`${i}${c}`);
            square.classList.add('square');
            square.textContent = ``;
            square.addEventListener('click', (event) => {
                let row = (event.target.id).at(0);
                let col = (event.target.id).at(1);
                let symbol = currentPlayer.symbol()

                if (winCache.getWinState() !== true) {

                    if(board[row][col]) {
                        displayText(`Choose another position.`)
                        console.log(board)
                        return;
                    } else {
                        board[row][col] = symbol
                        square.textContent = `${symbol}`
                        currentPlayer.switchPlayer()    
                    }

                    if (isWinner(symbol, board)) {
                        displayText(`${currentPlayer.otherName()} WON!`)
                        winCache.setWinState();
                    } else {
                        displayText(`${currentPlayer.name()}'s turn`)
                    }
                
                    if(isGameOver(board) && (winCache.getWinState() !== true)) {
                        displayText('Game over')
                        winCache.setWinState();
                    }

                    if (winCache.getWinState() === true) {
                    showResetButton();
                    }
                }
                    
            });
            row.appendChild(square)
        }
    };
}

drawGrid(board);

displayText(`${playerX.name} goes first!`);

resetButton.addEventListener('click', () => {
    displayText(`${playerX.name} goes first!`);
    gameboard.innerHTML = '';
    resetGameSection.innerHTML = '';
    winCache.resetWinState();
    board = createBoard(3);
    drawGrid(board);
});
