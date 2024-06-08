const Gameboard = (function () {
    const gameBoardArray = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];
    const [rowOne, rowTwo, rowThree] = gameBoardArray;
   

    // const r1c1 = (xo) => rowOne[0] = xo;
    // const r1c2 = (xo) => rowOne[1] = xo;
    // const r1c3 = (xo) => rowOne[2] = xo;
    // const r2c1 = (xo) => rowTwo[0] = xo;
    // const r2c2 = (xo) => rowTwo[1] = xo;
    // const r2c3 = (xo) => rowTwo[2] = xo;
    // const r3c1 = (xo) => rowThree[0] = xo;
    // const r3c2 = (xo) => rowThree[1] = xo;
    // const r3c3 = (xo) => rowThree[2] = xo;

    const pickSquare = (square, mark) => square = mark;

    const displayBoard = () => gameBoardArray;

    return {r1c1, r1c2, r1c3, 
            r2c1, r2c2, r2c3, 
            r3c1, r3c2, r3c3,
            displayBoard, pickSquare}
})();

const winKey = (function() {
    const win = (string) => {
        switch(string) {
            case 'o, , , ,o, , , ,o': 
            case 'x, , , ,x, , , ,x': 
                return true;
            break;
            case ' , ,o, ,o, ,o, , ': 
            case ' , ,x, ,x, ,x, , ': 
                return true;
            break;
            case 'o, , ,o, , ,o, , ': 
            case 'x, , ,x, , ,x, , ': 
                return true;
            break;
            case ' ,o, , ,o, , ,o, ': 
            case ' ,x, , ,x, , ,x, ': 
                return true;
            break;
            case ' , ,o, , ,o, , ,o': 
            case ' , ,x, , ,x, , ,x': 
                return true;
            break;
            case 'o,o,o, , , , , , ': 
            case 'x,x,x, , , , , , ': 
                return true;
            break;
            case ' , , ,o,o,o, , , ': 
            case ' , , ,x,x,x, , , ': 
                return true;
            break;
            case ' , , , , , ,o,o,o': 
            case ' , , , , , ,x,x,x': 
                return true;
            break;
            default:
                return false;
        }
    }
    return {win}
})();

const player = function(name) {
    let mark = ' ';
    const chooseMark = (pick) => mark = `${pick}`;
    const getMark = () => mark;
    
    return {name, getMark, chooseMark};
}

const game = function() {
    const board = Gameboard.displayBoard().join();
    const boardDisplay = Gameboard.displayBoard();
    let playerX = "";
    let playerO = "";

    const {r1c1, r1c2, r1c3, 
        r2c1, r2c2, r2c3, 
        r3c1, r3c2, r3c3} = Gameboard;

    if (board === ' , , , , , , , , ') {
        console.log("Let's play tic tac toe");
        if (playerX === "") {
            playerX = player(prompt("What's your name player X?"));
            alert(playerX.name);
            playerX.chooseMark('x');
            alert(playerX.getMark())
        } 

        if (playerO === "") {
            playerO = player(prompt("What's your name player O?"));
            alert(playerO.name);
            playerO.chooseMark('o');
            alert(playerO.getMark())
        } 
        
        let square = prompt(`${playerX.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
        Gameboard.pickSquare(square, playerX.getMark());
        alert(boardDisplay)

    } else if (board.includes(' ') === true) {
        console.log('Pick a Square' );
        console.log(boardDisplay);
    } else if (winKey.win(board) === true) {
        console.log("I win")
    } else {
        console.log('Its a draw')
    }
}

game();

// console.log(Gameboard.displayBoard().join().includes('.'))

// console.log(Gameboard.displayBoard())

// console.log(Gameboard.r1c1('o'))
// console.log(Gameboard.r2c2('o'))
// console.log(Gameboard.r3c3('o'))

// console.log(Gameboard.displayBoard())

// console.log(winKey.win(Gameboard.displayBoard().join()))

// console.log(game())