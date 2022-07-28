import './style.css'
import Player from './Player'


let player1 = Player('Player1', 'human')
let player2 = Player('Player2', 'ai');
player1.setTurn();

let player1Ships = player1.board.ships;
let player2Ships = player2.board.ships;

player1.board.placeShip(player1Ships[0], 0,0, 'horizontal')
player2.board.placeShip(player2Ships[0], 0,0, 'horizontal')

player1.attack(0,0,player2.board);

let counter = 0;
while(!player1.board.gameOver()) {
    counter++;
    player2.attack(0,0,player1.board)
    player1Ships.forEach(e => {
        if(e.isSunk() === true) {
            if(e.getSunkStatus() === false) {
                e.setSunkStatus()
            }
        }
    });
    console.log(counter);

}

// player1.attack(1,0,player2.board);
// player1.attack(2,0,player2.board);
// player1.attack(3,0,player2.board);
// player1.attack(4,0,player2.board);
// player2Ships.forEach(e => {
//     if(e.isSunk() === true) {
//         if(e.getSunkStatus() === false) {
//             e.setSunkStatus()
//         }
//     }
// })

// if(player2.board.gameOver()) {
//     console.log('Game over')
// }

// if(player1.attack(0,1,player2.board) === 'hit' || 'miss') {
//     console.log('bang!')
//     player1.setTurn();
//     player2.setTurn();
// }
// else {
//     console.log('try again')
// }

// for(let i = 0; i < 100; i++) {
//     if(player2.attack(0,0,player1.board) === 'hit' || 'miss') {
//         console.log('bang!')
//         player1.setTurn();
//         player2.setTurn();
//     }
//     else {
//         console.log('try again')
//     }
//     console.log(player1.board.board)
// }


console.log(player1.board.board)
console.log(player2.board.board)