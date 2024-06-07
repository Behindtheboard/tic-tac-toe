const Gameboard = (function () {
    const gameBoardArray = [['.','.','.'], ['.','.','.'], ['.','.','.']];
    const [rowOne, rowTwo, rowThree] = gameBoardArray;

    const r1c1 = (xo) => rowOne[0] = xo;
    const r1c2 = (xo) => rowOne[1] = xo;
    const r1c3 = (xo) => rowOne[2] = xo;
    const r2c1 = (xo) => rowTwo[0] = xo;
    const r2c2 = (xo) => rowTwo[1] = xo;
    const r2c3 = (xo) => rowTwo[2] = xo;
    const r3c1 = (xo) => rowThree[0] = xo;
    const r3c2 = (xo) => rowThree[1] = xo;
    const r3c3 = (xo) => rowThree[2] = xo;

    const displayBoard = () => gameBoardArray;

    return {r1c1, r1c2, r1c3, 
            r2c1, r2c2, r2c3, 
            r3c1, r3c2, r3c3,
            displayBoard}
})();

const winKey = (function() {
    const win = (string) => {
        switch(string) {
            case 'o,.,.,.,o,.,.,.,o': 
            case 'x,.,.,.,x,.,.,.,x': 
                return true;
            break;
            case '.,.,o,.,o,.,o,.,.': 
            case '.,.,x,.,x,.,x,.,.': 
                return true;
            break;
            case 'o,.,.,o,.,.,o,.,.': 
            case 'x,.,.,x,.,.,x,.,.': 
                return true;
            break;
            case '.,o,.,.,o,.,.,o,.': 
            case '.,x,.,.,x,.,.,x,.': 
                return true;
            break;
            case '.,.,o,.,.,o,.,.,o': 
            case '.,.,x,.,.,x,.,.,x': 
                return true;
            break;
            case 'o,o,o,.,.,.,.,.,.': 
            case 'x,x,x,.,.,.,.,.,.': 
                return true;
            break;
            case '.,.,.,o,o,o,.,.,.': 
            case '.,.,.,x,x,x,.,.,.': 
                return true;
            break;
            case '.,.,.,.,.,.,o,o,o': 
            case '.,.,.,.,.,.,x,x,x': 
                return true;
            break;
            default:
                return false;
        }
    }
    return {win}
})();

const player1 = function(name) {
    return {name}
}
const player2 = function(name) {
    return {name}
}

const game = function() {
    if (Gameboard.displayBoard().join().includes('.') === true) {
        console.log('I win');
    }

}

game();

console.log(Gameboard.displayBoard().join().includes('.'))

console.log(Gameboard.displayBoard())

console.log(Gameboard.r1c1('o'))
console.log(Gameboard.r2c2('o'))
console.log(Gameboard.r3c3('o'))

console.log(Gameboard.displayBoard())

console.log(winKey.win(Gameboard.displayBoard().join()))

console.log(game())