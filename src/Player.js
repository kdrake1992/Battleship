import ship from './ship'
import Gameboard from './Gameboard'

// Player class
const Player = (name, type) => {
    let playerName = name;
    let turn = false;
    let previousX = '';
    let previousY = '';
    let previousHit = false;
    let counter = 0;

    let board = Gameboard();

    board.addShip(ship(5,'Carrier'))
    // board.addShip(ship(4,'Battleship'))
    // board.addShip(ship(3,'Destroyer'))
    // board.addShip(ship(3,'Submarine'))
    // board.addShip(ship(2,'Patrol Boat'))

    // Getters
    const getName = () => {
        return name;
    }

    const getTurn = () => {
        return turn;
    }

    // Setters
    const setName = (newName) => {
        playerName = newName;
    }

    const setTurn = () => {
        if(turn === false) {
            turn = true;
        }
        else if (turn === true) {
            turn = false;
        }
    }

    // Random number generator for the ai
    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    const attack = (x,y, enemy) => {
        if(type === 'human') {
            return enemy.receiveAttack(x,y);
        }

        // Ai will draw a random number for the grid
        // If previous turn was a hit, will hit around.
        else if(type === 'ai') {
            let y =  randomNumber();
            let x =  randomNumber();

            if(previousHit) {
                y = previousY;
                x = previousX;

                console.log('help')
                if(counter <= 3) {
                    let add = 1;
                    if(counter === 0) {
                        if(enemy.receiveAttack(y + 1, x) === 'hit') {
                            console.log('ANOTHER BIG HIT (1)')
                            previousY = y + 1;
                            previousX = x;
                        }
                        else {
                            counter++;
                            console.log('Miss 1')
                        }
                    }
                    else if(counter === 1) {
                        if(enemy.receiveAttack(y - 1, x) === 'hit') {
                            console.log('ANOTHER BIG HIT (2)')
                            previousY = y - 1;
                            previousX = x;
                            counter = 0;
                        }
                        else {
                            counter++;
                            console.log('Miss 2')
                        }
                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                        }
                        else if(enemy.receiveAttack(y,  x + 1) === 'hit') {
                            console.log('ANOTHER BIG HIT (3)')
                            previousY = y;
                            previousX = x + 1;
                            counter = 0;
                        }
                        else {
                            counter++;
                            console.log('Miss 3')
                        }
                    }
                    else if(counter === 3) {
                        if(x - 1 < 0) {
                            console.log(x -1)
                            previousHit = false;
                            counter = 0
                        }
                        else if(enemy.receiveAttack(y, x - 1) === 'hit') {
                            console.log('ANOTHER BIG HIT (4)')
                            previousY = y;
                            previousX = x - 1;
                            counter = 0;
                        }
                        else {
                            previousHit = false;
                            counter = 0;
                            console.log('Miss 4 and reset')
                        }
                        
                    }
                }
            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
                    console.log('BIG HIT')
                    previousY = y;
                    previousX = x;
                    previousHit = true;
                }

            }
        }
    }

    // Returns the following
    return {board, getName, getTurn, setName, setTurn, attack}

}

export default Player;