import '@fortawesome/fontawesome-free/js/brands'
import './style.css'
import interaction from './interaction';
import Player from './Player';

// Start up game
let game = interaction();

let player1 = Player('Player1', 'human')
let player2 = Player('Player2', 'ai');
player1.setTurn();

let player2Ships = player2.board.ships;

// Place ships for player and ai
for(let i = 0; i <= player2Ships.length - 1; i++) {
    let y = player2.randomNumber();
    let x = player2.randomNumber();
    let direction = Math.floor(Math.random() * 2) + 1;
    if(direction === 1) {
        direction = 'horizontal';
    }
    else if(direction === 2) {
        direction = 'vertical'
    }

    while(!player2.board.placeShip(player2Ships[i],y,x,direction)) {
        y = player2.randomNumber();
        x = player2.randomNumber();
    }
}

game.loadUp(player1, player2);