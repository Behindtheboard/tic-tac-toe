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
        if (rowOne[0] !== 'r1c1' && rowOne[1] !== 'r1c2' && rowOne[2] !== 'r1c3') {
            return true
        } else if (rowTwo[0] !== 'r2c1' && rowTwo[1] !== 'r2c2' && rowTwo[2] !== 'r2c3') {
            return true
        } else if (rowThree[0] !== 'r3c1' && rowThree[1] !== 'r3c2' && rowThree[2] !== 'r3c3') {
            return true
        } else if (rowOne[0] !== 'r1c1' && rowTwo[0] !== 'r2c1' && rowThree[0] !== 'r3c1') {
            return true
        } else if (rowOne[1] !== 'r1c2' && rowTwo[1] !== 'r2c2' && rowThree[1] !== 'r3c2') {
            return true
        } else if (rowOne[2] !== 'r1c3' && rowTwo[2] !== 'r2c3' && rowThree[2] !== 'r3c3') {
            return true
        } else if (rowOne[0] !== 'r1c1' && rowTwo[1] !== 'r2c2' && rowThree[2] !== 'r3c3') {
            return true
        } else if (rowOne[2] !== 'r1c3' && rowTwo[1] !== 'r2c2' && rowThree[0] !== 'r3c1') {
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
    let playerX = "";
    let playerO = "";
    alert(playerX)

    let i = 1;

    while(i > 0) {
        if (displayBoard().join() === 'r1c1,r1c2,r1c3,r2c1,r2c2,r2c3,r3c1,r3c2,r3c3') {
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
            alert(square)
            pickSquare(square, playerX.getMark());
            alert(displayBoard())

        } else if (displayBoard().join().includes('r') === true) {
            
            if (win() === true) {
                alert("I win")
                i--;
            } else {
                square = prompt(`${playerO.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
                alert(square)
                pickSquare(square, playerO.getMark());
                alert(displayBoard());

                square = prompt(`${playerX.name} Pick a Square. \n r1c1, r1c2, r1c3, \n r2c1, r2c2, r2c3, \n r3c1, r3c2, r3c3`)
                alert(square)
                pickSquare(square, playerX.getMark());
                alert(displayBoard())  
            }

        } else {
            console.log('Its a draw')
            i--;
        }
    }
}

const resetGame = () => {
    Gameboard.resetBoard()
    
    alert(Gameboard.displayBoard());

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