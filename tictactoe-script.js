const Gameboard = (function () {
    const gameBoardArray = [['r1c1','r1c2','r1c3'], ['r2c1','r2c2','r2c3'], ['r3c1','r3c2','r3c3']];
    const [rowOne, rowTwo, rowThree] = gameBoardArray;

    const pickSquare = function(square, mark) {
        if (square.includes('r1') === true) {
            rowOne[rowOne.indexOf(square)] = mark;
        } else if (square.includes('r2') === true) {
            rowTwo[rowTwo.indexOf(square)] =  mark;
        } else if (square.includes('r3') === true) {
            rowThree[rowThree.indexOf(square)] =  mark;
        }
    }

    const displayBoard = () => gameBoardArray;

    return {displayBoard, pickSquare}
})();

const winKey = (function() {
    const win = (string) => {
        switch(string) {
            case 'o,r1c2,r1c3,r2c1,o,r2c3,r3c1,r3c2,o': 
            case 'x,r1c2,r1c3,r2c1,x,r2c3,r3c1,r3c2,x': 
                return true;
            break;
            case 'r1c1,r1c2,o,r2c1,o,r2c3,o,r3c2,r3c3': 
            case 'r1c1,r1c2,x,r2c1,x,r2c3,x,r3c2,r3c3': 
                return true;
            break;
            case 'o,r1c2,r1c3,o,r2c2,r2c3,o,r3c2,r3c3': 
            case 'x,r1c2,r1c3,x,r2c2,r2c3,x,r3c2,r3c3': 
                return true;
            break;
            case 'r1c1,o,r1c3,r2c1,o,r2c3,r3c1,o,r3c3': 
            case 'r1c1,x,r1c3,r2c1,x,r2c3,r3c1,x,r3c3': 
                return true;
            break;
            case 'r1c1,r1c2,o,r2c1,r2c2,o,r3c1,r3c2,o': 
            case 'r1c1,r1c2,x,r2c1,r2c2,x,r3c1,r3c2,x': 
                return true;
            break;
            case 'o,o,o,r2c1,r2c2,r2c3,r3c1,r3c2,r3c3': 
            case 'x,x,x,r2c1,r2c2,r2c3,r3c1,r3c2,r3c3': 
                return true;
            break;
            case 'r1c1,r1c2,r1c3,o,o,o,r3c1,r3c2,r3c3': 
            case 'r1c1,r1c2,r1c3,x,x,x,r3c1,r3c2,r3c3': 
                return true;
            break;
            case 'r1c1,r1c2,r1c3,r2c1,r2c2,r2c3,o,o,o': 
            case 'r1c1,r1c2,r1c3,r2c1,r2c2,r2c3,x,x,x': 
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
    const {pickSquare, displayBoard} = Gameboard;

    let playerX = "";
    let playerO = "";

    let i = 1;

    while(i > 0) {
        console.log('hit')
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
            
            if (winKey.win(displayBoard().join()) === true) {
                console.log("I win")
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

    const resetGame = () => {
            const yesNo = prompt("do you want to play again? y or n")
            yesNo === "y" ? game() : alert('bye')
    }
    return {resetGame}
}

game();
game.resetGame();

// console.log(Gameboard.displayBoard().join().includes('.'))

// console.log(Gameboard.displayBoard())

// console.log(Gameboard.r1c1('o'))
// console.log(Gameboard.r2c2('o'))
// console.log(Gameboard.r3c3('o'))

// console.log(Gameboard.displayBoard())

// console.log(winKey.win(Gameboard.displayBoard().join()))

// console.log(game())