// Tests
const ship = require('./ship');

test('Create a ship and get the length.', () => {
    let newShip = ship(5,'n');
  expect(newShip.getLength()).toBe(5);
});

test('Hit the ship and check array', () => {
    let newShip = ship(2,'n');
    newShip.hit(2);
    expect(newShip.shipLayout).toEqual([undefined,'X',undefined])
})

test('Sink ship and return true', () => {
    let newShip = ship(2,'n');
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.isSunk()).toEqual(true);
})

test('Almost sink ship and return false', () => {
    let newShip = ship(2,'n');
    newShip.hit(1);
    newShip.hit(3);
    expect(newShip.isSunk()).toEqual(false);
})

const gameBoard = require('./Gameboard');
test('Returns true if ship can be placed horizontally.', () => {
    let newGame = gameBoard();
    let newShip = ship(2,'n');
    expect(newGame.placeShip(newShip,0,0,'horizontal')).toBe(true);
})

test('Returns true if ship can be placed vertically.', () => {
    let newGame = gameBoard();
    let newShip = ship(2,'n');
    expect(newGame.placeShip(newShip,0,0,'vertical')).toBe(true);
})

test('Returns false if ship cannot be placed horizontally.', () => {
    let newGame = gameBoard();
    let newShip = ship(5,'n');
    expect(newGame.placeShip(newShip,6,0,'horizontal')).toBe(false);
})

test('Returns false if ship cannot be placed vertically.', () => {
    let newGame = gameBoard();
    let newShip = ship(5,'n');
    expect(newGame.placeShip(newShip,0,6,'vertical')).toBe(false);
})