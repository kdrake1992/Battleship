const Gameboard = () => {
    // Generates board
    const createBoard = () => {
        let gameBoard = [];
        let row = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                row.push('');
            }
        gameBoard.push(row);
        row = [];
        }
        return gameBoard;
    }

    // Assigns board
    let board = createBoard();
    

    // Places ship
    const placeShip = (ship, x, y, placement) => {
        if(placement === 'horizontal') {
            if(x + ship.getLength() <= 10) {
                for(let i = x; i < x + ship.getLength(); i++) {
                    board[y][i] = '!';
                }
                return true;
            }
            else {
                return false;
            }

        }
        else if (placement  === 'vertical') {
            if(y + ship.getLength() <= 10) {
                for(let i = y; i < y + ship.getLength(); i++) {
                    board[i][x] = '!';
                }
                return true
            }
            else {
                return false;
            }
        }
    }

    // Determines whether or ont the attack hit a ship
    // and sends a hit function to the correct ship
    const receiveAttack = () => {

    }
    // Checks if all ships have been suck
    const gameOver = () => {

    }


    return {board, placeShip}
}

module.exports = Gameboard;