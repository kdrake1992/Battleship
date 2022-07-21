// Tests
const ship = require('./ship');

test('Create a ship and get the length.', () => {
    let newShip = ship(5);
  expect(newShip.getLength()).toBe(5);
});

test('Hit the ship and check array', () => {
    let newShip = ship(2);
    newShip.hit(2);
    expect(newShip.shipLayout).toEqual([undefined,'X',undefined])
})

test('Sink ship and return true', () => {
    let newShip = ship(2);
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.isSunk()).toEqual(true);
})

test('Almost sink ship and return false', () => {
    let newShip = ship(2);
    newShip.hit(1);
    newShip.hit(3);
    expect(newShip.isSunk()).toEqual(false);
})