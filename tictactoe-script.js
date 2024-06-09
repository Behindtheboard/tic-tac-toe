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
        if (square.includes('r1') === true) {
            rowOne[rowOne.indexOf(square)] = mark;
        } else if (square.includes('r2') === true) {
            rowTwo[rowTwo.indexOf(square)] =  mark;
        } else if (square.includes('r3') === true) {
            rowThree[rowThree.indexOf(square)] =  mark;
        }
    }

    const win = () => {
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
    
    return {displayBoard, pickSquare, win, resetBoard}
})();

const player = function(name) {
    let mark = ' ';
    const chooseMark = (pick) => mark = `${pick}`;
    const getMark = () => mark;

    return {name, getMark, chooseMark};
}

const game = function() {
    const {pickSquare, displayBoard, win} = Gameboard;

    let playerX;
    let playerO;
    

    alert("let's play tic toe")
    alert(playerX)
    
    if (playerX === undefined) {
        playerX = player(prompt("What's your name player X?"));
        playerX.chooseMark('x');
        alert(`${playerX.name}'s mark is 'x'`);
    } 

    if (playerO === undefined) {
        playerO = player(prompt("What's your name player O?"));
        playerO.chooseMark('o');
        alert(`${playerO.name}'s mark is 'o'`);
    }

    let square = prompt(`${playerX.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
    alert(`${playerX.name} chose ${square}`)
    pickSquare(square, playerX.getMark());
    alert(displayBoard());
    
    let i = 1;
    while(i > 0) {
        if (displayBoard().join().includes('r') === true) {            
            if (win() === true) {
                alert("I win")
                i--;
            } else {
                square = prompt(`${playerO.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
                alert(`${playerO.name} chose ${square}`)
                pickSquare(square, playerO.getMark());
                alert(displayBoard());

                square = prompt(`${playerX.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
                alert(`${playerX.name} chose ${square}`)
                pickSquare(square, playerX.getMark());
                alert(displayBoard())  
            }
        } else {
            alert("It's a draw")
            i--;
        }
    }
}

const resetGame = () => {
    Gameboard.resetBoard()
    const yesNo = prompt("do you want to play again? y or n")
    yesNo === "y" ? game() : alert('bye')
};

game();
resetGame();

// console.log(Gameboard.displayBoard().join().includes('.'))

// console.log(Gameboard.displayBoard())

// console.log(Gameboard.r1c1('o'))
// console.log(Gameboard.r2c2('o'))
// console.log(Gameboard.r3c3('o'))

// console.log(Gameboard.displayBoard())

// console.log(winKey.win(Gameboard.displayBoard().join()))

// console.log(game())