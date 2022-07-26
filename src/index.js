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


console.log(newShip2.shipLayout);


console.log(newShip.getPlacement());
console.log(newShip2.getPlacement());

// Attack
console.log(newGame.receiveAttack(0,6));
console.log(newGame.receiveAttack(0,6));
console.log(newGame.receiveAttack(0,5));

console.log(newGame.receiveAttack(0,8));
console.log(newGame.receiveAttack(0,7));
console.log(newGame.receiveAttack(0,9));

console.log(newGame.gameOver());

console.log(newGame.receiveAttack(5,0));
console.log(newGame.receiveAttack(6,0));
console.log(newGame.receiveAttack(7,0));
console.log(newGame.receiveAttack(8,0));
console.log(newGame.receiveAttack(9,0));

console.log(newGame.gameOver());

console.log(newGame.board)