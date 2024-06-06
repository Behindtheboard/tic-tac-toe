const Gameboard = (function () {
    const gameBoard = [[], [], []];
    const [rowOne, rowTwo, rowThree] = gameBoard;

    const r1c1 = function(xo) {
        rowOne[0] = `${xo}`;
    };
    const r1c2 = function(xo) {
        rowOne[1] = `${xo}`
    };
    const r1c3 = function(xo) {
        rowOne[2] = `${xo}`
    };
    const r2c1 = function(xo) {
        rowTwo[0] = `${xo}`
    };
    const r2c2 = function(xo) {
        rowTwo[1] = `${xo}`
    };
    const r2c3 = function(xo) {
        rowTwo[2] = `${xo}`
    };
    const r3c1 = function(xo) {
        rowThree[0] = `${xo}`
    };
    const r3c2 = function(xo) {
        rowThree[1] = `${xo}`
    };
    const r3c3 = function(xo) {
        rowThree[2] = `${xo}`
    };


    return {r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3, rowOne}
})();

function player1(name) {
    const boardMark = 'x'
    return {name}
}

function player2(name) {
    return {name}
}

Gameboard.r1c1('o');

console.log(Gameboard.rowOne)