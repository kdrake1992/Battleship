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
                if(counter >= 4) {
                    if(counter === 0) {
                        enemy.receiveAttack(y + 1,x);

                    }
                    else if(counter === 1) {
                        enemy.receiveAttack(y - 1,x);

                    }
                    else if(counter === 2) {
                        enemy.receiveAttack(y,x + 1);
                        
                    }
                    else if(counter === 3) {
                        enemy.receiveAttack(y,x - 1);
                        
                    }
                }
                else {
                    enemy.receiveAttack(y,x);
                    counter = 0;
                }

            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
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