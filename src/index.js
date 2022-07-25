import './style.css'
import ship from './ship'
import Gameboard from './Gameboard'


let newShip = ship(5,'n');
let newShip2 = ship(4,'t');

let newGame = Gameboard();

newGame.addShip(newShip);
newGame.addShip(newShip2)


newGame.placeShip(newShip, 5, 0, 'horizontal')
newGame.placeShip(newShip2, 0, 6, 'vertical');

newGame.receiveAttack(0,5);


console.log(newGame.board)