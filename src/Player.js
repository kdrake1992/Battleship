import ship from './ship'
import Gameboard from './Gameboard'

// Player class
const Player = (name, type) => {
    let playerName = name;
    let turn = false;

    let board = Gameboard();

    board.addShip(ship(5,'C'))
    board.addShip(ship(4,'B'))
    board.addShip(ship(3,'D'))
    board.addShip(ship(3,'S'))
    board.addShip(ship(2,'P'))

    // Getters
    const getName = () => {
        return name;
    }

    const getType = () => {
        return type;
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

    const randomNumber = () => {
        console.log(Math.floor(Math.random() * 10));
    }

    // Returns the following
    return {getName, getType, getTurn, setName, setTurn}

}

export default Player;