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
            let attack = 'miss';

            if(previousHit) {
                y = previousY;
                x = previousX;

                compMove[0] = y;
                compMove[1] = x;

                if(counter <= 3) {
                    if(counter === 0) {
                        if(y + 1 > 9) {
                            counter++;
                            attack = 'doubleHit'
                        }
                        else {
                            let status = enemy.receiveAttack(y + 1, x);
                            if(status === 'hit') {
                                compMove[0] = y + 1;
                                previousY = y + 1;
                                previousX = x;
                                attack = status;
                            }
                            else if(status === 'miss') {
                                compMove[0] = y + 1;
                                counter++;
                            }
                            else {
                                counter++;
                                attack = status;
                            }
                        }

                    }
                    else if(counter === 1) {
                        if(y - 1 < 0) {
                            counter++;
                            attack = 'doubleHit'
                        }
                        else {  
                            let status = enemy.receiveAttack(y - 1, x);
                            if(status === 'hit') {
                                compMove[0] = y - 1;
                                previousY = y - 1;
                                previousX = x;
                                counter = 0;
                                attack = status;
                            }
                            else if(status === 'miss'){
                                compMove[0] = y - 1;
                                counter++;
                            }
                            else {
                                counter++;
                                attack = status;
                            }
                        }

                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                            attack = 'doubleHit'
                        }
                        else {
                            let status = enemy.receiveAttack(y,  x + 1);
                            if(status === 'hit') {
                                previousY = y;
                                compMove[1] = x + 1;
                                previousX = x + 1;
                                counter = 0;
                                attack = status;
                            }
                            else if(status === 'miss') {
                                counter++;
                                compMove[1] = x + 1;
                            }
                            else {
                                counter++;
                                attack = status;
                            }
                        }

                    }
                    else if(counter === 3) {
                        if(x - 1 < 0) {
                            previousHit = false;
                            counter = 0
                            attack = 'doubleHit'
                        }
                        else {
                            let status = enemy.receiveAttack(y, x - 1);
                            if(status === 'hit') {
                                previousY = y;
                                compMove[1] = x - 1;
                                previousX = x - 1;
                                counter = 0;
                                attack = status;
                            }
                            else if(status === 'miss') {
                                previousHit = false;
                                counter = 0;
                                compMove[1] = x - 1;
                            }
                            else {
                                counter = 0;
                                previousHit = false;
                                attack = status;
                            }
                        }
                    }
                }
            }
            else if(!previousHit) {
                compMove[0] = randomNumber();
                compMove[1] = randomNumber();
                let y =  compMove[0];
                let x =  compMove[1];

                let status = enemy.receiveAttack(y,x);

                if(status === 'hit') {
                    previousY = y;
                    previousX = x;
                    previousHit = true;
                    attack = status;
                }
                else if(status === 'miss') {
                    attack = status;
                }
                else if(status === 'doubleHit') {
                    attack = status;
                }

            }
            return attack;
        }
    }

    // Returns the following
    return {board, getName, getTurn, getCompMove, setName, setTurn, randomNumber, attack}

}

export default Player;