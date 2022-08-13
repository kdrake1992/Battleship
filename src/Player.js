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

    let compMove = [0,0];

    let board = Gameboard();

    board.addShip(ship(5,'Carrier'))
    board.addShip(ship(4,'Battleship'))
    board.addShip(ship(3,'Destroyer'))
    board.addShip(ship(3,'Submarine'))
    board.addShip(ship(2,'Patrol Boat'))

    // Getters
    const getName = () => {
        return name;
    }

    const getTurn = () => {
        return turn;
    }

    const getCompMove = () => {
        return compMove;
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
            let attack = false;
            compMove[0] = randomNumber();
            compMove[1] = randomNumber();
            let y =  compMove[0];
            let x =  compMove[1];

            if(previousHit) {
                y = previousY;
                x = previousX;

                compMove[0] = y;
                compMove[1] = x;

                if(counter <= 3) {
                    if(counter === 0) {
                        if(enemy.receiveAttack(y + 1, x) === 'hit') {
                            compMove[0] = y + 1;
                            previousY = y + 1;
                            previousX = x;
                            attack = true;
                        }
                        else {
                            compMove[0] = y + 1;
                            counter++;
                        }
                    }
                    else if(counter === 1) {
                        if(enemy.receiveAttack(y - 1, x) === 'hit') {
                            compMove[0] = y - 1;
                            previousY = y - 1;
                            previousX = x;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            compMove[0] = y - 1;
                            counter++;
                        }
                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                        }
                        else if(enemy.receiveAttack(y,  x + 1) === 'hit') {
                            previousY = y;
                            compMove[1] = x + 1;
                            previousX = x + 1;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            counter++;
                            compMove[1] = x + 1;
                        }
                    }
                    else if(counter === 3) {
                        if(x - 1 < 0) {
                            console.log(x -1)
                            previousHit = false;
                            counter = 0
                        }
                        else if(enemy.receiveAttack(y, x - 1) === 'hit') {
                            previousY = y;
                            compMove[1] = x - 1;
                            previousX = x - 1;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            previousHit = false;
                            counter = 0;
                            compMove[1] = x - 1;
                        }  
                    }
                }
            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
                    previousY = y;
                    previousX = x;
                    previousHit = true;
                    attack = true;
                }

            }
            return attack;
        }
    }

    // Returns the following
    return {board, getName, getTurn, getCompMove, setName, setTurn, randomNumber, attack}

}

export default Player;