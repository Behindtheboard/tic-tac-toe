const Gameboard = (function () {
    const gameBoard = [[], [], []];
    const [rowOne, rowTwo, rowThree] = gameBoard;
    const [r1c1, r1c2, r1c3] = rowOne;
    const [r2c1, r2c2, r2c3] = rowTwo;
    const [r3c1, r3c2, r3c3] = rowThree;

    return {r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3, rowOne}
})();

function player1(name) {
    const boardMark = 'x';
    
    return {name}
}

function player2(name) {
    return {name}
}

Gameboard.r1c1 = "x";

console.log(Gameboard.rowOne)